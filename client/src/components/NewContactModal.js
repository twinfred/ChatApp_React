import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    // createContact(idRef.current.value, nameRef.current.value);

    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="CreateContactId">ID:</Form.Label>
            <Form.Control id="CreateContactId" type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="CreateContactName">Name:</Form.Label>
            <Form.Control id="CreateContactName" type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
