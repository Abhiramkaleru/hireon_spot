import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../../assets/bg2.jpg';

const baseUrl = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Hard-code role as "job_seeker" so employers cannot self-register.
      const res = await axios.post(`${baseUrl}/api/auth/register`, { 
        name, 
        email, 
        password, 
        role:'job_seeker' 
      });
      
      if (res.status === 201) {
        // Immediately log in after successful registration.
        const loginRes = await axios.post(`${baseUrl}/api/auth/login`, { email, password });
        const { token, user } = loginRes.data;
        login(token, user);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="container-fluid d-flex align-items-center justify-content-center position-relative" 
      style={{ 
        width: "100vw", 
        minHeight: "100vh", 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        display: "flex", 
        flexDirection: "column"
      }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}
      ></div>
      
      <motion.div 
        className="card shadow position-relative" 
        style={{ 
          maxWidth: '400px', 
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'rgba(13, 17, 54, 0.9)',
          color: 'white',
          zIndex: 1
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="card-header text-center py-4" 
          style={{ background: 'rgba(13, 17, 54, 0.9)' }}
        >
          <motion.h2 className="mb-0" style={{ color: '#ffffff' }}>
            Create an Account
          </motion.h2>
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
        </div>
        
        <div className="card-body p-4">
          {error && (
            <motion.div 
              className="alert alert-danger" 
              role="alert"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}
          
          <motion.form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <motion.input 
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter your full name"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
                style={{ 
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none'
                }}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <motion.input 
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter your email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ 
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none'
                }}
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label">Password</label>
              <motion.input 
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="password" 
                className="form-control form-control-lg" 
                placeholder="Create a password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ 
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none'
                }}
              />
              <small className="text-muted mt-2 d-block" style={{ color: '#ccc' }}>
                Password must be at least 8 characters long
              </small>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="btn btn-lg w-100 mb-3"
              disabled={isLoading}
              style={{ 
                background: 'linear-gradient(90deg, #ff9900 0%, #004aad 100%)',
                color: 'white',
                borderRadius: '8px',
                border: 'none'
              }}
            >
              {isLoading ? (
                <div className="spinner-border spinner-border-sm text-light me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : null}
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </motion.button>
          </motion.form>
          
          <motion.div className="text-center mt-4">
            <p style={{ color: '#ffffff' }}>
              Already have an account? <Link to="/login" style={{ fontWeight: 'bold', color: '#ff9900' }}>Log in instead</Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
