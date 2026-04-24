import { useEffect } from "react"
import gsap from "gsap"
import HeroScene from "../portfolio/HeroScene"

export default function Header() {
  useEffect(() => {
    gsap.from(".nav-item", {
      y: -18,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
    })

    // gsap.from(".hero-copy", {
    //   y: 30,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out",
    //   stagger: 0.15,
    //   delay: 0.2,
    // })

    // gsap.from(".hero-button", {
    //   y: 20,
    //   opacity: 0,
    //   duration: 0.2,
    //   ease: "back.out(1.0)",
    //   stagger: 0.1,
    //   delay: 0.9,
    // })
  }, [])

  return (
    <header className="relative pb-10 overflow-hidden bg-white border-b border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-6 mx-auto max-w-7xl text-slate-300">

        <nav className="items-center hidden gap-8 text-sm md:flex">
          <a className="text-white transition nav-item hover:text-white" href="#work">
            Sobre mim
          </a>

          <a className="px-4 py-2 text-white transition border rounded-full nav-item border-white/10 bg-white/5 hover:bg-white/10" href="#about">
            Projetos
          </a>
          <a className="text-white transition nav-item hover:text-white" href="#contact">
            Contato
          </a>
        </nav>
      </div>

      <div className="px-6 pt-10 pb-16 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            {/* <div className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-orange-400">
              <img
                src="/src/assets/logo-rafa1.svg"
                alt="logo"
                className="w-8 h-8 mr-2"
              />
              Fullstack • UI/UX & experiência de usuário
            </div> */}
            <div className="space-y-6">
              <h1 className="hero-copy text-5xl font-semibold tracking-[-0.05em] text-gray-800 sm:text-5xl md:text-6xl">
                Desenvolvendo aplicações web modernas, performáticas e com foco na <span className="px-2 mt-4 text-orange-400/90 ">experiência do usuário</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-800 hero-copy sm:text-xl">
                Sou Rafaela, desenvolvedora front-end com experiência full stack, criando interfaces responsivas, sistemas escaláveis e aplicações seguras utilizando JavaScript, Tailwind, GSAP e PHP.
              </p>
            </div>

            <div className="flex flex-col gap-4 hero-copy sm:flex-row">
              <a className="inline-flex items-center justify-center py-4 text-sm font-semibold text-white text-gray-800 uppercase transition rounded-full bg-orange-400/90 hero-button px-7 hover:bg-orange-300" href="#work">
                Sobre mim
              </a>
              <a className="inline-flex items-center justify-center py-4 text-sm font-semibold text-orange-400 uppercase transition border border-orange-400 rounded-full hero-button bg-white/5 px-7 hover:bg-white/10" href="#contact">
                Ver projetos
              </a>
            </div>

            {/* <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-5 text-center border hero-copy rounded-3xl border-white/10 bg-white/5">
                <p className="text-3xl font-semibold text-white">12</p>
                <p className="mt-2 text-sm text-slate-300">Projetos feitos</p>
              </div>
              <div className="p-5 text-center border hero-copy rounded-3xl border-white/10 bg-white/5">
                <p className="text-3xl font-semibold text-white">5</p>
                <p className="mt-2 text-sm text-slate-300">Sistemas de marca</p>
              </div>
              <div className="p-5 text-center border hero-copy rounded-3xl border-white/10 bg-white/5">
                <p className="text-3xl font-semibold text-white">24</p>
                <p className="mt-2 text-sm text-slate-300">Interações animadas</p>
              </div>
            </div> */}
          </div>

          <div className="relative">

            <HeroScene />


          </div>
        </div>
      </div>
    </header>
  )
}
