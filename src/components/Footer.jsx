import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{background:'#1a1a1a', color:'white', marginTop:'80px'}}>

      {/* Main Footer */}
      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'60px 24px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'40px'}}>

        {/* Brand */}
        <div>
          <h3 style={{fontFamily:'Playfair Display', fontSize:'28px', color:'#c9a96e', marginBottom:'16px'}}>
            TrendByAK
          </h3>
          <p style={{color:'#999', fontSize:'14px', lineHeight:'1.8'}}>
            Discover the latest fashion trends, jewelry, and accessories. Your one-stop destination for style inspiration.
          </p>
          {/* Social Links */}
          <div style={{display:'flex', gap:'16px', marginTop:'20px'}}>
            {['Pinterest', 'Instagram', 'Facebook'].map(social => (
              <a key={social} href="#"
                style={{color:'#c9a96e', textDecoration:'none', fontSize:'13px'}}
                onMouseEnter={e => e.target.style.color='white'}
                onMouseLeave={e => e.target.style.color='#c9a96e'}>
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 style={{color:'white', fontSize:'16px', marginBottom:'20px', fontWeight:'600'}}>
            Categories
          </h4>
          <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
            {['jewelry', 'dresses', 'handbags', 'shoes', 'accessories'].map(cat => (
              <Link key={cat} to={`/category/${cat}`}
                style={{color:'#999', textDecoration:'none', textTransform:'capitalize', fontSize:'14px'}}
                onMouseEnter={e => e.target.style.color='#c9a96e'}
                onMouseLeave={e => e.target.style.color='#999'}>
                {cat}
              </Link>
            ))}
          </div>
        </div>

       {/* Quick Links */}
      <div>
        <h4 style={{color:'white', fontSize:'16px', marginBottom:'20px', fontWeight:'600'}}>
          Quick Links
        </h4>
        <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          {[
            {name:'Home', path:'/'},
            {name:'About Us', path:'/about'},
            {name:'Contact', path:'/contact'},
            {name:'Privacy Policy', path:'/privacy-policy'},
          ].map(link => (
            <Link key={link.name} to={link.path}
              style={{color:'#999', textDecoration:'none', fontSize:'14px'}}
              onMouseEnter={e => e.target.style.color='#c9a96e'}
              onMouseLeave={e => e.target.style.color='#999'}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

        {/* Newsletter */}
        <div>
          <h4 style={{color:'white', fontSize:'16px', marginBottom:'20px', fontWeight:'600'}}>
            Newsletter
          </h4>
          <p style={{color:'#999', fontSize:'14px', marginBottom:'16px', lineHeight:'1.6'}}>
            Get latest fashion trends delivered to your inbox!
          </p>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <input
              type="email"
              placeholder="Your email address"
              style={{padding:'10px 16px', borderRadius:'8px', border:'1px solid #333', background:'#2a2a2a', color:'white', fontSize:'14px', outline:'none'}}
            />
            <button
              style={{padding:'10px 16px', borderRadius:'8px', background:'#c9a96e', color:'white', border:'none', cursor:'pointer', fontSize:'14px', fontWeight:'500'}}>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{borderTop:'1px solid #333', padding:'20px 24px', textAlign:'center'}}>
        <p style={{color:'#666', fontSize:'13px'}}>
          © 2025 TrendByAK. All rights reserved. | Affiliate Disclosure: We earn commission from qualifying purchases.
        </p>
      </div>

    </footer>
  )
}

export default Footer