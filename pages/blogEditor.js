import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth'

class BlogEditor extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-editor-page" title="Write Your Story...">
          
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditor);