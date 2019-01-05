import React, {Component} from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import Image from 'react-image-resizer';


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
            isPlaying: false,
            isHovering: false,
            currentTime: 0,
            currentVolume: .5,
            duration: album.songs[0].duration
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    componentDidMount(){
        this.eventListeners = {
            timeupdate: e => {
              this.setState({ currentTime: this.audioElement.currentTime });
            },
            durationchange: e => {
              this.setState({ duration: this.audioElement.duration });
            }
          };
          this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
          this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    }

    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
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

    mouseOver(song, i){
         this.setState({isHovering: i});
    }

    mouseLeave(){
        this.setState({isHovering: false});
    }

    renderIcon (i){
        if(i===this.state.isHovering){
            return <span className="ion-play"> </span>
        } else if (this.state.isPlaying && this.state.album.songs.indexOf(this.state.currentSong) === i){
            return <span className="ion-pause"> </span>
        } else{
            return i + 1 + ".";
        }
    }

    handlePrevClick(){
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleNextClick(){
        const currentIndex = this.state.album.songs.indexOf(this.state.currentSong); //findIndex and indexOf work in this case
        const newIndex = Math.min(this.state.album.songs.length, currentIndex + 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleTimeChange(e){
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({currentTime: newTime });
    }

    handleVolumeChange(e){
        const newVolume = 1 * e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({currentVolume: newVolume});
    }

    formatTime(time){
       if(time){
           var reduce = Math.round(time);
           var mins = Math.floor(reduce/60);
           var secs = reduce - (mins * 60);
           var secStr = secs.toString();
           if(secStr.length !== 2){
            secStr = "0" + secStr;
           } else {secStr = secStr}
           var str = mins.toString() + ":" + secStr;
           return str;
       } else { return "-:--"}
    }


    render(){
return(
    <section className="album">
    <div className="columns is-mobile is-centered is-full">
    <figure className="image">
    <Image src={this.state.album.albumCover} alt={this.state.album.title} height={325} width={325}/>
    </figure>
    <div className="album-details">
   
    <section className="section">
      <div className="">
      <div className="column is-narrow">
    <table className="table">
    <tbody >
    {this.state.album.songs.map((song, i)=>{
        return <tr className="song" key={i} onClick={() => this.handleSongClick(song)} onMouseEnter={()=> this.mouseOver(song, i)} onMouseLeave={() => this.mouseLeave()}>
        <td>{this.renderIcon(i)}</td><td> {song.title}</td><td> {this.formatTime(song.duration)}</td></tr>
    })}
    </tbody>
    </table>
    </div>
    </div>
    </section>
    </div>
    </div>
    <PlayerBar isPlaying={this.state.isPlaying} 
    currentSong={this.state.currentSong}
    handleSongClick={()=> this.handleSongClick(this.state.currentSong)}
    handlePrevClick={() => this.handlePrevClick()}
    handleNextClick={() => this.handleNextClick()}
    handleTimeChange={(e) => this.handleTimeChange(e)}
    handleVolumeChange={(e)=> this.handleVolumeChange(e)}
    formatTime={(time)=> this.formatTime(time)}
    currentVolume={this.state.currentVolume}
    duration={this.audioElement.duration}
    currentTime={this.audioElement.currentTime}/>
    <h2 id="album-title">{this.state.album.title}</h2>
    <h3 className="artist">{this.state.album.artist}</h3>
    <div id="release-info">{this.state.album.releaseInfo}</div>
    </section>
);
}
}
export default Album;