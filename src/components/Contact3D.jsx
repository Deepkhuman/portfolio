import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FaEnvelope, FaCopy, FaCheck, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact3D = () => {
  const mountRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const email = 'devangkhuman2003@gmail.com';
  const pulseTriggerRef = useRef(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    pulseTriggerRef.current = 1.0;
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || 320;
    let height = mount.clientHeight || 320;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 7.6 : 6.5);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 4, 15);
    cyanLight.position.set(3, 4, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 15);
    purpleLight.position.set(-3, -3, 2);
    scene.add(purpleLight);

    // 3. Globe Transmitter Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globeGeo = new THREE.SphereGeometry(1.8, 24, 24);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.9,
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    const ringGeo = new THREE.TorusGeometry(2.3, 0.03, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    globeGroup.add(ringMesh);

    const waveCount = 3;
    const waves = [];
    const waveGeo = new THREE.RingGeometry(0.5, 0.54, 36);

    for (let i = 0; i < waveCount; i++) {
      const waveMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      const wave = new THREE.Mesh(waveGeo, waveMat);
      wave.rotation.x = Math.PI / 2;
      globeGroup.add(wave);
      waves.push({ mesh: wave, progress: i / waveCount });
    }

    // 4. Orientation & Mouse Tracking
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

      globeGroup.rotation.y = elapsed * 0.4 + mouseX * 0.4;
      globeGroup.rotation.x = mouseY * 0.3;
      coreMesh.rotation.y = -elapsed * 0.6;
      ringMesh.rotation.z = elapsed * 0.3;

      waves.forEach((w) => {
        w.progress += 0.01;
        if (w.progress > 1) w.progress = 0;
        const scale = 0.8 + w.progress * 3.5;
        w.mesh.scale.set(scale, scale, scale);
        w.mesh.material.opacity = (1 - w.progress) * 0.6;
      });

      if (pulseTriggerRef.current > 0.01) {
        pulseTriggerRef.current *= 0.92;
        coreMesh.scale.set(
          1 + pulseTriggerRef.current * 0.5,
          1 + pulseTriggerRef.current * 0.5,
          1 + pulseTriggerRef.current * 0.5
        );
        globeMat.opacity = 0.35 + pulseTriggerRef.current * 0.6;
      } else {
        coreMesh.scale.set(1, 1, 1);
        globeMat.opacity = 0.35;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      const mobile = window.innerWidth < 768;
      camera.aspect = width / height;
      camera.position.set(0, 0, mobile ? 7.6 : 6.5);
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
      globeGeo.dispose();
      globeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      waveGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400">
          <FaPaperPlane />
          <span>Interactive 3D Communication</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Connect In <span className="text-gradient-cyan">Real-Time</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-xs sm:text-sm md:text-base">
          Ready to build your next web application? Send a signal through the network — my inbox is always open.
        </p>
      </div>

      {/* Grid: 3D Signal Globe + Interactive Transmission Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* 3D WebGL Signal Globe */}
        <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[400px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full cursor-pointer touch-pan-y" />

          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-[10px] sm:text-xs font-mono text-cyan-400 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Signal Transmitter Online</span>
          </div>

          <div className="absolute bottom-4 z-10 text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 pointer-events-none">
            Move cursor to steer transmission wave
          </div>
        </div>

        {/* Contact Hub */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6 sm:space-y-8 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Fast response time: within 24 hours
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Direct Communication</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Open for full-stack engineering roles, technical contracting, and innovative web projects.
            </p>
          </div>

          {/* Email Copier Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 bg-slate-900/90 border border-white/10 p-2.5 sm:p-3 rounded-2xl">
            <div className="flex items-center gap-2.5 px-3 py-1.5 text-slate-300 font-mono text-xs sm:text-sm flex-1 truncate">
              <FaEnvelope className="text-cyan-400 shrink-0" />
              <span className="truncate">{email}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all cursor-pointer border border-white/5 min-h-[42px]"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 active:scale-95 shadow-md shadow-cyan-500/20 transition-all cursor-pointer min-h-[42px]"
              >
                <span>Send Mail</span>
                <FaPaperPlane size={11} />
              </a>
            </div>
          </div>

          {/* Direct Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            <a
              href="https://github.com/deepkhuman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all flex items-center sm:flex-col sm:items-start justify-between gap-3 group min-h-[48px]"
            >
              <FaGithub className="text-xl sm:text-2xl text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs font-bold text-white">GitHub</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">@deepkhuman</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/devang-khuman-364a28269"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all flex items-center sm:flex-col sm:items-start justify-between gap-3 group min-h-[48px]"
            >
              <FaLinkedin className="text-xl sm:text-2xl text-indigo-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs font-bold text-white">LinkedIn</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">Devang Khuman</div>
              </div>
            </a>

            <a
              href="https://twitter.com/GetMemes93957"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all flex items-center sm:flex-col sm:items-start justify-between gap-3 group min-h-[48px]"
            >
              <FaXTwitter className="text-xl sm:text-2xl text-purple-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs font-bold text-white">X / Twitter</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">@GetMemes93957</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3D;
