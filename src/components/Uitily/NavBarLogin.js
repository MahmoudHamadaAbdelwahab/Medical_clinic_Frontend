import React, { useEffect, useState } from 'react'
import {Nav, NavDropdown} from 'react-bootstrap'
import logo from './../../img/gallery/logo.png'
import { ToastContainer } from 'react-toastify';

export default function NavBarLogin() {
  const [user , setUser] = useState('');
  useEffect(()=>{
     if(localStorage.getItem("login") != null){
       setUser(JSON.parse(localStorage.getItem("login")));
     }
  },[]);

  const logOut = () => {
    localStorage.removeItem("login");
    setUser('');
  }

  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <Nav.Link href="/">
          <a class="navbar-brand">
            <img src={logo} alt=""/>
          </a>
        </Nav.Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="main">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
            <Nav.Link href="/">
            <li class="nav-item">
              <a class="nav-link active p-lg-3" aria-current="page">Home</a>
            </li>
            </Nav.Link>
            <Nav.Link href="/service">
            <li class="nav-item">
              <a class="nav-link p-lg-3">Services</a>
            </li>
            </Nav.Link>
            <Nav.Link href="/ourDoctor">
            <li class="nav-item">
              <a class="nav-link p-lg-3">Find A Doctor </a>
            </li>
            </Nav.Link>
            <Nav.Link href="/recentBlog">
            <li class="nav-item">
              <a class="nav-link p-lg-3">Recent BlogPost</a>
            </li>
            </Nav.Link>
            <li class="nav-item">
              <a class="nav-link p-lg-3">
                <NavDropdown title="SelectHere" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/contactUs">Contact Us</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </a>
            </li>
          </ul>
          <div class="search ps-3 pe-3 d-none d-lg-block">
            <i class="fa-solid fa-magnifying-glass"></i>      
          </div>
       
             <a class="btn btn-primary p-1">
              {
                user ? 
                (  user!='' ? 
                  (<NavDropdown title={user.name} id="basic-nav-dropdown">
                    {
                        user.role === "admin" ? (<NavDropdown.Item href="/profileDoc">Control board
                        </NavDropdown.Item>) : (<NavDropdown.Item href="/profilePatient">Personal page</NavDropdown.Item>)
                    }
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} href="/">Sign out</NavDropdown.Item>
                  </NavDropdown>
                  ):(
                    <Nav.Link href='/login'>
                      <p style={{ color: "white" }}>login</p>
                    </Nav.Link>
                  )
                ):(
                  <Nav.Link href='/login'>
                    <p style={{ color: "white" }}>login</p>
                  </Nav.Link>
                )
           
            }
              </a>
              <ToastContainer/>
        </div>
      </div>
    </nav>
  )
}
