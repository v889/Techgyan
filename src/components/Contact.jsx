import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1>Contact US</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' placeholder='Your Name' required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' placeholder='Your Email' required/>
                </div>
                <div>
                    <label>Message:</label>
                    <input type='text' placeholder='Tell us about your query' required/>
                </div>
                <button type='sumbit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact