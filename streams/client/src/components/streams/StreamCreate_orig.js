import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
/*     renderInput(formProps) {
        // reduxForm calls with formProps argurment
        // use console.log() to view properties
        console.log(formProps);

        // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>;
        // USING NEW AND COMPACT SYNTAX
        return <input {...formProps.input} />;
    } */

    // Works as above 
    // NOTE: 'meta' arguement is what redux-form uses to store field 
    // error statements that instantiated in 'validate' function
    renderInput = ({input, label, meta}) => {
        // console.log(meta);
        // Note: ReduxForm passes non-default properties (i.e. label) in
        // <Field name="title" component={this.renderInput} label="Enter Title"/>
        // as extra props arguement. 
        // Access it by adding 2nd argument on function (i.e. {input, label})
        // console.log({input});
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderError(meta){
        // console.log(meta);
        if(meta.error && meta.touched){
            return (
                <div className="ui error message"> 
                <div className="header">{meta.error}</div>
                </div>
            );
        }
    }

    // 'formValues' is arbitrary
    onSubmit = (formValues) => {
        // Another way to add userId to forrvalues before creating stream
        // const newForm = {...formValues, userId: this.props.auth.userId};
        // console.log(newForm);
        this.props.createStream(formValues);

    }

    render() {
        //console.log(this);
        // 'handleSubmit()' is a callback function property of redux-form
        // use console.log(this.props) to view it
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
            // without 'error' in className, semantic will not allow validation errors to display
            // So, we add 'error' to "ui form"
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/*We make use of 'Field' when we want to show a field 
                to the user. Note: we didn't create 'Field' Component.
                'name' prop is required */}
                
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>

        );
    }
}

// validate function is used to check if a user submitted empty fields
// If errors dictionary is returned empty, redux-form will run
const validate = (formValues) =>{
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};

// Wiring up redux form with 'validate'. reduxForm calls StreamCreate with
// tons of props objects. use console.log(this.props) to view
// const myForm = {form: 'streamCreate', validate: validate}
// NOTE: Wiring only redux-form without 'connect' from react-redux 
// export default reduxForm({form: 'streamCreate', validate: validate}) (StreamCreate);

// Modifying reduxForm wiring so that 'connect' can be used to wire it up
const formWrapped = reduxForm({form: 'streamCreate', validate: validate}) (StreamCreate);
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        streamForm: state.form
    };
}
export default connect(mapStateToProps, { createStream })(formWrapped);
