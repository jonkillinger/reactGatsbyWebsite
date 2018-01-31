import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jon Killinger"
      meta={[
        { name: 'description', content: 'Jon Killingers website' },
        { name: 'keywords', content: 'resume, work, jon, killinger' },
      ]}
    />
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
