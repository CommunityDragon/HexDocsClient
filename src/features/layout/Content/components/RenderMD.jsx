import React, { useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import ReactHtmlParser from 'react-html-parser'
import hljs from 'highlight.js'
import TOC from 'markdown-it-toc-done-right'
import Anchors from 'markdown-it-anchor'

import Disclaimer from 'features/layout/Disclaimer'
import { rendermd as Rendermd } from './styled'

const MarkdownParser = new MarkdownIt('default', {
  html: true,
  linkify: true,
  breaks: false,
  typographer: true,
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${ 
          hljs.highlight(lang, str, true).value 
          }</code></pre>`;
      } catch (err) {
      }
    }

    return `<pre class="hljs"><code>${  MarkdownParser.utils.escapeHtml(str)  }</code></pre>`;
  }
})
.use(require('markdown-it-footnote'))
.use(require('markdown-it-sup'))
.use(require('markdown-it-sub'))
.use(require('markdown-it-ins'))
.use(require('markdown-it-mark'))
.use(require('markdown-it-deflist'))
.use(require('markdown-it-abbr'))
.use(Anchors, {
  permalink: true,
  permalinkClass: 'material-icons anchors',
  permalinkBefore: true,
  permalinkSymbol: 'link',
})
.use(TOC)
.use(require('markdown-it-emoji'), {
  shortcuts: {
    smile: [':)', ':-)', ':^)', ':v)'],
    laughing: [':D', 'xD', 'xd', 'XD', 'Xd', ':d'],
    sunglasses: ['8)', '8-)'],
    heart: ['<3'],
  },
})
.use(require('markdown-it-container'), 'spoiler', {
  validate: (params) => {
    return params.trim().match(/^spoiler\s+(.*)$/)
  },

  render(tokens, i) {
    const m = tokens[i].info.trim().match(/^spoiler\s+(.*)$/)

    if (tokens[i].nesting === 1) {
      return `<details><summary>${MarkdownParser.utils.escapeHtml(m[1])}</summary> \n`
    }
    return '</details>\n'
  },
})

/**
 * rendering markdown
 */
const RenderMD = ({ md, title }) => {
  useEffect(() => {
    const { hash } = window.location

    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [])

  return (
    <Rendermd>
      <div id="scrollable" className="markdown-body">
        {title && <h1>{title}</h1>}
        {ReactHtmlParser(MarkdownParser.render(md))}
      </div>
      <Disclaimer displayOn="MOBILE" />
    </Rendermd>
  )
}

export default RenderMD
