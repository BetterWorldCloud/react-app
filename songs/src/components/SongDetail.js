import React from 'react';
import { connect } from 'react-redux';


// This functional component works too. I just created a class one below!

/* const SongDetail = ({song}) => {
    //console.log(props);
    if (!song){
        return <div>Select a song</div>;
    }
    return <div>{song.title}</div>;
}; */


// 'connect' calls mapStateToProps, and then calls 
// SongDetail with key/values that were set in mapStateToProps
class SongDetail extends React.Component {
    state = {song: 'Select a song'};
    
    render (){
        console.log(this.props);
        if(this.props.song){
            return (
                <div>
                    <h3>Details for:</h3>
                    <p>
                    Title............{this.props.song.title}
                    <br />
                    Duration...{this.props.song.duration}
                    </p>
                </div>
            );
        }
        return <div>{this.state.song}</div>;
    }
}

const mapStateToProps = (state) => {
    // 'song' as a key (and the values) is sent as 'props' to 'SongDetail' class.
    // We can obtain the key/value in SongDetail by using this.props.song
    return { song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);