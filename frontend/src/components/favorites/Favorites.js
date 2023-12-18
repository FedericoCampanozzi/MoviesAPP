import './Favorites.css';
import {Container, Row, Col} from 'react-bootstrap';
import React from 'react';

const Favorite = ({genres, likedMovies}) => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-auto min-vh-100 bg-dark' style={{minWidth:'100px'}}>
                        <ul>
                            {
                                genres?.map((g,i) => {
                                  return (
                                    <li key={i}>
                                        <a className='nav-link px-2'>
                                            {g}
                                        </a>
                                    </li>
                                  )  
                                })
                            }
                        </ul>
                    </div>
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
                                </Col>
                            </Row>
                        )
                    })
                }
                </Container>
                </div>
            </div>
        </>
    )
}

export default Favorite