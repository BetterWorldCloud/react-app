import React from 'react';


class SearchBar extends React.Component {
/*     onInputChange(event) {
        // event.target.value contains the text that the user added to the input
        console.log(event.target.value)
    } */
/*     constructor(props){
        super(props);
        this.state = {term: ''};
    } */
    state = {term: ''};
    
    
    // This prevent html's premature default search if a user hits 'enter' key
/*     onFormSubmit(event) {
    // This function runs into 'undefined' error when 'this.state.term' is accessed
    // So a solution is to use arrow '=>' function (like Below), OR
    // use arrow func on form callback: onSubmit={(event) => this.onFormSubmit(event)} 
    // instead of onSubmit={this.onFormSubmit}
        event.preventDefault();
        console.log(this.state.term);
    } */

    onFormSubmit = (event) => {
        event.preventDefault();
        // here props is used to obtain the function from App
        // so this.props.onSubmit is same as onSearchSubmit(term)
        // Therefore, here we're basically doing onSearchSubmit(this.state.term)
        //NOTE: When in a class based component, we refernce props object using 'this.props.'
        // but in a function based component (props is passed as argument), we do 'props.'
        this.props.onSubmit(this.state.term);
        console.log(this.state.term);
    }
    render() {
        return (
        <div className="ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field"> 
                    <label>Image Search</label> 
                     {/* event handler: if we use this.onInputChange() then 
                     onInputChange() function is called any time the render()
                     function gets called. But with 'this.onInputChange' we only
                     pass a callback function to the event handler*/}

                     {/* Note: onChange is a special property name 
                     There are many other special property names
                     for different events. Eg: onClick, onSubmit, etc
                    <input type="text" onChange={this.onInputChange}/> 
                    onChange={(e) => this.setState({term: e.target.value.toUpperCase};)}*/}
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.setState({term: e.target.value})}
                    />
                </div>
            </form>
        </div>
        );
    }
};












export default SearchBar;