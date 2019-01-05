import React, {Component} from 'react';

class PlayerBar extends Component {

    render() {
        return (
            <section className="player-bar">
            <section id="buttons">
            <button className = "previous button is-info">
            <span className="ion-skip-backward" onClick={this.props.handlePrevClick}></span>
            </button>
            <button className="button is-success" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
            </button>
            <button className="next button is-info">
            <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
            </button>
            </section>
            <section id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input className="slider is-success" type="range"  
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1" min="0" step="0.01"
            onChange={this.props.handleTimeChange}/>
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
            <div className="icon ion-volume-high"></div>
            <input type="range" className="slider"
            max="1" min="0" step=".01"
            value={this.props.currentVolume}
            onChange={this.props.handleVolumeChange}/>
            </section>
            </section>
        );
    }
}

export default PlayerBar;