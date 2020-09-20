import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ExtLink, InlinePageLink } from '../components/atoms'
import Contact from '../components/contact'

const About = (_) => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            I'm Shawn Ohn, I'm breaking into job market in Canada as a
            full-stack web developer. My goal is ...
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
