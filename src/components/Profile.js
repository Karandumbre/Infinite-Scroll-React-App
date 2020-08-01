/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import EditProfile from './EditProfile';
export const Profile = memo(function Profile(data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { avatar, email, first_name, last_name } = data.data;
  return <>
    <Card className="col-12 col-md-5 col-lg-3" onClick={handleShow}>
            <Card.Img variant="top" src={avatar} className="card-image"/>
            <Card.Body>
              <Card.Title>{first_name + ' ' + last_name}</Card.Title>
              <Card.Text> {email} </Card.Text>
            </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
      <EditProfile handleClose={handleClose} userData={data.data}/>
    </Modal>
    </>
});
