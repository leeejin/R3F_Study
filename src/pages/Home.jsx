
import { Canvas } from '@react-three/fiber';
import MyElement3D from '../components/MyElement3D';
import MySecond3D from '../components/MySecond3D';
function Home() {

  return (<>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '40%', height: '600px' }}>
        <Canvas>
          <MyElement3D />
          {/* <MySecond3D /> */}
        </Canvas>
      </div>
  
      <div style={{ marginLeft: '20px' }}>
        <p>제목</p>
        <p>이 구체는 원입니다. 이게 이렇게 돌아가서 회전하고 있어요 마우스로 잡아보면 마음대로 움직일 수도 있습니다.</p>
      </div>
    </div>
  </>

  )
}

export default Home
