import React from 'react';
import { Link } from 'react-router-dom';
 
import Home from 'react-feather/dist/icons/home';
import List from 'react-feather/dist/icons/list';
import Camera from 'react-feather/dist/icons/camera';
import BookOpen from 'react-feather/dist/icons/book-open';
import User from 'react-feather/dist/icons/user';
 
import './footer.css';
 
const Footer = () => (
  <div className="footer">
    <Link className="footer__link" to="" >
      <Home className="menuIcon" size="30px"/>
    </Link>
    <Link className="footer__link" to="">
      <List className="menuIcon" size="30px"/>
    </Link>
    <Link className="footer__link" to="/scanbarcode">
      <Camera className="menuIcon" size="30px"/>
    </Link>
    <Link className="footer__link" to="">
      <BookOpen className="menuIcon" size="30px"/>
    </Link>
    <Link className="footer__link" to="">
      <User className="menuIcon" size="30px"/>
    </Link>
  </div>
);
 
export default Footer;