import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) =>{
      e.preventDefault();

      emailjs
      .sendForm(
        "service_myhs90q", // eamiljs service id
        "template_901kb08", // emailjs template id
        form.current,
        "C976DLCoAZPxW8RwL" //public key emailjs
      ).then(
        ()=>{
          setIsSent(true)
          form.current.reset();
          toast.success("message sent successfully ! ✅",{
            position:"top-right",
            autoClose:3000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            theme:'dark',
          },);
        },
        (error)=>{
          toast.error("Error in sending message!!!!", error);
          toast.error("Failed to send Message ! Please try Again",{
            position:"top-right",
            autoClose:3000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            theme:'dark',
          },);
        }
      )

    }


  return (
    <section
    id='contact'
    className='flex flex-col items-center justify-center py-10 pb-15 px-[8vw] md:px-[7vw] lg:px-[16vw] skills-gradient bg-cover bg-no-repeat scroll-mt-20'
    >
      <ToastContainer/>
            {/* section-title */}
      <div className="">
        <h2 className="text-4xl text-center text-white">CONTACT US</h2>
        <div className="w-60 lg:w-60 h-1 bg-[#8245ec] mx-auto mt-2 rounded"></div>
        <p className="text-center text-gray-400 mt-3 font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!.{" "}
        </p>
      </div>
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-400">
        <h3 className='text-xl text-white text-center text-semibold'>Connect with me.</h3>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col mt-4 space-y-4">
          <input type='email' placeholder='Your Email' name='user_email' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input type='text' placeholder='Your Name' name='user_name' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input type='text' placeholder='Subject' name='subject' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <textarea name='message' placeholder='Message' rows="4"
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          >
          </textarea>
          {/* send button */}
          <button type='submit'
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 p-3 text-white font-semibold rounded-md hover:opacity-90 transition">
              Send
          </button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact
