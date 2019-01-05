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
            <figure className="image is-128x128">
            <img className="is-rounded"src={album.albumCover} alt={album.title}/>
            </figure>
            <div className="title is-4">{album.title}</div>
            <div className="subtitle is-6">{album.artist}</div>
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