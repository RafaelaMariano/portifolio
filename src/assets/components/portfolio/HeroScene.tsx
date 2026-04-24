import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function HeroScene() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight

        const scene = new THREE.Scene()
        scene.fog = new THREE.FogExp2('#0B0F1A', 0.08)

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
        camera.position.set(0, 0, 13)

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor('#0B0F1A', 0)
        containerRef.current.appendChild(renderer.domElement)

        const ambientLight = new THREE.AmbientLight('#ffffff', 0.4)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight('#ff8c42', 1.2)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)

        const geometry = new THREE.IcosahedronGeometry(3.2, 3)
        const material = new THREE.MeshStandardMaterial({
            color: '#ff8c42',
            roughness: 0.25,
            metalness: 0.75,
            emissive: '#5a210e',
            emissiveIntensity: 0.35,
            flatShading: false,
        })

        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        const particlesGeometry = new THREE.BufferGeometry()
        const count = 1200
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i += 1) {
            positions[i * 3] = (Math.random() - 0.5) * 24
            positions[i * 3 + 1] = (Math.random() - 0.5) * 24
            positions[i * 3 + 2] = (Math.random() - 0.5) * 24
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        const particlesMaterial = new THREE.PointsMaterial({
            color: '#ffffff',
            size: 0.045,
            transparent: true,
            opacity: 0.75,
        })

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        const handleResize = () => {
            if (!containerRef.current) return
            const newWidth = containerRef.current.clientWidth
            const newHeight = containerRef.current.clientHeight
            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()
            renderer.setSize(newWidth, newHeight)
        }

        window.addEventListener('resize', handleResize)

        let frameId = 0
        const animate = () => {
            frameId = requestAnimationFrame(animate)
            sphere.rotation.y += 0.005
            sphere.rotation.x += 0.002
            particles.rotation.y += 0.001
            renderer.render(scene, camera)
        }

        gsap.from(sphere.position, {
            y: -1.5,
            duration: 1.6,
            ease: 'power3.out',
        })

        animate()

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
            scene.clear()
            if (containerRef.current?.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])

    return (
        <div className="relative w-full h-full min-h-[620px] ">

            <div ref={containerRef} className="w-full h-full" />

            <img
                src={"./src/assets/bro.svg"}
                alt="visual"
                className="absolute inset-0 object-contain w-full h-full pointer-events-none "
            />


        </div>
    )
}
