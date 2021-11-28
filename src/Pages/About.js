import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import images from './../assets/images/doctors/shipon.png'
import image from './../assets/images/doctors/galib.png'

const About = () => {
  return (
    <div>
      <Container>
        <Zoom>
          <h2 className="text-center text-info mb-4 mt-5">
          Finding child care just got easier.
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-primary">About Us</h5>
              <p className="text-muted">
              A cornea transplant is an operation to remove all or part of a damaged cornea and replace it Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil. Along with thet
              </p>
              <p className="text-muted">
              A cornea transplant is an operation to remove all or part of a damaged cornea and replace it Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil. Along with thet
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-primary">Our Vision</h5>
              <p className="text-muted">
              surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
              A cornea transplant is an operation to remove all or part of a damaged cornea and replace it Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil. Along with thet
              </p>
            </Bounce>
          </Col>
        </Row>
                                    
        <div>
        <div className="container">
          <h1 className="text-center text-warning mt-3">Your Temas</h1>
          <hr />
          <div className="row">
            <div className="col-sm-6 col-12 text-center  mt-5">
             <img style={{width:'150px',height:'150px', borderRadius:'50%'}} src={images}alt="" />
             <h5>Shamsul Islam Shipon </h5>
             <h6>front-end developers</h6>
             <p><span>skill: Have been working as a Junior developer your skill-Html,Css,Bootstrap,Javascript,ES6,API,Recat.js,React<br/> router Dom, Firebase authentication react   </span></p>
           
             <ul className="list-unstyled  align-items-center d-inline-flex" >
               <li><i className="fab fa-facebook p-3"></i> </li>
               <li><i className="fab fa-linkedin-in"></i></li>
              
             </ul>
            
            </div>
            <div className="col-sm-6 col-12 text-center  mt-5">
            
             <img style={{width:'150px',height:'150px', borderRadius:'50%'}} src={image}alt="" />
             <h5>Asadullahil Ghalib</h5>
             <h6>front-end developers</h6>
             <p><span>skill: Have been working as a Junior developer your skill-Html,Css,Bootstrap,Javascript,ES6,API,Recat.js,React <br/> router Dom, Firebase authentication react  </span></p>
             
             <ul className="list-unstyled align-items-center d-inline-flex ">
               <li><i className="fab fa-facebook p-3 "></i> </li>
               <li><i className="fab fa-linkedin-in "></i></li>
              
             </ul>
            
            </div>
          
          </div>
        </div>
      </div>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-warning">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>

     
    </div>
  );
};

export default About;
