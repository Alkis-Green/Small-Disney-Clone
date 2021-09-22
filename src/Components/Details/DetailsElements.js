import styled from 'styled-components';

export const Container = styled.div`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

export const Background = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

export const ImageTitle = styled.div`

    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 65px;
    margin-bottom: 12px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
`

export const PlayBtn = styled.button`

    border: none;
    border-radius: 4px;

    height: 44px;
    font-size: 0.95em;
    padding: 0 24px;
    margin-right: 1em;
    letter-spacing: 1.5px;
    background: rgb(249, 249, 249);
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
        background: rgb(210, 210, 210);
    }
    
`

export const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0, 0, 0.25);
    border: 2px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

export const AddBtn = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 1em;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid whitesmoke;
    border-radius: 5em;
    background: rgba(0, 0, 0, 0.25);
    cursor: pointer;

    span {
        font-size: 2em;
        color: whitesmoke;
    }
`

export const GroupWatchBtn = styled(AddBtn)`
    background: rgba(0, 0, 0);
`

export const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 0.95em;
    min-height: 20px;
    margin-top: 24px;
`

export const Description = styled.div`
    line-height: 1.4;
    font-size: 1.25em;

    max-width: 760px;
    margin-top: 16px;

    color: rgb(249, 249, 249);
`