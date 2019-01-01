import React, {Component} from 'react';
import albumData from './../data/albums';

class Album extends Component{
    constructor(props){
        super(props);
        
        const album = albumData.find(album => {

            console.log(album.slug === this.props.match.params.slug);
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    play() {
        this.audioElement.play();
        this.setState({isPlaying: true});
    }

    pause() {
        this.audioElement.pause();
        this.setState({isPlaying: false});
    }

    setSong(song){
        this.audioElement.src = song.audioSrc;
        this.setState({currentSong: song});
    }

    handleSongClick(song){
        const isSameSong = this.state.currentSong === song;
        if(isSameSong && this.state.isPlaying){
            this.pause();
        } else {
            if (!isSameSong) {this.setSong(song); }
            this.play();
        }
    }

    render(){
return(
    <section className="album">
    <section id = "album-info">
    <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
    <div className="album-details">
   
    <table id="song=list">
    <tbody>
    {this.state.album.songs.map((song, i)=>{
        return <tr className='song' key={i} onClick={() => this.handleSongClick(song)}>
        {i+1}. {song.title} {song.duration}</tr>
    })}
    </tbody>
    </table>

    <h2 id="album-title">{this.state.album.title}</h2>
    <h3 className="artist">{this.state.album.artist}</h3>
    <div id="release-info">{this.state.album.releaseInfo}</div>
    </div>
    </section>
    </section>
);
}
}
export default Album;