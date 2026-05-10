import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoLogoPinterest } from "react-icons/io5";

function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  

  useEffect(() => {
    axios.get('http://localhost:3000/api/posts')
      .then(res => {
        setPosts(res.data.posts)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
      <p style={{color:'#c9a96e', fontSize:'20px'}}>Loading...</p>
    </div>
  )

  return (
    <div style={{minHeight:'100vh', background:'#faf9f7'}}>

      {/* Navbar */}
     <Navbar />

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{background:'#1a1a1a', padding:'16px 24px', display:'flex', flexDirection:'column', gap:'16px'}}>
          {['jewelry', 'dresses', 'handbags', 'shoes', 'accessories'].map(cat => (
            <Link key={cat} to={`/category/${cat}`}
              onClick={() => setMenuOpen(false)}
              style={{color:'white', textDecoration:'none', textTransform:'capitalize', fontSize:'16px', padding:'8px 0', borderBottom:'1px solid #333'}}>
              {cat}
            </Link>
          ))}
        </div>
      )}

      {/* Hero */}
    <div style={{background:'#1a1a1a', padding:'100px 24px', textAlign:'center', position:'relative', overflow:'hidden'}}>
      <p style={{color:'#c9a96e', fontSize:'14px', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'16px'}}>
        Welcome to TrendByAK
      </p>
      <h2 style={{fontFamily:'Playfair Display', fontSize:'clamp(32px, 6vw, 64px)', color:'white', marginBottom:'20px', lineHeight:'1.2'}}>
        Latest Fashion <span style={{color:'#c9a96e'}}>Trends</span>
      </h2>
      <p style={{color:'#999', fontSize:'clamp(14px, 2vw, 18px)', marginBottom:'36px', maxWidth:'500px', margin:'0 auto 36px'}}>
        Discover the finest jewelry, dresses & accessories — handpicked for you!
      </p>
      <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
        <Link to="/category/jewelry"
          style={{background:'#c9a96e', color:'white', padding:'14px 32px', borderRadius:'50px', textDecoration:'none', fontSize:'16px', fontWeight:'500'}}>
          Shop Jewelry →
        </Link>
        <Link to="/category/dresses"
          style={{background:'transparent', color:'white', padding:'14px 32px', borderRadius:'50px', textDecoration:'none', fontSize:'16px', border:'1px solid #555'}}>
          View Dresses
        </Link>
      </div>
    </div>

    {/* Stats Section */}
    <div style={{background:'#f5f0ea', padding:'40px 24px'}}>
      <div style={{maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))', gap:'24px', textAlign:'center'}}>
        {[
          {number:'500+', label:'Products'},
          {number:'5', label:'Categories'},
          {number:'100%', label:'Authentic'},
          {number:'24/7', label:'Support'},
        ].map(stat => (
          <div key={stat.label}>
            <h3 style={{fontFamily:'Playfair Display', fontSize:'36px', color:'#c9a96e'}}>{stat.number}</h3>
            <p style={{color:'#777', fontSize:'14px', marginTop:'4px'}}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Categories Showcase */}
    <div style={{maxWidth:'1200px', margin:'0 auto', padding:'60px 24px'}}>
      <div style={{textAlign:'center', marginBottom:'40px'}}>
        <p style={{color:'#c9a96e', fontSize:'13px', letterSpacing:'3px', textTransform:'uppercase'}}>Browse By</p>
        <h2 style={{fontFamily:'Playfair Display', fontSize:'clamp(28px, 4vw, 40px)', color:'#1a1a1a', marginTop:'8px'}}>
          Shop Categories
        </h2>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:'16px'}}>
        {[
          {name:'Jewelry', color:'#f9f3e8'},
          {name:'Dresses', color:'#f8eef0'},
          {name:'Handbags', color:'#eef3f8'},
          {name:'Shoes', color:'#f0f8ee'},
          {name:'Accessories', color:'#f8f0ee'},
        ].map(cat => (
          <Link key={cat.name} to={`/category/${cat.name.toLowerCase()}`}
            style={{textDecoration:'none'}}>
            <div style={{background:cat.color, borderRadius:'16px', padding:'32px 16px', textAlign:'center', transition:'transform 0.2s'}}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              {/* <div style={{fontSize:'40px', marginBottom:'12px'}}>{cat.emoji}</div> */}
              <h3 style={{fontFamily:'Playfair Display', fontSize:'18px', color:'#1a1a1a'}}>{cat.name}</h3>
              <p style={{color:'#c9a96e', fontSize:'13px', marginTop:'8px'}}>Shop Now →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Divider */}
    <div style={{height:'1px', background:'#eee', maxWidth:'1200px', margin:'0 auto 60px'}} />

    {/* Latest Posts */}
    <div style={{maxWidth:'1200px', margin:'0 auto', padding:'0 24px'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'40px', flexWrap:'wrap', gap:'16px'}}>
        <div>
          <p style={{color:'#c9a96e', fontSize:'13px', letterSpacing:'3px', textTransform:'uppercase'}}>Fresh Picks</p>
          <h2 style={{fontFamily:'Playfair Display', fontSize:'clamp(28px, 4vw, 40px)', color:'#1a1a1a', marginTop:'8px'}}>
            Latest Posts
          </h2>
        </div>
        <Link to="/category/jewelry"
          style={{color:'#c9a96e', textDecoration:'none', fontSize:'14px', border:'1px solid #c9a96e', padding:'10px 24px', borderRadius:'50px'}}
          onMouseEnter={e => { e.target.style.background='#c9a96e'; e.target.style.color='white' }}
          onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='#c9a96e' }}>
          View All →
        </Link>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'28px'}}>
        {posts.map(post => (
          <Link key={post._id} to={`/post/${post.slug}`} style={{textDecoration:'none', color:'#000'}}>
            <div style={{background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.06)', transition:'all 0.3s'}}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='0 12px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform='translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.transform='translateY(0)' }}>
              <div style={{position:'relative', overflow:'hidden'}}>
                <img src={post.image} alt={post.title}
                  style={{width:'100%', height:'240px', objectFit:'cover', transition:'transform 0.3s'}}
                  onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'} />
                <span style={{position:'absolute', top:'12px', left:'12px', background:'#c9a96e', color:'white', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', textTransform:'capitalize'}}>
                  {post.category}
                </span>
              </div>
              <div style={{padding:'20px'}}>
                <h4 style={{fontFamily:'Playfair Display', fontSize:'20px', margin:'0 0 10px', color:'#1a1a1a', lineHeight:'1.4'}}>
                  {post.title}
                </h4>
                <p style={{color:'#888', fontSize:'14px', marginBottom:'16px', lineHeight:'1.6'}}>
                  {post.description}
                </p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <p style={{color:'#c9a96e', fontSize:'14px', fontWeight:'600'}}>
                    Read more →
                  </p>
                  <p style={{color:'#bbb', fontSize:'12px'}}>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'})}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Why Choose Us */}
    <div style={{background:'#1a1a1a', padding:'80px 24px', marginTop:'80px'}}>
      <div style={{maxWidth:'1200px', margin:'0 auto', textAlign:'center'}}>
        <p style={{color:'#c9a96e', fontSize:'13px', letterSpacing:'3px', textTransform:'uppercase'}}>Why Us</p>
        <h2 style={{fontFamily:'Playfair Display', fontSize:'clamp(28px, 4vw, 40px)', color:'white', margin:'12px 0 48px'}}>
          Why Choose TrendByAK
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'32px'}}>
          {[
            { title:'Handpicked', desc:'Every product carefully selected for quality and style'},
            { title:'Best Deals', desc:'Find the best prices on Amazon with our curated links'},
            { title:'Updated Daily', desc:'Fresh content and new arrivals every single day'},
            { title:'Trusted Reviews', desc:'Honest and detailed reviews for every product'},
          ].map(item => (
            <div key={item.title} style={{padding:'24px', background:'#2a2a2a', borderRadius:'16px'}}>
              {/* <div style={{fontSize:'36px', marginBottom:'16px'}}>{item.icon}</div> */}
              <h3 style={{color:'#c9a96e', fontFamily:'Playfair Display', fontSize:'20px', marginBottom:'12px'}}>{item.title}</h3>
              <p style={{color:'#888', fontSize:'14px', lineHeight:'1.7'}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Pinterest CTA */}
    <div style={{background:'#f5f0ea', padding:'80px 24px', textAlign:'center'}}>
      <div style={{maxWidth:'600px', margin:'0 auto'}}>
        <div style={{fontSize:'48px', marginBottom:'16px',  display: 'flex', justifyContent: 'center', color: '#E60023'} }><IoLogoPinterest /></div>
        <h2 style={{fontFamily:'Playfair Display', fontSize:'clamp(24px, 4vw, 36px)', color:'#1a1a1a', marginBottom:'16px'}}>
          Follow Us on Pinterest
        </h2>
        <p style={{color:'#777', fontSize:'16px', marginBottom:'32px', lineHeight:'1.7'}}>
          Get daily fashion inspiration, style tips, and exclusive deals on our Pinterest board!
        </p>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
          style={{background:'#E60023', color:'white', padding:'14px 36px', borderRadius:'50px', textDecoration:'none', fontSize:'16px', fontWeight:'500', display:'inline-block'}}>
          Follow on Pinterest →
        </a>
      </div>
    </div>

      {/* Posts */}
      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'40px 24px'}}>
        <h3 style={{fontFamily:'Playfair Display', fontSize:'clamp(24px, 3vw, 32px)', color:'#1a1a1a', marginBottom:'30px'}}>
          Latest Posts
        </h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'24px'}}>
          {posts.map(post => (
            <Link key={post._id} to={`/post/${post.slug}`} style={{textDecoration:'none', color:'#000'}}>
              <div style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 8px rgba(0,0,0,0.08)'}>
                <img src={post.image} alt={post.title}
                  style={{width:'100%', height:'220px', objectFit:'cover'}} />
                <div style={{padding:'16px'}}>
                  <span style={{background:'#e8d5b7', padding:'4px 12px', borderRadius:'20px', fontSize:'12px', textTransform:'capitalize'}}>
                    {post.category}
                  </span>
                  <h4 style={{fontFamily:'Playfair Display', fontSize:'18px', margin:'10px 0 8px', color:'#1a1a1a'}}>
                    {post.title}
                  </h4>
                  <p style={{color:'#777', fontSize:'13px', marginBottom:'10px'}}>
                    {post.description}
                  </p>
                  <p style={{color:'#c9a96e', fontSize:'13px', fontWeight:'500'}}>
                    Read more →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

          <Footer/>
    </div>
  )
}

export default Home