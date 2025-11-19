// import React from 'react'
// import AnimatedText from '@/Components/AnimatedText'
// import { Link } from 'react-router-dom'
// import ProfilePicture from "/images/profile/profile.png";
// import { BackgroundBeams } from '@/Components/ui/background-beams'
// import { HoverBorderGradient } from "@/Components/ui/hover-border-gradient";

// const Home = () => {
//     return (
//         <>
//             <main className="mb-5 relative flex items-center w-full min-h-screen -my-20 overflow-hidden">
//                 {/* Background */}
//                 <BackgroundBeams className="z-0" />

//                 {/* Content */}
//                 <div className="relative w-full h-full inline-block sm:p-20 p-5 pt-0 z-10">
//                     <div className="flex items-center justify-center h-full">
//                         <div className="lg:w-[60%] md:w-full flex flex-col items-center justify-center self-center">

//                             <div className='w-20 h-20 overflow-hidden rounded-full mb-2'>
//                                 <img src={ProfilePicture} className='w-full h-full object-cover' />
//                             </div>

//                             <AnimatedText
//                                 text="Turning Vision Into Reality With Code"
//                                 className="lg:text-6xl sm:text-7xl text-[59px]"
//                             />

//                             <p className="text-center lg:text-xs text-sm font-medium sm:w-[59%] w-full sm:my-1 my-8">
//                                 As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
//                                 Explore my latest projects, showcasing my expertise in React.js and web development.
//                             </p>

//                             <div className="flex gap-4 items-center self-center mt-6">
//                                 <Link
//                                     to="/Resume.pdf"
//                                     target="_blank"
//                                     download={true}
//                                 >
//                                     <HoverBorderGradient>
//                                         Resume
//                                     </HoverBorderGradient>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Home




import { useEffect, useRef } from "react";
import * as THREE from "three";
import Hero from "/images/profile/hero.png";
import ShareButton from "@/Components/ui/share-button";
import { Facebook, Twitter, Linkedin, Mail, Github } from "lucide-react";
import { vertexShader, fragmentShader } from "@/lib/shaders";

export default function Home() {

    const links = [
        {
            icon: Facebook,
            onClick: () =>
                window.open(`https://www.facebook.com/gitaben.patel.18488`, "_blank"),
        },
        {
            icon: Twitter,
            onClick: () => window.open(`https://x.com/tanish__29`, "_blank"),
        },
        {
            icon: Linkedin,
            onClick: () =>
                window.open(
                    `https://www.linkedin.com/in/tanish-patel-99579b339/`,
                    "_blank"
                ),
        },
        {
            icon: Github,
            onClick: () => window.open(`https://github.com/Tanish-source`, "_blank"),
        },
        {
            icon: Mail,
            onClick: () => window.open(`mailto:`, "_blank"),
        },
    ];

    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const imageElement = imgRef.current;

        const config = {
            lerpFactor: 0.010,
            parallaxStrength: 0.1,
            distortionMultiplier: 10,
            glassStrength: 2.0,
            glassSmoothness: 0.0001,
            stripesFrequency: 70,
            edgePadding: 0.1,
        };

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const mouse = { x: 0.5, y: 0.5 };
        const targetMouse = { x: 0.5, y: 0.5 };

        const lerp = (a, b, t) => a + (b - a) * t;

        const textureSize = { x: 1, y: 1 };

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: null },
                uResolution: {
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
                },
                uTextureSize: {
                    value: new THREE.Vector2(textureSize.x, textureSize.y),
                },
                uMouse: { value: new THREE.Vector2(mouse.x, mouse.y) },
                uParallaxStrength: { value: config.parallaxStrength },
                uDistortionMultiplier: { value: config.distortionMultiplier },
                uGlassStrength: { value: config.glassStrength },
                uStripesFrequency: { value: config.stripesFrequency },
                uGlassSmoothness: { value: config.glassSmoothness },
                uEdgePadding: { value: config.edgePadding },
            },
            vertexShader,
            fragmentShader,
        });

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);

        function loadImage() {
            const texture = new THREE.Texture(imageElement);
            textureSize.x = imageElement.naturalWidth || imageElement.width;
            textureSize.y = imageElement.naturalHeight || imageElement.height;

            texture.needsUpdate = true;
            material.uniforms.uTexture.value = texture;
            material.uniforms.uTextureSize.value.set(textureSize.x, textureSize.y);
        }

        if (imageElement.complete) loadImage();
        else imageElement.onload = loadImage;

        window.addEventListener("mousemove", (e) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1 - e.clientY / window.innerHeight;
        });

        window.addEventListener("resize", () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.uResolution.value.set(
                window.innerWidth,
                window.innerHeight
            );
        });

        function animate() {
            requestAnimationFrame(animate);
            mouse.x = lerp(mouse.x, targetMouse.x, config.lerpFactor);
            mouse.y = lerp(mouse.y, targetMouse.y, config.lerpFactor);
            material.uniforms.uMouse.value.set(mouse.x, mouse.y);
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden z-0"
        >
            <header className="px-6 py-6 w-full font-medium flex items-center justify-between absolute">

                <div className="w-full sm:flex items-center justify-between hidden">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="tracking-[5px] text-sm">TANISH PATEL</h2>
                        <h2 className="text-gray-500 text-xs">
                            Passionate Full-Stack Developer
                        </h2>
                    </div>
                    <ShareButton links={links}>Let's Connect</ShareButton>
                </div>

            </header>
            {/* Hidden texture image */}
            <img ref={imgRef} src={Hero} alt="" className="hidden" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full py-6 px-6 sm:w-[60%]">
                <h1 className="text-3xl md:text-6xl font-medium leading-none tracking-tight">
                    Turning vision into reality with code and design
                </h1>
            </div>
        </section>
    );
}
