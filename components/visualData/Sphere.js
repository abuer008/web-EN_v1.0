import * as THREE from 'three';
import {useRef, useEffect, useState} from 'react'

export const Sphere = () => {
    const globeRef = useRef(null)
    let w = 0, h = 0;
    let scene, camera, renderer, globe;

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    useEffect(() => {
        w = window.offsetWidth / 1.65 || window.innerWidth / 1.65
        h = window.offsetHeight || window.innerHeight
        sceneSet()
        animate()
    }, [globeRef])

    const createGeometry = () => {
        const roundShape = new THREE.Shape()
        const x=0, y=0;

        roundShape.moveTo(285 + x, 120 + y)
        roundShape.bezierCurveTo(211 + x, 121 + y, 172 + x, 162 + y, 172 + x, 250 + y)
        roundShape.bezierCurveTo(172 + x, 327 + y, 211 + x, 364 + y, 286 + x, 364 + y)
        roundShape.bezierCurveTo(360 +x, 364 + y, 391 + x, 327 + y, 390 + x, 250 + y)
        roundShape.bezierCurveTo(389 + x, 162 + y, 358 + x, 120 + y, 285 + x, 120 + y)

        const extrudeSettings = {
            depth: 16,
            bevelEnabled: true,
            bevelSegments: 3,
            steps: 2,
            bevelSize: 1,
            bevelThickness: 1
        }

        const sGeo = new THREE.ExtrudeGeometry(roundShape, extrudeSettings)
        sGeo.rotateX(Math.PI)
        sGeo.scale(0.2, 0.2, 1)

        return sGeo
    }

    const sceneSet = () => {
        const radius = 2;
        // const count = 40;
        //
        // const pos = [];
        // const norm = [];
        // const colors = [];
        // const vector = new THREE.Vector3()
        // const color = new THREE.Color(0xffffff)

        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({antialias: true})

        const geometry = new THREE.IcosahedronGeometry(radius, 2);
        const material = new THREE.MeshBasicMaterial({color: 0xCCCCCC});
        const wireframe = new THREE.MeshBasicMaterial({color: 0x909090, wireframe: true, transparent: true})
        // const wireframe = new Wireframe( wireframeGeo, matLine )
        globe = new THREE.Mesh(geometry, material)

        // const extrudeGeo = createGeometry()
        // const lGeo = new THREE.Geometry();
        //
        // const bufferGeo = new THREE.BufferGeometry()
        //
        // for (let i = 1; i <= count; i++) {
        //     const phi = Math.acos(-1 + (2 * i) / count);
        //     const theta = Math.sqrt(count * Math.PI) * phi;
        //
        //     vector.setFromSphericalCoords(radius, phi, theta);
        //
        //     lGeo.copy(extrudeGeo)
        //     lGeo.lookAt(vector)
        //     lGeo.translate(vector.x, vector.y, vector.z)
        //
        //     color.setHSL((i / count) * 0.2, 1.0, 0.6)
        //
        //     lGeo.faces.forEach(face => {
        //         pos.push(lGeo.vertices[face.a].x)
        //         pos.push(lGeo.vertices[face.a].y)
        //         pos.push(lGeo.vertices[face.a].z)
        //         pos.push(lGeo.vertices[face.b].x)
        //         pos.push(lGeo.vertices[face.b].y)
        //         pos.push(lGeo.vertices[face.b].z)
        //         pos.push(lGeo.vertices[face.c].x)
        //         pos.push(lGeo.vertices[face.c].y)
        //         pos.push(lGeo.vertices[face.c].z)
        //
        //         norm.push(face.normal.x)
        //         norm.push(face.normal.y)
        //         norm.push(face.normal.z)
        //         norm.push(face.normal.x)
        //         norm.push(face.normal.y)
        //         norm.push(face.normal.z)
        //         norm.push(face.normal.x)
        //         norm.push(face.normal.y)
        //         norm.push(face.normal.z)
        //
        //         colors.push(color.r)
        //         colors.push(color.g)
        //         colors.push(color.b)
        //         colors.push(color.r)
        //         colors.push(color.g)
        //         colors.push(color.b)
        //         colors.push(color.r)
        //         colors.push(color.g)
        //         colors.push(color.b)
        //
        //     })
        // }
        //
        // bufferGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
        // bufferGeo.setAttribute('normal', new THREE.Float32BufferAttribute(norm, 3))
        // bufferGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
        //
        // const lMat = new THREE.MeshPhongMaterial({
        //     shininess: 80,
        //     vertexColors: true
        // })
        //
        // const lMesh = new THREE.Mesh(bufferGeo, lMat)
        // globe.add(lMesh)

        const globeWireframe = new THREE.Mesh(geometry, wireframe)

        globe.add(globeWireframe)
        scene.background = new THREE.Color(0xffffff)
        scene.fog = new THREE.Fog(0xffffff, 0.7, 5.3)

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8)
        const dLight = new THREE.DirectionalLight(0xffffff, 0.8)
        dLight.position.z = 2
        dLight.position.y = 4
        dLight.lookAt(scene.position)
        scene.add(hemiLight)
        scene.add(dLight)

        const hemiHelper = new THREE.HemisphereLightHelper(hemiLight, 10)
        scene.add(hemiHelper)

        scene.add(globe)
        camera.position.z = 5;
        renderer.setSize(w, h)

        globeRef.current.appendChild(renderer.domElement)

    }

    const animate = () => {
        requestAnimationFrame(animate);

        globe.rotation.x += 0.0015;
        globe.rotation.y += 0.0008;

        renderer.render(scene, camera)
    }

    return (<>
        <div ref={globeRef}></div>
    </>)
}