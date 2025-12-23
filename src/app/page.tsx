import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="section container hero-content">
        <div className="hero-text fade-in" style={{ animationDelay: '0.2s' }}>
          <p>Welcome to my portfolio</p>
          <h1>I Create <br /> Digital Experiences.</h1>
          <p>
            Creative Developer & Designer focused on building premium web applications
            that combine aesthetic design with powerful functionality.
          </p>
          <div className="hero-buttons flex gap-4">
            <a href="#projects" className="btn">View Work</a>
            <a href="#contact" className="btn" style={{ background: 'transparent' }}>Contact Me</a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-float fade-in" style={{ animationDelay: '0.4s' }}>
          <Image
            src="/hero-image.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <h2 className="section-title text-4xl font-bold mb-8">About Me</h2>
        <div className="glass p-8 fade-in">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I am a passionate developer with a keen eye for design. I specialize in Next.js, React, and modern web technologies.
            My goal is to create interfaces that are not only functional but also visually stunning and intuitive.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <h2 className="section-title text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card glass">
            <div>
              <h3>E-Commerce Platform</h3>
              <p>A modern e-commerce solution with real-time inventory and secure payments.</p>
            </div>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">Stripe</span>
              <span className="tag">Tailwind</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card glass">
            <div>
              <h3>SaaS Dashboard</h3>
              <p>Analytics dashboard with data visualization and user management system.</p>
            </div>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">D3.js</span>
              <span className="tag">Firebase</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card glass">
            <div>
              <h3>AI Image Generator</h3>
              <p>Web application that uses AI to generate unique artwork from text prompts.</p>
            </div>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">React</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container">
        <div className="max-w-2xl mx-auto w-full glass p-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-input" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-textarea" rows={5} placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="btn w-full mt-4">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 border-t border-white/5">
      <p>© {new Date().getFullYear()} Creative Folio. All rights reserved.</p>
    </footer>
  );
}
