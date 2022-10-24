import Head from "next/head";
// import Animation from "./app.js"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFaMusic,
  AiFillGithub
} from "react-icons/ai";
import{
  FaMusic
} from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import CSS from "../public/icons8-css3.svg";
import html from "../public/icons8-html-5.svg";
import react from "../public/icons8-react.svg";
import tailwind from "../public/icons8-tailwindcss.svg";
import mongo from "../public/icons8-MongoDB.svg";
import js from "../public/icons8-javascript.svg";
import node from "../public/icons8-node-js.svg";
import express from "../public/express-js.svg";
import next from "../public/next-js.svg";

const subtitle = `Full Stack Web Developer`


//Typing animation
const useTypedSuperpower = () => {
  const [typedWord, settypedWord] = useState(``)
  useEffect(()=> {
    const nexttypedWord = subtitle.slice(0, typedWord.length)
    const timeout = setTimeout(()=>{
      settypedWord(subtitle.slice(0, typedWord.length + 1))
    }, 150)
    return () => clearTimeout(timeout)
  }, [typedWord])
  return typedWord
}


//Main//
export default function Home() {
  const subtitle = useTypedSuperpower()
  const [darkMode, setDarkMode] = useState(false);

  function play() {
    var audio = document.getElementById('a1');
    audio.play();
  }
  
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Norman Park Portfolio</title>
        
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        <link rel="stylesheet" href="../styles.globals.css" />
        <script src="./script.js" defer></script>
      </Head>
      <main className=" dark:bg-gray-900 " >
        <section className="min-h-screen" >
          <nav className="py-10 mb-12 flex justify-between dark:text-white" id="home">
            <h1 className="font-burtons text-xl motion-safe:animate-fadeIn px-10">developedbyNorm</h1>

            <ul className="flex items-center">
              <li className="motion-safe:animate-fadeIn">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li className="px-5">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8 motion-safe:animate-fadeIn "
                  href="./resume.pdf" download>
                  My Resume!
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 id="text" className="text-center italic text-5xl py-2 text-blue-900 font-medium dark:text-teal-400 md:text-6xl transition-all">
              Norman Park
            </h2>
            <h3 className="blinking-cursor text-2xl py-2 dark:text-white md:text-3xl">
              {subtitle}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl motion-safe:animate-fadeIn">
              <span className="text-teal-700">Full Stack Developer</span> providing services for programming and design
              needs. Join me down below and let's get coding!
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 motion-safe:animate-fadeIn">
              <a href="https://linkedin.com/in/norman-park" target="_blank"><AiFillLinkedin className="hover:scale-125 transition-all"/></a>
              <a href="https://github.com/JustTheNorm" target="_blank"><AiFillGithub className="hover:scale-125 transition-all"/></a>
              <a href="https://soundcloud.com/n_p_music" target="_blank"><FaMusic className="hover:scale-125 transition-all"/></a>
            </div>
            <div class="home__scroll hover:translate-y-1 hover:transition-all">
            <a href="#education" class="home__scroll-button">
                <i class="uil uil-mouse-alt home__scroll-mouse dark:text-gray-200"></i>
                    <span class="home__scroll-name dark:text-gray-200">Scroll down</span>
                <i class="uil uil-arrow-down home__scroll-arrow dark:text-gray-200"></i>
            </a>
          </div>
            <div className="mx-auto bg-gradient-to-b from-blue-900 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="animated">
        <h3 className="text-center text-3xl py-1 dark:text-white -skew-y-2 ml-10 hover:scale-105 transition-all" id="education"><br/>Education</h3> 
          <div className="-skew-y-2 bg-teal-500" id="slanted">

            <br/><br/><br/><br/><br/>

            <div id="edu" className="dark:bg-white skew-y-2 mx-20 rounded-xl hover:scale-105 transition-all">
            <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900 motion-safe:animate-fadeIn ml-5 ">
            <br/>
              At age 29, I decided to make a career shift into tech! I'm a self-starter who understands the importance of
              <span className="text-blue-500"> DEADLINES </span>
              and <span className="text-blue-500">EFFICIENCY. </span>
              I hope to be part of your next project!
            </p>
            <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900 motion-safe:animate-fadeIn ml-5 ">
              In August of 2022, I attended a coding <span className="text-purple-500">BOOTCAMP </span> with a non-profit called Per Scholas where I completed over 450+ hours of hands-on technical training for <span className="text-red-500">Full Stack Web Development</span> focusing on the MERN tech stack. <br/> <br/>
              <span className="italic text-yellow-700 hover:scale-110 transition-all"><a className="" href="#skills">MongoDB | Express | React.js | Node.js</a> </span> 
              <br/><br/>
              
            </p>
            
            </div>
            <br/><br/><br/><br/><br/>
            <br/>
          </div>
          <br/>
          <h3 className="text-3xl py-1 dark:text-white text-center -skew-y-2 hover:scale-105 motion-safe:animate-bounce transition-all">Skills</h3>
          {/* Cards */}
          <div className="lg:flex gap-10 mx-10" id="skills">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 transition-all " id="edu1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1"></p>
              
              <Image
                className="rounded-lg object-cover"
                
                // layout="responsive"
                src={html}
              />
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={50}
                height={50}
                // layout="responsive"
                src={CSS}
              />
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={50}
                height={50}
                // layout="responsive"
                src={react}
              />
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={50}
                height={50}
                // layout="responsive"
                src={tailwind}
              /> <br/>
              <Image
                className="rounded-lg object-cover"
                width={50}
                height={50}
                // layout="responsive"
                src={js}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 transition-all" id="edu1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Backend
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Backend Tools I Use</h4>
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={50}
                height={50}
                // layout="responsive"
                src={mongo}
              />
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={50}
                height={50}
                // layout="responsive"
                src={node}
              />
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={50}
                // layout="responsive"
                src={express}
              />
              <p className="text-gray-800 py-1"></p>
              <Image
                className="rounded-lg object-cover"
                width={70}
                height={40}
                // layout="responsive"
                src={next}
              />
              
            </div>
            <div id="edu1" className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 transition-all" >
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tools</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Other Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Ableton live</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center -skew-y-2 hover:scale-105 transition-all">Portofolio</h3>
            
          </div>
          
          {/* portfolio images */}
          <div className="bg-teal-500 flex flex-col gap-10 py-10 px-40 lg:flex-row lg:flex-wrap -skew-y-2">
            <div className="basis-1/4 flex-1 skew-y-2 hover:scale-105 transition-all">
              <Image
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/4 flex-1 skew-y-2 hover:scale-105 transition-all">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/4 flex-1 skew-y-2 hover:scale-105 transition-all">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/4 flex-1 skew-y-2 hover:scale-105 transition-all">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/5 flex-1 skew-y-2 hover:scale-105 transition-all">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1 skew-y-2 hover:scale-105 transition-all ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>

        <section className="">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-0 px-10 shadow rounded-lg sm:px-10 " id="contact">
            <h4 className="text-center pt-10 text-xl">Contact Me</h4>
            <form className="mb-0 space-y-6 py-5 pt-0"  action="https://formsubmit.co/parkn993@gmail.com" method="post">
              <input type ="hidden" name="_next" value="./thankyou.html"></input>

              <label for="email" class="flex text-m font-medium pt-0">Email</label>
              <input className="border-gray-300 mt-0 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="email" name="email" placeholder="Email Address" required ></input><br/>

              <span className="display-block mx-auto text-m font-medium">Message:</span> <br/><textarea className="border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 " cols={40} rows={10} type="text" name="message" placeholder="Write your message here" required></textarea>
              <br/>
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 " type="submit">Send</button>
             
            </form>

            <div class="home__scroll hover:translate-y-1 hover:transition-all pb-5 text-center">
            <a href="#home" class="home__scroll-button">
                <i class="uil uil-mouse-alt home__scroll-mouse dark:text-gray-900"></i>
                  <span class="home__scroll-name dark:text-gray-900">Back Home</span>
                <i class="uil uil-arrow-up home__scroll-arrow dark:text-gray-900"></i>
            </a>
            </div>
          </div>
          <br/><br/>
        </section>
      </main>     
    </div>
  );
}
