import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ count: this.state.count + 1 })
  };

  render () {
    const { count } = this.state
    return (
      <div className={styles.component}>
        <header role='banner'>
          <h1 className={styles.title}>Assets Only Example</h1>
        </header>
        <p>This is a <em>simple</em> example that uses <a href='http://facebook.github.io/react/'>React.js</a> and only generates <code>CSS</code> and <code>JavaScript</code>.</p>
        <div className={styles.counter}>
          <h2>Clicked {count} times.</h2>
          <button className={styles.button} onClick={this.handleClick}>Click me!</button>
        </div>
      </div>
    )
  }
}

if (typeof document !== 'undefined') {
  ReactDOM.render(<App/>, document.querySelector('#content'))
}

export default App
