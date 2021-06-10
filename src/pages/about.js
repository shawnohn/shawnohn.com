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
            During the past years, I've worked as a Software Developer(4 years)
            in developing an enterprise solution using WPF .Net Framework(C#)
            and Microsoft SQL Server in South Korea. After graduation with a
            Master of Applied Computing at the University of Windsor, I've been
            working as a Full Stack developer and an independent Unity Game
            Developer.
          </p>
          <p>
            Now I'm breaking into the job market to secure a Permanent Full-time
            position in Canada. I prefer JavaScript tech stacks and Unity to
            jump into the ongoing projects without hesitation and to perform the
            best.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
