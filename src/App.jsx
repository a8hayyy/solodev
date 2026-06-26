import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        
        {/* Minimalist SVG Logo */}
        <svg 
          className="brand-logo"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          fill="none"
        >
          <rect width="100" height="100" rx="24" fill="rgba(255,255,255,0.03)" />
          <path d="M66 34H36V48H54C59.5228 48 64 52.4772 64 58V66H34" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <h1 className="title">solodev.in</h1>
        <p className="subtitle">System booting. Projects compiling.</p>
        
        <a href="mailto:acuber1728@gmail.com?subject=Hello from solodev.in" className="premium-btn">
          Get in Touch
        </a>
      </div>
    </div>
  )
}

export default App