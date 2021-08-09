import React, { useEffect } from "react";
import {StaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from "gatsby-image"
import ScrollAnimation from 'react-animate-on-scroll';
  
    const removeDotStyles = () => {
      const navigation = document.querySelector('#js-dots');  

      const dots = navigation;
      const is_active = dots.querySelector('.is-active');
  
      if (is_active != null) {
        is_active.classList.remove('is-active');
      }
    }
  
    const setDotStatus = () => {
      const rect = document.getElementById("main-section").getBoundingClientRect();
      const scroll_position = window.scrollY;
      const navigation = document.querySelector('#js-dots');
      const sections = document.querySelectorAll(".section");

      const dots = Array.from(navigation.children);
      sections.forEach((section, index) => {
        const half_window = window.innerHeight / 2;
        const section_top = section.offsetTop;
  
        if (scroll_position > section_top - half_window && scroll_position < section_top + half_window + rect.top + window.scrollY) {
          removeDotStyles();
          dots[index].classList.add('is-active');
        }
      })
    }

    const scrollToSection = (e) => {
      const rect = document.getElementById("main-section").getBoundingClientRect();
      const navigation = document.querySelector('#js-dots');
      const dots = Array.from(navigation.children);
      const window_height = window.innerHeight;
  
      dots.forEach((dot, index) => {
        if (dot === e.target) {
  
          window.scrollTo({
            top: window_height * index + rect.top + window.scrollY,
            behavior: 'smooth',
          });
        }
      });
    }


const Slider = ({ data }) => {
  useEffect(() => {
    window.addEventListener('scroll', event => {
      setDotStatus();
    })
  });
    return (
        <div className="slider-container" id="our-tokens">
          <h2 className="tokens">Our Tokens</h2>
            <ul className="nav-dots" id="js-dots">
                <li className="nav-dot" onClick={scrollToSection.bind(this)}></li>
            </ul>

        <main id="main-section" className="main clearfix">
        {
        data.allMdx.nodes.map((node) => (
          <section className="section clearfix" key={node.frontmatter.title}>
            <div className="wrapper clearfix">
            <ScrollAnimation animateOnce={true} animateIn='bounceInRight' animatePreScroll={false}>
            <div className="left-pane">
              <h2 className="section-heading">{node.frontmatter.title}</h2>
             <MDXRenderer>{node.body}</MDXRenderer>
             <div className="supply">
             The code: {node.frontmatter.code}
            </div>
            <div className="supply">
             Supply: {node.frontmatter.supply}
            </div>
            <div className="buttons-more">
              <a className="btn-link" href={node.frontmatter.linkLobstr}>Buy on Lobstr</a>
              <a className="btn-link" href={node.frontmatter.linkScopuly}>Buy on Scopuly</a>
              <a className="btn-link" href={node.frontmatter.linkStellarTeam}>Buy on StellarTerm</a>
            </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn='bounceInUp' animatePreScroll={false}>
            <div className="right-pane">
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            </div>
            </ScrollAnimation>
            </div>
          </section>
        ))}
            </main>
        </div>
    )
}


export default function NewSlider(props) {
  return (
    <StaticQuery
      query={graphql`
      query {
        allMdx {
            nodes {
              frontmatter {
                title
                linkLobstr
                linkScopuly
                linkStellarTeam
                code
                supply
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              body
            }
        }
    }
      `}
      render={data => <Slider data={data} {...props} />}
    />
  )
}