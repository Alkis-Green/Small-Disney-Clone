import styled from 'styled-components';

export const Container = styled.div`

    /* padding: 0 calc(3.5vw + 5px); */
    display: flex;
    justify-content: center;
    align-items: top;
    height: calc(100vh - 70px);
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }

`

export const ContentBox = styled.div`

    width: 90%;
    max-width: 650px;
    margin-top: 20px;
    padding: 80px 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

`

export const LogoOne = styled.img``

export const SignUpBtn  = styled.a`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 12px;
    padding: 17px 0px;

    background-color: #0063e5;
    border-radius: 4.5px;
    text-align: center;

    letter-spacing: 1.4px;
    font-size: 1.13em;
    font-weight: bold;

    cursor: pointer;
    transition: all 250ms;

    &:hover {
        background: #0483ee;
    }
`

export const Description = styled.p`
    font-size: .6em;
    letter-spacing: 1.1px;
    line-height: 1.5;
    text-align: center;
`

export const LogoTwo = styled.img`
    width: 90%;
`