import styled from "@emotion/styled";


const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.colors.overlay};
z-index: 1200;
pointer-events: ${(props) => (props.expanded ? 'auto': "none")};


opacity: ${(props) => (props.expanded ? 1 : 0)};
transition: opacity ${props => props.theme.animation.duration} ${props => props.theme.animation.timingFunction};

div {
    transform: scale${(props) => (props.expanded ? '(1)' : '(0.7)')};
    transition: transform ${props => props.theme.animation.duration} ${props => props.theme.animation.timingFunction};
    ${props => props.theme.mq.laptop} {
        transform: scale${(props) => (props.expanded ? '(0.95)' : '(0.7)')};
      };
}
`

const ModalWindow = styled.div`
position: absolute;
height: 752px;
${props => props.theme.mq.laptop} {
    height: calc(100vh);
  };

`



export {
    Overlay, ModalWindow
}