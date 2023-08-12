import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "Java" },
  { skill: "C" },
  { skill: "Dart" },
  { skill: "LaTeX" },
  { skill: "THREE.js" },
  { skill: "Mapbox" },
  { skill: "Node.js" },
  { skill: "Flutter" },
  { skill: "Pandas" },
  { skill: "NumPy" },
  { skill: "Tkinter" },
  { skill: "Matplotlib" },
  { skill: "Scikit-learn" },
  { skill: "JIRA" },
    { skill: "PI ProcessBook" },
      { skill: "Energy Management System" },
      { skill: "Advanced Distribution Management System" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h1>
            <p>
              Hi, my name is Ian and I am a{" "}
              <span className="font-bold">{"highly passionate"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Computer Science Student
              from Shrewsbury, MA
            </p>
            <br />
            <p>
                I am currently pursuing my B.S in Computer Science and Mathematical Computing
                at the Manning College of Information and Computer Science
                at the University of Massachusetts Amherst 
            </p>
            <br />
            <p>
                When I&#39;m not coding, I like to keep myself active! I spend a lot of time 
                playing basketball as well as lifting. I also enjoy spending quality
                time with my family and friends. When I&#39;m alone, you&#39;ll often find me watching movies and 
                TV shows.
            </p>
            <br />
            <p>
               As of now, I&#39;ve completed two internships. My most recent one was at National Grid.
               National Grid is an energy company. Here, I worked as a part of the Advanced Distribution Management
               System team, where I spent most of my time writing automation scripts and programs in Python. I was also
               a software engineering intern at the National Center for Technology and Dispute Resolution.
               Here, I worked on the development of a disaster-response app called Kapok. 
            </p>
            <br />
            <p>
            Ever since I was young, I&#39;ve had a strong passion for technology.
            The endless possibilities of what humans can accomplish with technology
            fascinates me. I hope to use my skills so that I can play my
            part in the advancement of human capability.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/heroImage.png"
              alt=""
              width={250}
              height={250}
              className="hidden md:block md:relative md:bottom-4 md:left-20 md:z-0  py-10 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
