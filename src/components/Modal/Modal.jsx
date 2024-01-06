    import { Overlay, ModalWindow } from "./Modal.styled";
    import { RentalContainer } from "components/RentalContainer";
    import { useEffect } from "react";
    import ReactDOM from "react-dom";

    const Modal = ({ props }) => {

      const { onModalClose, expanded } = props;
      useEffect(() => {
        if (expanded) {
          window.addEventListener("keydown", onModalClose);
        }

        return () => {
          window.removeEventListener("keydown", onModalClose);
        };
      }, [onModalClose, expanded]);

      

      return ReactDOM.createPortal(
        <Overlay expanded={expanded} id="overlay" onClick={onModalClose}>
          <ModalWindow>
            <RentalContainer props={props} />
          </ModalWindow>
        </Overlay>,
        document.getElementById("modal-root")
      );
    };

    export { Modal };
