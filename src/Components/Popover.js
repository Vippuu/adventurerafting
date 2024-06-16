import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Popover({props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     {/* <button onClick={handleShow} className="primary">join</button> */}
      <Button variant="primary" onClick={handleShow}>
        Book Now
      </Button> 
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><spam className="text-success">WhatsApp</spam> us for quick Booking !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Phone:8448071982
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a href="#contact"  class="btn btn-info">Contact Us</a>

          
          <a href="https://wa.me/918448071982?text=I%20am%20interested%20in%20Rafting%20in%20Rishikesh.%20Kindly%20share%20the%20details." 
          target="_blank" class="btn btn-success">WhatsApp Us</a>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Popover;