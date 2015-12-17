import styles from './styles.css'

const root = '#content'
let state = { count: 0 }

function renderUI (props) {
  return `
    <div class='${styles.component}'>
      <header role='banner'>
        <h1 class='${styles.title}'>Assets Only Example</h1>
      </header>
      <p>This is a <em>simple</em> example that uses <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings'>Template Strings</a>.</p>
      <div class='${styles.counter}'>
        <h2>Clicked ${props.count} times.</h2>
        <button class='${styles.button}'>Click me!</button>
      </div>
    </div>
  `
}

function updateUI (ui, selector) {
  document.querySelector(selector).innerHTML = ui
}

function isMatch (element, selector) {
  const match = element.matches ||
    element.matchesSelector ||
    element.webkitMatchesSelector ||
    element.msMatchesSelector
  return match.call(element, selector)
}

function delegate (selector, handler) {
  return (event) => {
    if (isMatch(event.target, selector)) {
      handler(event)
    }
  }
}

const handleClick = delegate(`${root} button`, (event) => {
  event.preventDefault()
  state.count++
  updateUI(renderUI(state), root)
})

if (typeof document !== 'undefined') {
  document.addEventListener('click', handleClick, false)
  updateUI(renderUI(state), root)
}

