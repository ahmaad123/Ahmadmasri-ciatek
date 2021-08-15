import React from "react";
import { Table } from "reactstrap";
import DriverModal from "./DriverModal";
import DeleteDriver from "./DeleteDriver";
function DriverList (props) {
    
    return (
      <Table light align="center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Driver's Email</th>
            <th>Driver's Phone</th>
            <th>Status</th>
            <th>Actions</th>
           
          </tr>
        </thead>
        <tbody>
          {!props.drivers || props.drivers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No drivers yet.</b>
              </td>
            </tr>
          ) : (
            props.drivers.map(driver => (
              <tr key={driver.pk}>
                <td>{driver.fname}</td>
                <td>{driver.lname}</td>
                <td>{driver.email}</td>
                <td>{driver.phone}</td>
                <td>{driver.status}</td>
                
                <DriverModal drivers = {props.drivers} create = {false} resetState = {props.resetState} />
                <DeleteDriver pk = {driver.pk} resetState = {props.resetState}/>
              </tr>
              
            ))
          )}
        </tbody>
      </Table>
      
    );
  
}

export default DriverList;