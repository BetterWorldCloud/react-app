// import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

// will use props to extract the 'id' that comes to <ip>/streams/edit/<id>
// NOTE: 'id' was set in App.js Route (<Route path="/streams/delete/:id" component={StreamDelete} />)
// To get 'id' value: use props.match.params.id
// This 'id' will be used to edit streams using redux action

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    outsideSubmit = (formValues) => {
        console.log(formValues);
        //formValues = {...formValues, userId: this.props.currentUserId};
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.isSignedIn){
            return (
                    <div className="ui warning message error">
                        <i className="close icon"></i>
                            <div className="header">
                                You must register/sign in to edit stream!
                            </div>
                    </div>
            );
        }
        
        // 'stream' may not be available the first time the component renders
        // So we use if-statement to take care of it.
        if (!this.props.stream){
            return <div>Loading...</div>;
        }
        return (
            
            // Manually adding initialValues:
            // initialValues={{title: 'Edit Me', description: 'Change Me Too'}}
            // initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
            // OR (use Compact form)
            // initialValues={this.props.stream}
            // initialValues={_.pick(this.props.stream, 'title', 'description')}
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
                outsideSubmit={this.outsideSubmit} 
                />
            </div>
        );
    }
}

// export default StreamEdit;

const mapStateToProps = (state, ownProps) =>{
    const streamId = ownProps.match.params.id;
    return {
        // streams: state.streams
        stream: state.streams[streamId],
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);