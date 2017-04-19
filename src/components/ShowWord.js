import React, { Component } from 'react'
import styles from '../styles/ShowWord.scss'

class ShowWord extends Component {
  state = {
    active: {}
  }

  updateWord (slug) {
    this.setState({active: []})
    const url = `https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=example`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  componentDidMount () {
    this.updateWord(this.props.match.params.slug)
  }

  render () {
    return <div className={styles.ShowWord}>
      <div className={styles.word}>
        {this.state.active.term}:
      </div>
      <div className={styles.definition}>
        {this.state.active.definition}
      </div>
    </div>
  }
}

export default ShowWord
