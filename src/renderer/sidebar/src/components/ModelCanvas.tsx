import { Canvas } from '@react-three/fiber'

import { OrbitControls, useGLTF, Clone } from '@react-three/drei'

interface ModelProps {
    url?: string
    name?: string
    instructions?: string
    skills?: string
    notes?: string
    color?: string
    shape?: string
}

const Model = ({ url = '/models/Hexagon-idle.glb' }: ModelProps) => {
    const { scene } = useGLTF(url)

    return (
        <Canvas
            className="w-full h-full block"
            frameloop="demand"
            gl={{ antialias: true, preserveDrawingBuffer: true }}
            camera={{ position: [-4, 3, 6], fov: 22, near: 0.1, far: 200 }}
        >
            <ambientLight intensity={1.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight
                position={[0, 0, -10]}
                intensity={200}
                color="white"
                angle={1}
                penumbra={1}
            />

            <Clone object={scene} scale={15} position={[0, -2, 0]} />

            <OrbitControls
                autoRotate={false}
                enableZoom={false}
                enableRotate={false}
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
