import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Category() {
  const { category } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3000/api/posts/category/${category}`)
      .then(res => {
        setPosts(res.data.posts)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [category])

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
              style={{color: cat === category ? '#c9a96e' : 'white', textDecoration:'none', textTransform:'capitalize', fontSize:'16px', padding:'8px 0', borderBottom:'1px solid #333'}}>
              {cat}
            </Link>
          ))}
        </div>
      )}

      {/* Header */}
      <div style={{background:'#1a1a1a', padding:'60px 24px', textAlign:'center'}}>
        <h1 style={{fontFamily:'Playfair Display', fontSize:'clamp(28px, 5vw, 42px)', color:'#c9a96e', textTransform:'capitalize'}}>
          {category}
        </h1>
        <p style={{color:'#e8d5b7', marginTop:'10px', fontSize:'clamp(14px, 2vw, 16px)'}}>
          Latest {category} trends & collections
        </p>
      </div>

      {/* Posts Grid */}
      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'40px 24px'}}>
        {posts.length === 0 ? (
          <p style={{textAlign:'center', color:'#999', fontSize:'18px'}}>
            No posts in {category} yet!
          </p>
        ) : (
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
                    <h3 style={{fontFamily:'Playfair Display', fontSize:'clamp(16px, 2vw, 20px)', margin:'10px 0 8px', color:'#1a1a1a'}}>
                      {post.title}
                    </h3>
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
        )}
      </div>

        <Footer/>
    </div>
  )
}

export default Category