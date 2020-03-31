import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today @ 4:00PM" 
                    content="Nice blog!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today @ 5:00PM" 
                    content="Could be better..." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>            
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today @ 6:00PM" 
                    content="Blog is great! keep it up." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))