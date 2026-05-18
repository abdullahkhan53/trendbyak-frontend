import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: ''
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all fields!')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
  'service_nuaynmr',
  'template_bvj073q',
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
    time: new Date().toLocaleString(),
  },
  'HNzCAHTCHeOkbf8sP'
)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('Something went wrong. Please try again!')
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <div style={{minHeight:'100vh', background:'#faf9f7'}}>
      <Navbar />

      {/* Hero */}
      <div style={{background:'#1a1a1a', padding:'80px 24px', textAlign:'center'}}>
        <p style={{color:'#c9a96e', fontSize:'13px', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'16px'}}>
          Get In Touch
        </p>
        <h1 style={{fontFamily:'Playfair Display', fontSize:'clamp(32px, 5vw, 52px)', color:'white', marginBottom:'20px'}}>
          Contact Us
        </h1>
        <p style={{color:'#999', fontSize:'18px'}}>
          We'd love to hear from you!
        </p>
      </div>

      <div style={{maxWidth:'1000px', margin:'0 auto', padding:'60px 24px'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'40px'}}>

          {/* Contact Info */}
          <div>
            <h2 style={{fontFamily:'Playfair Display', fontSize:'28px', color:'#1a1a1a', marginBottom:'24px'}}>
              Let's Talk
            </h2>
            <p style={{color:'#666', fontSize:'16px', lineHeight:'1.8', marginBottom:'32px'}}>
              Have a question about a product? Want to collaborate? Or just want to say hello? We're here for you!
            </p>

            {[
              {icon:'📧', title:'Email', value:'contact@trendbyak.com'},
              {icon:'📌', title:'Pinterest', value:'pinterest.com/trendbyak'},
              {icon:'🌐', title:'Website', value:'trendbyak.com'},
            ].map(item => (
              <div key={item.title} style={{display:'flex', gap:'16px', alignItems:'center', marginBottom:'20px'}}>
                <div style={{width:'48px', height:'48px', background:'#e8d5b7', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0}}>
                  {item.icon}
                </div>
                <div>
                  <p style={{color:'#999', fontSize:'13px'}}>{item.title}</p>
                  <p style={{color:'#1a1a1a', fontSize:'15px', fontWeight:'500'}}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div style={{background:'white', borderRadius:'20px', padding:'32px', boxShadow:'0 2px 20px rgba(0,0,0,0.06)'}}>
            {sent ? (
              <div style={{textAlign:'center', padding:'40px 0'}}>
                <div style={{fontSize:'60px', marginBottom:'16px'}}>✅</div>
                <h3 style={{fontFamily:'Playfair Display', fontSize:'24px', color:'#1a1a1a', marginBottom:'12px'}}>
                  Message Sent!
                </h3>
                <p style={{color:'#888'}}>We'll get back to you soon!</p>
              </div>
            ) : (
              <>
                <h3 style={{fontFamily:'Playfair Display', fontSize:'22px', color:'#1a1a1a', marginBottom:'24px'}}>
                  Send a Message
                </h3>

                <div style={{marginBottom:'16px'}}>
                  <label style={{display:'block', marginBottom:'8px', fontSize:'14px', fontWeight:'500', color:'#333'}}>Your Name</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Abdullah Khan"
                    style={{width:'100%', padding:'12px 16px', border:'1px solid #eee', borderRadius:'10px', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                  />
                </div>

                <div style={{marginBottom:'16px'}}>
                  <label style={{display:'block', marginBottom:'8px', fontSize:'14px', fontWeight:'500', color:'#333'}}>Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="you@email.com"
                    style={{width:'100%', padding:'12px 16px', border:'1px solid #eee', borderRadius:'10px', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                  />
                </div>

                <div style={{marginBottom:'16px'}}>
                  <label style={{display:'block', marginBottom:'8px', fontSize:'14px', fontWeight:'500', color:'#333'}}>Subject</label>
                  <input
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    placeholder="Product inquiry..."
                    style={{width:'100%', padding:'12px 16px', border:'1px solid #eee', borderRadius:'10px', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                  />
                </div>

                <div style={{marginBottom:'24px'}}>
                  <label style={{display:'block', marginBottom:'8px', fontSize:'14px', fontWeight:'500', color:'#333'}}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Your message here..."
                    rows={5}
                    style={{width:'100%', padding:'12px 16px', border:'1px solid #eee', borderRadius:'10px', fontSize:'15px', outline:'none', resize:'vertical', boxSizing:'border-box'}}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{width:'100%', background:'#c9a96e', color:'white', padding:'14px', borderRadius:'50px', border:'none', cursor:'pointer', fontSize:'16px', fontWeight:'500'}}>
                  {loading ? 'Sending...' : 'Send Message 📩'}
                </button>
              </>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact