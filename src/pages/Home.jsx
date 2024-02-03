
import { Canvas } from '@react-three/fiber';
import MyElement3D from '../components/MyElement3D';
import MyGeoMetry3D from '../components/MyGeoMetry3D';
import MyMaterial3D from '../components/MyMaterial3D';
import MyGltf3D from '../components/MyGltf3D';
function Home() {

  return (<>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', height: '600px' }}>
        <Canvas camera={{ near: 1, far: 100, position: [7, 7, 0] }}>
          {/* <MyElement3D /> */}
          {/* <MyGeoMetry3D /> */}
          {/* <MyMaterial3D /> */}
          <MyGltf3D />
        </Canvas>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <h1>Lamborghini Revuelto</h1>
        <p>연료 : 전기,가솔린, 하이브리드</p>
        <p>연비 : 복합 도심, 고속</p>
        <p>출력 : 1,015hp/825hp/140kW 합산/엔진/모터</p>
        <p>엔진 : V12 자연흡기</p>
      </div>
    </div>
  </>

  )
}

export default Home
