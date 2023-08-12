"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
import {HiArrowDown} from "react-icons/hi"
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16">
        <div>
            <Image className="rounded-full" src ="/headshot.png" alt="" width = {300} height={300}/>
        </div>
        <div>
            <h1 className = "font-bold text-4xl mt-6">Hi, I&#39;m Ian!</h1>
            <p className = "text-lg mt-4 mb-6">
              I&#39;m a{" "}
              <span className="font-semibold text-teal-600">
                Student / Software Engineer{" "} 
              </span>
              from Shrewsbury, MA. I&#39;m currently a junior at the University of Massachusetts Amherst,
              working towards my B.S. in Computer Science.
            </p>
            <Link
            to = "projects"
            className = "text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
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

      <div className="flex flex-row justify-center">
        <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
          <HiArrowDown size = {40} />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection