import React from 'react';

import { Button, Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class SModal extends React.Component {

    render() {
        console.log(this.props);
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}><b>{this.props.book.bookTitle}</b></ModalHeader>
                <ModalBody>
                    <p>AuterName: {this.props.book.auterName}</p>
                    <p>Published Date: {this.props.book.publishedDate}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Edit</Button>{' '}
                    <Button color="secondary" onClick={()=> this.props.deleteItem(this.props.idx)}>Delete</Button>
                </ModalFooter>
            </Modal>
        )
    }
}