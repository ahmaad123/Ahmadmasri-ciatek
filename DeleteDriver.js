import React, {useState, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../../constants";

function DeleteDriver(props) {
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)

    };

    const deleteDriver = pk => {
        axios.delete(API_URL + pk).then(() => {
            props.resetState();
            toggle();
        });
    };
    return ( <Fragment >
        <Button 
        color = "danger"
        onClick = {
            () => toggle()
        } >Remove </Button> 
        <Modal 
        isOpen = { modal }
        toggle = {toggle} >
        <ModalHeader toggle = { toggle } >
        Do you really wanna delete the driver ?
        </ModalHeader>

        <ModalFooter >
        <Button 
        type = "button"
        onClick = {
            () => toggle()
        } >Cancel </Button> 
        <Button type = "button"
        color = "primary"
        onClick = {
            () => deleteDriver(props.pk)
        }> Yes </Button> 
        </ModalFooter > 
        </Modal> </Fragment >
    )
}

export default DeleteDriver
