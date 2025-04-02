// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../../contexts/AuthContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import bgImage from '../../assets/10logo2.jpg';

// const baseUrl = import.meta.env.VITE_BASE_URL

// const Login = () => {
//   const { login, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [guestRole, setGuestRole] = useState('job_seeker'); // Default to job_seeker
//   console.log(baseUrl);


//   useEffect(() => {
//     logout();
//   }, [logout]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const res = await axios.post(`${baseUrl}api/auth/login`, { email, password });
//       const { token, user } = res.data;
//       login(token, user);

//       if (user.role === 'job_seeker') {
//         navigate('/dashboard');
//       } else if (user.role === 'employer') {
//         navigate('/employer-dashboard');
//       } else if (user.role === 'admin') {
//         navigate('/admin-dashboard');
//       } else {
//         navigate('/');
//       }
//     } catch (err) {
//       setError('Invalid credentials');
//       setIsLoading(false);
//     }
//   };

//   const handleGuestLogin = () => {
//     const guestUser = {
//       id: `guest-${guestRole}`,
//       email: `guest_${guestRole}@example.com`,
//       role: guestRole,
//       name: `Guest ${guestRole.charAt(0).toUpperCase() + guestRole.slice(1)}`,
//     };

//     // Simulate login with guest credentials
//     login('guest-token', guestUser);

//     // Navigate based on role
//     if (guestRole === 'job_seeker') {
//       navigate('/dashboard');
//     } else if (guestRole === 'employer') {
//       navigate('/employer-dashboard');
//     } else if (guestRole === 'admin') {
//       navigate('/admin-dashboard');
//     }
//   };

//   return (
//     <div 
//       className="container-fluid d-flex align-items-center justify-content-center position-relative" 
//       style={{ 
//         width: "100vw", 
//         minHeight: "100vh", 
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover", 
//         backgroundPosition: "center", 
//         backgroundRepeat: "no-repeat", 
//         display: "flex", 
//         flexDirection: "column"
//       }}
//     >
//       <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}></div>
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="card shadow position-relative" 
//         style={{ 
//           maxWidth: '400px', 
//           width: '100%',
//           borderRadius: '12px',
//           overflow: 'hidden',
//           background: 'rgba(13, 17, 54, 0.9)', 
//           color: 'white'
//         }}
//       >
//         <div className="card-header text-center py-4" style={{ background: 'rgba(13, 17, 54, 0.9)' }}>
//           <motion.h2 className="text-center mb-4" style={{ color: '#ffffff' }}>
//             Welcome Back
//           </motion.h2>
//           <svg
//                     width="150"
//                     height="50"
//                     viewBox="0 0 400 100"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g>
//                       <text
//                         x="50"
//                         y="70"
//                         fontFamily="Arial"
//                         fontWeight="900"
//                         fontSize="40"
//                         fill="white"
//                       >
//                         HIRE
//                       </text>
//                       <circle cx="200" cy="60" r="30" fill="blue" />
//                       <text
//                         x="180"
//                         y="73"
//                         fontFamily="Arial"
//                         fontWeight="900"
//                         fontSize="40"
//                         fill="white"
//                       >
//                         ON
//                       </text>
//                       <text
//                         x="250"
//                         y="70"
//                         fontFamily="Arial"
//                         fontWeight="900"
//                         fontSize="40"
//                         fill="white"
//                       >
//                         SPOT
//                       </text>
//                       <path
//                         d="M320 45 C340 45, 340 75, 320 75"
//                         fill="none"
//                         stroke="#3b82f6"
//                         strokeWidth="4"
//                       />
//                       <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
//                     </g>
//                   </svg>
//         </div>

//         <div className="card-body p-4">
//           {error && (
//             <motion.div className="alert alert-danger" role="alert">
//               {error}
//             </motion.div>
//           )}

//           <motion.form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Email Address</label>
//               <motion.input 
//                 type="email" 
//                 className="form-control form-control-lg" 
//                 placeholder="Enter your email"
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//                 style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none' }}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="form-label">Password</label>
//               <motion.input 
//                 type="password" 
//                 className="form-control form-control-lg" 
//                 placeholder="Enter your password"
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//                 style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none' }}
//               />
//               <div className="d-flex justify-content-end mt-1">
//                 <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#ff9900' }}>
//                   Forgot Password?
//                 </Link>
//               </div>
//             </div>
//             <motion.button 
//               type="submit" 
//               className="btn btn-lg w-100 mb-3"
//               disabled={isLoading}
//               style={{ 
//                 background: 'linear-gradient(90deg, #ff9900 0%, #004aad 100%)',
//                 color: 'white',
//                 borderRadius: '8px',
//                 border: 'none'
//               }}
//             >
//               {isLoading ? 'Signing In...' : 'Sign In'}
//             </motion.button>
//           </motion.form>

//           {/* Guest Mode */}
//           <div className="mb-3">
//             <label className="form-label">Continue as Guest</label>
//             <select 
//               className="form-select"
//               value={guestRole}
//               onChange={(e) => setGuestRole(e.target.value)}
//               style={{ borderRadius: '8px', background: 'rgba(13, 17, 54, 0.9)', color: '#ff9900', border: 'none' }}
//             >
//               <option value="job_seeker">Job Seeker</option>
//               <option value="employer">Employer</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <motion.button 
//             type="button" 
//             className="btn btn-lg w-100" 
//             onClick={handleGuestLogin}
//             style={{ 
//               background: 'transparent',
//               border: '2px solid #ff9900',
//               color: '#ff9900',
//               borderRadius: '8px',
//               marginTop: '8px'
//             }}
//           >
//             Continue as Guest
//           </motion.button>

//           <motion.div className="text-center mt-4">
//             <p style={{ color: '#ffffff' }}>
//               Don't have an account? <Link to="/register" style={{ fontWeight: 'bold', color: '#ff9900' }}>Register now</Link>
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import bgImage from '../../assets/10logo2.jpg';
import SVGComponent from '../SvgComponent';

const baseUrl = import.meta.env.VITE_BASE_URL

const Login = () => {
  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [guestRole, setGuestRole] = useState('job_seeker'); // Default to job_seeker


  useEffect(() => {
    logout();
  }, [logout]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${baseUrl}api/auth/login`, { email, password });
      const { token, user } = res.data;
      login(token, user);

      if (user.role === 'job_seeker') {
        navigate('/dashboard');
      } else if (user.role === 'employer') {
        navigate('/employer-dashboard');
      } else if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Invalid credentials');
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    const guestUser = {
      id: `guest-${guestRole}`,
      email: `guest_${guestRole}@example.com`,
      role: guestRole,
      name: `Guest ${guestRole.charAt(0).toUpperCase() + guestRole.slice(1)}`,
    };

    // Simulate login with guest credentials
    login('guest-token', guestUser);

    // Navigate based on role
    if (guestRole === 'job_seeker') {
      navigate('/dashboard');
    } else if (guestRole === 'employer') {
      navigate('/employer-dashboard');
    } else if (guestRole === 'admin') {
      navigate('/admin-dashboard');
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
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card shadow position-relative"
        style={{
          maxWidth: '400px',
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white'
        }}
      >
        <div className="card-header text-center py-4" style={{ background: 'rgba(0, 0, 0, 0.9)' }}>
          <motion.h2 className="text-center mb-4" style={{ color: '#ffffff' }}>
            Welcome Back
          </motion.h2>
          {/* <svg
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
                      <circle cx="200" cy="60" r="30" fill="#FF8541" />
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
                        stroke="#FF8541"
                        strokeWidth="4"
                      />
                      <path d="M315 70 L325 75 L315 80" fill="#FF8541" />
                    </g>
                  </svg> */}
          <SVGComponent width="120" height="80" className="my-custom-svg" />
        </div>

        <div className="card-body p-4">
          {error && (
            <motion.div className="alert alert-danger" role="alert">
              {error}
            </motion.div>
          )}

          <motion.form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <motion.input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none' }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <motion.input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none' }}
              />
              <div className="d-flex justify-content-end mt-1">
                <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#FF8541' }}>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <motion.button
              type="submit"
              className="btn btn-lg w-100 mb-3"
              disabled={isLoading}
              style={{
                background: 'linear-gradient(90deg, #FF8541 0%, black 100%)',
                color: 'white',
                borderRadius: '8px',
                border: 'none'
              }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </motion.button>
          </motion.form>

          {/* Guest Mode */}
          <div className="mb-3">
            <label className="form-label">Continue as Guest</label>
            <select
              className="form-select"
              value={guestRole}
              onChange={(e) => setGuestRole(e.target.value)}
              style={{ borderRadius: '8px', background: 'rgba(0, 0, 0, 0.9)', color: '#FF8541', border: 'none' }}
            >
              <option value="job_seeker">Job Seeker</option>
              <option value="employer">Employer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <motion.button
            type="button"
            className="btn btn-lg w-100"
            onClick={handleGuestLogin}
            style={{
              background: 'transparent',
              border: '2px solid #FF8541',
              color: '#FF8541',
              borderRadius: '8px',
              marginTop: '8px'
            }}
          >
            Continue as Guest
          </motion.button>

          <motion.div className="text-center mt-4">
            <p style={{ color: '#ffffff' }}>
              Don't have an account? <Link to="/register" style={{ fontWeight: 'bold', color: '#FF8541' }}>Register now</Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;