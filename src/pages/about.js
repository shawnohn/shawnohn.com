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
            During the past years, I've worked as a .Net Software Developer(4
            years) in developing an enterprise solution using .Net Framework(C#)
            and Microsoft SQL Server in South Korea. After graduation with a
            Master of Applied Computing at the University of Windsor, I've been
            working as an independent Unity Game Developer and as a Full Stack
            Developer.
          </p>
          <p>
            Now I'm breaking into the job market to secure a full-time position
            in Canada. I prefer JavaScript tech stacks and Unity to jump into
            the ongoing projects without hesitation and to perform the best.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
