import Header from "../assets/components/layout/Header"

const projects = [
  {
    title: "Sistema de Identidade Visual",
    subtitle: "Design de UI/UX para produtos",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Landing Page Interativa",
    subtitle: "Experiência de usuário envolvente para conversão",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Saas Dashboard",
    subtitle: "Painel interativo para equipes corporativas",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <Header />

      <section id="work" className="px-6 py-16 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <span className="text-sm uppercase text-orange-400/90">
            Projetos selecionados
          </span>
          <h2 className="text-4xl font-semibold md:text-4xl">
            Projetos que combinam profundidade visual com clareza digital.
          </h2>
          <p className="max-w-2xl text-slate-300 sm:text-lg">
            Exemplos de sistemas Saas, interfaces de produtos e páginas de destino imersivas criadas para se destacarem em meio a experiências digitais saturadas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-orange-400/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6 space-y-3">
                <p className="text-xs uppercase text-orange-400/90">
                  Projetos em destaques
                </p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-slate-300">{project.subtitle}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-100"
                >
                  Ver detalhes →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_0.65fr] items-center">
            <div className="space-y-4">
              <span className="inline-flex text-base text-orange-600 uppercase rounded-full bg-white/5">
                Por que trabalhar comigo?
              </span>
              <h2 className="text-4xl font-semibold leading-tight text-gray-800 md:text-5xl">
                Design de portfólio moderno com forte narrativa e dinamismo.
              </h2>
              <p className="max-w-xl text-gray-800 sm:text-lg">
                Eu construo interfaces refinadas, ecossistemas de marca e experiências de produto interativas usando Tailwind, GSAP e Three.js para garantir que cada tela seja memorável e intuitiva.
              </p>
              {/* <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
                  <p className="text-3xl font-semibold text-white">12+</p>
                  <p className="mt-2 text-slate-300">Projects launched</p>
                </div>
                <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
                  <p className="text-3xl font-semibold text-white">5</p>
                  <p className="mt-2 text-slate-300">Brand systems</p>
                </div>
              </div> */}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.30)]">
              <h3 className="text-2xl font-semibold text-gray-800">Vamos construir sua próxima experiência.</h3>
              <p className="mt-4 text-gray-800">
                Pronto para elevar sua marca com uma estratégia visual refinada e uma presença digital envolvente? Envie-me uma mensagem e vamos conversar sobre o conceito.
              </p>
              <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                <a
                  id="contact"
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white uppercase transition bg-orange-400 rounded-full hover:bg-orange-300"
                >
                  contate-me
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition border rounded-full border-white/10 bg-white/5 hover:bg-white/10"
                >
                  Ver meu trabalho
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
