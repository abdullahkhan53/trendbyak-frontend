import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoLogoPinterest } from "react-icons/io5";

function PostDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://trendbyak-backend.onrender.com/api/posts/${slug}`)
      .then(res => {
        setPost(res.data.post)
        return axios.get(`https://trendbyak-backend.onrender.com/api/posts/category/${res.data.post.category}`)
      })
      .then(res => {
        setRelated(res.data.posts.slice(0, 3))
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
      <p style={{color:'#c9a96e', fontSize:'20px'}}>Loading...</p>
    </div>
  )

  if (!post) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
      <p style={{fontSize:'20px'}}>Post not found!</p>
    </div>
  )

  const shareUrl = window.location.href

  return (
    <div style={{minHeight:'100vh', background:'#faf9f7'}}>

      <Navbar />

      {/* Breadcrumb */}
      <div style={{background:'white', padding:'12px 24px', borderBottom:'1px solid #eee'}}>
        <div style={{maxWidth:'900px', margin:'0 auto', display:'flex', gap:'8px', alignItems:'center', fontSize:'13px', color:'#999'}}>
          <Link to="/" style={{color:'#c9a96e', textDecoration:'none'}}>Home</Link>
          <span>›</span>
          <Link to={`/category/${post.category}`} style={{color:'#c9a96e', textDecoration:'none', textTransform:'capitalize'}}>{post.category}</Link>
          <span>›</span>
          <span style={{color:'#666'}}>{post.title.substring(0, 40)}...</span>
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth:'900px', margin:'0 auto', padding:'40px 24px'}}>

        {/* Category + Date */}
        <div style={{display:'flex', gap:'12px', alignItems:'center', marginBottom:'16px'}}>
          <Link to={`/category/${post.category}`}
            style={{background:'#c9a96e', color:'white', padding:'4px 16px', borderRadius:'20px', fontSize:'12px', textDecoration:'none', textTransform:'capitalize'}}>
            {post.category}
          </Link>
          <span style={{color:'#bbb', fontSize:'13px'}}>
            {new Date(post.createdAt).toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'})}
          </span>
        </div>

        {/* Title */}
        <h1 style={{fontFamily:'Playfair Display', fontSize:'clamp(28px, 4vw, 48px)', color:'#1a1a1a', marginBottom:'24px', lineHeight:'1.3'}}>
          {post.title}
        </h1>

        {/* Share Buttons */}
        <div style={{display:'flex', gap:'12px', marginBottom:'32px', flexWrap:'wrap'}}>
          <span style={{color:'#999', fontSize:'14px', alignSelf:'center'}}>Share:</span>
          <a href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${post.image}&description=${post.title}`}
            target="_blank" rel="noopener noreferrer"
            style={{background:'#E60023', color:'white', padding:'8px 20px', borderRadius:'50px', textDecoration:'none', fontSize:'13px', display:'flex', alignItems:'center', gap:'6px'}}>
            <IoLogoPinterest /> Pinterest
          </a>
          <a href={`https://wa.me/?text=${post.title} ${shareUrl}`}
            target="_blank" rel="noopener noreferrer"
            style={{background:'#25D366', color:'white', padding:'8px 20px', borderRadius:'50px', textDecoration:'none', fontSize:'13px'}}>
            WhatsApp
          </a>
          <button onClick={() => { navigator.clipboard.writeText(shareUrl); alert('Link copied!') }}
            style={{background:'#f0f0f0', color:'#333', padding:'8px 20px', borderRadius:'50px', border:'none', cursor:'pointer', fontSize:'13px'}}>
            🔗 Copy Link
          </button>
        </div>

        {/* Image */}
        <img src={post.image} alt={post.title}
          style={{width:'100%', height:'clamp(250px, 45vw, 500px)', objectFit:'contain', borderRadius:'16px', marginBottom:'32px'}} />

        {/* Description */}
        <p style={{color:'#444', fontSize:'clamp(16px, 2vw, 20px)', marginBottom:'20px', fontWeight:'500', lineHeight:'1.7', borderLeft:'4px solid #c9a96e', paddingLeft:'20px'}}>
          {post.description}
        </p>

        {/* Content */}
        <p style={{color:'#555', fontSize:'clamp(15px, 1.8vw, 17px)', lineHeight:'1.9', marginBottom:'40px'}}>
          {post.content}
        </p>

        {/* Product Highlights Box */}
        <div style={{background:'#fdf8f0', border:'2px solid #e8d5b7', borderRadius:'16px', padding:'28px', marginBottom:'40px'}}>
          <h3 style={{fontFamily:'Playfair Display', fontSize:'22px', color:'#1a1a1a', marginBottom:'20px'}}>
             Product Highlights
          </h3>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'16px'}}>
            {[
              {icon:'', text:'Top Rated on Amazon'},
              {icon:'', text:'Fast Delivery Available'},
              {icon:'', text:'Easy Returns Policy'},
              {icon:'', text:'Authentic Product'},
            ].map(item => (
              <div key={item.text} style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{fontSize:'20px'}}>{item.icon}</span>
                <span style={{color:'#555', fontSize:'14px'}}>{item.text}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:'24px', paddingTop:'24px', borderTop:'1px solid #e8d5b7'}}>
            <a href={post.amazonLink} target="_blank" rel="noopener noreferrer"
              style={{background:'#c9a96e', color:'white', padding:'16px 40px', borderRadius:'50px', fontSize:'18px', textDecoration:'none', display:'inline-block', fontWeight:'500'}}>
              🛒 Buy on Amazon →
            </a>
            <p style={{color:'#aaa', fontSize:'12px', marginTop:'12px'}}>
              * This is an affiliate link. We may earn a commission at no extra cost to you.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div style={{background:'white', borderRadius:'16px', padding:'24px', marginBottom:'40px', display:'flex', gap:'20px', alignItems:'center', boxShadow:'0 2px 12px rgba(0,0,0,0.06)', flexWrap:'wrap'}}>
          <div style={{width:'64px', height:'64px', borderRadius:'50%', background:'#c9a96e', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', flexShrink:0}}>
            👗
          </div>
          <div>
            <h4 style={{fontFamily:'Playfair Display', fontSize:'18px', color:'#1a1a1a', marginBottom:'6px'}}>TrendByAK</h4>
            <p style={{color:'#888', fontSize:'14px', lineHeight:'1.6'}}>
              Fashion enthusiast sharing the latest trends, jewelry picks, and style inspiration. All products are carefully curated from Amazon.
            </p>
          </div>
        </div>

      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div style={{background:'#f5f0ea', padding:'60px 24px'}}>
          <div style={{maxWidth:'900px', margin:'0 auto'}}>
            <p style={{color:'#c9a96e', fontSize:'13px', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'8px'}}>More Like This</p>
            <h2 style={{fontFamily:'Playfair Display', fontSize:'clamp(24px, 3vw, 36px)', color:'#1a1a1a', marginBottom:'32px'}}>
              Related Posts
            </h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'24px'}}>
              {related.map(p => (
                <Link key={p._id} to={`/post/${p.slug}`} style={{textDecoration:'none'}}
                  onClick={() => window.scrollTo(0,0)}>
                  <div style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.06)', transition:'transform 0.2s'}}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                    <img src={p.image} alt={p.title}
                      style={{width:'100%', height:'180px', objectFit:'cover'}} />
                    <div style={{padding:'16px'}}>
                      <h4 style={{fontFamily:'Playfair Display', fontSize:'16px', color:'#1a1a1a', marginBottom:'8px'}}>
                        {p.title}
                      </h4>
                      <p style={{color:'#c9a96e', fontSize:'13px', fontWeight:'500'}}>Read more →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />

    </div>
  )
}

export default PostDetail