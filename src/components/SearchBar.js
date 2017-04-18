import React, { Component } from 'react'

class SearchBar extends Component {
  _submit = e => {
    e.preventDefault()
    console.log(this.refs.searchText.value)
  }

  render () {
    return <div className='SearchBar'>
      <form onSubmit={this._submit}>
        <input type='text' ref='searchText' />
        <input type='submit' value='Search' />
      </form>
    </div>
  }
}

export default SearchBar
