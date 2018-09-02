import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class EditBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // a_book: {},
            auterName: this.props.book.auterName,
            bookTitle: this.props.book.bookTitle,
            publishedDate: "",
            valTitle: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuterChange = this.handleAuterChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);


    }
    validate(bookTitle, auterName, publishedDate) {
        return ({
            auterName: auterName.length === 0,
            bookTitle: bookTitle.length === 0,
            publishedDate: publishedDate.length === 0,
        }
        );
    }

    handleTitleChange(e) {
        this.setState({ bookTitle: e.target.value });
    }
    handleAuterChange(e) {
        this.setState({ auterName: e.target.value });
    }
    handleDateChange(e) {
        // if(e.target.value===''){
        //     return false;
        // }
        this.setState({ publishedDate: e.target.value });
    }
    canBeSubmitted() {
        const errors = this.validate(this.state.auterName, this.state.bookTitle, this.state.publishedDate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;

    }

    handleSubmit(event) {
        const a_book= {id: this.props.book.id, auterName:this.state.auterName,publishedDate:this.state.publishedDate,bookTitle:this.state.bookTitle};
        this.props.editBook(a_book);
        this.props.toggle();
        event.preventDefault();

    }

    render() {
        const errors = this.validate(this.state.bookTitle, this.state.auterName, this.state.publishedDate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    <Label className="mr-sm-2">Book Title</Label>
                    <Input type="text" name="bookTitle" id="bookTitle" value={this.state.bookTitle} onChange={this.handleTitleChange} className={errors.bookTitle ? "error" : ""} />
                </ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label className="mr-sm-2">Auter Name</Label>
                            <Input type="text" name="auterName" id="auterName" value={this.state.auterName} onChange={this.handleAuterChange} className={errors.auterName ? "error" : ""} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Enter published Date</Label>
                            <Input type="date" name="publishedDate" id="publishedDate" defaultValue={this.state.publishedDate} onChange={this.handleDateChange} className={errors.publishedDate ? "error" : ""} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" value="Submit" color="primary" onClick={this.handleSubmit} disabled={isDisabled}>submit</Button>{' '}
                </ModalFooter>
            </Modal>
        )
    }

}