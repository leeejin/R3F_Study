
import { Canvas } from '@react-three/fiber';
import MyElement3D from '../components/MyElement3D';
import MyGeoMetry3D from '../components/MyGeoMetry3D';
import MyMaterial3D from '../components/MyMaterial3D';
function Home() {

  return (<>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '60%', height: '600px',border:'1px solid black' }}>
        <Canvas>
          {/* <MyElement3D /> */}
          {/* <MyGeoMetry3D /> */}
          <MyMaterial3D />
        </Canvas>
      </div>
  
      <div style={{ marginLeft: '20px' }}>
        <p>제목</p>
        <p>왼쪽에서 3D모형을 체험하실 수 있습니다.</p>
      </div>
    </div>
  </>

  )
}

export default Home
