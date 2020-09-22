import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/postList'
import { Heading } from '../components/atoms'
import Contact from '../components/contact'

const Blog = () => {
  return (
    <Layout activePage="blog">
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <p className="-mt-3 mb-12 text-tertiary">
        I write about web development and interesting stuff.
      </p>
      <PostList />
      <Contact />
    </Layout>
  )
}

export default Blog
