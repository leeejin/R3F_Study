import { Box,OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three";

//GeoMetry 생성을 위한 코드, props를 통한 다른 GeoMetry 생성
function MyBox(props) {
    const geom = new THREE.BoxGeometry();
    return <mesh {...props} geometry={geom}></mesh>
}
function MyElement3D() {

    const refMesh = useRef();
    const refWireMesh = useRef();

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
            {/* <mesh ref={refMesh}>
                <meshStandardMaterial color="#1abc9c" />
            </mesh> */}
            <mesh ref={refWireMesh}>
                <meshStandardMaterial emissive="yellow" wireframe={true} />
            </mesh>

            <Box position={[1.2, 0, 0]}>
                <meshStandardMaterial color="#8e44ad" />
            </Box>

            <MyBox position={[-1.2, 0, 0]}>
                <meshStandardMaterial color="#e74c3c" />
            </MyBox>
            <axesHelper scale={10} />
        </>
    )
}
export default MyElement3D;