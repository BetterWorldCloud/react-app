import React from 'react';
import { connect } from 'react-redux';
// import { fetchPosts} from '../actions/index';
import {fetchPostsAndUsers } from '../actions/index';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
        //console.log(this.props);
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }
    
    render() {
        //console.log(this.props.posts);
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

// we use mapStateToProps to get data from the redux side of the application
// to 'react' side of the application
const mapStateToProps = (state) => {
    // our reducer returns 'posts: postsReducer'. Therefore
    // the state has a 'posts' key in it.
    return {posts: state.posts};
};

// export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
export default connect(mapStateToProps, {fetchPostsAndUsers })(PostList);