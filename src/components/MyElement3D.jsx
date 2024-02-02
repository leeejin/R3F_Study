import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three";

function MyElement3D() {
    const refMesh = useRef();
    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta;
    })
      
    return (
        <>
            <directionalLight position={[1, 1, 1]} />
            <axesHelper scale={10} />
            <OrbitControls />
            <mesh ref={refMesh}
                // position-y={2}
                rotation-z={THREE.MathUtils.degToRad(45)}
                scale={[1, 1, 1]}>
                {/* <boxGeometry /> */}
                <sphereGeometry />
                
                <meshStandardMaterial color="blue" 
                opacity={0.5} transparent={true} />
                <axesHelper />

                <mesh
                    scale={[0.1, 0.1, 0.1]}
                    position-y={2}>
                    <sphereGeometry />
                    <meshStandardMaterial color="red" />
                    <axesHelper scale={5} />
                </mesh>
            </mesh>
        </>
    )
}
export default MyElement3D;