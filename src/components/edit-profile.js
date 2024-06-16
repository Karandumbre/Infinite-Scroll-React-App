import React from "react";
import { Modal } from "react-bootstrap";
import FinalForm from "./final-form";

function EditProfile({ userData, handleClose }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FinalForm data={userData} handleCloseHandler={handleClose} />
      </Modal.Body>
    </>
  );
}

export default EditProfile;
