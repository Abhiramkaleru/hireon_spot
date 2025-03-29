// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Search,
//   CheckCircle,
//   Star,
//   Users,
//   MapPin,
//   UserPlus,
//   FileSearch,
//   Send,
//   Award,
// } from "lucide-react";
// import "../pages/Home.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ASCIIText from "../Animation/ASCII/AsciiText";
// import mySvgUrl from '../../assets/svgviewer-output.svg';
// import bgImage from "../../assets/bg2.jpg";
// import Particles from "../Animation/Partical/Partical";
// import SplashCursor from "../Animation/Splash/Splash";
// import Footer from "./Fotter";
// import SVGComponent from "../SvgComponent";
// import FeaturedCompanies from "./FeatureCompanies";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Debounce search query (500ms delay)
//   useEffect(() => {
//     setLoading(true);
//     const handler = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//       setLoading(false);
//     }, 500);
//     return () => clearTimeout(handler);
//   }, [searchQuery]);

//   const handleSearch = () => {
//     console.log("Searching for:", debouncedSearch);
//     toast.info(`Searching for "${debouncedSearch}"`);
//   };


//   // Carousel settings for job listings (if needed)
//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       { breakpoint: 992, settings: { slidesToShow: 2 } },
//       { breakpoint: 576, settings: { slidesToShow: 1 } },
//     ],
//   };

//   // Sample job listings (grid display)
//   const jobListingsGrid = [
//     { title: "System Engineer", company: "Infosys", location: "Bangalore" },
//     { title: "Software Engineer", company: "Google", location: "Mountain View" },
//     { title: "Data Analyst", company: "Microsoft", location: "Redmond" },
//     { title: "System Engineer", company: "Infosys", location: "Bangalore" },
//     { title: "System Engineer", company: "Infosys", location: "Bangalore" },
//     { title: "Frontend Developer", company: "Amazon", location: "Seattle" },
//     { title: "System Engineer", company: "Infosys", location: "Bangalore" },
//     { title: "Software Engineer", company: "Google", location: "Mountain View" },
//   ];

//   const filteredJobs = jobListingsGrid.filter(
//     (job) =>
//       job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.location.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div
//       className="landing-page"
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         // backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         position: "relative",
//       }}
//     >
//       {/* Blur Overlay */}
//       <div
//         className="position-absolute top-0 start-0 w-100 h-100"
//         style={{
//           backdropFilter: "blur(15px)",
//           WebkitBackdropFilter: "blur(15px)",
//         }}
//       ></div>

//       {/* Main Content (above overlay) */}
//       <div className="position-relative" style={{ zIndex: 1 }}>
//         <ToastContainer position="top-right" autoClose={3000} />

//         {/* Navbar with gradient background and animated SVG logo */}
//         <motion.nav
//           className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
//           style={{ background: "linear-gradient(90deg, #4a6cf7 0%, #2b2d5d 100%)" }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="container-fluid d-flex justify-content-between align-items-center px-4">

//             <Link className="navbar-brand fw-bold" to="/">
//               {/* <motion.svg
//                 width="150"
//                 height="50"
//                 viewBox="0 0 400 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 20,
//                 }}
//               >
//                 <g>
//                   <text
//                     x="50"
//                     y="70"
//                     fontFamily="Arial"
//                     fontWeight="900"
//                     fontSize="40"
//                     fill="#fff"
//                   >
//                     HIRE
//                   </text>
//                   <motion.circle
//                     cx="200"
//                     cy="60"
//                     r="30"
//                     fill="yellow"
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                     }}
//                   />
//                   <text
//                     x="180"
//                     y="73"
//                     fontFamily="Arial"
//                     fontWeight="900"
//                     fontSize="40"
//                     fill="black"
//                   >
//                     ON
//                   </text>
//                   <text
//                     x="250"
//                     y="70"
//                     fontFamily="Arial"
//                     fontWeight="900"
//                     fontSize="40"
//                     fill="#fff"
//                   >
//                     SPOT
//                   </text>
//                   <motion.path
//                     d="M320 45 C340 45, 340 75, 320 75"
//                     fill="none"
//                     stroke="#fff"
//                     strokeWidth="4"
//                     initial={{ pathLength: 0 }}
//                     animate={{ pathLength: 1 }}
//                     transition={{ duration: 1, delay: 0.5 }}
//                   />
//                   <motion.path
//                     d="M315 70 L325 75 L315 80"
//                     fill="#fff"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 1.5 }}
//                   />
//                 </g>
//               </motion.svg> */}
//               <SVGComponent width="100" height="80" className="my-custom-svg"/>
              
//             </Link>
//             <div>
//               <Link to="/login">
//                 <motion.button
//                   className="btn btn-light me-2"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Login
//                 </motion.button>
//               </Link>
//               <Link to="/register">
//                 <motion.button
//                   className="btn btn-primary btn-outline-light"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Register
//                 </motion.button>
//               </Link>
//             </div>
//           </div>
//         </motion.nav>

//         {/* Hero Section with dark background matching Register */}

//         <header
//           className="pt-5 mt-5"
//           style={{
//             position: "relative",
//             overflow: "hidden",
//             height: "600px", // Matches the particles container height
//             background: "rgba(13, 17, 54, 0.9)", // Header background color
//           }}
//         >
//           {/* Particles Background Wrapper */}
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               zIndex: 0,
//             }}
//           >
//             <Particles
//               particleColors={["#ffffff", "#ffffff"]}
//               particleCount={200}
//               particleSpread={10}
//               speed={0.1}
//               particleBaseSize={100}
//               moveParticlesOnHover={true}
//               alphaParticles={false}
//               disableRotation={false}
//             />
//           </div>

//           {/* Header Content */}
//           <div className="container-fluid text-center py-5" style={{ position: "relative", zIndex: 1 }}>
//             <motion.h1
//               className="display-4 fw-bold mb-4"
//               style={{ color: "#ffffff" }}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Find & Apply for Verified Walk-in Jobs
//             </motion.h1>
//             <motion.p
//               className="lead mb-4"
//               style={{ color: "#ddd" }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Only verified companies can post job openings to ensure authenticity.
//               Start your job search today!
//             </motion.p>
//             <div className="input-group mb-4 w-50 mx-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search for jobs by title, company, or location..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 style={{
//                   borderRadius: "8px 0 0 8px",
//                   background: "rgba(255,255,255,0.2)",
//                   color: "white",
//                   border: "none",
//                 }}
//               />
//               <motion.button
//                 className="btn"
//                 onClick={handleSearch}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   background: "linear-gradient(90deg, #ff9900, #004aad)",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "0 8px 8px 0",
//                 }}
//               >
//                 <Search size={18} />
//               </motion.button>
//             </div>
//             <motion.button
//               className="btn btn-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={{
//                 background: "linear-gradient(90deg, #ff9900, #004aad)",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//               }}
//             >
//               <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
//                 Get Started
//               </Link>
//             </motion.button>
//           </div>
//         </header>


//         {/* Latest Jobs Section */}
//         <section className="container-fluid py-5 bg-light">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center mb-4">
//               <h2 className="fw-bold">Latest Jobs</h2>
//               <p className="text-muted">Explore the most recent walk-in job postings.</p>
//             </div>
//             <div className="marquee-container">
//               <div className="marquee">
//                 <div className="row g-4 px-3">
//                   {filteredJobs.length > 0 ? (
//                     filteredJobs.map((job, index) => (
//                       <div className="col-12 col-md-3 job-card" key={index}>
//                         <div className="card h-100 shadow-sm">
//                           <div className="card-body">
//                             <h6 className="card-title">{job.title}</h6>
//                             <p className="card-text small text-muted">
//                               {job.company} <br /> {job.location}
//                             </p>
//                             <button className="btn btn-outline-primary btn-sm">
//                               View Details
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-center text-muted">No jobs found</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* How It Works Section */}
//         <section className="container-fluid py-5 text-white" style={{ background: "rgba(13, 17, 54, 0.9)" }}>
//           <div className="row justify-content-center">
//             <div className="col-lg-12 text-center mb-5">
//               <h2 className="fw-bold">How It Works</h2>
//               <p className="text-white">
//                 A simple 4-step process to connect you with the perfect job.
//               </p>
//             </div>
//             <div className="row text-center g-4">
//               <div className="col-12 col-md-3">
//                 <div className="card p-4 shadow-sm border-1  ">
//                   <UserPlus className="text-primary mb-3" size={32} />
//                   <h6 className="fw-semibold">Register</h6>
//                   <p className="text-muted small">
//                     Create your account and set up your profile.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-3">
//                 <div className="card p-4 shadow-sm border-1">
//                   <FileSearch className="text-primary mb-3" size={32} />
//                   <h6 className="fw-semibold">Search</h6>
//                   <p className="text-muted small">
//                     Use advance filters to find jobs that match skills.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-3">
//                 <div className="card p-4 shadow-sm border-1">
//                   <Send className="text-primary mb-3" size={32} />
//                   <h6 className="fw-semibold">Apply</h6>
//                   <p className="text-muted small">
//                     Apply directly for walk-in interviews with a click.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-3">
//                 <div className="card p-4 shadow-sm border-1">
//                   <Award className="text-primary mb-3" size={32} />
//                   <h6 className="fw-semibold">Get Hired</h6>
//                   <p className="text-muted small">
//                     Land your dream job with verified companies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>



//         {/* Features Section */}
//         <section className="container-fluid py-5 bg-light">
//           <div className="row text-center g-4">
//             <div className="col-12 col-md-4 d-flex align-items-stretch">
//               <div className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center">
//                 <Search className="text-primary mb-3" size={32} />
//                 <h5 className="fw-semibold">Instant Job Search</h5>
//                 <p className="text-muted">
//                   Find verified walk-in jobs near you with real-time listings.
//                 </p>
//               </div>
//             </div>
//             <div className="col-12 col-md-4 d-flex align-items-stretch">
//               <div className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center">
//                 <Briefcase className="text-primary mb-3" size={32} />
//                 <h5 className="fw-semibold">Verified Employers</h5>
//                 <p className="text-muted">
//                   Only approved and genuine companies can post job openings.
//                 </p>
//               </div>
//             </div>
//             <div className="col-12 col-md-4 d-flex align-items-stretch">
//               <div className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center">
//                 <CheckCircle className="text-primary mb-3" size={32} />
//                 <h5 className="fw-semibold">Easy Walk-in Applications</h5>
//                 <p className="text-muted">
//                   Apply directly and get complete job details and interview locations.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us Section */}
//         <section className="container-fluid py-5 bg-white">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center">
//               <h2 className="fw-bold mb-4">Why Choose HireOnSpot?</h2>
//               <div className="row g-4">
//                 <div className="col-md-4">
//                   <Star className="text-primary mb-3" size={32} />
//                   <h5>Verified Listings</h5>
//                   <p className="text-muted">
//                     We ensure all job postings are from genuine companies.
//                   </p>
//                 </div>
//                 <div className="col-md-4">
//                   <Users className="text-primary mb-3" size={32} />
//                   <h5>Trusted by Thousands</h5>
//                   <p className="text-muted">
//                     Join a community of job seekers and employers.
//                   </p>
//                 </div>
//                 <div className="col-md-4">
//                   <MapPin className="text-primary mb-3" size={32} />
//                   <h5>Easy Location Access</h5>
//                   <p className="text-muted">
//                     Find walk-in interviews near you with detailed directions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="container-fluid py-5 bg-light">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center">
//               <h2 className="fw-bold mb-4">What Our Users Say</h2>
//               <div className="row g-4">
//                 <div className="col-md-4">
//                   <div className="card p-4 shadow-sm">
//                     <p className="text-muted">
//                       "HireOnSpot helped me find a job quickly. The process was seamless!"
//                     </p>
//                     <p className="fw-bold">- Abhiram Kaleru</p>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="card p-4 shadow-sm">
//                     <p className="text-muted">
//                       "I love how easy it is to apply for walk-in interviews. Highly recommended!"
//                     </p>
//                     <p className="fw-bold">- Jay Krishna</p>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="card p-4 shadow-sm">
//                     <p className="text-muted">
//                       "The platform is user-friendly, and the job listings are genuine."
//                     </p>
//                     <p className="fw-bold">- Shiva Chithanya</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       <FeaturedCompanies/>
//         <Footer />
//       </div>
//     </div>
//   );
// };




// export default Home;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  CheckCircle,
  Star,
  Users,
  MapPin,
  UserPlus,
  FileSearch,
  Send,
  Award,
} from "lucide-react";
import "../pages/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ASCIIText from "../Animation/ASCII/AsciiText";
import mySvgUrl from '../../assets/svgviewer-output.svg';
import bgImage from "../../assets/bg2.jpg";
import Particles from "../Animation/Partical/Partical";
import SplashCursor from "../Animation/Splash/Splash";
import Footer from "./Fotter";
import SVGComponent from "../SvgComponent";
import FeaturedCompanies from "./FeatureCompanies";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounce search query (500ms delay)
  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setLoading(false);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const handleSearch = () => {
    console.log("Searching for:", debouncedSearch);
    toast.info(`Searching for "${debouncedSearch}"`);
  };

  // Sample job listings (grid display)
  const jobListingsGrid = [
    { title: "System Engineer", company: "Infosys", location: "Bangalore" },
    { title: "Software Engineer", company: "Google", location: "Mountain View" },
    { title: "Data Analyst", company: "Microsoft", location: "Redmond" },
    { title: "System Engineer", company: "Infosys", location: "Bangalore" },
    { title: "System Engineer", company: "Infosys", location: "Bangalore" },
    { title: "Frontend Developer", company: "Amazon", location: "Seattle" },
    { title: "System Engineer", company: "Infosys", location: "Bangalore" },
    { title: "Software Engineer", company: "Google", location: "Mountain View" },
  ];

  const filteredJobs = jobListingsGrid.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="landing-page"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Blur Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      ></div>

      {/* Main Content (above overlay) */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        <ToastContainer position="top-right" autoClose={3000} />

        {/* Navbar with gradient background and animated SVG logo */}
        <motion.nav
          className="navbar navbar-expand-xlg navbar-dark fixed-top shadow"
          style={{ background: "rgba(0, 0, 0, 0.9)" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            <Link className="navbar-brand fw-bold" to="/">
              <SVGComponent width="100" height="80" className="my-custom-svg"/>
            </Link>
            <div>
              <Link to="/login">
                <motion.button
                  className="btn btn-outline-light me-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    borderColor: "#FF8541",
                    color: "#FF8541",
                  }}
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  className="btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "linear-gradient(90deg, #FF8541 0%, black 100%)",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  Register
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section with dark background matching Login */}
        <header
          className="pt-5 mt-5"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "600px",
            background: "rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Particles Background Wrapper */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Particles
              particleColors={["#FF8541", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Header Content */}
          <div className="container-fluid text-center py-5" style={{ position: "relative", zIndex: 1 }}>
            <motion.h1
              className="display-4 fw-bold mb-4"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Find & Apply for Verified Walk-in Jobs
            </motion.h1>
            <motion.p
              className="lead mb-4"
              style={{ color: "#ddd" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Only verified companies can post job openings to ensure authenticity.
              Start your job search today!
            </motion.p>
            <div className="input-group mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search for jobs by title, company, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  borderRadius: "8px 0 0 8px",
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  border: "none",
                }}
              />
              <motion.button
                className="btn"
                onClick={handleSearch}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(90deg, #FF8541 0%, black 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <Search size={18} />
              </motion.button>
            </div>
            <motion.button
              className="btn btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(90deg, #FF8541 0%, black 100%)",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
                Get Started
              </Link>
            </motion.button>
          </div>
        </header>

        {/* Latest Jobs Section */}
        <section className="container-fluid py-5" style={{ background: "rgba(255, 255, 255, 0.9)" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <motion.h2 
                className="fw-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Latest Jobs
              </motion.h2>
              <p className="text-muted">Explore the most recent walk-in job postings.</p>
            </div>
            <div className="marquee-container">
              <div className="marquee">
                <div className="row g-4 px-3">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                      <motion.div 
                        className="col-12 col-md-3 col-sm-6 job-card" 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div 
                          className="card h-100 shadow-sm"
                          style={{ 
                            transition: "all 0.3s ease", 
                            border: "1px solid #eee", 
                            borderRadius: "12px",
                            overflow: "hidden",
                          }}
                          onMouseOver={(e) => e.currentTarget.style.borderColor = "#FF8541"}
                          onMouseOut={(e) => e.currentTarget.style.borderColor = "#eee"}
                        >
                          <div className="card-body">
                            <h6 className="card-title fw-bold">{job.title}</h6>
                            <p className="card-text small text-muted">
                              {job.company} <br /> <MapPin size={14} className="me-1" />{job.location}
                            </p>
                            <button 
                              className="btn btn-sm mt-2"
                              style={{
                                background: "linear-gradient(90deg, #FF8541 0%, black 100%)",
                                color: "white",
                                borderRadius: "8px",
                                border: "none",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-center text-muted">No jobs found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container-fluid py-5 text-white" style={{ background: "rgba(0, 0, 0, 0.9)" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <motion.h2 
                className="fw-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                How It Works
              </motion.h2>
              <p className="text-white">
                A simple 4-step process to connect you with the perfect job.
              </p>
            </div>
            <div className="row text-center g-4 px-4">
              {[
                { icon: <UserPlus size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Register", description: "Create your account and set up your profile." },
                { icon: <FileSearch size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Search", description: "Use advance filters to find jobs that match skills." },
                { icon: <Send size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Apply", description: "Apply directly for walk-in interviews with a click." },
                { icon: <Award size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Get Hired", description: "Land your dream job with verified companies." }
              ].map((step, index) => (
                <motion.div 
                  className="col-12 col-sm-6 col-md-3 mb-3" 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="card p-4 h-100 shadow-sm"
                    style={{ 
                      transition: "all 0.3s ease", 
                      borderRadius: "12px",
                      background: "rgba(0, 0, 0, 0.9)",
                      color: "white",
                      border: "2px solid #333",
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = "#FF8541"}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = "#333"}
                  >
                    {step.icon}
                    <h6 className="fw-semibold">{step.title}</h6>
                    <p className="small" style={{ color: "#ddd" }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container-fluid py-5" style={{ background: "rgba(255, 255, 255, 0.9)" }}>
          <div className="row text-center g-4 px-4">
            {[
              { icon: <Search size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Instant Job Search", description: "Find verified walk-in jobs near you with real-time listings." },
              { icon: <Briefcase size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Verified Employers", description: "Only approved and genuine companies can post job openings." },
              { icon: <CheckCircle size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Easy Walk-in Applications", description: "Apply directly and get complete job details and interview locations." }
            ].map((feature, index) => (
              <motion.div 
                className="col-12 col-md-4 d-flex align-items-stretch mb-3" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center"
                  style={{ 
                    transition: "all 0.3s ease", 
                    borderRadius: "12px",
                    border: "1px solid #eee",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = "#FF8541"}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = "#eee"}
                >
                  {feature.icon}
                  <h5 className="fw-semibold">{feature.title}</h5>
                  <p className="text-muted">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container-fluid py-5" style={{ background: "rgba(0, 0, 0, 0.9)", color: "white" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.h2 
                className="fw-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Why Choose HireOnSpot?
              </motion.h2>
              <div className="row g-4 px-4">
                {[
                  { icon: <Star size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Verified Listings", description: "We ensure all job postings are from genuine companies." },
                  { icon: <Users size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Trusted by Thousands", description: "Join a community of job seekers and employers." },
                  { icon: <MapPin size={32} className="mb-3" style={{ color: "#FF8541" }} />, title: "Easy Location Access", description: "Find walk-in interviews near you with detailed directions." }
                ].map((reason, index) => (
                  <motion.div 
                    className="col-md-4 col-sm-12 mb-3" 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div 
                      className="card p-4 h-100 shadow-sm"
                      style={{ 
                        transition: "all 0.3s ease", 
                        borderRadius: "12px",
                        background: "rgba(0, 0, 0, 0.9)",
                        color: "white",
                        border: "2px solid #333",
                      }}
                      onMouseOver={(e) => e.currentTarget.style.borderColor = "#FF8541"}
                      onMouseOut={(e) => e.currentTarget.style.borderColor = "#333"}
                    >
                      {reason.icon}
                      <h5>{reason.title}</h5>
                      <p style={{ color: "#ddd" }}>
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container-fluid py-5" style={{ background: "rgba(0, 0, 0, 0.9)", color: "white" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.h2 
                className="fw-bold mb-4" 
                style={{ color: "#ffffff" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What Our Users Say
              </motion.h2>
              <div className="row g-4 px-4">
                {[
                  { text: "HireOnSpot helped me find a job quickly. The process was seamless!", name: "Abhiram Kaleru" },
                  { text: "I love how easy it is to apply for walk-in interviews. Highly recommended!", name: "Jay Krishna" },
                  { text: "The platform is user-friendly, and the job listings are genuine.", name: "Shiva Chithanya" }
                ].map((testimonial, index) => (
                  <motion.div 
                    className="col-md-4 col-sm-12 mb-3" 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div 
                      className="card p-4 h-100 shadow-sm"
                      style={{ 
                        transition: "all 0.3s ease", 
                        border: "2px solid #333", 
                        borderRadius: "12px",
                        background: "rgba(0, 0, 0, 0.9)",
                        color: "white"
                      }} 
                      onMouseOver={(e) => e.currentTarget.style.borderColor = "#FF8541"} 
                      onMouseOut={(e) => e.currentTarget.style.borderColor = "#333"} 
                    > 
                      <p style={{ color: "#ffffff" }}> 
                        "{testimonial.text}" 
                      </p> 
                      <p className="fw-bold mt-auto" style={{ color: "#FF8541" }}>- {testimonial.name}</p> 
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeaturedCompanies/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;