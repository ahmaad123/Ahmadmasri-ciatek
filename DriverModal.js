import React, { useState, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import DriverForm from "./DriverForm.js";

function DriverModal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    return ( 
    <Fragment > { " " } {
            props.create ? ( 
            <Button color = "primary"
                className = "float-right"
                onClick = { toggle }
                style = {{ minWidth: "200px" }} 
                align="center">
                Create New { " " } 
            </Button>
            ):(
            <Button onClick = { toggle } color="primary"> Edit </Button>
            )
        } { " " } 
        <Modal isOpen = { modal }
        toggle = { toggle } >
        <ModalHeader toggle = { toggle } > Driver's details </ModalHeader>{" "} 
        <ModalBody >
        <DriverForm resetState = { props.resetState }
        toggle = { toggle }
        drivers = { props.drivers }
        />{" "} 
        </ModalBody>{" "} 
        </Modal>{" "} 
        </Fragment>
    );
}

export default DriverModal;