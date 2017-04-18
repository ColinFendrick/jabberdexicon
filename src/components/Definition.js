import React, { Component } from 'react'
import styles from '../styles/Definition.scss'

class Definition extends Component {
  render () {
    return <div className={styles.definition}>
      <h3>Term: {this.props.term}</h3>
      <p>Definition: {this.props.definition}</p>
    </div>
  }
}

export default Definition
