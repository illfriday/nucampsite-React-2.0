import React from 'react';

export default function Footer(props) {
  return(
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Directory</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a href="http://instagram.com" className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram" /></a>{' '}
            <a href="http://facebook.com" className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook" /></a>{' '}
            <a href="http://twitter.com" className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter" /></a>{' '}
            <a href="http://youtube.com" className="btn btn-social-icon btn-google"><i className="fa fa-google" /></a>{' '}
          </div>
        </div>
      </div>
    </footer>
  );
}