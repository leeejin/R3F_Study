import { Box, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as THREE from "three";

function MyBox(props) {
    const geom = new THREE.BoxGeometry();
    return <mesh {...props} geometry={geom}></mesh>
}
function MySecond3D() {
    //Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리입니다.
    //npm install @react-three/drei

    const refMesh = useRef();
    const refWireMesh = useRef();

    const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
        xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
        ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
        zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
        xSegments: { value: 1, min: 1, max: 10, step: 1 }, //Segments는 정수로만 해야함
        ySegments: { value: 1, min: 1, max: 10, step: 1 },
        zSegments: { value: 1, min: 1, max: 10, step: 1 }
    })
    useEffect(() => {
        refWireMesh.current.geometry = refMesh.current.geometry
    }, [xSize, ySize, zSize, xSegments, ySegments, zSegments])
    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.1} />
            <directionalLight position={[2, 1, 3]} intensity={0.5} />

            <mesh ref={refMesh}>
                <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]} />
                <meshStandardMaterial color="#1abc9c" />
            </mesh>
            <mesh ref={refWireMesh}>
                <meshStandardMaterial color="yellow" wireframe={true} />
            </mesh>
            {/* <Box position={[1.2,0,0]}>
            <meshStandardMaterial color="#8e44ad" />
          </Box>

          <MyBox position={[-1.2,0,0]}>
            <meshStandardMaterial color="#e74c3c" />
          </MyBox> */}

        </>
    )
}
export default MySecond3D;