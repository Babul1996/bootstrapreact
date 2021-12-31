import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from './Card'
import Sdata from './Sdata'

const name="My Portfolio React Website";
const para="This is my personal website.You can visit";

const Gallery = () => {
    return (
        <>
            <section className="main_hading  my-2 pt-2 ">
          <div className="text-center mt-2">
              <h1 className="" id="gallery">Gallery</h1>
              <hr className="w-25 mx-auto"/>
          </div>
          <div className="container-fluid my-5">
          <div className="row ">
          <div className="col-10 mx-auto">
          <div className="row gy-2 gx-2">
          {Sdata.map((val, ind)=>{
            return<Card key={ind}
                imgsr={val.imgsr}
            />
          })}
              
              </div>
              </div>

              
          </div>
          </div>
          </section>
          <section className="main_hading bg-light my-5 pt-5 ">
          <div className="container-fluid">
              <div className="row">
              <div className="col-xxl-12 col-12 text-center">
              <h1>{name}</h1>
              <p>{para}</p>
              <div className="col-xxl-12 text-center my-4">
              <NavLink to="/https://babulgupta.netlify.app">
              <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="tooltip" data-bs-placement="right" title="Check More"> Check More</button>
             </NavLink>
              </div>
              </div>
              </div>

          </div>
          </section>
        </>
    )
}

export default Gallery
