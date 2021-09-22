import React from 'react';
import { Container, Content, Wrap } from './MoviesElements';

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://images.unsplash.com/photo-1512067848654-47a0880b7527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />
                </Wrap>
                <Wrap>
                    <img src="https://images.unsplash.com/photo-1512067848654-47a0880b7527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />
                </Wrap>
                <Wrap>
                    <img src="https://images.unsplash.com/photo-1512067848654-47a0880b7527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />
                </Wrap>
                <Wrap>
                    <img src="https://images.unsplash.com/photo-1512067848654-47a0880b7527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />
                </Wrap>
            </Content>
        </Container>
    );
};

export default Movies;