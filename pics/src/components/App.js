import React from 'react';
// import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = {images: []};
    // Callback function. SearchBar calls it with argument 'term'
    // With '.then()' in axios we get a tap on the shoulder when the API call get's result
/*     onSearchSubmit(term){
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID Jrs5UlA_bRfUQNKvew3jeaz5Sw1DQvLRFThxE9NID0A'
            }
        }).then(response => {console.log(response.data.results)});
    } */

/*     // A BETTER IMPLEMENTATION WITH 'async' and 'await'
    async onSearchSubmit(term){
        // eslint-disable-next-line
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID Jrs5UlA_bRfUQNKvew3jeaz5Sw1DQvLRFThxE9NID0A'
            }
        });
        //console.log(response.data.results);
        this.setState({images: response.data.results});
    } */

/*     // Turning function into async 'arrow, =>' function so that we can
    // reference its updated state values using 'this.state' in render() 
    onSearchSubmit = async (term) => {
        // eslint-disable-next-line
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID Jrs5UlA_bRfUQNKvew3jeaz5Sw1DQvLRFThxE9NID0A'
            }
        });
        //console.log(response.data.results);
        this.setState({images: response.data.results});
    } */


    //// CLEANING UP THE LAST ASYNC ARROW IMPLEMENTATION.
    //// THE CLEANED UP VERSION IS IN 'src/api' folder
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {params: {query: term}});
        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {/* For a dev authored component eg: 'SearchBar', callbacks below (eg: onSubmit) 
                can be called any name...eg: 'runMeWhenCalled'. But for a normal js element 
                eg: '<form>, <input>, etc, callbacks must be onSubmit, onClick, onChange, etc*/}
               <SearchBar onSubmit={this.onSearchSubmit} />
               {/* Found: {this.state.images.length} images */}
               <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;