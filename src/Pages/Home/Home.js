import React from 'react'
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Viewers from '../../Components/Viewers/Viewers';
import Movies from '../../Components/Movies/Movies';
import { Container } from './HomeElements';

function Home() {
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home
