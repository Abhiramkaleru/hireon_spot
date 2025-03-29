// import React from "react";
// import { Link } from "react-router-dom";
// import SVGComponent from "../SvgComponent";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-5">
//       <div className="container">
//         <div className="row text-center text-md-start">
//           {/* Logo & About */}
//           <div className="col-md-4 mb-4 mb-md-0">
//             <h5>
//               {/* <svg
//                 width="150"
//                 height="50"
//                 viewBox="0 0 400 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ maxWidth: "100%" }}
//               >
//                 <g>
//                   <text x="50" y="70" fontFamily="Arial" fontWeight="900" fontSize="40" fill="white">
//                     HIRE
//                   </text>
//                   <circle cx="200" cy="60" r="30" fill="blue" />
//                   <text x="180" y="73" fontFamily="Arial" fontWeight="900" fontSize="40" fill="white">
//                     ON
//                   </text>
//                   <text x="250" y="70" fontFamily="Arial" fontWeight="900" fontSize="40" fill="white">
//                     SPOT
//                   </text>
//                   <path d="M320 45 C340 45, 340 75, 320 75" fill="none" stroke="#3b82f6" strokeWidth="4" />
//                   <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
//                 </g>
//               </svg> */}
//               <SVGComponent width="100" height="80" className="my-custom-svg"/>
//             </h5>
//             <p className="text-muted">
//               Connecting job seekers with verified employers for walk-in interviews.
//             </p>
//           </div>

//           {/* Quick Links - Centered on Mobile */}
//           <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled text-center">
//               <li>
//                 <Link to="/" className="text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/jobs" className="text-white">
//                   Jobs
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media - Centered on Mobile */}
//           <div className="col-md-4 d-flex flex-column align-items-center">
//             <h5>Follow Us</h5>
//             <ul className="list-unstyled text-center">
//               <li>
//                 <a href="#" className="text-white">
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright - Always Centered */}
//         <div className="text-center mt-4">
//           <p className="mb-0">&copy; 2025 HireOnSpot. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SVGComponent from "../SvgComponent";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f" },
    { name: "Twitter", icon: "fab fa-twitter" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer 
      style={{
        background: "rgba(0, 0, 0, 0.95)",
        color: "white",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      className="py-5"
    >
      <div className="container">
        <motion.div 
          className="row text-center text-md-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo & About */}
          <div className="col-md-4 mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <SVGComponent width="120" height="80" className="my-custom-svg"/>
              <p className="mt-3" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Connecting job seekers with verified employers for walk-in interviews.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn mt-2"
                style={{
                  background: 'linear-gradient(90deg, #FF8541 0%, black 100%)',
                  color: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '8px 20px'
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <motion.h5 
              className="mb-4 text-center text-md-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h5>
            <ul className="list-unstyled text-center text-md-start">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index} 
                  className="mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                >
                  <Link 
                    to={link.path} 
                    className="text-decoration-none"
                    style={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = "#FF8541"}
                    onMouseOut={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <motion.h5 
              className="mb-4 text-center text-md-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect With Us
            </motion.h5>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-decoration-none d-flex align-items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "10px 16px",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <i className={`${link.icon} me-2`}></i>
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="mt-4 text-center text-md-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h6>Newsletter</h6>
              <div className="input-group mt-2">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email"
                  style={{
                    borderRadius: '8px 0 0 8px',
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: 'none',
                    padding: '10px'
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn"
                  style={{
                    background: 'linear-gradient(90deg, #FF8541 0%, black 100%)',
                    color: 'white',
                    borderRadius: '0 8px 8px 0',
                    border: 'none'
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr 
          className="my-4"
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 0.3, width: "100%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        />

        {/* Copyright */}
        <motion.div 
          className="d-flex flex-wrap justify-content-between align-items-center text-center text-md-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            &copy; 2025 HireOnSpot. All Rights Reserved.
          </p>
          <div className="mt-3 mt-md-0">
            <Link 
              to="/privacy" 
              className="text-decoration-none me-3"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FF8541"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-decoration-none"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FF8541"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
