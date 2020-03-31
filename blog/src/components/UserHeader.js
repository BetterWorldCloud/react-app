import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        //From an array, find user with an id equal to the id passed 
        // as an argument to <UserHeader userId={..}>

        //### THE LINE ABOVE HAS BEEN IMPLEMENTED IN mapStateToProps function
/*         const user = this.props.users.find((user) => user.id === this.props.userId);
        if (!user){
            return null;
        }
        return <div className="header"> {user.name} </div> */


        const user = this.props.user;
        // OR
        // const { user } = this.props;
        if (!user){
            return null;
        }
        return <div className="header"> {user.name} </div>
    }
}

// state: state in redux
// ownProps: class props
const mapStateToProps = (state, ownProps) =>{
    //console.log(state.users);
    // ### CHANGING THIS ONE
    // return {users: state.users};
    return {user: state.users.find((user) => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);
// export default connect(mapStateToProps, {fetchUser })(UserHeader);