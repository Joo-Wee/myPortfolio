import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "next-themes"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
	<ThemeProvider
		attribute = "class"
		defaultTheme = "system"
		enableSystem
		disableTransitionOnChange
	>
	   <Navbar />
		<App />
	   <Footer />
	</ThemeProvider>
  </Router>
  </StrictMode>
)
