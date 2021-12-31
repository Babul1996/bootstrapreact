import React, { useState } from "react";

const Contact = () => {
  const[data, setData]=useState({
    fullname:"",
    email:"",
    msg:"",
  });

  const interEvent =(event)=>{
    const{name, value}=event.target;
setData((preVal)=>{
return{
  ...preVal,
  [name]:value,
};
});
  };
  const formSubmit=(e)=>{
    e.preventDefault()
  alert(`${data.fullname} ${data.email} ${data.msg}`);
  };


  return (
    <>
      <section className="main_hading my-2 pt-2 ">
        <div className="text-center mt-2">
          <h1 className="" id="contact">
            Contact
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-10  col-md-8 mx-auto">
            <form  onSubmit={formSubmit}>
.              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={interEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={interEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Default file input example
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div></div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={interEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
                
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
