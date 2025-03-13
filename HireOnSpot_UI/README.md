# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





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