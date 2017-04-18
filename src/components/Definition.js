import React, { Component } from 'react'
import styles from '../styles/Definition.scss'

class Definition extends Component {
  render () {
    return <div className={styles.definition}>
      <h3>Term</h3>
      <p>Description: ?A Markdown formatted string that describes a term.?</p>
    </div>
  }
}

export default Definition
