import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Sidebar() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.from(ref.current, {
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
    }, [])

    return (
        <aside
            ref={ref}
            className="w-64 p-6 border-r border-white/10 bg-white/5 backdrop-blur-xl"
        >
            <h1 className="text-xl font-bold text-purple-400 mb-8">
                Pulse
            </h1>

            <nav className="space-y-4">
                <a className="block hover:text-purple-400 transition">Dashboard</a>
                <a className="block hover:text-purple-400 transition">Analytics</a>
                <a className="block hover:text-purple-400 transition">Reports</a>
            </nav>
        </aside>
    )
}