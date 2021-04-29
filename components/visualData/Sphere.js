import * as THREE from 'three';
import {useRef, useEffect, useState} from 'react'
import {usePhoneVersion} from "../usePhoneVersion";

export const Sphere = () => {
    const globeRef = useRef(null)
    const phoneVersion = usePhoneVersion()
    let w = 0, h = 0;
    let scene, camera, renderer, globe;
    let orbitControls;

    useEffect(() => {
        const wBias = phoneVersion ? 1.65 : 1
        w = window.offsetWidth || window.innerWidth
        h = window.offsetHeight / 1.25 || window.innerHeight / 1.25
        orbitControls = require('three/examples/jsm/controls/OrbitControls').OrbitControls
        sceneSet()
        animate()
    }, [])

    const createSphereMesh = () => {
        const sphereGeo = new THREE.IcosahedronGeometry(0.08, 3)
        // sphereGeo.position = position
        const sphereMat = new THREE.MeshStandardMaterial({color: 0xff5149})

        return new THREE.Mesh(sphereGeo, sphereMat)

    }

    const sceneSet = () => {
        const radius = 2;

        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})

        const geometry = new THREE.IcosahedronGeometry(radius, 2);
        const material = new THREE.MeshBasicMaterial({color: 0xCCCCCC});
        const wireframe = new THREE.MeshBasicMaterial({color: 0x909090, wireframe: true, transparent: true})
        globe = new THREE.Mesh(geometry, material)

        const globeWireframe = new THREE.Mesh(geometry, wireframe)

        globe.add(globeWireframe)

        const s1 = createSphereMesh()
        s1.position.z = 1.9
        s1.position.x = 0.85
        s1.position.y = 0.3
        globe.add(s1)
        const s2 = createSphereMesh()
        s2.position.z = 1
        s2.position.x = 1.7
        s2.position.y = 0.5
        globe.add(s2)
        const s3 = createSphereMesh()
        s3.position.z = 0.9
        s3.position.y = 1.2
        s3.position.x = 1.4
        globe.add(s3)

        // scene.background = new THREE.Color(0xffffff)
        scene.background = null
        scene.fog = new THREE.Fog(0xffffff, 2.2, 4.7)

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8)
        const dLight = new THREE.DirectionalLight(0xffffff, 0.8)
        dLight.position.z = 2
        dLight.position.y = 4
        dLight.lookAt(scene.position)
        scene.add(hemiLight)
        scene.add(dLight)

        const control = new orbitControls(camera, renderer.domElement)

        control.enableDamping = true
        control.dampingFactor = 0.25
        control.enableZoom = false

        scene.add(globe)
        camera.position.z = 5;
        renderer.setSize(w, h)
        renderer.setClearColor(0xffffff, 0)

        globeRef.current.appendChild(renderer.domElement)

    }

    const animate = () => {
        requestAnimationFrame(animate);

        globe.rotation.x += 0.0015;
        globe.rotation.y += 0.0008;

        renderer.render(scene, camera)
    }

    return (<>
        <div ref={globeRef} />
    </>)
}
