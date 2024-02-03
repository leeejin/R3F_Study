import { Environment, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { useEffect } from "react";
import { useControls } from "leva";
function MyGltf3D() {

    // const refMesh = useRef();

    //const model = useGLTF('../../public/models/scene.gltf');
    const model = useGLTF('../../public/car/scene.gltf');
    
    // useFrame((state, delta) => {
    //     refMesh.current.rotation.y += delta;
    // })

    // const animations = useAnimations(model.animations, model.scene);

    // const { actionName } = useControls({
    //     actionName: {
    //         value: animations.names[1],
    //         options: animations.names
    //     }
    // })
    // useEffect(() => {
    //     const action = animations.actions[actionName];
    //     action.reset().fadeIn(0.5).play();

    //     return()=>{
    //         action.fadeOut(0.5);
    //     }
    // }, [actionName])

    // const [height, setHeight] = useState(0);

    // useEffect(() => {
    //     let minY = Infinity, maxY = -Infinity

    //     model.scene.traverse((item) => {
    //         if (item.isMesh) {
    //             const geomBbox = item.geometry.boundingBox; //최소경계상자
    //             if (minY > geomBbox.min.y) minY = geomBbox.min.y; //경계축에 대한 y축 값
    //             if (maxY < geomBbox.max.y) maxY = geomBbox.max.y;
    //         }
    //     })

    //     const h = maxY - minY;
    //     setHeight(h);
    //     console.log(h);
    // }, [model.scene])
    return (
        <mesh>
            <OrbitControls minDistance={20}/>

            <Environment preset="sunset" />
            <primitive
                scale={5}
                // rotation-y={THREE.MathUtils.degToRad(45)}
                rotation-y={10}
                position={[3, 0, -3]}
                object={model.scene} />
            {/* <primitive
                scale={5}
                position-y={-(height / 2) * 5}
                object={model.scene} /> */}
            {/* <axesHelper scale={10} /> */}
        </mesh>
    )
}

export default MyGltf3D;