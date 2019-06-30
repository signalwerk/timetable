import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'de' }}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'viewport', content: 'width=640' },
          ]}
          title={siteTitle}
        />
        {this.props.children}
      </div>
    )
  }
}

export default Index
