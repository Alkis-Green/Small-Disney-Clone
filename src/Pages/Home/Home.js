import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Viewers from '../../Components/Viewers/Viewers';
import Movies from '../../Components/Movies/Movies';
import { Container } from './HomeElements';

function Home() {

    const [movies, setMovies] = useState([]);

    const API_KEY = "359d54b4";
    const BASE_URL = `http://www.omdbapi.com/?t=indiana+jones&apikey=${API_KEY}`

    useEffect(() => {
        axios.get(BASE_URL)
            .then(res => {
                setMovies(res.data);
                console.table(movies);
            })
    }, []);


    return (

        <Container>
            <ImageSlider />
            <Viewers />
            <Movies movies={movies} />
        </Container>
    )
}

export default Home
