import hero from './assets/hero.webp'
export default function PerseidaEPK() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
            style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/*<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />*/}

         <div className="relative z-50 max-w-4xl px-6 animate-fadeIn -translate-y-30">
                 
          <h1 className="text-6xl md:text-8xl font-bold tracking-[0.4em] mb-6 text-slate-100">
            PERSEIDA
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            De Cielo y Tierra
          </p>

          <div className="flex flex-wrap justify-center gap-4 translate-y-30">
            <a
              href="#musica"
              className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 shadow-2xl"
            >
              Escuchar música
            </a>

            <a
              href="#epk"
              className="px-8 py-4 rounded-2xl border border-slate-400 hover:bg-white hover:text-black transition-all duration-300"
            >
              Descargar EPK
            </a>

            <a
              href="#contacto"
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
              alt="PERSEIDA"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-wide text-violet-300">
              SOBRE LA BANDA
            </h2>

            <p className="text-slate-300 leading-8 text-lg mb-6">
              Perseida es una banda nacida Burgos con ganas de dar de qué hablar
              y traer un nuevo aliento al rock y a la música independiente.
            </p>

            <p className="text-slate-400 leading-8 text-lg">
              Con una propuesta intensa y atmosférica, el grupo combina capas
              envolventes de guitarras, dinámicas explosivas y una identidad
              visual profundamente artística. Su directo busca generar una
              experiencia inmersiva y emocional.
            </p>
          </div>
        </div>
      </section>

      {/* ESCUCHA AHORA */}
      <section
        id="musica"
        className="py-24 px-6 md:px-20 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-100">
            ESCUCHA AHORA
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl mb-4 text-violet-300">Spotify</h3>
              <iframe
                src="https://open.spotify.com/embed/track/11dFghVXANMlKmJXsNCbNl"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              />
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl mb-4 text-violet-300">YouTube</h3>
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allowFullScreen
              />
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl mb-4 text-violet-300">Bandcamp</h3>
              <iframe
                style={{ border: 0, width: '100%', height: '120px' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=0/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
                seamless
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-24 px-6 md:px-20 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-violet-300">
            VÍDEOS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl shadow-2xl border border-slate-800"
              >
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="video"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTOS */}
      <section className="py-24 px-6 md:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-100">
            FOTOS PROMOCIONALES
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="PERSEIDA"
                className="rounded-3xl object-cover h-96 w-full hover:scale-105 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRENSA */}
      <section className="py-24 px-6 md:px-20 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-violet-300">
            PRENSA & REVIEWS
          </h2>

          <div className="space-y-8">
            <blockquote className="text-2xl italic text-slate-300 leading-relaxed border-l-4 border-violet-500 pl-6 text-left">
              “Una propuesta intensa y emocional capaz de transformar el silencio
              en una tormenta sonora.”
            </blockquote>

            <blockquote className="text-2xl italic text-slate-400 leading-relaxed border-l-4 border-slate-500 pl-6 text-left">
              “PERSEIDA combina sensibilidad cinematográfica con explosiones de
              energía post-rock.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* CONCIERTOS */}
      <section className="py-24 px-6 md:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-100">
            PRÓXIMOS CONCIERTOS
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-violet-300">
                <tr>
                  <th className="p-5">Fecha</th>
                  <th className="p-5">Ciudad</th>
                  <th className="p-5">Sala / Festival</th>
                  <th className="p-5">Entradas</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-800">
                  <td className="p-5">12 JUN 2026</td>
                  <td className="p-5">Madrid</td>
                  <td className="p-5">Sala Mon</td>
                  <td className="p-5">
                    <button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all">
                      Comprar
                    </button>
                  </td>
                </tr>

                <tr className="border-t border-slate-800">
                  <td className="p-5">20 JUL 2026</td>
                  <td className="p-5">Bilbao</td>
                  <td className="p-5">BBK Live</td>
                  <td className="p-5">
                    <button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all">
                      Comprar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EPK */}
      <section id="epk" className="py-24 px-6 md:px-20 bg-slate-950 text-center">
        <h2 className="text-5xl font-bold mb-12 text-violet-300">
          RIDER & DOSSIER
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {['Technical Rider PDF', 'Stage Plot PDF', 'Press Kit PDF'].map(
            (item) => (
              <button
                key={item}
                className="px-8 py-4 rounded-2xl border border-slate-600 hover:bg-white hover:text-black transition-all duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-6 md:px-20 bg-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-slate-100">
            CONTACTO
          </h2>

          <div className="space-y-4 text-lg text-slate-300 mb-12">
            <p>Management: perseida.musica@gmail.com</p>
            <p>Instagram: @perseida.music</p>
            <p>YouTube: PERSEIDA Official</p>
            <p>Spotify: PERSEIDA</p>
          </div>

          <form className="grid gap-6 text-left">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Mensaje"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white text-lg">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* INSTAGRAM FLOAT */}
      <a
        href="https://instagram.com"
        target="_blank"
        className="fixed bottom-6 right-6 bg-violet-600 hover:bg-violet-500 p-5 rounded-full shadow-2xl transition-all duration-300 z-50"
      >
        IG
      </a>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-10 text-center text-slate-500 bg-black">
        <p>© 2026 PERSEIDA — perseidamusic.com</p>
      </footer>
    </div>
  )
}
