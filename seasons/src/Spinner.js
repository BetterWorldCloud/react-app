import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// defaultProps is an important backup in case we forget to 
// pass 'message' argument to Spinner function during call
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;