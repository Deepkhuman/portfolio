import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const HeroScene3D = () => {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || 320;
    let height = mount.clientHeight || 320;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    // Move camera back on mobile to fit the viewport comfortably
    camera.position.z = isMobile ? 8.2 : 6.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.appendChild(renderer.domElement);

    // 2. Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xa855f7, 4.5, 20);
    rimLight.position.set(-4, -3, 2);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x06b6d4, 3, 15);
    fillLight.position.set(0, -4, 4);
    scene.add(fillLight);

    // 3. Central 3D Cyber Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Metallic Crystal
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.95,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Wireframe Outer Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.45, 1);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.8,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    // Gyro Rings
    const ring1Geo = new THREE.TorusGeometry(2.0, 0.04, 16, 80);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(2.2, 0.035, 16, 80);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.3,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = Math.PI / 3;
    ring2Mesh.rotation.y = Math.PI / 4;
    coreGroup.add(ring2Mesh);

    const ring3Geo = new THREE.TorusGeometry(1.8, 0.03, 16, 64);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.95,
    });
    const ring3Mesh = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3Mesh.rotation.x = -Math.PI / 4;
    ring3Mesh.rotation.z = Math.PI / 3;
    coreGroup.add(ring3Mesh);

    // Orbiting Satellites
    const nodeCount = 5;
    const nodeGroup = new THREE.Group();
    coreGroup.add(nodeGroup);

    const nodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const nodeColors = [0x38bdf8, 0x4ade80, 0xa855f7, 0xfacc15, 0x60a5fa];
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.8,
        roughness: 0.1,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      nodes.push({
        mesh: node,
        speed: 0.8 + i * 0.2,
        radius: 2.3 + (i % 2) * 0.3,
        angleOffset: (i / nodeCount) * Math.PI * 2,
        elevation: (i - 2) * 0.4,
      });
      nodeGroup.add(node);
    }

    // 4. Mouse & Touch Drag (Mobile-Safe so page scrolling isn't blocked)
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let velX = 0;
    let velY = 0;
    let hoverX = 0;
    let hoverY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      hoverX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      hoverY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;
        velY = deltaX * 0.007;
        velX = deltaY * 0.007;
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch Handling (Smart threshold: only capture if horizontal swipe to protect page scroll)
    let touchStartX = 0;
    let touchStartY = 0;
    let isHorizontalGesture = false;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        prevX = touchStartX;
        prevY = touchStartY;
        isHorizontalGesture = false;
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = Math.abs(currentX - touchStartX);
        const diffY = Math.abs(currentY - touchStartY);

        // If user is predominantly dragging horizontally, take control
        if (diffX > diffY && diffX > 8) {
          isHorizontalGesture = true;
          isDragging = true;
          setIsInteracting(true);
        }

        if (isHorizontalGesture) {
          const deltaX = currentX - prevX;
          const deltaY = currentY - prevY;
          velY = deltaX * 0.009;
          velX = deltaY * 0.009;
          prevX = currentX;
          prevY = currentY;
        }
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      isHorizontalGesture = false;
      setTimeout(() => setIsInteracting(false), 800);
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

      if (isDragging) {
        coreGroup.rotation.y += velY;
        coreGroup.rotation.x += velX;
      } else {
        velX *= 0.94;
        velY *= 0.94;
        coreGroup.rotation.y += velY + 0.006;
        coreGroup.rotation.x += velX + 0.003;

        coreGroup.position.x += (hoverX * 0.15 - coreGroup.position.x) * 0.05;
        coreGroup.position.y += (hoverY * 0.15 - coreGroup.position.y) * 0.05;
      }

      coreMesh.rotation.y = -elapsed * 0.4;
      coreMesh.rotation.x = elapsed * 0.3;
      cageMesh.rotation.y = elapsed * 0.25;
      ring1Mesh.rotation.z = elapsed * 0.5;
      ring2Mesh.rotation.z = -elapsed * 0.4;
      ring3Mesh.rotation.x = elapsed * 0.6;

      nodes.forEach((n) => {
        const a = elapsed * n.speed + n.angleOffset;
        n.mesh.position.x = Math.cos(a) * n.radius;
        n.mesh.position.z = Math.sin(a) * n.radius;
        n.mesh.position.y = Math.sin(a * 1.5) * 0.8 + n.elevation;
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
      camera.position.z = mobile ? 8.2 : 6.5;
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
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[440px] aspect-square flex items-center justify-center select-none mx-auto">
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 touch-pan-y"
        title="Swipe or drag to orbit in 3D"
      />

      {/* Floating 3D Tech Chips with Mobile-Responsive Sizing */}
      <div className="absolute top-2 left-1 sm:top-4 sm:left-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow">
        <FaReact className="text-cyan-400 text-sm sm:text-lg animate-spin-slow" />
        <span className="text-[10px] sm:text-xs font-semibold text-slate-200">React 19</span>
      </div>

      <div
        className="absolute bottom-6 left-1 sm:bottom-8 sm:left-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow"
        style={{ animationDelay: '1.5s' }}
      >
        <SiMongodb className="text-emerald-400 text-sm sm:text-lg" />
        <span className="text-[10px] sm:text-xs font-semibold text-slate-200">MongoDB</span>
      </div>

      <div
        className="absolute top-4 right-1 sm:top-6 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-indigo-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow"
        style={{ animationDelay: '2.5s' }}
      >
        <FaNodeJs className="text-green-400 text-sm sm:text-lg" />
        <span className="text-[10px] sm:text-xs font-semibold text-slate-200">Node.js</span>
      </div>

      <div
        className="absolute bottom-8 right-1 sm:bottom-10 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-purple-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow"
        style={{ animationDelay: '3.5s' }}
      >
        <SiExpress className="text-purple-300 text-sm sm:text-lg" />
        <span className="text-[10px] sm:text-xs font-semibold text-slate-200">Express</span>
      </div>

      {/* Helper Touch/Click Pill */}
      <div className="absolute -bottom-2 z-20 flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-slate-400 shadow-xl pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        <span>{isInteracting ? 'Rotating 3D Model...' : 'Swipe to Orbit in 3D'}</span>
      </div>
    </div>
  );
};

export default HeroScene3D;
