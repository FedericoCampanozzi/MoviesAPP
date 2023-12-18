import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import './Reviews.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from 'react-bootstrap';
import { faTrash, faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

let editReviewIndex = -1;

const Reviews = ({getMovieData,movie,reviews,setReviews,setMovie}) => {
    
    const revText = useRef();
    const revTextEdit = useRef();
    let params = useParams();
    const movieId = params.movieId;
    const liked = movie?.liked ? "primary" : "outline-primary";

    useEffect(()=>{
        getMovieData(movieId);
    },[]);
    
    const updateMovieLike = async (e) => {
        e.preventDefault();
        const response = await api.post("/api/v1/movies/set-movie-like",{imdbId:movieId});
        if(response.data == "OK"){
            movie.liked = !movie.liked;
            setMovie(movie);
        } else {
            throw new Error("Liked not set");
        }
    }

    const openEditReview = async (event, review, index) => {
        event.preventDefault();
        //if(review?.body != undefined){
            const rev = revTextEdit.current;
            editReviewIndex = index;
            console.log(review?.body);
            console.log(rev);
            //rev.value = review.body;
            const rr = [...reviews];
            rr[index] = review;
            setReviews(rr);
        //}
    }

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

            const updatedReviews = [...reviews, {body:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    const updateReview = async (event, review, index) => {
        event.preventDefault();

        const rev = revTextEdit.current;
        try
        {
            editReviewIndex = -1;
            const rr = [...reviews];
            rr[index].body = rev;
            rev.value = "";
            setReviews(rr);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    const deleteReview = async (event, review, index) => {
        event.preventDefault();
        try
        {
            const rr = [...reviews];
            rr.splice(index, 1);
            setReviews(rr);
        }
        catch(err)
        {
            console.error(err);
        }
    }
  return (
    <Container>
        <Row key={'r0'}>
            <Col style={{maxHeight:'60px'}} key={'c00'}>
                <span className='movie-title'>{movie?.title}</span>
                <Button 
                    variant={liked} 
                    style={{float:'right', position:'relative', top:'-40px'}}
                    onClick={updateMovieLike}>
                    <FontAwesomeIcon icon={faHeart}/>
                </Button>
            </Col>
        </Row>
        <Row className="mt-2" key={'r1'}>
            <Col key={'r10'}>
                <div className='img-border'>
                {
                    movie != null ? 
                    <img src={movie.poster} alt={movie.title} />
                    : <></>
                }
                </div>
            </Col>
            <Col key={'r11'}>
                <Row key={'r4'}>
                    <Col key={'r40'}>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                    </Col>
                </Row>
                <Row  key={'r5'}>
                    <Col  key={'r50'}>
                        <hr />
                    </Col>
                </Row>                
                {
                    reviews?.map((r, i) => {
                        return(
                            <>
                                <Row key={"a"+i}>
                                    <Col key={"aa"+i}>
                                        {
                                            editReviewIndex === i ? 
                                            (
                                                <>
                                                    <ReviewForm
                                                        handleSubmit={(e) => updateReview(e, r, i)} 
                                                        revText={revTextEdit}
                                                        labelText = "Update current Review?" />
                                                </>
                                            ):
                                            (
                                                <>
                                                {r.body}
                                                {
                                                    editReviewIndex === -1 ? (
                                                        <>
                                                        <Button 
                                                            variant="outline-info"
                                                            className='small-button' 
                                                            onClick={(e) => openEditReview(e, r, i)}>
                                                                <FontAwesomeIcon icon={faEdit}/>
                                                        </Button>
                                                        </>
                                                    ):(
                                                        <></>
                                                    )
                                                }
                                                <Button 
                                                    variant="outline-warning" 
                                                    className='small-button' 
                                                    onClick={(e) => deleteReview(e, r, i)}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </Button>
                                                </>
                                            )
                                        }
                                    </Col>
                                </Row>
                                <Row key={"b"+i}>
                                    <Col className='data-title' key={"bb"+i}>
                                    {
                                        r.created != null ? (
                                            <>{new Date(r.created).toLocaleString()}</>
                                        ):(
                                            <>Now</>
                                        )
                                    }
                                    </Col>
                                </Row>
                                <Row key={"c"+i}>
                                    <Col key={"cc"+i}>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row key={'r2'}>
            <Col key={'c20'}>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews
