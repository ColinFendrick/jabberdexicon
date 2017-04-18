import React, { Component } from 'react'
import styles from '../styles/AddWord.scss'

class AddWord extends Component {
  _submit = e => {
    e.preventDefault()
    this.props.addWord(this.refs.newTerm.value, this.refs.newDef.value)
  }

  render () {
    return <form onSubmit={this._submit} className={styles.addWord}>
      <input type='text' ref='newTerm' defaultValue='New Term' className={styles.newTerm} />
      <input type='text' ref='newDef' defaultValue='New Definition' className={styles.newDefinition} />
      <input type='submit' value='Add a new word' />
    </form>
  }
}

export default AddWord
