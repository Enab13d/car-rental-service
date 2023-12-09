import styled from "@emotion/styled";
import { theme } from "constants/theme";

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.overlay};
z-index: 1200;
pointer-events: ${(props) => (props.expanded ? 'auto' : 'none')};
opacity: ${(props) => (props.expanded ? 1 : 0)};
transition: opacity ${theme.animation.duration} ${theme.animation.timingFunction};

div {
    transform: scale${(props) => (props.expanded ? '(1)' : '(0.7)')}
    transition: transform ${theme.animation.duration} ${theme.animation.timingFunction}
}
`
const ModalWindow = styled.div`

`



export {
    Overlay, ModalWindow
}