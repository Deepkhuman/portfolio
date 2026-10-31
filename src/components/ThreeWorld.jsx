import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeWorld = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, isMobile ? 0.045 : 0.035);

    const camera = new THREE.PerspectiveCamera(
      isMobile ? 70 : 60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = isMobile ? 10 : 8;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile, // Disable MSAA on low-end mobile for battery efficiency
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3.5, 30);
    cyanLight.position.set(4, 3, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 30);
    purpleLight.position.set(-4, -2, 2);
    scene.add(purpleLight);

    // 3. 3D Particle Constellation (Mobile Optimized)
    const particleCount = isMobile ? 450 : 1200;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x38bdf8);
    const c2 = new THREE.Color(0x818cf8);
    const c3 = new THREE.Color(0xc084fc);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * (isMobile ? 25 : 35);
      posArray[i + 1] = (Math.random() - 0.5) * (isMobile ? 35 : 45);
      posArray[i + 2] = (Math.random() - 0.5) * 25;

      const mixed = Math.random();
      const col = mixed < 0.4 ? c1 : mixed < 0.7 ? c2 : c3;
      colorArray[i] = col.r;
      colorArray[i + 1] = col.g;
      colorArray[i + 2] = col.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colorArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.07 : 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 4. Floating 3D Background Geometries
    const group3D = new THREE.Group();
    scene.add(group3D);

    const torusGeo = new THREE.TorusGeometry(isMobile ? 1.8 : 2.5, 0.4, 16, 48);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      roughness: 0.2,
      metalness: 0.8,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(isMobile ? -3 : -6, -2, -6);
    group3D.add(torusMesh);

    const icoGeo = new THREE.IcosahedronGeometry(isMobile ? 1.5 : 2, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      roughness: 0.3,
      metalness: 0.9,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(isMobile ? 3 : 7, 3, -8);
    group3D.add(icoMesh);

    // 5. Scroll & Orientation/Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Mobile DeviceOrientation (Gyroscopic tilt when available)
    const handleDeviceOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        targetMouseX = Math.min(Math.max(e.gamma / 30, -1), 1);
        targetMouseY = Math.min(Math.max((e.beta - 45) / 30, -1), 1);
      }
    };

    let scrollProgress = 0;
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = window.scrollY / maxScroll;
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      camera.fov = mobile ? 70 : 60;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      particlesMesh.rotation.y = elapsedTime * 0.02 + mouseX * 0.08;
      particlesMesh.rotation.x = elapsedTime * 0.01 - mouseY * 0.08;

      torusMesh.rotation.x = elapsedTime * 0.12;
      torusMesh.rotation.y = elapsedTime * 0.15;
      icoMesh.rotation.x = -elapsedTime * 0.15;
      icoMesh.rotation.y = elapsedTime * 0.2;

      cyanLight.position.x = Math.sin(elapsedTime * 0.7) * 5 + mouseX * 2;
      cyanLight.position.y = Math.cos(elapsedTime * 0.5) * 4 + mouseY * 2;

      purpleLight.position.x = -Math.sin(elapsedTime * 0.6) * 5 - mouseX * 2;
      purpleLight.position.y = -Math.cos(elapsedTime * 0.8) * 4 - mouseY * 2;

      // Parallax camera path
      const baseCamZ = window.innerWidth < 768 ? 10 : 8;
      const targetCamY = -scrollProgress * 12;
      const targetCamZ = baseCamZ + Math.sin(scrollProgress * Math.PI) * 2;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.lookAt(0, camera.position.y, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ThreeWorld;
