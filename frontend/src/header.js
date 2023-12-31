import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { useSharedState } from "./shared/state-context";
import { getMoviesAPI, getGenresAPI } from "./shared/api";
import { useEffect } from "react";

const Header = () => {
    const { setMovies, setLikedMovies, setLikedFilteredMovies, setGenres } = useSharedState();
    useEffect(()=>{
        getMoviesAPI(setMovies, setLikedMovies, setLikedFilteredMovies);
        getGenresAPI(setGenres);
    }, []);
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon ={faFilm}/> Your Film Library
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/favorites">Favorites</NavLink>
                    <NavLink className ="nav-link" to="/library">Library</NavLink>        
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
