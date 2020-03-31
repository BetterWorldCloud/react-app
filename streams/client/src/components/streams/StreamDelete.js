import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';


class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onDeleteClick = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions(){
        return (
            <React.Fragment>
                {/* <button onClick={() => this.props.deleteStream(<stream id>)} 
                className="ui button negative">Delete</button> */}
                
                <button onClick={this.onDeleteClick} className="ui button negative">Delete</button>
                {/* <button onClick={() => history.push('/')} className="ui button">Cancel</button> */}
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if (this.props.stream){
            return `Are you sure you want to delete stream with title: ${this.props.stream.title}`;
        }
        return "Are you sure you want to delete this stream?";
    }

    render () {        
        return ( 
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
        );
    }
};

const mapStateToProps = (state, ownProps) =>{
    const streamId = ownProps.match.params.id;
    return {
        // streams: state.streams
        stream: state.streams[streamId],
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}
export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
// export default StreamDelete;