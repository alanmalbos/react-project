import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Alan Malbos</span>
                            <span className="place">New York</span>
                        </div>
                        <img src={more} alt="More" />
                    </header>

                    <img src="http://localhost:3333/files/new_york.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comment" />
                            <img src={send} alt="Send" />
                        </div>

                        <strong>900 likes</strong>
                        <p>
                            Great trip to New York!!!
                            <span>
                                #new_york
                                #trip
                                #USA
                            </span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Alan Malbos</span>
                            <span className="place">New York</span>
                        </div>
                        <img src={more} alt="More" />
                    </header>

                    <img src="http://localhost:3333/files/new_york.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comment" />
                            <img src={send} alt="Send" />
                        </div>

                        <strong>900 likes</strong>
                        <p>
                            Great trip to New York!!!
                            <span>
                                #new_york
                                #trip
                                #USA
                            </span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;