import React, { Component } from 'react'

class SearchBar extends Component {
  render () {
    return <div className='SearchBar'>
      <input type='text' /><input type='button' value='Search' />
    </div>
  }
}

export default SearchBar
