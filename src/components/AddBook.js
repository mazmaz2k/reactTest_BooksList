import React from 'react';
import { Collapse, Button, CardBody, Card,Form, FormGroup, Label, Input  } from 'reactstrap';


export class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: false,
            auterName: '',
            bookTitle: '',
            publishedDate: '',
            valTitle :false
  
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuterChange = this.handleAuterChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);


    }

    validate(bookTitle, auterName,publishedDate){
        return({
            auterName: auterName.length === 0,
            bookTitle: bookTitle.length ===0,
            publishedDate: publishedDate.length===0
            }
        );
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });

    }
    handleTitleChange(e) {
        this.setState({bookTitle: e.target.value});
    }
    handleAuterChange(e) {
        // console.log(e);
        this.setState({auterName: e.target.value});
    }
    handleDateChange(e) {
        if(e.target.value===''){
            return false;
        }
        this.setState({publishedDate: e.target.value});
    }
    canBeSubmitted() {
        const errors = this.validate(this.state.auterName,this.state.bookTitle,this.state.publishedDate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }

    handleSubmit(event){

        // console.log(e)
        console.log(this.state.bookTitle);
        console.log(this.state.auterName);
        console.log(this.state.publishedDate);
        if(this.state.bookTitle!=='' && this.state.auterName!=='' && this.state.publishedDate!==''){
            const min = 1;
            const max = 100000;
            const rand =Math.floor(min + Math.random() * (max - min)) ;
            // this.props.bookList.push({id: this.props.bookList.length, auterName:this.state.auterName,publishedDate:this.state.publishedDate,bookTitle:this.state.bookTitle});
            this.props.addNewBook({id: rand, auterName:this.state.auterName,publishedDate:this.state.publishedDate,bookTitle:this.state.bookTitle});
            this.toggle();
            // this.props.bookList()
            // event.preventDefault();
            // console.log(this.props.bookList);
            // event.onSubmit()
            // return;
        }
        event.preventDefault();
        this.setState({
            publishedDate:'', 
            auterName:'',
            bookTitle:'',
            }
        )
        // console.log(this.props.bookList);

    }
    render() {
        const errors= this.validate(this.state.bookTitle,this.state.auterName,this.state.publishedDate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Add new Book</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <Form  onSubmit={this.handleSubmit}>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label  className="mr-sm-2">Enter book Title</Label>
                                    <Input  type="text" name="bookTitle" id="bookTitle" placeholder="Enter book Title" value={this.state.bookTitle} onChange={this.handleTitleChange} className={errors.bookTitle ? "error" : ""} />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label  className="mr-sm-2">Enter published Date</Label>
                                    <Input valid type="date" name="publishedDate" id="publishedDate" placeholder="Enter date placeholder" value={this.state.publishedDate} onChange={this.handleDateChange}  className={errors.publishedDate ? "error" : ""}/>
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="auterName" className="mr-sm-2">Enter auter Name</Label>
                                    <Input type="text" name="auterName" id="auterName"  value={this.state.auterName} onChange={this.handleAuterChange}  placeholder="Enter auter Name" className={errors.auterName ? "error" : ""}/>
                                </FormGroup>
                                <hr/>
                                <Button  type="submit" value="Submit" disabled={isDisabled}>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }

}