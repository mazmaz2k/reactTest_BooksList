import React from 'react';
import { Button } from 'reactstrap';


export class Book extends React.Component {

    render() {
        return (
            <div  >
                <Button color="danger" onClick={() => this.props.toggle(this.props.idx)} style={{ top: '20px', right: '20px', width: '500px', marginBottom: "10px" }}>{this.props.book.bookTitle}</Button>
            </div>
        )
    }

}