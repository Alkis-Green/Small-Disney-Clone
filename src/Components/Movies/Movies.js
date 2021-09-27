import React from 'react';
import { selectMovies } from '../../app/Movie/MovieSlice';
import { useSelector } from 'react-redux';
import { Container, Content, Wrap } from './MoviesElements';

const Movies = () => {

    const movies = useSelector(selectMovies);
    console.log(selectMovies);

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {movies && movies.map((movie) => (
                    <Wrap>
                    <img src={ movie.cardImg } />
                    </Wrap>
                ))}
            </Content>
        </Container>
    );
};

export default Movies;