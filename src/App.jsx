import hero from './assets/hero.webp'
import heroMobile from './assets/heroMobile.webp'
import photo1 from './assets/foto_1.webp'
import photo2 from './assets/Perseida_foto_02.webp'
import photo3 from './assets/Perseida_foto_03.webp'
import photo4 from './assets/Perseida_foto_04.webp'

export default function PerseidaEPK() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans scroll-smooth">
      {/* HERO */}
   <section className="relative min-h-screen min-h-[100svh] flex items-start justify-center text-center overflow-hidden bg-black">

  {/* Imagen movil */}
<img
  src={heroMobile}
  alt="PERSEIDA"
  className="absolute inset-0 block md:hidden w-full h-full object-cover"
/>

{/* Imagen escritorio */}
<img
  src={hero}
  alt="PERSEIDA"
  className="absolute inset-0 hidden md:block w-full h-full object-cover"
/>    
          <div className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 z-50 w-full px-6 text-center">
           
                 
          <h1 className="font-aventena text-7xl md:text-8xl tracking-[0.15em] md:tracking-[0.4em] mb-6 text-[#f04d00]">
            PERSEIDA
          </h1>

          <p className="font-aventena uppercase text-xl md:text-3xl tracking-[0.2em] text-slate-600">
            DE CIELO Y TIERRA
          </p>
  </div>
      <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-nowrap justify-center gap-3 px-4 w-full">

  <a
    href="#musica"
    className="flex-1 max-w-[180px] py-4 rounded-full bg-[#f04d00] text-white font-semibold text-sm md:text-base tracking-wide shadow-lg shadow-[#f04d00]/30 hover:scale-105 transition-all duration-300 text-center whitespace-nowrap"
  >
    Música
  </a>

  <a
    href="#epk"
    className="flex-1 max-w-[180px] py-4 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-white font-medium text-sm md:text-base tracking-wide hover:border-[#f04d00] hover:text-[#f04d00] transition-all duration-300 text-center whitespace-nowrap"
  >
    Dossier
  </a>

  <a
    href="#contacto"
    className="flex-1 max-w-[180px] py-4 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-white font-medium text-sm md:text-base tracking-wide hover:border-[#f04d00] hover:text-[#f04d00] transition-all duration-300 text-center whitespace-nowrap"
  >
    Contacto
  </a>

</div>
      
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={photo1}
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
              Con un sonido rock/grunge completamente fresco, dinámico y con 
              una personalidad muy marcada, el grupo combina letras críticas
              e introspectivas. Su directo busca emocionar al espectador y no
              dejar a nadie indiferente. 
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl mb-4 text-violet-300">Spotify</h3>
              <iframe
                src="https://open.spotify.com/embed/artist/3V0F5DuZvKeMFAC9RYhDgE"
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
                src="https://www.youtube.com/embed/i3GGIyp6uPk"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
    {/*
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl mb-4 text-violet-300">Bandcamp</h3>
              <iframe
                style={{ border: 0, width: '100%', height: '120px' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=0/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
                seamless
              />
            </div>*/}
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
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-slate-800">
                <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Nvofhvr4rm4"
                title="Perseida - La Culpa"
                allowFullScreen
                />
              </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl border border-slate-800">
                <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/lF8XkZWSeMk"
                title="Perseida - Qué asco me da"
                allowFullScreen
                 />
             </div>
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
            <img
              src={photo2}
              alt="Perseida - Foto promo 01"
              className="rounded-3xl object-cover h-64 md:h-96 w-full hover:scale-105 transition-all duration-500"
            />
            <img
                 src={photo3}
                alt="Perseida - Foto promo 02"
                className="rounded-3xl object-cover h-64 md:h-96 w-full hover:scale-105 transition-all duration-500"
            />

            <img
               src={photo4}
                alt="Perseida - Foto promo 03"
                className="rounded-3xl object-cover h-64 md:h-96 w-full hover:scale-105 transition-all duration-500"
             />
          </div>
        </div>
      </section>

      {/* PRENSA */}
      {/*    <section className="py-24 px-6 md:px-20 bg-slate-950">
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
      */}
    {/* CONCIERTOS */}
      {/* <section className="py-24 px-6 md:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-100">
            PRÓXIMOS CONCIERTOS
          </h2>

          <div className="overflow-x-auto rounded-3xl border border-slate-800">
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
      */}

      {/* EPK */}
      <section id="epk" className="py-24 px-6 md:px-20 bg-slate-950 text-center">
        <h2 className="text-5xl font-bold mb-12 text-violet-300">
          RIDER & DOSSIER
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
           <a
            href="/rider.pdf"
            download
            className="px-8 py-4 rounded-2xl border border-slate-600 hover:bg-white hover:text-black transition-all duration-300"
             >
            Rider Técnico PDF
            </a>
           <a
            href="/curriculum.pdf"
            download
            className="px-8 py-4 rounded-2xl border border-slate-600 hover:bg-white hover:text-black transition-all duration-300"
            >
            Curriculum PDF
            </a>
           <a
          href="/dossier.pdf"
          download
          className="px-8 py-4 rounded-2xl border border-slate-600 hover:bg-white hover:text-black transition-all duration-300"
          >
          Dossier PDF
          </a>
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
             <p>
                Instagram:{' '}
                  <a
                  href="https://instagram.com/perseida.music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 hover:text-violet-200 underline"
                  >
                @perseida.music
                  </a>
              </p>
              <p>
                YouTube:{' '}
                  <a
                  href="https://youtube.com/@Perseida.musica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 hover:text-violet-200 underline"
                  >
                Perseida Youtube
                  </a>
              </p>
               <p>
                Spotify:{' '}
                  <a
                  href="https://open.spotify.com/artist/3V0F5DuZvKeMFAC9RYhDgE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 hover:text-violet-200 underline"
                  >
                Perseida Spotify
                  </a>
                </p>
          </div>

          <form className="grid gap-6 text-left">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none text-base"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none text-base"
            />

            <textarea
              rows="6"
              placeholder="Mensaje"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none text-base"
            />

            <button className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white text-lg">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* INSTAGRAM FLOAT */}
     <a
        href="https://instagram.com/perseida.music"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-violet-600 hover:bg-violet-500 p-5 rounded-full shadow-2xl transition-all duration-300 z-50"
      >
        IG
      </a>
      
{/* APOYO INSTITUCIONAL */}
<section className="bg-slate-950 border-t border-slate-800 py-12 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-2xl font-semibold text-slate-200 mb-6">
      APOYO INSTITUCIONAL
    </h3>

    <p className="text-slate-400 mb-8 leading-relaxed">
      PERSEIDA ha recibido financiación del Ayuntamiento de Burgos
      para el desarrollo de su actividad artística y cultural.
    </p>

    <img
      src="/ayuntamiento-burgos.jpg"
      alt="Ayuntamiento de Burgos"
      className="mx-auto max-h-24 object-contain"
    />
  </div>
</section>
      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-10 text-center text-slate-500 bg-black">
        <p>© 2026 PERSEIDA — perseidamusic.com</p>
      </footer>
    </div>
  )
}
