import React from 'react';
import {
    Container,
    Background,
    ImageTitle,
    Controls,
    PlayBtn,
    TrailerBtn,
    AddBtn,
    GroupWatchBtn,
    SubTitle,
    Description
} from './DetailsElements';

const Details = () => {
    return (
        <Container>
            <Background>
                <img src="https://images.unsplash.com/photo-1512067848654-47a0880b7527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />
            </Background>
            <ImageTitle>
                <img src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </ImageTitle>
            <Controls>
                <PlayBtn>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src="/images/group-icon.png" />
                </GroupWatchBtn>
            </Controls>
            <SubTitle>
                2018 * 7m * Family, Fantasy. Kids, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus mollitia eius, sunt tempore expedita reiciendis provident deserunt eum praesentium?
            </Description>
        </Container>
    );
};

export default Details;