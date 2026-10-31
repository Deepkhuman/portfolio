import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaRocket, FaHandPointer } from 'react-icons/fa';
import sumangalImg from '../assets/sumangal.webp';
import cryptoverseImg from '../assets/cryptoverse.webp';
import parkmeImg from '../assets/parkme.webp';

const projectsList = [
  {
    title: 'Sumangal Matrimony',
    tagline: 'Matchmaking & Matrimonial Production Platform',
    description:
      'A scalable matchmaking platform built with modern UI/UX principles and robust backend logic. Features secure user authentication, advanced search filters, and user-centric profile management.',
    category: 'Full-Stack MERN',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: sumangalImg,
    liveUrl: 'https://sumangalglobal.com/',
    githubUrl: 'https://github.com/Deepkhuman',
    color: '#38bdf8',
    hex: 0x38bdf8,
    badge: 'Production App',
  },
  {
    title: 'Crypto Verse',
    tagline: 'Real-Time Cryptocurrency Analytics & Dashboard',
    description:
      'A live cryptocurrency tracker utilizing RapidAPI streams. Features dynamic market statistics, interactive financial coin analytics, and crypto rankings with responsive design.',
    category: 'Frontend & API',
    tags: ['React', 'RapidAPI', 'Tailwind CSS', 'Chart.js', 'Vite'],
    image: cryptoverseImg,
    liveUrl: '#',
    githubUrl: 'https://github.com/Deepkhuman',
    color: '#a855f7',
    hex: 0xa855f7,
    badge: 'Live Dashboard',
  },
  {
    title: 'Park.Me',
    tagline: 'Smart Vehicle Parking & Slot Management System',
    description:
      'A full-cycle smart vehicle parking system. Automates parking slot allocation, entry/exit tracking, slot occupancy vacancy in real-time, and administrative role-based access.',
    category: 'Full-Stack Architecture',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST'],
    image: parkmeImg,
    liveUrl: 'https://github.com/Deepkhuman/Park.me',
    githubUrl: 'https://github.com/Deepkhuman/Park.me',
    color: '#34d399',
    hex: 0x34d399,
    badge: 'System Architecture',
  },
];

const Projects3D = () => {
  const mountRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);

  const total = projectsList.length;
  const angleStep = (Math.PI * 2) / total;

  const handleNext = () => {
    const next = (activeIndex + 1) % total;
    setActiveIndex(next);
    targetAngleRef.current -= angleStep;
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + total) % total;
    setActiveIndex(prev);
    targetAngleRef.current += angleStep;
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight || 450;
    const isMobile = window.innerWidth < 768;

    // 1. Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, isMobile ? 9.8 : 7.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(5, 8, 8);
    scene.add(mainLight);

    const cyanRim = new THREE.PointLight(0x38bdf8, 3, 20);
    cyanRim.position.set(-6, 2, 4);
    scene.add(cyanRim);

    const purpleRim = new THREE.PointLight(0xa855f7, 3, 20);
    purpleRim.position.set(6, -2, 4);
    scene.add(purpleRim);

    // 3. Carousel 3D Group
    const carouselGroup = new THREE.Group();
    scene.add(carouselGroup);

    const radius = isMobile ? 3.4 : 3.8;
    const cards = [];
    const textureLoader = new THREE.TextureLoader();

    projectsList.forEach((project, i) => {
      const cardGroup = new THREE.Group();
      const angle = i * angleStep;

      cardGroup.position.x = Math.sin(angle) * radius;
      cardGroup.position.z = Math.cos(angle) * radius;
      cardGroup.rotation.y = angle;

      const cardWidth = isMobile ? 3.0 : 3.6;
      const cardHeight = isMobile ? 1.85 : 2.2;
      const cardDepth = 0.12;

      const texture = textureLoader.load(project.image);
      texture.colorSpace = THREE.SRGBColorSpace;

      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x090d16,
        roughness: 0.15,
        metalness: 0.9,
      });

      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0.1,
      });

      const materials = [
        frameMat,
        frameMat,
        frameMat,
        frameMat,
        frontMat,
        frameMat,
      ];

      const boxGeo = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
      const cardMesh = new THREE.Mesh(boxGeo, materials);
      cardMesh.userData = { index: i, project };
      cardGroup.add(cardMesh);

      const bezelGeo = new THREE.BoxGeometry(cardWidth + 0.08, cardHeight + 0.08, cardDepth * 0.8);
      const bezelMat = new THREE.MeshBasicMaterial({
        color: project.hex,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
      cardGroup.add(bezelMesh);

      const pedGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.08, 24);
      const pedMat = new THREE.MeshStandardMaterial({
        color: project.hex,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.4,
      });
      const pedMesh = new THREE.Mesh(pedGeo, pedMat);
      pedMesh.position.y = -cardHeight / 2 - 0.2;
      cardGroup.add(pedMesh);

      carouselGroup.add(cardGroup);
      cards.push({ cardGroup, cardMesh, bezelMesh, index: i });
    });

    // 4. Mouse Drag & Mobile Touch Gestures
    let isDragging = false;
    let prevMouseX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      targetAngleRef.current += deltaX * 0.006;
      prevMouseX = e.clientX;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      const normalizedAngle = -targetAngleRef.current;
      const snappedIndex = Math.round(normalizedAngle / angleStep);
      targetAngleRef.current = -snappedIndex * angleStep;
      const activeIdx = ((snappedIndex % total) + total) % total;
      setActiveIndex(activeIdx);
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Smart Mobile Touch: only take control if horizontal swipe
    let touchStartX = 0;
    let touchStartY = 0;
    let isHorizontal = false;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        prevMouseX = touchStartX;
        isHorizontal = false;
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        const curX = e.touches[0].clientX;
        const curY = e.touches[0].clientY;
        const diffX = Math.abs(curX - touchStartX);
        const diffY = Math.abs(curY - touchStartY);

        if (diffX > diffY && diffX > 8) {
          isHorizontal = true;
          isDragging = true;
        }

        if (isHorizontal) {
          const deltaX = curX - prevMouseX;
          targetAngleRef.current += deltaX * 0.009;
          prevMouseX = curX;
        }
      }
    };

    const onTouchEnd = () => {
      if (isDragging) {
        isDragging = false;
        isHorizontal = false;
        const normalizedAngle = -targetAngleRef.current;
        const snappedIndex = Math.round(normalizedAngle / angleStep);
        targetAngleRef.current = -snappedIndex * angleStep;
        const activeIdx = ((snappedIndex % total) + total) % total;
        setActiveIndex(activeIdx);
      }
    };

    mount.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 5. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      currentAngleRef.current += (targetAngleRef.current - currentAngleRef.current) * 0.08;
      carouselGroup.rotation.y = currentAngleRef.current;

      cards.forEach((c) => {
        const distFromFront = Math.cos(c.cardGroup.rotation.y + currentAngleRef.current);
        c.cardGroup.position.y = Math.sin(elapsed * 1.5 + c.index) * 0.06;

        if (distFromFront > 0.8) {
          c.bezelMesh.material.opacity = 0.8;
          c.cardMesh.scale.set(1.04, 1.04, 1.04);
        } else {
          c.bezelMesh.material.opacity = 0.25;
          c.cardMesh.scale.set(0.96, 0.96, 0.96);
        }
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
      camera.position.set(0, 0.4, mobile ? 9.8 : 7.8);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      mount.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const activeProject = projectsList[activeIndex];

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400">
          <FaRocket />
          <span>Interactive 3D WebGL Showcase</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          3D Project <span className="text-gradient-cyan">Gallery</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          Swipe horizontally in 3D space to rotate the curved showcase monoliths, or use the chevron buttons.
        </p>

        {/* Helper Badge */}
        <div className="flex items-center justify-center gap-2 pt-1 text-[11px] sm:text-xs text-cyan-400 font-mono">
          <FaHandPointer size={11} className="animate-pulse" />
          <span>Swipe Left / Right in 3D Space</span>
        </div>
      </div>

      {/* 3D WebGL Carousel Viewport */}
      <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
          title="Swipe horizontally to rotate 3D showcase"
        />

        {/* 3D Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl glass-panel bg-slate-950/85 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all shadow-xl cursor-pointer"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl glass-panel bg-slate-950/85 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all shadow-xl cursor-pointer"
        >
          <FaChevronRight size={14} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {projectsList.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => {
                const diff = idx - activeIndex;
                targetAngleRef.current -= diff * angleStep;
                setActiveIndex(idx);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'bg-cyan-400 w-5 sm:w-6'
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Synchronized Project Details HUD Card */}
      <div className="mt-6 sm:mt-8 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl transition-all duration-300">
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
          style={{ backgroundColor: activeProject.color }}
        ></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/10">
                {activeProject.badge}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                Category: <strong className="text-white">{activeProject.category}</strong>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              {activeProject.title}
            </h3>

            <p className="text-xs sm:text-sm font-medium text-cyan-400">
              {activeProject.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.description}
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5 sm:gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs: Full-width on mobile */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
            {activeProject.liveUrl && activeProject.liveUrl !== '#' ? (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer min-h-[46px]"
              >
                <span>Launch Live Project</span>
                <FaExternalLinkAlt size={11} />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-500 bg-white/5 border border-white/5 cursor-not-allowed min-h-[46px]">
                <span>Internal Project</span>
              </span>
            )}

            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 glass-panel glass-panel-hover hover:text-white active:scale-95 transition-all cursor-pointer min-h-[46px]"
            >
              <FaGithub size={15} />
              <span>Inspect Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
