import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo & About */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>
              <svg
                width="150"
                height="50"
                viewBox="0 0 400 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: "100%" }}
              >
                <g>
                  <text x="50" y="70" fontFamily="Arial" fontWeight="900" fontSize="40" fill="white">
                    HIRE
                  </text>
                  <circle cx="200" cy="60" r="30" fill="blue" />
                  <text x="180" y="73" fontFamily="Arial" fontWeight="900" fontSize="40" fill="white">
                    ON
                  </text>
                  <text x="250" y="70" fontFamily="Arial" fontWeight="900" fontSize="40" fill="white">
                    SPOT
                  </text>
                  <path d="M320 45 C340 45, 340 75, 320 75" fill="none" stroke="#3b82f6" strokeWidth="4" />
                  <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
                </g>
              </svg>
            </h5>
            <p className="text-muted">
              Connecting job seekers with verified employers for walk-in interviews.
            </p>
          </div>

          {/* Quick Links - Centered on Mobile */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled text-center">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-white">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media - Centered on Mobile */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a href="#" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Always Centered */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 HireOnSpot. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
