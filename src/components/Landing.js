import React from 'react';

const Landing = () => (
    <section className = "landing">
    <h1 className="subtitle title-sup-size is-italic has-text-weight-bold is-size-4	">Turn the music up!</h1>

    <section className="selling points">
        <div className ="point">
            <h2 className ="point-title has-text-weight-semibold is-size-5">Chose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music someone else chose?</p>
        </div>
        <div className="point">
        <h2 className="point-title has-text-weight-semibold	is-size-5">Unlimited, streaming, ad-free</h2>
        <p className="point description">No arbitrarty limits. No distractions.</p>
        </div>
        <div className="point">
        <h2 className="point-title has-text-weight-semibold is-size-5">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
    </section>
    </section>
);

export default Landing;