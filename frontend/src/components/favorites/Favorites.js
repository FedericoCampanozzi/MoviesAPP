import './Favorites.css';
import {Container, Row, Col} from 'react-bootstrap';
import React from 'react';

const Favorite = ({genres, likedMovies}) => {
    return (
        <>
            <Container style={{marginTop:'10px', marginBottom:'10px', width:'100%'}}>
                <Row key={'hr0'}>
                    {
                        genres?.map((g,i) => {
                            return (
                                <Col key={'hc'+i} className='header-col'>
                                    {g}
                                </Col>
                            )  
                        })
                    }
                </Row>
            </Container>
            <Container>
            {
                likedMovies?.map((m,i)=>{
                    return(
                        <Row key={i} className='card-movie-container'>
                            <Col>
                                <img src={m.poster} alt="" className='card-move-image' />
                            </Col>
                            <Col>
                                <p>Title: <span className='card-movie-title'>{m.title}</span></p>
                                <p>Data Release: <span className='card-movie-release-date'>{m.releaseDate}</span></p>
                                <div className='card-movie-genres-container'>
                                    Genres:
                                    {
                                        m.genres.map((g,i)=>{
                                            return(
                                                <Row key={"r"+i}>
                                                    <Col key={"c"+i}>
                                                        {g}
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
            </Container>
        </>
    )
}

export default Favorite