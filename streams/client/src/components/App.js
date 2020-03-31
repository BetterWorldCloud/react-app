import React from 'react';
//import { BrowserRouter, Route} from 'react-router-dom';
import { Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

// import { MemoryRouter, HashRouter, Route, Link } from 'react-router-dom';

// BrowuserRouter, HashRouter, MemoryRouter Examples:
// Basic example of how React-Router-Dom is used for page navigation
// http://localhost:3000/pagetwo ---> is for Page Two
// http://localhost:3000  ---> is for Page One

// NOTE: Using anchor tags <a></a> for navigation inside a react app is
// a BAD idea. It'll start a new session that wipes out old data in memory
// INSTEAD USE 'LINK' tag from react-router-dom to replace <a></a>

// const PageOne = () => {
//     return (
//          <div> Page One
//          {/* anchor tag: BAD!!! */}
//          {/* <a href="/pagetwo"> Navigate to page Two</a> */}
//          <Link to="/pagetwo"> Navigate to page Two</Link>
//          </div>
//     );
// }

// const PageTwo = () => {
//     return (
//        <div> Page Two
//            {/* anchor tag: BAD!!! */}
//           {/* <a href="/"> Navigate to Page One</a> */}
//           <Link to="/"> Navigate to Page One</Link>
//        </div>
//     );
// }

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//               <div>
//                 <Route path="/" exact component={PageOne} />
//                 <Route path="/pagetwo" component={PageTwo} />
//               </div>
//             </BrowserRouter>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <HashRouter>
//               <div>
//                 <Route path="/" exact component={PageOne} />
//                 <Route path="/pagetwo" component={PageTwo} />
//               </div>
//             </HashRouter>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <MemoryRouter>
//               <div>
//                 <Route path="/" exact component={PageOne} />
//                 <Route path="/pagetwo" component={PageTwo} />
//               </div>
//             </MemoryRouter>
//         </div>
//     );
// };

const App = () => {
    return (
        <div className="ui container">
            {/* <BrowserRouter history={history}> */}
            <Router history={history}>
              <div>
                  <Header />
                  <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/:id" component={StreamShow} />
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                  </Switch>
              </div>
            {/* </BrowserRouter> */}
            </Router>
        </div>
    );
};
export default App;