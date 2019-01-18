import React from 'react'
import Layout from '../components/layout'
import Image from '../utils/image'

const NotFoundPage = () => (
  <Layout>
    <h1 className="c-page__title">NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Image imageName="404Large" />
  </Layout>
)

export default NotFoundPage
