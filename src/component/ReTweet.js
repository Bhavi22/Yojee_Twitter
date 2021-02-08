import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import * as Icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import * as Bootstrap from "react-bootstrap";
import DisplayTweets from './data/DisplayTweet.json';


const Style = styled.div`
.anonymousfont{ 
font-weight: bold;
font-style: italic;
}
.card{
    
    width:500px;
}
.center {
    margin: auto;
    width: 50%;    
    padding: 10px;       
  }
`

const ReTweet = (props) => {
    const size = 10;
    const [topTen, setTopTen] = useState([]);
    const [messagePresent, setMessagePresent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [displayTweets, setDisplayTweets] = useState([]);

    const handleClose = () => {
        setMessagePresent(false);
        setErrorMessage("");
    }

    useEffect(() => {

        if (props.location.state == undefined) {
            setDisplayTweets(DisplayTweets);
        }
        else {
            setDisplayTweets(props.location.state.displayTweets);
        }

    }, [props]);

    useEffect(() => {
        var obj = [...displayTweets];
        obj.sort((a, b) => b.count - a.count);
        obj = obj.slice(0, size);
        setTopTen(obj);


    }, [displayTweets]);
    const Retweeting = (id) => {

        for (let i = 0; i < topTen.length; i++) {
            if (id == i) {
                if (topTen[i].tweeted == false) {
                    topTen[i].count = topTen[i].count + 1;
                    topTen[i].tweeted = true;
                    setTopTen([...topTen]);
                    var obj = [...topTen];
                    obj.sort((a, b) => b.count - a.count);
                    obj = obj.slice(0, size);
                    setTopTen(obj);
                }
                else {

                    setErrorMessage("Cannot tweet the same message more than once");
                    setMessagePresent(true);
                }
            }
        }

    }
    useEffect(() => {

    }, [topTen]);

    return (
        <Style>
            <Bootstrap.Modal show={messagePresent} onHide={handleClose}>
                <Bootstrap.Modal.Header closeButton>
                    <Bootstrap.Modal.Title>Message</Bootstrap.Modal.Title>
                </Bootstrap.Modal.Header>
                <Bootstrap.Modal.Body>{errorMessage}</Bootstrap.Modal.Body>
            </Bootstrap.Modal>
            <div className='center'>

                <Link to={{
                    pathname: "/tweets",
                    state: {
                        displayTweets: displayTweets
                    }

                }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                    </svg></Link>
                <h5>Trending Tweets</h5>
                {topTen &&
                    topTen.map((topTen, index) => (
                        <>
                            <div className='card'>
                                <div className='card-header'>
                                    <span className="d-inline-block btn float-left">
                                        <Icons.PersonBoundingBox />
                                        <span className="d-inline-block anonymousfont">Anonymous</span>
                                    </span>

                                </div>
                                <div className='card-body'>
                                    {topTen.tweet}
                                    <br />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>&nbsp;
                          {topTen.count} &nbsp;

                          <a onClick={(e) => Retweeting(index, e)}>
                                        <FontAwesomeIcon icon={faRetweet} />
                                    </a>
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

export default ReTweet;
