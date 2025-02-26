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
            I’m a Software Engineer with experience across automotive, smart
            infrastructure, gaming, and healthcare industries, specializing in
            full-stack development, system architecture, cloud infrastructure,
            and DevOps.
          </p>
          <p>
            I have developed ERP systems to streamline automotive business
            processes, built a parking data platform, led full-stack development
            of a .NET Framework app for healthcare, and modernized legacy
            components.
          </p>
          <p>
            I enjoy solving complex problems, improving system efficiency, and
            collaborating with teams to build high-quality software. Always
            eager to learn and grow, I strive to create impactful and efficient
            solutions.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
