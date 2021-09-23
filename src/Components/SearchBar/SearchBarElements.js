import styled from 'styled-components';

export const Container = styled.div`

    input {
        width: 100%;
        font-size: 1.4em;
        /* margin-top: .5em; */
        padding: 0.8em;
        color: whitesmoke;
        border-radius: 4px;
        border: 3px solid rgba(249, 249, 249, 0.1);
        background: transparent;
        outline: none;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover {
        transform: scale(1.01);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

`