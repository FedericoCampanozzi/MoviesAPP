import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import './Reviews.css';

import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;
    

    useEffect(()=>{
        getMovieData(movieId);
    },[]);

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
  return (
    <Container>
        <Row>
            <Col>
                <span className='title'>Reviews</span>
                <span className='movie-title'>{movie?.title}</span>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <div className='img-border'>
                {
                    movie != null ? 
                    <img src={movie.poster} alt={movie.title} />
                    : <></>
                }
                </div>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col> 
                                        {r.body}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='data-title'>
                                    {
                                        r.created != null ? (
                                            <>{new Date(r.created).toLocaleString()}</>
                                        ):(
                                            <>Now</>
                                        )
                                    }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews
