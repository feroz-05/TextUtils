import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary `}>
  <   div className="container-fluid">
    <a className="navbar-brand" href="#"><b>{props.title}</b></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <a className={`text-decoration-none  mx-2`} href="#"> <b>{props.first}</b> </a>
    </div>
    <div className='colors'>
    {/* <button type="button" className="btn btn-info btn-sm my-3 mx-1"  ></button>
    <button type="button" className="btn btn-danger btn-sm my-3 mx-1" ></button>
    <button type="button" className="btn btn-success btn-sm my-3 mx-1" ></button> */}
    </div>
  <div className="form-check form-switch">
    <label className="form-check-labe mx-1" htmlFor="flexSwitchCheckDefault" >Dark Mode</label> 
    <input className="form-check-input"  onChange={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  </div>
  </div>
</nav>
    </div>
  )
}




