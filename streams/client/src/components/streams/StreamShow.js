import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params.id);
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        if(!this.props.stream){
            return <div>Loading..</div>
        }

        const {title, description} = this.props.stream;
        return (
            <div>
                <h2>Title: {title}</h2>
                <h5>Description: {description}</h5>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    return {
        stream: state.streams[id]
    }
}
 
export default connect(mapStateToProps, {fetchStream})(StreamShow);