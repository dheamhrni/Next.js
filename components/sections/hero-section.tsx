import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-gray-200 shadow-lg"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Halo, Saya <span className="text-blue-600">John Doe</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer yang passionate dalam menciptakan solusi digital inovatif
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Lihat Projects
            </a>
            <a
              href="#about"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Tentang Saya
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:john@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
