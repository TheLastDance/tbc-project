"use client"
import "./CyberCanvas.css"
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CyberSphere3d } from './CyberSphere3d'
import { Heading } from '../UI/GlitchEffects/Heading/Heading'

export function CyberCanvas() {
  return (
    <div className="canvas_container">
      <Canvas camera={{ position: [0, 0, 18] }}>
        <CyberSphere3d />
        <OrbitControls />
      </Canvas>
      <h1>
        <Heading>CyberSphere</Heading>
        <p>
          <Heading>2067</Heading>
        </p>
      </h1>
    </div>
  )
}
