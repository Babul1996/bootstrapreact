import React from 'react'
import { NavLink } from 'react-router-dom'


const About = () => {

    return (
      <>
      <section className="main_hading my-2 pt-2" id="about">
          <div className="text-center mt-2">
              <h1>about us</h1>
              <hr className="w-25 mx-auto"/>
          </div>

          <div className="container">
           <div className="row my-5">
           <div className="col-lg-6 col-md-6 col-12 col-xxl-6 mx-auto">
           <figure>
               <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="img" className="img-fluid about_image"/>
           </figure>
           </div>
           <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex jusify-content-around align-items-start flex-column">
           <h1>My Journey</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           <NavLink to ="/">
           <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="tooltip" data-bs-placement="right" title="Check More">Home</button>
           </NavLink>
           </div>

           </div>

          </div>
      </section>
      </>
    )
}

export default About
