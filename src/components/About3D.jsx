import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FaLaptopCode, FaShieldAlt, FaRocket, FaMapMarkerAlt } from 'react-icons/fa';
import data from '../../Data.json';

const About3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || 320;
    let height = mount.clientHeight || 340;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 7.6 : 6.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 4, 15);
    cyanLight.position.set(3, 3, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4, 15);
    purpleLight.position.set(-3, -2, 2);
    scene.add(purpleLight);

    // 3. Central 3D Holographic Monolith Group
    const hologramGroup = new THREE.Group();
    scene.add(hologramGroup);

    // Main 3D Floating Glass Plate
    const plateGeo = new THREE.BoxGeometry(3.2, 2.2, 0.08);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.75,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    hologramGroup.add(plateMesh);

    // Bezel Wireframe for Plate
    const bezelGeo = new THREE.BoxGeometry(3.26, 2.26, 0.1);
    const bezelMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    hologramGroup.add(bezelMesh);

    // Floating Holographic Ring around Monolith
    const ringGeo = new THREE.TorusGeometry(2.0, 0.025, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    hologramGroup.add(ringMesh);

    // 3D Inner Code Lattice Core
    const coreGeo = new THREE.OctahedronGeometry(0.65, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0, 0.3);
    hologramGroup.add(coreMesh);

    // Orbiting 3D Data Spheres
    const dataCount = 5;
    const dataNodes = [];
    const sphereGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });

    for (let i = 0; i < dataCount; i++) {
      const node = new THREE.Mesh(sphereGeo, sphereMat);
      hologramGroup.add(node);
      dataNodes.push({
        mesh: node,
        radius: 1.7,
        speed: 1.2 + i * 0.2,
        offset: (i / dataCount) * Math.PI * 2,
      });
    }

    // 4. Mouse Tracking for 3D Perspective Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      hologramGroup.rotation.y = mouseX * 0.35;
      hologramGroup.rotation.x = -mouseY * 0.25;
      hologramGroup.position.y = Math.sin(elapsed * 1.5) * 0.08;

      coreMesh.rotation.y = elapsed * 0.6;
      coreMesh.rotation.x = elapsed * 0.4;
      ringMesh.rotation.z = elapsed * 0.3;

      dataNodes.forEach((d) => {
        const a = elapsed * d.speed + d.offset;
        d.mesh.position.x = Math.cos(a) * d.radius;
        d.mesh.position.y = Math.sin(a * 1.5) * 0.5;
        d.mesh.position.z = Math.sin(a) * d.radius * 0.5 + 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      const mobile = window.innerWidth < 768;
      camera.aspect = width / height;
      camera.position.z = mobile ? 7.6 : 6.2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      plateGeo.dispose();
      plateMat.dispose();
      bezelGeo.dispose();
      bezelMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400">
          <FaLaptopCode />
          <span>3D Architecture & Background</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Engineering In <span className="text-gradient-cyan">Three Dimensions</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          Building high-performance, resilient web architecture with clean code and cutting-edge 3D user experiences.
        </p>
      </div>

      {/* Grid: 3D Holographic Monolith + Interactive Bento Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* 3D WebGL Holographic Terminal */}
        <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[420px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full cursor-pointer touch-pan-y" />

          {/* Floating UI HUD overlaid on 3D Monolith */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-[10px] sm:text-xs font-mono text-cyan-400 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Three.js System Core Active</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 bg-slate-950/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10 pointer-events-none text-xs font-mono text-slate-300">
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-white/10 text-cyan-400">
              <span className="text-[11px] sm:text-xs font-bold">Devang Khuman // MERN</span>
              <span className="text-emerald-400 text-[10px]">● ONLINE</span>
            </div>
            <p className="text-slate-400 text-[10px] sm:text-[11px] leading-relaxed">
              Full-cycle engineering: from database schema & REST microservices to 60fps WebGL rendering.
            </p>
          </div>
        </div>

        {/* Technical Capabilities Bento */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          {/* Main Story Card */}
          <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-white/10 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm sm:text-base">
                <FaRocket />
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">Full-Stack Philosophy</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {data.about.description}
            </p>
          </div>

          {/* Code Configuration Snippet Card */}
          <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-slate-500 text-[10px]">stack.config.js</span>
            </div>

            <div className="space-y-1">
              <p><span className="text-purple-400">export default</span> &#123;</p>
              <p className="pl-3 sm:pl-4"><span className="text-slate-400">frontend:</span> <span className="text-cyan-300">["React 19", "Three.js", "Tailwind"]</span>,</p>
              <p className="pl-3 sm:pl-4"><span className="text-slate-400">backend:</span> <span className="text-emerald-300">["Node.js", "Express.js", "APIs"]</span>,</p>
              <p className="pl-3 sm:pl-4"><span className="text-slate-400">database:</span> <span className="text-amber-300">["MongoDB", "MySQL"]</span>,</p>
              <p className="pl-3 sm:pl-4"><span className="text-slate-400">architecture:</span> <span className="text-purple-300">"Scalable & 60fps"</span></p>
              <p>&#125;;</p>
            </div>
          </div>

          {/* Quick Metrics & Global Status */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <FaShieldAlt className="text-xs sm:text-sm" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Quality</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white">Clean & Tested</div>
              <p className="text-[10px] sm:text-[11px] text-slate-400">Production-grade code</p>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <FaMapMarkerAlt className="text-xs sm:text-sm" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Location</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white">Remote Ready</div>
              <p className="text-[10px] sm:text-[11px] text-slate-400">Worldwide availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3D;
