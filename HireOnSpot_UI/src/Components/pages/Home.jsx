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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
import bgImage from "../../assets/bg2.jpg";
// ChartJS.register(ArcElement, Tooltip, Legend);

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

  // Carousel settings for job listings (if needed)
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
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

  // // Pie Chart data for application stats
  // const pieData = {
  //   labels: ["Hired", "Pending", "Rejected"],
  //   datasets: [
  //     {
  //       data: [40, 35, 25],
  //       backgroundColor: ["#007bff", "#ff9800", "#dc3545"],
  //     },
  //   ],
  // };

  return (
    <div
      className="landing-page"
      style={{
        width: "100%",
        minHeight: "100vh",
        // backgroundImage: `url(${bgImage})`,
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
          className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
          style={{ background: "linear-gradient(90deg, #4a6cf7 0%, #2b2d5d 100%)" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            <Link className="navbar-brand fw-bold" to="/">
              <motion.svg
                width="150"
                height="50"
                viewBox="0 0 400 100"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <g>
                  <text
                    x="50"
                    y="70"
                    fontFamily="Arial"
                    fontWeight="900"
                    fontSize="40"
                    fill="#fff"
                  >
                    HIRE
                  </text>
                  <motion.circle
                    cx="200"
                    cy="60"
                    r="30"
                    fill="yellow"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <text
                    x="180"
                    y="73"
                    fontFamily="Arial"
                    fontWeight="900"
                    fontSize="40"
                    fill="black"
                  >
                    ON
                  </text>
                  <text
                    x="250"
                    y="70"
                    fontFamily="Arial"
                    fontWeight="900"
                    fontSize="40"
                    fill="#fff"
                  >
                    SPOT
                  </text>
                  <motion.path
                    d="M320 45 C340 45, 340 75, 320 75"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path
                    d="M315 70 L325 75 L315 80"
                    fill="#fff"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  />
                </g>
              </motion.svg>
            </Link>
            <div>
              <Link to="/login">
                <motion.button
                  className="btn btn-light me-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  className="btn btn-primary btn-outline-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section with dark background matching Register */}
        <header
          className="pt-5 mt-5"
          style={{ background: "rgba(13, 17, 54, 0.9)" }}
        >
          <div className="container-fluid text-center py-5">
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
            <div className="input-group mb-4 w-50 mx-auto">
              <input
                type="text"
                className="form-control"
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
                  background: "linear-gradient(90deg, #ff9900, #004aad)",
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
                background: "linear-gradient(90deg, #ff9900, #004aad)",
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

        {/* Features Section */}
        <section className="container-fluid py-5 bg-light">
          <div className="row text-center g-4">
            <div className="col-12 col-md-4 d-flex align-items-stretch">
              <div className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center">
                <Search className="text-primary mb-3" size={32} />
                <h5 className="fw-semibold">Instant Job Search</h5>
                <p className="text-muted">
                  Find verified walk-in jobs near you with real-time listings.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-stretch">
              <div className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center">
                <Briefcase className="text-primary mb-3" size={32} />
                <h5 className="fw-semibold">Verified Employers</h5>
                <p className="text-muted">
                  Only approved and genuine companies can post job openings.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-stretch">
              <div className="card p-4 shadow-sm flex-fill d-flex flex-column justify-content-center">
                <CheckCircle className="text-primary mb-3" size={32} />
                <h5 className="fw-semibold">Easy Walk-in Applications</h5>
                <p className="text-muted">
                  Apply directly and get complete job details and interview locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container-fluid py-5 bg-white">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="fw-bold">How It Works</h2>
              <p className="text-muted">
                A simple 4-step process to connect you with the perfect job.
              </p>
            </div>
            <div className="row text-center g-4">
              <div className="col-12 col-md-3">
                <div className="card p-4 shadow-sm border-1  ">
                  <UserPlus className="text-primary mb-3" size={32} />
                  <h6 className="fw-semibold">Register</h6>
                  <p className="text-muted small">
                    Create your account and set up your profile.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card p-4 shadow-sm border-1">
                  <FileSearch className="text-primary mb-3" size={32} />
                  <h6 className="fw-semibold">Search</h6>
                  <p className="text-muted small">
                    Use advance filters to find jobs that match skills.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card p-4 shadow-sm border-1">
                  <Send className="text-primary mb-3" size={32} />
                  <h6 className="fw-semibold">Apply</h6>
                  <p className="text-muted small">
                    Apply directly for walk-in interviews with a click.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card p-4 shadow-sm border-1">
                  <Award className="text-primary mb-3" size={32} />
                  <h6 className="fw-semibold">Get Hired</h6>
                  <p className="text-muted small">
                    Land your dream job with verified companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Jobs Section */}
        <section className="container-fluid py-5 bg-light">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <h2 className="fw-bold">Latest Jobs</h2>
              <p className="text-muted">
                Explore the most recent walk-in job postings.
              </p>
            </div>
            <div className="marquee-container">
              <div className="marquee">
                <div className="row g-4 px-3">
                  {jobListingsGrid.map((job, index) => (
                    <div className="col-12 col-md-3 job-card" key={index}>
                      <div className="card h-100 shadow-sm">
                        <div className="card-body">
                          <h6 className="card-title">{job.title}</h6>
                          <p className="card-text small text-muted">
                            {job.company} <br /> {job.location}
                          </p>
                          <button className="btn btn-outline-primary btn-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container-fluid py-5 bg-white">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">Why Choose HireOnSpot?</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <Star className="text-primary mb-3" size={32} />
                  <h5>Verified Listings</h5>
                  <p className="text-muted">
                    We ensure all job postings are from genuine companies.
                  </p>
                </div>
                <div className="col-md-4">
                  <Users className="text-primary mb-3" size={32} />
                  <h5>Trusted by Thousands</h5>
                  <p className="text-muted">
                    Join a community of job seekers and employers.
                  </p>
                </div>
                <div className="col-md-4">
                  <MapPin className="text-primary mb-3" size={32} />
                  <h5>Easy Location Access</h5>
                  <p className="text-muted">
                    Find walk-in interviews near you with detailed directions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container-fluid py-5 bg-light">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">What Our Users Say</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card p-4 shadow-sm">
                    <p className="text-muted">
                      "HireOnSpot helped me find a job quickly. The process was seamless!"
                    </p>
                    <p className="fw-bold">- Abhiram Kaleru</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-4 shadow-sm">
                    <p className="text-muted">
                      "I love how easy it is to apply for walk-in interviews. Highly recommended!"
                    </p>
                    <p className="fw-bold">- Jay Krishna</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-4 shadow-sm">
                    <p className="text-muted">
                      "The platform is user-friendly, and the job listings are genuine."
                    </p>
                    <p className="fw-bold">- Shiva Chithanya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies Section */}
        <section className="container-fluid py-5 bg-white">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">Featured Companies</h2>
              <div className="row g-4">
                {[
                  { name: "TCS", logo: "https://www.stottandmay.com/hubfs/TCS%20black%20logo.png" },
                  { name: "Wipro", logo: "https://logodix.com/logo/557216.png" },
                  { name: "Accenture", logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png" },
                  { name: "IBM", logo: "https://pngimg.com/uploads/ibm/ibm_PNG19658.png" },
                  { name: "HCL", logo: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png" },
                  { name: "Capgemini", logo: "https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png" },
                  { name: "Genpact", logo: "https://dwglogo.com/wp-content/uploads/2019/03/genpact_logo-1024x576.png" },
                  { name: "10K", logo: "https://miro.medium.com/max/1400/1*xdhm7cqz8DwDzQNXxhZXVA.png" },
                ].map((company, index) => (
                  <div className="col-md-3" key={index}>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="img-fluid"
                      style={{ maxWidth: "100%", height: "100px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Stats Section
        <section className="container-fluid py-5 bg-light">
          <div className="container">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-center fw-bold">Application Stats</h3>
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                  <Pie data={pieData} />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="bg-dark text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>
                  <svg
                    width="150"
                    height="50"
                    viewBox="0 0 400 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <text
                        x="50"
                        y="70"
                        fontFamily="Arial"
                        fontWeight="900"
                        fontSize="40"
                        fill="white"
                      >
                        HIRE
                      </text>
                      <circle cx="200" cy="60" r="30" fill="blue" />
                      <text
                        x="180"
                        y="73"
                        fontFamily="Arial"
                        fontWeight="900"
                        fontSize="40"
                        fill="white"
                      >
                        ON
                      </text>
                      <text
                        x="250"
                        y="70"
                        fontFamily="Arial"
                        fontWeight="900"
                        fontSize="40"
                        fill="white"
                      >
                        SPOT
                      </text>
                      <path
                        d="M320 45 C340 45, 340 75, 320 75"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                      />
                      <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
                    </g>
                  </svg>
                </h5>
                <p className="text-muted">
                  Connecting job seekers with verified employers for walk-in interviews.
                </p>
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
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
              <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="list-unstyled">
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
            <div className="text-center mt-4">
              <p className="mb-0">&copy; 2025 HireOnSpot. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
