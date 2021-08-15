import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import { API_URL } from "../../../constants";
import DriverList from "./DriverList";
import DriverModal from "./DriverModal";



function Driver() {
    const [drivers, setDrivers] = useState([]);
    //const [products,setProduct]= useState([]);

    const resetState = () => {
        getDrivers();
    };
    useEffect(() => {
        resetState();
    });

    const getDrivers = () => {
        axios.get(API_URL).then((res) => setDrivers(res.data));
    };
    return ( 

    <Container style = {
            { marginTop: "20px" } } >
        <Row >
        <Col >
        <DriverList drivers = {drivers} resetState = {resetState} />
        <DriverModal create = {true} resetState = {resetState}/>
        </Col>
        </Row>
        </Container>
    );
}
export default Driver;
