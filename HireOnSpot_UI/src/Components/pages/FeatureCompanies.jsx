// import React from "react";
// import "./Home.css";

// const FeaturedCompanies = () => {
//   const companies = [
//     { name: "TCS", logo: "https://www.stottandmay.com/hubfs/TCS%20black%20logo.png" },
//     { name: "Wipro", logo: "https://logodix.com/logo/557216.png" },
//     { name: "Accenture", logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png" },
//     { name: "IBM", logo: "https://pngimg.com/uploads/ibm/ibm_PNG19658.png" },
//     { name: "HCL", logo: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png" },
//     { name: "Capgemini", logo: "https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png" },
//     { name: "Genpact", logo: "https://awsmp-logos.s3.amazonaws.com/seller-da4cx2zwvsjos/78f24e2fe2e409aac4a8874999f2ff5b.png" },
//     { name: "TCS", logo: "https://www.stottandmay.com/hubfs/TCS%20black%20logo.png" },
//     { name: "Wipro", logo: "https://logodix.com/logo/557216.png" },
//     { name: "Accenture", logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png" },
//     { name: "IBM", logo: "https://pngimg.com/uploads/ibm/ibm_PNG19658.png" },
//     { name: "HCL", logo: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png" },
//     { name: "Capgemini", logo: "https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png" },
//     { name: "Genpact", logo: "https://awsmp-logos.s3.amazonaws.com/seller-da4cx2zwvsjos/78f24e2fe2e409aac4a8874999f2ff5b.png" },
//   ];

//   return (
//     <section className="container-fluid py-5 bg-white">
//       <div className="row justify-content-center">
//         <div className="col-lg-8 text-center">
//           <h2 className="fw-bold mb-4">Featured Companies</h2>
//           <div className="flowing-container">
//             <div className="flowing-row flowing-left d-flex">
//               {[...companies].map((company, index) => (
//                 <div className="company-card m-3 p-3 shadow rounded text-center" key={`left-${index}`}>
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="img-fluid"
//                     style={{ height: "80px", maxWidth: "150px" }}
//                   />
//                   {/* <h6 className="mt-2 fw-bold">{company.name}</h6> */}
//                 </div>
//               ))}
//             </div>
//             <div className="flowing-row flowing-right d-flex">
//               {[...companies,].map((company, index) => (
//                 <div className="company-card m-3 p-3 shadow rounded text-center" key={`right-${index}`}>
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="img-fluid"
//                     style={{ height: "80px", maxWidth: "150px" }}
//                   />
//                   {/* <h6 className="mt-2 fw-bold">{company.name}</h6> */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCompanies;


import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const FeaturedCompanies = () => {
  const companies = [
    { name: "TCS", logo: "https://www.stottandmay.com/hubfs/TCS%20black%20logo.png" },
    { name: "Wipro", logo: "https://logodix.com/logo/557216.png" },
    { name: "Accenture", logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png" },
    { name: "IBM", logo: "https://pngimg.com/uploads/ibm/ibm_PNG19658.png" },
    { name: "HCL", logo: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png" },
    { name: "Capgemini", logo: "https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png" },
    { name: "Genpact", logo: "https://awsmp-logos.s3.amazonaws.com/seller-da4cx2zwvsjos/78f24e2fe2e409aac4a8874999f2ff5b.png" },
  ];

  return (
    <section 
      className="container-fluid py-5"
      style={{
        background: "rgba(0, 0, 0, 0.9)",
        color: "white"
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <motion.h2 
            className="fw-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: '#ffffff' }}
          >
            Featured Companies
          </motion.h2>
          
          <div className="flowing-container">
            <motion.div 
              className="flowing-row flowing-left d-flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {companies.map((company, index) => (
                <motion.div 
                  className="company-card m-3 p-3 shadow rounded text-center" 
                  key={`left-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(255, 133, 65, 0.2)" 
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid"
                    style={{ 
                      height: "80px", 
                      maxWidth: "150px",
                      filter: "brightness(0) invert(1)" // Make logos white
                    }}
                  />
                </motion.div>
              ))}
              {companies.map((company, index) => (
                <motion.div 
                  className="company-card m-3 p-3 shadow rounded text-center" 
                  key={`left-dup-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(255, 133, 65, 0.2)" 
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid"
                    style={{ 
                      height: "80px", 
                      maxWidth: "150px", 
                      filter: "brightness(0) invert(1)" // Make logos white
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flowing-row flowing-right d-flex"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {companies.map((company, index) => (
                <motion.div 
                  className="company-card m-3 p-3 shadow rounded text-center" 
                  key={`right-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(255, 133, 65, 0.2)" 
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid"
                    style={{ 
                      height: "80px", 
                      maxWidth: "150px",
                      filter: "brightness(0) invert(1)" // Make logos white
                    }}
                  />
                </motion.div>
              ))}
              {companies.map((company, index) => (
                <motion.div 
                  className="company-card m-3 p-3 shadow rounded text-center" 
                  key={`right-dup-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(255, 133, 65, 0.2)" 
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid"
                    style={{ 
                      height: "80px", 
                      maxWidth: "150px",
                      filter: "brightness(0) invert(1)" // Make logos white
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-lg mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              background: 'linear-gradient(90deg, #FF8541 0%, black 100%)',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              padding: '10px 30px'
            }}
          >
            View All Companies
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;