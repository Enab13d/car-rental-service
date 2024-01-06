import styled from "@emotion/styled";
import { theme } from "constants/theme";

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: ${(props) => (props.expanded ? '100%' : '0%')};
height: ${(props) => (props.expanded ? '100%' : '0%')};
display:${(props) => (props.expanded ? "flex" : "none")};
justify-content: center;
align-items: center;
background-color: ${theme.colors.overlay};
z-index: ${(props) => (props.expanded ? 1200 : -1)};
pointer-events: ${(props) => (props.expanded ? 'auto': "none")};
overflow: hidden;
visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
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