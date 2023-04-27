import React from 'react'
import vg from "../assets/2.webp"
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

function Home() {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechGyan</h1>
            <p>Solution to all your problem</p>
        </main>
    </div>
    <div className='home2' >
        <img src={vg}></img>
        <div>
            <p>Cracking MAANG isn’t a piece of cake, but when you have your eyes set at a specific goal, that is to get placed in a top product-based company, you must be ready to put in all the hardwork. But, is that all? Not really. 
                You also need to be consistent in your preparation, practice relevant questions and whatnot and still is that all? Definitely not </p>
        </div>

    </div>
    <div className='home3'id="about">
        <div>
            <h1>Who we are?</h1>
            <p>What motivates a 12th-grade student to choose engineering as a career? A bunch of us will say society or parental pressure, which is true in some cases. But for some, they want to solve real life problems through engineering. 
                To top it, we see headlines like, “ IIT student bag a 1 Crore Package from Google”, “AMAZON makes an offer to 12 DTU students”. 
                This sparks motivation in students looking forward to getting into the world of engineering. But how easy or difficult is it to get into these big tech giants and what it takes to be considered for the same after engineering?
Cracking MAANG isn’t a piece of cake, but when you have your eyes set at a specific goal, that is to get placed in a top product-based company, you must be ready to put in all the hardwork. But, is that all? Not really. You also need to be consistent in your preparation, practice relevant questions and whatnot and still is that all? Definitely not 

Conversancy is going to be your biggest side in this journey & help you reach your desired goal. Through proper technical skills, mentorship, guidance from the people who are currently working with BIG TECH COMPANIES .  they’ll help you bag your dream job, if you’re up for it!
</p>
        </div>
    </div>
    <div className='home4' id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>

            </article>
        </div>
    </div>
    </>
  )
}

export default Home