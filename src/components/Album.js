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
            album: album
        };
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
        return <tr>{i+1}. {song.title} {song.duration}</tr>
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