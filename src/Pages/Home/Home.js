import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import db from '../../firebase';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Viewers from '../../Components/Viewers/Viewers';
import Movies from '../../Components/Movies/Movies';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../app/Movie/MovieSlice';
import { Container } from './HomeElements';


function Home() {

    // const [movies, setMovies] = useState([]);

    // const API_KEY = "359d54b4";
    // const BASE_URL = `http://www.omdbapi.com/?t=indiana+jones&apikey=${API_KEY}`

    // useEffect(() => {
    //     axios.get(BASE_URL)
    //         .then(res => {
    //             setMovies(res.data);
    //             console.table(movies);
    //         })
    // }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapShot) => {
            let tempMovies = snapShot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies))
        });
    }, []);


    return (

        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home
