import React, { Component } from 'react'
import { Link } from 'gatsby'
import Image from '../utils/image'
import cv from '../document/purdey_chambraud_cv_front_end-en.pdf'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import IconService from '../utils/IconService'

import './css/resume.css'

import * as Scroll from 'react-scroll'

let LinkScroll = Scroll.Link
let Element = Scroll.Element
let Events = Scroll.Events
let scroll = Scroll.animateScroll
let scrollSpy = Scroll.scrollSpy

const LinkOrNot = props => {
  if (props.url) {
    return (
      <a href={props.url} target="_blank" className="c-link">
        {props.name}
      </a>
    )
  } else {
    return <span>{props.name}</span>
  }
}

class resumePage extends Component {
  state = {
    currentlyScrolled: '',
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
    console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', (to, element) => {
    console.log('end', arguments)
    })

    scrollSpy.update()
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  scrollToTop() {
    scroll.scrollToTop()
  }
  scrollToBottom() {
    scroll.scrollToBottom()
  }
  scrollTo() {
    scroll.scrollTo(100)
  }
  scrollMore() {
    scroll.scrollMore(100)
  }
  handleSetActive = to => {
  console.log(to)
    this.setState({ currentlyScrolled: to })
  console.log(this.state)
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query resumePage {
            dataJson {
              resumePage {
                buttonTitle
                title
                intro
                jobsSection {
                  title
                  id
                  jobs {
                    name
                    url
                    years
                    missions {
                      name
                    }
                    formerProfession
                    current
                  }
                }
                educationSection {
                  title
                  id
                  educationList {
                    name
                    place
                    year
                    url
                  }
                }
                skillsSection {
                  title
                  id
                  skills {
                    title
                    list {
                      name
                    }
                  }
                  languages {
                    title
                    list {
                      name
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          // console.log('data resume', data)
          const {
            title,
            buttonTitle,
            intro,
            jobsSection,
            educationSection,
            skillsSection,
          } = data.dataJson.resumePage
          const { skills, languages } = skillsSection

          return (
            <Layout>
              <h1 className="c-page__title">{title}</h1>
              <p>{intro}
              <a
                    href={cv}
                    target="_blank"
                    className="c-resume__download-link c-link"
                  >                     
              <IconService
                      nameIcon="download"
                      iconStyleContext={{
                        color: '',
                      }}
                    />
                    </a>
                    </p>
              <div className="c-resume-scrollable">
                <div className="c-pannel-scoll">
                  <LinkScroll
                    activeClass="c-pannel-scroll__link--active"
                    className="c-pannel-scroll__link"
                    to="sectionJob"
                    spy={true}
                    smooth={true}
                    offset={0}
                    onSetActive={this.handleSetActive}
                  >
                    <IconService
                      nameIcon="Job"
                      iconStyleContext={{
                        color: '',
                      }}
                    />
                  </LinkScroll>

                  <LinkScroll
                    activeClass="c-pannel-scroll__link--active"
                    className="c-pannel-scroll__link"
                    to="sectionSkills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    onSetActive={this.handleSetActive}
                  >
                    <IconService
                      nameIcon="Skills"
                      iconStyleContext={{
                        color: '',
                      }}
                    />
                  </LinkScroll>

                  <LinkScroll
                    activeClass="c-pannel-scroll__link--active"
                    className="c-pannel-scroll__link"
                    to="sectionEducation"
                    spy={true}
                    smooth={true}
                    offset={0}
                    onSetActive={this.handleSetActive}
                  >
                    <IconService
                      nameIcon="Education"
                      iconStyleContext={{
                        color: '',
                      }}
                    />
                  </LinkScroll>
                </div>

                <Element name="sectionJob">
                  <h2 id="js-sectionJob">{jobsSection.title}</h2>
                  <ul className="c-jobs">
                    {jobsSection.jobs.map(job => {
                      return (
                        <li className="c-job" key={job.name}>
                          <span className="c-job__year">{job.years}</span>
                          <a href={job.url} target="_blank" className="c-link">{job.name}</a>
                          <ul className="c-missions">
                            {job.missions.map((mission, index) => {
                             console.log(mission.name)
                              return (
                                <li className="c-mission" key={index}>
                                  {mission.name}
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                      )
                    })}
                  </ul>
                </Element>

                <Element name="sectionSkills">
                  <h2 id="js-sectionSkills">{skillsSection.title}</h2>
                  <ul className="c-skills">
                    {skills.map((skillType, index) => {
                      return (
                        <li className="" key={index}>
                          <h3>{skillType.title}</h3>
                          <ul className="c-skills">
                            {skillType.list.map((skill, index) => {
                              return (
                                <li className="c-skill" key={index}>
                                  <span>{skill.name}</span>
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                      )
                    })}
                  </ul>
                  <h3 className="c-resume__subtitle">{languages.title}</h3>
                  <ul className="c-languages">
                    {languages.list.map((language, index) => {
                      return (
                        <li className="" key={index}>
                          <span>{language.name}</span>
                        </li>
                      )
                    })}
                  </ul>
                </Element>

                <Element name="sectionEducation">
                  <h2 id="js-sectionEducation">{educationSection.title}</h2>
                  <ul className="c-educations">
                    {educationSection.educationList.map((education, index) => {
                      return (
                        <li className="c-job" key={index}>
                          <span className="c-job__year">{education.year}</span>
                          <span className="c-job__year">{education.name}</span>
                          <LinkOrNot
                            url={education.url}
                            name={education.place}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </Element>
                <div className="c-resume-section--button ">
                  <a
                    href={cv}
                    target="_blank"
                    className="c-resume-button c-button"
                  >
                    {buttonTitle}
                  </a>
                </div>
              </div>

              {/*  
              <Link to="/">Go back to the jobs</Link>
              <Link to="/playground/">Go to the playground</Link> */}
            </Layout>
          )
        }}
      />
    )
  }
}

export default resumePage
