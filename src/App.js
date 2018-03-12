import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search from './search'
import Main from './main'

class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search}/>
        <Route exact path="/" component={Main}/>
      </div>
    )
  }
}

export default BooksApp
