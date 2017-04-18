import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchBar from './Searchbar.js'
import Definition from './Definition.js'
import AddWord from './AddWord.js'

class App extends Component {
  render () {
    return <Router>
      <div>
        <h1>Jabberdexicon</h1>
        <SearchBar />
        <Definition />
        <AddWord />
      </div>
    </Router>
  }
}

export default App
