import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    outsideSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        //console.log(this.props);
        if (!this.props.auth.isSignedIn){
            return (
                    <div className="ui warning message error">
                        <i className="close icon"></i>
                            <div className="header">
                                You must register/sign in to create stream!
                            </div>
                    </div>
            );
        }
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm outsideSubmit={this.outsideSubmit} />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
        //streamForm: state.form
    };
}
export default connect(mapStateToProps, { createStream })(StreamCreate);
