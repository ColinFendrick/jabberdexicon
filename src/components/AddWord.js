import React, { Component } from 'react'
import styles from '../styles/AddWord.scss'

class AddWord extends Component {
  render () {
    return <div className={styles.addWord}>
      <input type='text' defaultValue='New Term' className={styles.newTerm} />
      <input type='text' defaultValue='New Definition' className={styles.newDefinition} />
      <input type='button' value='Add a new word' />
    </div>
  }
}

export default AddWord
