import React, { Component } from 'react'
import styles from '../styles/ShowWord.scss'

class ShowWord extends Component {
  state = {
    active: {}
  }

  updateWord (slug) {
    this.setState({active: []})
    const url = `https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=vorpal`
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

  _edit = () => {
    this.props.history.push(`/edit/${this.props.match.params.slug}`)
  }

  _delete = () => {
    if (window.confirm('Are you sure?')) {
      const url = `https://jabberdexicon.herokuapp.com/entries/${this.state.active.slug}?access_token=vorpal`
      window.fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }).then(this.setState({active: {}}))
      .then(this.props.history.push('/'))
    }
  }

  render () {
    return <div>
      <div className={styles.editButton}>
        <i onClick={this._edit} className='fa fa-pencil fa-2x' aria-hidden='true' />
      </div>
      <div className={styles.ShowWord}>
        <div className={styles.word}>
          {this.state.active.term}:
      </div>
        <div className={styles.definition}>
          <div dangerouslySetInnerHTML={{__html: `${this.state.active.formatted_definition}`}} />
        </div>
      </div>
      <input className={styles.deleteButton} onClick={this._delete} type='submit' value='Delete' />
    </div>
  }
}

export default ShowWord
