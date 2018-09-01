import React from 'react';
import axios from 'axios';
import { SModal } from './SModal';
import { Book } from './Book';
import { AddBook } from './AddBook';


class BookList extends React.Component {


  constructor() {
    super();
    this.state = {
      books: [],
      modal: false,
      idx: 0,
    };
    this.toggle = this.toggle.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);

  }

  toggle(i) {
    this.setState({
      modal: !this.state.modal,
      idx: i,
    });
  }
  addBook() {

  }
  deleteFromList(idx) {
    let { books } = this.state;
    // console.log("1:----",books)
    books.splice(idx, 1);
    // console.log("2:----",books)
    this.setState({ books });
    this.toggle();
  }

  componentDidMount() {
    // let books = []
    axios.get('./data/books.json')
      .then(res => {
        // books = res.data;
        this.setState({ books: res.data });
      })

      //   console.log(books.getState).catch(function (error) {
      .catch(function (error) {
        console.log(error);
      });
  }

  addNewBook() {
    
  }

  render() {
    console.log('All books ', this.state.books);
    const books = this.state.books;
    // var idx =0;
    let booksListBlock = '';
    if (books.length > 0) {

      booksListBlock = this.state.books.map((books, i) => {
        return (
          <Book key={i} idx={i} toggle={this.toggle} book={this.state.books[i]} />
          // <div key={i} >
          //     <Button color="danger" onClick={()=> this.toggle(i)} style={{ top: '20px', right: '20px', width: '500px', marginBottom: "10px" }}>{books.bookTitle}</Button>
          // </div>
        )
      });
    }

    return (
      <div className='gator container'>

        <ul >
          <div>
            {<AddBook bookList={this.state.books} />}
            {booksListBlock}
            {this.state.modal && <SModal isOpen={this.state.modal} toggle={this.toggle} book={this.state.books[this.state.idx]} deleteItem={this.deleteFromList} idx={this.state.idx} />}
          </div>
        </ul>
      </div>


    )
  }



}

export default BookList; 