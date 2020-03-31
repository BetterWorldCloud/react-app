To Run Stream project:
Start json api server (database): cd into FrontendDev\ReactRedux\react-app\streams\client\src\apis and run: 'npm start'
To view json api database: localhost:3001

Start stream project: cd into FrontendDev\ReactRedux\react-app\streams\client and run: 'npm start'
To view stream project: localhost:/3000

TO USE MODAL:
1. Create a Modal.js file
2. Go to /public/index.html file and (below <div id="root"></div>) add <div id="modal"></div>
3. Call Modal from your file of choice.

###################################################################
1. example of Modal.js:
import React from 'react';
import ReactDOM from 'react-dom';
const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                My modal test
            </div>
        </div>,
        document.querySelector('#modal')
    );
};
export default Modal;

        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

3. Example of How to call Modal:
import Modal from '../Modal';
const StreamDelete = () => {
    return (
        <div>
             StreamDelete
             <Modal />
        </div>
    );
};
export default StreamDelete;
#######################################################