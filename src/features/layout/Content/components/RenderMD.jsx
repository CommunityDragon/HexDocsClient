import React from 'react'
import MarkdownIt from 'markdown-it'
import ReactHtmlParser from 'react-html-parser'
import hljs from 'highlight.js'

import { rendermd as Rendermd } from './styled'
import Disclaimer from '../../Disclaimer';

const MarkdownParser = new MarkdownIt('default', {
  html: true,
  linkify: true,
  breaks: false,
  typographer: true,
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return ''
  }
}).use(require('markdown-it-footnote'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-emoji'), {
    shortcuts: {
      smile: [':)', ':-)', ':^)', ':v)'],
      laughing: [':D', 'xD', 'xd', 'XD', 'Xd', ':d'],
      sunglasses: ['8)', '8-)'],
      heart: ['<3']
    }
  }).use(require('markdown-it-container'), 'spoiler', {
    validate: (params) => {
      return params.trim().match(/^spoiler\s+(.*)$/)
    },

    render (tokens, i) {
      const m = tokens[i].info.trim().match(/^spoiler\s+(.*)$/)

      if (tokens[i].nesting === 1) {
        return '<details><summary>' + MarkdownParser.utils.escapeHtml(m[1]) + '</summary> \n'
      } else {
        return '</details>\n'
      }
    }
  })

/**
 * rendering markdown
 */
const RenderMD = ({ md }) => {
  return (
    <Rendermd>
      <div className="markdown-body">
        {ReactHtmlParser(MarkdownParser.render(md))}
      </div>
      <Disclaimer displayOn={'MOBILE'}/>
    </Rendermd>
  )
}

export default RenderMD
