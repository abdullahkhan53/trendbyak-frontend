import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  return (
    <div style={{minHeight:'100vh', background:'#faf9f7'}}>
      <Navbar />

      <div style={{maxWidth:'800px', margin:'0 auto', padding:'60px 24px'}}>
        <h1 style={{fontFamily:'Playfair Display', fontSize:'40px', color:'#1a1a1a', marginBottom:'8px'}}>
          Privacy Policy
        </h1>
        <p style={{color:'#999', fontSize:'14px', marginBottom:'40px'}}>
          Last updated: May 2026
        </p>

        {[
          {
            title: 'Introduction',
            content: 'Welcome to TrendByAK ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website trendbyak.com.'
          },
          {
            title: 'Information We Collect',
            content: 'We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.'
          },
          {
            title: 'How We Use Your Information',
            content: 'We use the information we collect to provide, maintain, and improve our website, send you updates and marketing communications (if you have opted in), respond to your comments and questions, and monitor and analyze trends and usage.'
          },
          {
            title: 'Cookies',
            content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
          },
          {
            title: 'Amazon Affiliate Disclosure',
            content: 'TrendByAK is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases at no additional cost to you.'
          },
          {
            title: 'Third Party Links',
            content: 'Our website may contain links to third-party websites, including Amazon.com. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies.'
          },
          {
            title: 'Data Security',
            content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
          },
          {
            title: 'Contact Us',
            content: 'If you have any questions about this Privacy Policy, please contact us at: contact@trendbyak.com'
          }
        ].map(section => (
          <div key={section.title} style={{marginBottom:'32px'}}>
            <h2 style={{fontFamily:'Playfair Display', fontSize:'22px', color:'#1a1a1a', marginBottom:'12px'}}>
              {section.title}
            </h2>
            <p style={{color:'#666', fontSize:'16px', lineHeight:'1.8'}}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy