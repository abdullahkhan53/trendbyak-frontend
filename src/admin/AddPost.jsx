import { useState } from 'react'
import axios from 'axios'

function AddPost() {
  const [form, setForm] = useState({
    title: '', description: '', content: '',
    amazonLink: '', category: 'jewelry'
  })
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('description', form.description)
    formData.append('content', form.content)
    formData.append('amazonLink', form.amazonLink)
    formData.append('category', form.category)
    formData.append('image', image)

    try {
      await axios.post('https://trendbyak-backend.onrender.com/api/posts/create', formData)
      setMessage('Post published! ✅')
      setForm({ title: '', description: '', content: '', amazonLink: '', category: 'jewelry' })
      setImage(null)
    } catch (err) {
      setMessage('Error: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div style={{minHeight:'100vh', background:'#faf9f7'}}>

      {/* Navbar */}
      <nav style={{background:'#1a1a1a', padding:'16px 40px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span style={{fontFamily:'Playfair Display', fontSize:'24px', color:'#c9a96e'}}>
          TrendByAK — Admin
        </span>
      </nav>

      {/* Form */}
      <div style={{maxWidth:'700px', margin:'0 auto', padding:'60px 40px'}}>
        <h1 style={{fontFamily:'Playfair Display', fontSize:'36px', color:'#1a1a1a', marginBottom:'40px'}}>
          Add New Post
        </h1>

        {/* Title */}
        <div style={{marginBottom:'20px'}}>
          <label style={{display:'block', marginBottom:'8px', fontWeight:'500'}}>Title</label>
          <input value={form.title}
            onChange={e => setForm({...form, title: e.target.value})}
            style={{width:'100%', padding:'12px 16px', border:'1px solid #ddd', borderRadius:'8px', fontSize:'16px'}}
            placeholder="Post title..." />
        </div>

        {/* Category */}
        <div style={{marginBottom:'20px'}}>
          <label style={{display:'block', marginBottom:'8px', fontWeight:'500'}}>Category</label>
          <select value={form.category}
            onChange={e => setForm({...form, category: e.target.value})}
            style={{width:'100%', padding:'12px 16px', border:'1px solid #ddd', borderRadius:'8px', fontSize:'16px'}}>
            <option value="jewelry">Jewelry</option>
            <option value="dresses">Dresses</option>
            <option value="handbags">Handbags</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* Description */}
        <div style={{marginBottom:'20px'}}>
          <label style={{display:'block', marginBottom:'8px', fontWeight:'500'}}>Description</label>
          <input value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
            style={{width:'100%', padding:'12px 16px', border:'1px solid #ddd', borderRadius:'8px', fontSize:'16px'}}
            placeholder="Short description..." />
        </div>

        {/* Content */}
        <div style={{marginBottom:'20px'}}>
          <label style={{display:'block', marginBottom:'8px', fontWeight:'500'}}>Content</label>
          <textarea value={form.content}
            onChange={e => setForm({...form, content: e.target.value})}
            rows={6}
            style={{width:'100%', padding:'12px 16px', border:'1px solid #ddd', borderRadius:'8px', fontSize:'16px', resize:'vertical'}}
            placeholder="Full post content..." />
        </div>

        {/* Amazon Link */}
        <div style={{marginBottom:'20px'}}>
          <label style={{display:'block', marginBottom:'8px', fontWeight:'500'}}>Amazon Link</label>
          <input value={form.amazonLink}
            onChange={e => setForm({...form, amazonLink: e.target.value})}
            style={{width:'100%', padding:'12px 16px', border:'1px solid #ddd', borderRadius:'8px', fontSize:'16px'}}
            placeholder="https://amazon.com/dp/..." />
        </div>

        {/* Image */}
        <div style={{marginBottom:'30px'}}>
          <label style={{display:'block', marginBottom:'8px', fontWeight:'500'}}>Image</label>
          <input type="file" accept="image/*"
            onChange={e => setImage(e.target.files[0])}
            style={{width:'100%', padding:'12px 16px', border:'1px solid #ddd', borderRadius:'8px', fontSize:'16px'}} />
        </div>

        {/* Message */}
        {message && (
          <p style={{color: message.includes('Error') ? 'red' : 'green', marginBottom:'20px', fontWeight:'500'}}>
            {message}
          </p>
        )}

        {/* Submit Button */}
        <button onClick={handleSubmit} disabled={loading}
          style={{background:'#c9a96e', color:'white', padding:'16px 40px', borderRadius:'50px', fontSize:'18px', border:'none', cursor:'pointer', width:'100%'}}>
          {loading ? 'Publishing...' : 'Publish Post 🚀'}
        </button>

      </div>
    </div>
  )
}

export default AddPost