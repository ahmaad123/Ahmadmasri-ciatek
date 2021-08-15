import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../../../constants";
function DriverForm(props) {
    const [pk, setPk] = useState(0);
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (props.drivers) {
            
            setPk(props.drivers.pk);
            setFirstName(props.drivers.fname);
            setLastName(props.drivers.lname);
            setEmail(props.drivers.email);
            setPhone(props.drivers.phone);
            setStatus(props.drivers.status);
        }
    }, [props.drivers]);

    const createDriver = (e) => {
        e.preventDefault();
        axios.post(API_URL, { fname, lname, email, phone, status }).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const editDriver = (e) => {
        e.preventDefault();
        axios.put(API_URL + pk, {fname, lname, email, phone, status,}).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const defaultIfEmpty = (value) => {
        return value === "" ? "" : value;
    };

    return ( 
    <Form onSubmit = { props.drivers ? editDriver : createDriver } >
        <FormGroup >
        <Label
        for = "fname" > First Name: </Label>{" "}
         <Input type = "text"
        name = "name"
        onChange = {
            (e) => {
                setFirstName(e.target.value);
            }
        }
        value = { defaultIfEmpty(fname) }
        />{" "} 
        
        <Label
        for = "lname" > Last Name: </Label>{" "}
         <Input type = "text"
        name = "name"
        onChange = {
            (e) => {
                setLastName(e.target.value);
            }
        }
        value = { defaultIfEmpty(lname) }
        />{" "} 
        </FormGroup>{" "} 
        <FormGroup >
        <Label
        for = "email" > Email: </Label>{" "} 
        <Input 
        type = "email"
        name = "email"
        onChange = {
            (e) => {
                setEmail(e.target.value);
            }
        }
        value = { defaultIfEmpty(email) }
        />{" "} 
        </FormGroup>{" "} 
        <FormGroup>
        <Label
        for = "phone" > Phone </Label>{" "} 
        <Input 
        type = "text"
        name = "phone"
        onChange = {
            (e) => {
                setPhone(e.target.value);
            }
        }
        value = { defaultIfEmpty(phone) }
        />{" "} 
        </FormGroup>{" "} 
        <FormGroup >
        <Label
        for = "status" > Status </Label>{" "} 
        <Input type = "text"
        name = "status"
        onChange = {
            (e) => {
                setStatus(e.target.value);
            }
        }
        value = { defaultIfEmpty(status) }
        />{" "} </FormGroup>{" "} 
        <Button> Send </Button>{" "} </Form>
    );
}

export default DriverForm;