export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mengenal lebih dekat dengan background dan keahlian saya
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Background</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam mengembangkan aplikasi web
              modern. Saya memiliki passion yang besar dalam teknologi dan selalu antusias untuk mempelajari hal-hal
              baru.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fokus utama saya adalah menciptakan pengalaman pengguna yang luar biasa melalui kode yang clean,
              efisien, dan mudah dipelihara.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keahlian</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>React.js / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">🎓 Pendidikan</h4>
              <p className="text-gray-600">
                S1 Teknik Informatika
                <br />
                Universitas Indonesia (2018-2022)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">💼 Pengalaman</h4>
              <p className="text-gray-600">
                Frontend Developer di Tech Company
                <br />
                (2022 - Sekarang)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">🏆 Pencapaian</h4>
              <p className="text-gray-600">
                • Best Graduate Award 2022
                <br />• Hackathon Winner 2021
                <br />• Open Source Contributor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
