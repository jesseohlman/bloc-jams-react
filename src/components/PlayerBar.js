import React, {Component} from 'react';

class PlayerBar extends Component {

    render() {
        return (
            <section className="player-bar">
            <section id="buttons">
            <button id = "previous">
            <span className="ion-skip-backward" onClick={this.props.handlePrevClick}></span>
            </button>
            <button id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
            </button>
            <button id="next">
            <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
            </button>
            </section>
            <section id="time-control">
            <div className="current-time">-:--</div>
            <input type="range" className="seek-bar" value="0"/>
            <div className="icon ion-volume-high"></div>
            </section>
            </section>
        );
    }
}

export default PlayerBar;