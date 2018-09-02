import React from 'react';
import axios from 'axios';
import { SModal } from './SModal';
import { Book } from './Book';
import { AddBook } from './AddBook';
import { EditBook } from './EditBook';


class BookList extends React.Component {


  constructor() {
    super();
    this.state = {
      books: [],
      modal: false,
      sub_modal:false,
      idx: 0,
    };
    this.toggle = this.toggle.bind(this);
    this.sub_toggle = this.sub_toggle.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.editBook = this.editBook.bind(this);

  }

  toggle(i) {
    this.setState({
      modal: !this.state.modal,
      idx: i,
    });
  }

  sub_toggle(bookTitle,auterName,publishedDate){
    this.setState({
      modal: !this.state.modal,
      sub_modal: !this.state.sub_modal,
      
    });
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

  addNewBook(book) {
    const bookList = this.state.books;
    bookList.push(book);
    this.setState({books: bookList});
  }

  editBook(book){
    console.log("Book: ",book)
    const bookList = this.state.books;
    bookList[this.state.idx]=book;
    console.log("Before: ",bookList)
    this.setState({books: bookList});
    console.log("After: ",this.state.books)

  }

  render() {
    // console.log('All books ', this.state.books);
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
            {<AddBook bookList={this.state.books} addNewBook={this.addNewBook}/>}
            {booksListBlock}
            {this.state.modal && <SModal isOpen={this.state.modal} sub_toggle={this.sub_toggle} toggle={this.toggle} book={this.state.books[this.state.idx]} deleteItem={this.deleteFromList} idx={this.state.idx} />}
            {!this.state.modal && this.state.sub_modal && <EditBook isOpen={this.state.sub_modal} toggle={this.sub_toggle} editBook={this.editBook} book={this.state.books[this.state.idx]}  />}

          </div>
        </ul>
      </div>


    )
  }



}

export default BookList; 