import { Canvas } from '@react-three/fiber'

import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = () => {
    const persona = useGLTF('/models/Hexagon-idle.glb')

    return (
        <Canvas
            className="cursor-pointer"
            frameloop="demand"
            gl={{ antialias: true }}
            camera={{ position: [-4, 3, 6], fov: 20, near: 0.1, far: 200 }}
        >
            <ambientLight intensity={1.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            {/* Rimlight */}
            <spotLight
                position={[0, 0, -10]}
                intensity={200}
                color="white"
                angle={1}
                penumbra={1}
            />

            <primitive object={persona.scene} scale={15} position={[0, -2, 0]} />

            <OrbitControls
                autoRotate={false}
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 3}
                maxAzimuthAngle={Math.PI / 3}
            />
        </Canvas>
    )
}

export default Model
