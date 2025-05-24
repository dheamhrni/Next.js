import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

// Types
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
}

// Data
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan dashboard admin.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur drag & drop, kolaborasi tim, dan notifikasi real-time.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/username/taskapp",
    liveUrl: "https://taskapp-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard cuaca interaktif dengan visualisasi data, forecast, dan peta cuaca real-time.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/username/weather",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beberapa project yang telah saya kerjakan dengan berbagai teknologi modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/dheamhrni"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <Github className="w-5 h-5 mr-2" />
            Lihat semua project di GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
