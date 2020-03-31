import React from 'react';
import {Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderInput = ({input, label, meta}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderError(meta){
        if(meta.error && meta.touched){
            return (
                <div className="ui error message"> 
                <div className="header">{meta.error}</div>
                </div>
            );
        }
    }

    onSubmit = (formValues) => {
        // console.log(formValues);
        // outsideSubmit() callback is defined in StreamCreate
        // and StreamEdit files. outsideSubmit() is passed as an
        // argument to StreamForm call. So, by calling outsideSubmit
        // here, we're using 'formValues' argument to make a call
        // with outsideSubmit() that's defined outside this file.
        this.props.outsideSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>

        );
    }
}

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


export default reduxForm({form: 'streamForm', validate: validate}) (StreamForm);