import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


// How to work on List items in JS using 'map'
// props.images is a list ==>[{}, {}...]
// Eg List item: {links:{}, user:{}}, id: {}, urls: {raw: "value", regular: "value"},..}
/* const ImageList = (props) => {
    console.log(props.images);
    // map here is doing same thing as a loop over the list of dictionary values.
    // listItem represents one item at a time (so listItem is one dict with key/values)
    const images = props.images.map((listItem) => {
        return <img src={listItem.urls.regular} />
    });
    return <div>{images}</div>;
}; */

// Adding unique keys to improve React efficiency when rendering List items
// Note: Image comes with unique 'id' property
// Note: put the key in <div key=...> instead of <im> element if there's a <div>. 
const ImageList = (props) => {
    const images = props.images.map((listItem) => {
        return (
 /*        <img 
           alt={listItem.description} 
           key={listItem.id} 
           src={listItem.urls.regular} 
       /> */
       // Using ImageCard to refactor image rendering
       <ImageCard key={listItem.id} image={listItem} />
       );
    });
    return <div className="image-list">{images}</div>;
};
export default ImageList;