import React from 'react';
import { Container, ContentBox, LogoOne, SignUpBtn, Description, LogoTwo } from './LoginElements';

const Login = () => {
    return (
        <Container>
            <ContentBox>
                <LogoOne src="/images/cta-logo-one.svg" />
                <SignUpBtn>GET ALL THERE</SignUpBtn>
                <Description>
                    Get Premium Access to Raya and the Last Dragon
                    with a Disney+ subscription. As of 26/3/2021, the price
                    and the Disney Bundle will Increase by 1$.
                </Description>
                <LogoTwo src="/images/cta-logo-two.png" />
            </ContentBox>
        </Container>
    );
};

export default Login;