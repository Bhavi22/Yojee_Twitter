import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import * as Bootstrap from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icons from 'react-bootstrap-icons';

import ReTweet from "./ReTweet.js";


const Style = styled.div`
.anonymousfont{ 
font-weight: bold;
font-style: italic;
},
.card{
    
    width:500px;
}
.center {
    margin: auto;
    width: 50%;    
    padding: 10px;       
  }
`

const TwitterClone = (props) => {


    const [displayTweets, setDisplayTweets] = useState([{
        'tweet': "Hi, this is the 1st tweet",
        'count': 0
    },
    {
        'tweet': "Hello, this is the 2nd tweet",
        'count': 4
    },
    {
        'tweet': "Hey, 3rd tweet",
        'count': 7
    }]);


    const [newTweet, setNewTweet] = useState("");
    const [messagePresent, setMessagePresent] = useState(false);
    const [charCount, setCharCount] = useState(140);
    const [errorMessage, setErrorMessage] = useState("");

    const refresh = () => {
        setNewTweet("");
        setCharCount(140);
    };


    const handleChange = (e) => {
        setNewTweet(e.target.value);
        setCharCount(140 - (e.target.value.length));
    };
    const handleClose = () => {
        setMessagePresent(false);
        refresh();
    }

    const addTweet = (e) => {
        if (newTweet == "") {
            setErrorMessage('Cannot create empty tweet!Please add text');
            setMessagePresent(true);
        }
        if (newTweet.length > 140) {
            setErrorMessage('Exceeds 140 Characters');
            setMessagePresent(true);
        }

        setDisplayTweets(displayTweets.concat({ 'tweet': newTweet, 'count': 0 }));
        setCharCount(140);

        setNewTweet("");
    }



    const Retweeting = (id) => {

        for (let i = 0; i < displayTweets.length; i++) {
            if (id == i) {
                displayTweets[i].count = displayTweets[i].count + 1;
                setDisplayTweets([...displayTweets])
            }
        }

    }
    var tweetsSet = false;

    useEffect(() => {
        if ('location' in props && !tweetsSet) {
            console.log(props.location.state.displayTweets);
            setDisplayTweets(props.location.state.displayTweets);
            tweetsSet = true;
        }
        console.log(props)
    }, [props]);

    
    return (
        <Style>

            <div className='center'>
                <h1>Twitter Test</h1>
                <div className='card'>
                    <Bootstrap.Modal show={messagePresent} onHide={handleClose}>
                        <Bootstrap.Modal.Header closeButton>
                            <Bootstrap.Modal.Title>Message</Bootstrap.Modal.Title>
                        </Bootstrap.Modal.Header>
                        <Bootstrap.Modal.Body>{errorMessage}</Bootstrap.Modal.Body>
                    </Bootstrap.Modal>
                    <div className='card-header'>
                        New Tweet
                </div>
                    <div className='card-body'>
                        <input
                            type='text'
                            maxLength="140"
                            value={newTweet}
                            onChange={handleChange}
                        /><br />
                        <small>Characters {charCount}
                        </small>
                        <br />
                        <button type='submit' onClick={addTweet} className='btn-primary'>Tweet
                    </button>
                    </div>
                </div>
                <br /><br />

                {displayTweets &&
                    displayTweets.map((displayTweet, index) => (
                        <>
                            <div className='card'>
                                <div className='card-header'>
                                    <span className="d-inline-block btn float-left">
                                        <Icons.PersonBoundingBox />
                                        <span className="d-inline-block anonymousfont">Anonymous</span>
                                    </span>

                                </div>
                                <div className='card-body'>
                                    {displayTweet.tweet}
                                    <br />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
&nbsp;&nbsp;&nbsp;
                          {displayTweet.count} &nbsp;
                              <Link to={{
                                        pathname: "/retweet",
                                        state: {
                                            displayTweets: displayTweets
                                        }
                                    }}
                                        onClick={(e) => Retweeting(index, e)}>
                                        <FontAwesomeIcon icon={faRetweet} />
                                    </Link>

                                </div>
                            </div>
                            <br />
                        </>
                    )
                    )
                }
            </div>
        </Style>

    )
};

export default TwitterClone;