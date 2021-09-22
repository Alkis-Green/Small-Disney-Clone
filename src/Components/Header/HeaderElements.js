import styled from 'styled-components';

export const Nav = styled.nav`
    overflow-x: hidden;
    height: 70px;
    background-color: #090b13;

    display: flex;
    align-items: center;
    // 36px = 2.25em
    padding: 0 2.25em;
`

export const Logo = styled.img`
    width: 80px;

`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    //25px = 1.55em
    margin-left: 1.55em;

    a {
        display: flex;
        align-items: center;
        // 12px = 0.75em
        padding: 0 0.75em;
        cursor: pointer;

        img {
            // 20px = 1.25em
            height: 1.25em;
        }

        span {
            font-size: 0.8em;
            letter-spacing: 1.3px;
            position: relative;

            &::after {
                content: "";
                height: 2px;
                background: whitesmoke;

                position: absolute;
                left: 0;
                right: 0;
                bottom: -4.5px;

                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-origin: left center;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

export const UserImage = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`