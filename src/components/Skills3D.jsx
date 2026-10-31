import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FaLayerGroup, FaHandPointer } from 'react-icons/fa';

const skillsData = [
  {
    name: 'React 19',
    category: 'Frontend',
    color: '#38bdf8',
    hex: 0x38bdf8,
    radius: 3.2,
    speed: 0.6,
    angleOffset: 0,
    elevation: 0.4,
    size: 0.38,
    level: 'Advanced',
    desc: 'Component architecture, Virtual DOM, Custom Hooks & 3D WebGL',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#4ade80',
    hex: 0x4ade80,
    radius: 4.2,
    speed: 0.45,
    angleOffset: 1.2,
    elevation: -0.5,
    size: 0.36,
    level: 'Advanced',
    desc: 'Asynchronous event-driven I/O, microservices & RESTful API engines',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    color: '#34d399',
    hex: 0x34d399,
    radius: 5.1,
    speed: 0.35,
    angleOffset: 2.3,
    elevation: 0.6,
    size: 0.35,
    level: 'Advanced',
    desc: 'Document schema design, indexing, aggregations & database scaling',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    color: '#cbd5e1',
    hex: 0xcbd5e1,
    radius: 3.7,
    speed: 0.52,
    angleOffset: 3.4,
    elevation: -0.3,
    size: 0.32,
    level: 'Advanced',
    desc: 'Routing middleware, JWT auth security & controller abstractions',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    color: '#facc15',
    hex: 0xfacc15,
    radius: 4.7,
    speed: 0.4,
    angleOffset: 4.5,
    elevation: 0.3,
    size: 0.34,
    level: 'Expert',
    desc: 'Closures, asynchronous execution, DOM rendering & performance',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: '#67e8f9',
    hex: 0x67e8f9,
    radius: 2.8,
    speed: 0.7,
    angleOffset: 5.2,
    elevation: -0.4,
    size: 0.3,
    level: 'Expert',
    desc: 'Custom design systems, responsive utilities & modern 3D glassmorphism',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    color: '#60a5fa',
    hex: 0x60a5fa,
    radius: 5.8,
    speed: 0.28,
    angleOffset: 0.8,
    elevation: -0.6,
    size: 0.34,
    level: 'Intermediate',
    desc: 'Containerized deployment pipelines, Dockerfiles & multi-container compose',
  },
  {
    name: 'AWS Cloud',
    category: 'DevOps',
    color: '#fbbf24',
    hex: 0xfbbf24,
    radius: 6.5,
    speed: 0.22,
    angleOffset: 2.9,
    elevation: 0.5,
    size: 0.36,
    level: 'Intermediate',
    desc: 'EC2 instance provisioning, S3 bucket storage & production hosting',
  },
  {
    name: 'Git & GitHub',
    category: 'DevOps',
    color: '#f97316',
    hex: 0xf97316,
    radius: 6.1,
    speed: 0.25,
    angleOffset: 4.1,
    elevation: -0.2,
    size: 0.3,
    level: 'Advanced',
    desc: 'Version control branching, CI/CD automated deployments & pull requests',
  },
];

const Skills3D = () => {
  const mountRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const [hoveredSkillName, setHoveredSkillName] = useState(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight || 450;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    // Camera is pulled further back on mobile portrait to fit all orbits
    camera.position.set(0, isMobile ? 8.5 : 5, isMobile ? 14 : 9.5);
    camera.lookAt(0, 0, 0);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0x38bdf8, 4, 25);
    centerPointLight.position.set(0, 0, 0);
    scene.add(centerPointLight);

    const topLight = new THREE.DirectionalLight(0x818cf8, 2);
    topLight.position.set(5, 10, 7);
    scene.add(topLight);

    // 3. Central MERN Core Star
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const coreGeo = new THREE.SphereGeometry(isMobile ? 0.85 : 1.0, 24, 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    const coreHaloGeo = new THREE.IcosahedronGeometry(isMobile ? 1.05 : 1.2, 1);
    const coreHaloMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreHalo = new THREE.Mesh(coreHaloGeo, coreHaloMat);
    coreGroup.add(coreHalo);

    // 4. Create Helper for 3D Text Badge Canvas
    const createBadgeTexture = (text, color) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 56, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 26px "Space Grotesk", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      return texture;
    };

    // 5. Build Orbiting 3D Skill Nodes
    const skillMeshes = [];
    const galaxyGroup = new THREE.Group();
    scene.add(galaxyGroup);

    skillsData.forEach((skill) => {
      const nodeGroup = new THREE.Group();
      galaxyGroup.add(nodeGroup);

      const sphereGeo = new THREE.SphereGeometry(skill.size, 20, 20);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: skill.hex,
        emissive: skill.hex,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.userData = { skill };
      nodeGroup.add(sphere);

      const ringGeo = new THREE.TorusGeometry(skill.size * 1.5, 0.015, 10, 36);
      const ringMat = new THREE.MeshBasicMaterial({
        color: skill.hex,
        transparent: true,
        opacity: 0.6,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      nodeGroup.add(ring);

      const badgeTex = createBadgeTexture(skill.name, skill.color);
      const badgeGeo = new THREE.PlaneGeometry(isMobile ? 1.4 : 1.2, isMobile ? 0.35 : 0.3);
      const badgeMat = new THREE.MeshBasicMaterial({
        map: badgeTex,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      });
      const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
      badgeMesh.position.y = skill.size + 0.35;
      nodeGroup.add(badgeMesh);

      const orbitCurve = new THREE.EllipseCurve(
        0,
        0,
        skill.radius,
        skill.radius,
        0,
        2 * Math.PI,
        false,
        0
      );
      const orbitPts = orbitCurve.getPoints(48);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(
        orbitPts.map((p) => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitMat = new THREE.LineBasicMaterial({
        color: skill.hex,
        transparent: true,
        opacity: 0.15,
      });
      const orbitLine = new THREE.Line(orbitGeo, orbitMat);
      galaxyGroup.add(orbitLine);

      skillMeshes.push({
        group: nodeGroup,
        sphere,
        badge: badgeMesh,
        orbitLine,
        data: skill,
      });
    });

    // 6. Interactive Mouse & Touch (Mobile scroll-friendly)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotY = 0;
    let rotX = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 + 1);

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.007;
        targetRotX += deltaY * 0.007;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const handleSelectPlanet = (clientX, clientY) => {
      const rect = mount.getBoundingClientRect();
      const clickMouse = new THREE.Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -(((clientY - rect.top) / rect.height) * 2 - 1)
      );
      raycaster.setFromCamera(clickMouse, camera);
      const intersects = raycaster.intersectObjects(
        skillMeshes.map((s) => s.sphere)
      );
      if (intersects.length > 0) {
        const clicked = intersects[0].object.userData.skill;
        if (clicked) {
          setSelectedSkill(clicked);
        }
      }
    };

    const onClick = (e) => {
      handleSelectPlanet(e.clientX, e.clientY);
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    mount.addEventListener('click', onClick);

    // Mobile touch interaction: capture horizontal drag, allow vertical page scroll
    let touchStartX = 0;
    let touchStartY = 0;
    let isHorizontal = false;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        prevMouseX = touchStartX;
        prevMouseY = touchStartY;
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
          const deltaY = curY - prevMouseY;
          targetRotY += deltaX * 0.009;
          targetRotX += deltaY * 0.009;
          prevMouseX = curX;
          prevMouseY = curY;
        }
      }
    };

    const onTouchEnd = (e) => {
      if (!isHorizontal && e.changedTouches && e.changedTouches.length === 1) {
        // Tap detected on mobile
        handleSelectPlanet(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
      isDragging = false;
      isHorizontal = false;
    };

    mount.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 7. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      rotY += (targetRotY - rotY) * 0.08;
      rotX += (targetRotX - rotX) * 0.08;
      galaxyGroup.rotation.y = rotY;
      galaxyGroup.rotation.x = rotX;

      coreMesh.rotation.y = elapsed * 0.4;
      coreHalo.rotation.y = -elapsed * 0.3;
      coreHalo.rotation.x = elapsed * 0.2;

      skillMeshes.forEach(({ group, badge, data }) => {
        const angle = elapsed * data.speed * 0.4 + data.angleOffset;
        const x = Math.cos(angle) * data.radius;
        const z = Math.sin(angle) * data.radius;
        const y = Math.sin(angle * 2) * 0.3 + data.elevation;

        group.position.set(x, y, z);
        badge.quaternion.copy(camera.quaternion);
      });

      // Hover Raycasting
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        skillMeshes.map((s) => s.sphere)
      );

      if (intersects.length > 0) {
        const hovered = intersects[0].object.userData.skill;
        setHoveredSkillName(hovered.name);
        mount.style.cursor = 'pointer';
        intersects[0].object.scale.set(1.35, 1.35, 1.35);
      } else {
        setHoveredSkillName(null);
        mount.style.cursor = isDragging ? 'grabbing' : 'grab';
        skillMeshes.forEach((s) => s.sphere.scale.set(1, 1, 1));
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
      camera.position.set(0, mobile ? 8.5 : 5, mobile ? 14 : 9.5);
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
      mount.removeEventListener('click', onClick);
      mount.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      coreHaloGeo.dispose();
      coreHaloMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400">
          <FaLayerGroup />
          <span>Interactive WebGL Experience</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          3D Technical <span className="text-gradient-cyan">Galaxy</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          Swipe in 3D space to orbit around the technical universe. Tap any planetary node to inspect its architecture.
        </p>

        {/* 3D Mobile-Friendly Helper Controls Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-1 text-[11px] sm:text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <FaHandPointer size={11} /> Swipe to Rotate
          </span>
          <span>•</span>
          <span className="text-slate-300">Tap Planet to Inspect</span>
        </div>
      </div>

      {/* 3D WebGL Canvas Container + HUD */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Three.js Mount */}
          <div ref={mountRef} className="w-full h-full touch-pan-y" />

          {/* Top-Left: Active Hover / Target Indicator */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none z-10">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs text-slate-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>
                Target: <strong className="text-white">{hoveredSkillName || selectedSkill.name}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Synchronized Inspection HUD (Cleanly docked underneath on mobile, floating on desktop) */}
        <div className="w-full">
          <div
            className="p-5 sm:p-6 rounded-2xl glass-panel bg-slate-950/90 border border-white/15 backdrop-blur-xl shadow-2xl transition-all duration-300"
            style={{
              borderColor: selectedSkill.color,
              boxShadow: `0 10px 30px -10px ${selectedSkill.color}33`,
            }}
          >
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10 mb-2.5 sm:mb-3">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: selectedSkill.color }}
                ></span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedSkill.name}
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-cyan-300">
                {selectedSkill.level}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              {selectedSkill.desc}
            </p>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono pt-2 border-t border-white/5">
              <span>Domain: <strong className="text-white">{selectedSkill.category}</strong></span>
              <span className="text-cyan-400">Status: Active in Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills3D;
