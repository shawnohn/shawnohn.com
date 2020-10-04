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
            During the fast years, I've worked as a .Net Software Developer(4
            years) in developing an enterprise solution using .Net Framework(C#)
            and Microsoft SQL Server in South Korea. After graduation with a
            Master of Applied Computing at the University of Windsor, I worked
            as an independent Unity Game Developer(1 year) and it has turned my
            creative work as a game enthusiast.
          </p>
          <p>
            Now I'm breaking into the job market in Canada as a Full-Stack Web
            Developer. I prefer JavaScript frameworks to jump into the projects
            on going without hesitation and to perform the best.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
