import './globals.css'
import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const PROJECTS = [
  {
    title: "Social Listening Tool",
    description: "Analyze text online to deliver comprehensive sentiment analysis using AI, offering codified big data insights to clients.Provide insights into user discussions about your own brands on social medias like Facebook and compare them with competitor brands using clear visual graphs and detailed reports.",
    technologies: ["Laravel", "Javascript", "MySQL", "MongoDB"],
    githubLink: "https://business.baganintel.com/en"
  },
  {
    title: "Digital Ordering Platform", 
    description: "Create digital menus for a wide range of products for online business owners.",
    technologies: ["React.js", "Tailwind Css", "Figma"],
    githubLink: "https://vimeo.com/814846991"
  },
  {
    title: "Dealer Management System", 
    description: "A digital managable system for used cars trading in thailand.",
    technologies: ["Laravel", "React.js", "Vue.js", "Mysql"],
    githubLink: "https://lemonaide.co.th/lemonaide-saas/"
  }
]

const SKILLS = [
  "PHP", "Laravel", "CodeIgniter", "Restful API",
  "JavaScript", "TypeScript", "React","Next.js", "Vue.js", "Tailwind CSS", "HTML5" ,
  "MySQL", "MongoDB", "Git", "GitHub", "Linux OS",
  "GraphQL", "Docker", "AWS", "Robot Framwork for automation", "Cypress"
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Zin - Web Artisan</title>
        <meta name="description" content="Professional portfolio of a web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navigation */}
        <nav className="fixed w-full z-20 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-600">Zin</h1>
            <div className="space-x-4">
              {['Home', 'Projects', 'Skills', 'Contact'].map(section => (
                <Link 
                  key={section} 
                  href={`#${section.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {section}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="pt-24 pb-16 bg-gradient-to-r from-gray-500 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto rounded-full w-48 h-48 mb-6 relative">
              <Image 
                src="/profile.jpg" 
                alt="Profile Picture" 
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Web Artisan - Full Stack Developer</h1>
            <p className="text-xl mb-8">Specialized backend with laravel for 4 years.Enjoy working frontend using React.js . That's how a became a fullstack.</p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="https://github.com/kristen-kurt" 
                target="_blank"
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100"
              >
                GitHub
              </Link>
              <Link 
                href="resume.pdf" 
                download
                target="_blank"
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.githubLink} 
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.map(skill => (
                <span 
                  key={skill} 
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl mb-8">Interested in collaborating or hiring me?</p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="mailto:zinthidar101@gmail.com" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
              >
                Send an Email
              </Link>
              <Link 
                href="https://www.linkedin.com/in/zin-artisan" 
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p>© 2025 by Zin. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  )
}