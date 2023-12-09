import { Overlay, ModalWindow } from "./Modal.styled"
import { RentalContainer } from "components/RentalContainer"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCars, selectIsLoading, selectError } from "features/cars/selectors"
import ReactDOM from 'react-dom';

const Modal = ({props}) => {

    
    const { onModalClose, expanded } = props;
    const dispatch = useDispatch();
    // const cars = useSelector(selectCars);
    // const isLoading = useSelector(selectIsLoading)
    // const isError = useSelector(selectError);


    useEffect(
        () => {
            window.addEventListener('keydown', onModalClose);

            return () => {
                window.removeEventListener('keydown', onModalClose);
            }
        }, [onModalClose]
    )
    

    return ReactDOM.createPortal(
        <Overlay expanded={expanded}>
            <ModalWindow>
                <RentalContainer props={ props}/>
            </ModalWindow>
        </Overlay>, document.getElementById('modal-root')
    )
}



export {
    Modal,
}