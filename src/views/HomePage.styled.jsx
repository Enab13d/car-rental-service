import styled from "@emotion/styled";
import backgroundImg from "../assets/images/pexels-mike-bird-1035108-min.jpg"


const HeroContainter = styled.div`
background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ), url(${backgroundImg});
background-position: center;
background-repeat: no-repeat;
background-color: #464646;
background-size: cover;
height: 700px;
display: flex;
justify-content: center;
align-items: center;
`
const StyledTitle = styled.h1`
color: ${props => props.theme.colors.primaryWhite};
font-size: 60px;
font-weight: 600;

`

export {
    HeroContainter, StyledTitle
}