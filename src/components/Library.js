import React from 'react';
import {Component} from 'react';
import albumData from './../data/albums';
import {Link} from 'react-router-dom';

class Library extends React.Component {
    constructor(props){
        super(props);
        this.state = {albums: albumData};
    }
    render(){
        return (
            <section className="library">  
        {
            this.state.albums.map((album, index)=> 
            <Link to={`/album/${album.slug}`} key={index}>
            <img src={album.albumCover} alt={album.title}/>
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.songs.length}</div>
            {album.title}
            </Link>
            
            )
        }
        </section>
        );
    }
}

export default Library;