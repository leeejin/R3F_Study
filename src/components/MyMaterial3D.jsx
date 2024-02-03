

import { Box, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as THREE from "three";

function MyMateiral3D() {
    const refMesh = useRef();
    const refWireMesh = useRef();

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} />

            <mesh position={[0.7, 0, 0]}>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            <mesh position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>

            <axesHelper scale={10} />
        </>
    )
}
export default MyMateiral3D;