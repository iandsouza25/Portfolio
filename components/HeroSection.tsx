"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex">
        <div>
            <Image src ="/headshot.png" alt="" width = {300} height={300}/>
        </div>
        <div>
            <h1>Hi, I&#39;m Ian!</h1>
            <p>
              I&#39;m a{" "}
              <span className="font-semibold text-teal-600">
                Student / Software Engineer{" "} 
              </span>
              from Shrewsbury, MA. I&#39;m currently a junior at the University of Massachusetts Amherst,
              working towards my B.S. in Computer Science.
            </p>
            <Link
            to = "projects"
            className = "text-neutral-100 font-semibold px-6 py-3 bg-teal-600"
            activeClass = "active"
            spy={true}
            smooth = {true}
            offset={-100}
            duration={500}
            >
              Projects
            </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection