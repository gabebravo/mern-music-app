import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const PopModal = props => (
  <div>
    <Modal isOpen={props.boolVal} toggle={props.modalHandler}>
      <ModalHeader toggle={props.modalHandler}>{props.title}</ModalHeader>
      <ModalBody>{ props.message }</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.modalHandler}>OK</Button>{' '}
        <Button color="secondary" onClick={props.modalHandler}>Close</Button>
      </ModalFooter>
    </Modal>
  </div>
);

PopModal.propTypes ={
  boolVal: PropTypes.bool,
  modalHandler: PropTypes.func
}

export default PopModal;
