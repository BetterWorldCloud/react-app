import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    // Load up google api library once the component
    // is rendered on the screen
    // Add a callback because it takes a while to load the library
    componentDidMount() {
        // This is how to load the client library without callback
        // window.gapi.load('client:auth2');

        // Load with callback and initialize client ID
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
            clientId: "1064785411819-hp02gkrb8s61e21bks257ora7l58qnij.apps.googleusercontent.com",
            scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
               // console.log(this.props.isSignedIn);
            });
        });
    }

/*     onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }; */

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

// implementation without redux
// export default GoogleAuth;
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn, 
        userId: state.auth.userId
    };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);