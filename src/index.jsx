import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import 'css-reset-and-normalize/scss/reset-and-normalize.scss'
import 'css-reset-and-normalize/scss/link-reset.scss'
import 'highlight.js/styles/github-gist.css'
import 'github-markdown-css'
import './styles/main.sass'

ReactDOM.render(<App />, document.getElementById('root'))
