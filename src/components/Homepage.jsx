import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";
import socail from "../pages/social.json";
import Lottie from 'lottie-react';


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Abdul here</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/abdul1028");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/rahulvijay81/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/rahulvijay8156");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/abduldotexe");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}  >
            <div className='hey'  >
              <Lottie animationData={socail}  />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home