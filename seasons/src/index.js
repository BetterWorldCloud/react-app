import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";
import './SeasonDisplay.css';

class App extends React.Component {
    //initialize state variables
    state = {lat: null, errorMessage: ''};
    // implement a built-in method that gets called the first time a component is rendered
    componentDidMount() {
       //console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            // we call setState to update state variable 'lat'
            position => this.setState({lat: position.coords.latitude}),
            //err => console.log(err)
            err => this.setState({errorMessage: err.message})
        );
    }
    // implement a built-in method that gets called whenever component is updated
    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!')
    }

    renderContent(){
        if (this.state.lat && !this.state.errorMessage){
            return (<SeasonDisplay lat={this.state.lat} />);
        }
        if (this.state.errorMessage && !this.state.lat){
            return (<SeasonDisplay lat={this.state.errorMessage} />);
        }
        return <Spinner message="Please accept location request."/>;
    }
    render() {
        /*return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        ); */
        return (
            // border not working for now
            <div className={`Borders`}>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));