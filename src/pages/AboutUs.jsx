import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div style={{minHeight:'100vh', background:'#faf9f7'}}>
      <Navbar />

      {/* Hero */}
      <div style={{background:'#1a1a1a', padding:'80px 24px', textAlign:'center'}}>
        <p style={{color:'#c9a96e', fontSize:'13px', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'16px'}}>
          Our Story
        </p>
        <h1 style={{fontFamily:'Playfair Display', fontSize:'clamp(32px, 5vw, 52px)', color:'white', marginBottom:'20px'}}>
          About TrendByAK
        </h1>
        <p style={{color:'#999', fontSize:'18px', maxWidth:'600px', margin:'0 auto'}}>
          Your trusted destination for the latest fashion trends & accessories
        </p>
      </div>

      {/* Content */}
      <div style={{maxWidth:'800px', margin:'0 auto', padding:'60px 24px'}}>

        {/* Mission */}
        <div style={{marginBottom:'48px', textAlign:'center'}}>
          <h2 style={{fontFamily:'Playfair Display', fontSize:'32px', color:'#1a1a1a', marginBottom:'16px'}}>
            Our Mission
          </h2>
          <p style={{color:'#666', fontSize:'17px', lineHeight:'1.9'}}>
            At TrendByAK, we believe everyone deserves to look and feel their best. Our mission is to curate the finest fashion products — from stunning jewelry to elegant dresses — and bring them directly to you through our carefully selected Amazon recommendations.
          </p>
        </div>

        {/* Values */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'24px', marginBottom:'48px'}}>
          {[
            {icon:'💍', title:'Quality First', desc:'Every product is handpicked for quality and style'},
            {icon:'🎯', title:'Honest Reviews', desc:'We only recommend products we truly believe in'},
            {icon:'💰', title:'Best Value', desc:'Finding you the best deals on Amazon'},
            {icon:'✨', title:'Stay Trendy', desc:'Always up to date with latest fashion trends'},
          ].map(item => (
            <div key={item.title} style={{background:'white', padding:'24px', borderRadius:'16px', textAlign:'center', boxShadow:'0 2px 12px rgba(0,0,0,0.06)'}}>
              <div style={{fontSize:'36px', marginBottom:'12px'}}>{item.icon}</div>
              <h3 style={{fontFamily:'Playfair Display', fontSize:'18px', color:'#1a1a1a', marginBottom:'8px'}}>{item.title}</h3>
              <p style={{color:'#888', fontSize:'14px', lineHeight:'1.6'}}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div style={{background:'#1a1a1a', borderRadius:'20px', padding:'40px', marginBottom:'48px'}}>
          <h2 style={{fontFamily:'Playfair Display', fontSize:'28px', color:'#c9a96e', marginBottom:'20px'}}>
            Our Story
          </h2>
          <p style={{color:'#999', fontSize:'16px', lineHeight:'1.9', marginBottom:'16px'}}>
            TrendByAK was born out of a passion for fashion and a desire to help people find the perfect accessories without spending hours searching online.
          </p>
          <p style={{color:'#999', fontSize:'16px', lineHeight:'1.9'}}>
            We handpick every product featured on our site, ensuring that our readers get only the best recommendations. From timeless jewelry pieces to the latest dress trends, we cover it all — so you don't have to!
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div style={{background:'#fdf8f0', border:'2px solid #e8d5b7', borderRadius:'16px', padding:'28px'}}>
          <h3 style={{fontFamily:'Playfair Display', fontSize:'20px', color:'#1a1a1a', marginBottom:'12px'}}>
            📋 Affiliate Disclosure
          </h3>
          <p style={{color:'#666', fontSize:'15px', lineHeight:'1.8'}}>
            TrendByAK is a participant in the Amazon Services LLC Associates Program. This means we earn a small commission when you purchase through our links — at absolutely no extra cost to you. This helps us keep the site running and continue bringing you great content!
          </p>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default AboutUs