import React from 'react';

// This class component will help us figure out the
// right size to render the car images with
class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans: 0};

        // Using React ref to reach into DOM to get image dimensions.
        // Note: We create a ref ay time we intend to reach into a DOM
        // Then we wire it up to each individual element by passing it 
        // as 'ref' property (eg "<img ref={this.imageRef}.../>"), then 
        // later on, we access that 'ref' and get a handle on the actual DOM node
        // default html would use document.querySelector('img')
        this.imageRef = React.createRef();
    }

    // Here, componentDidMount() is called each time an image is 
    // rendered. So with the help of ref=this.imageRef assigment,
    // we can now extract each image info, tweak dimensions, and re-render it
    componentDidMount(){
        // we add EventListener to know when ALL imageRef info is ready 
        // before we try to extract it. We also add a callback 'setSpans'
        // to notify us, and then define 'setSpans' in our class
        this.imageRef.current.addEventListener('load', this.setSpans);

        console.log(this.imageRef);
        
        // Logging each image height using 'current' property
        console.log(this.imageRef.current.clientHeight);
    }

    // we use function to define span/size value of the image.
    // Basically we resize the image before re-rendering
    // Note: To make sure 'setSpans' is found, we make it an arrow function
    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans});
    }

    render(){
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            {/* Note: with this.imageRef in 'img' line below, we can 
            now look up info regarding the image rendered */}
           {/*  Note: <img ...../> below is a JS tag. Not a DOM element.
           The 'ref' itself is a javascript object with 'current' property*/}
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        );
    }

}

export default ImageCard;