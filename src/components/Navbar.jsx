import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const categories = ['jewelry', 'dresses', 'handbags', 'shoes', 'accessories']
  const currentCategory = location.pathname.split('/category/')[1]

  return (
    <>
      <nav style={{background:'#1a1a1a', padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:50}}>
        <Link to="/" style={{fontFamily:'Playfair Display', fontSize:'22px', color:'#c9a96e', textDecoration:'none'}}>
          TrendByAK
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{display:'none', background:'none', border:'none', color:'white', fontSize:'24px', cursor:'pointer'}}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Links */}
        <div className="nav-links" style={{display:'flex', gap:'24px', alignItems:'center'}}>
          {categories.map(cat => (
            <Link key={cat} to={`/category/${cat}`}
              style={{
                color: currentCategory === cat ? '#c9a96e' : 'white',
                textDecoration:'none',
                textTransform:'capitalize',
                fontSize:'14px',
                fontWeight: currentCategory === cat ? '600' : '400'
              }}
              onMouseEnter={e => e.target.style.color='#c9a96e'}
              onMouseLeave={e => e.target.style.color = currentCategory === cat ? '#c9a96e' : 'white'}>
              {cat}
            </Link>
          ))}

          {/* Divider */}
          <span style={{color:'#444', fontSize:'14px'}}>|</span>

          {/* Extra Links */}
          {[
            {name:'About', path:'/about'},
            {name:'Contact', path:'/contact'},
          ].map(link => (
            <Link key={link.name} to={link.path}
              style={{
                color: location.pathname === link.path ? '#c9a96e' : 'white',
                textDecoration:'none',
                fontSize:'14px',
              }}
              onMouseEnter={e => e.target.style.color='#c9a96e'}
              onMouseLeave={e => e.target.style.color = location.pathname === link.path ? '#c9a96e' : 'white'}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{background:'#1a1a1a', padding:'16px 24px', display:'flex', flexDirection:'column', gap:'16px', position:'sticky', top:'57px', zIndex:49}}>
          {categories.map(cat => (
            <Link key={cat} to={`/category/${cat}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: currentCategory === cat ? '#c9a96e' : 'white',
                textDecoration:'none',
                textTransform:'capitalize',
                fontSize:'16px',
                padding:'8px 0',
                borderBottom:'1px solid #333'
              }}>
              {cat}
            </Link>
          ))}
          {/* Mobile Extra Links */}
          {[
            {name:'About', path:'/about'},
            {name:'Contact', path:'/contact'},
          ].map(link => (
            <Link key={link.name} to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                color: location.pathname === link.path ? '#c9a96e' : 'white',
                textDecoration:'none',
                fontSize:'16px',
                padding:'8px 0',
                borderBottom:'1px solid #333'
              }}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar