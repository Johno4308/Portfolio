import { Container, Row, Tabs, Tab } from 'react-bootstrap';  //for tab display using boot strap
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { useRef, Suspense, useState, useEffect } from 'react';  //use of suspense and use ref for 3D models
import { Canvas, useFrame } from '@react-three/fiber'           //for use in 3d models
import { OrbitControls, useGLTF } from '@react-three/drei'      //react fiber for 3d models
import { Loader } from 'react-loaders'
import CharAnimation from '../CharAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {gsap} from 'gsap-trial'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')  //state for title animation

  useEffect(() => {   //use effect for title animation
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  useEffect(() => {   //use effect for gsap animations
    gsap.to('h2', {opacity: 1, duration: 3, x: 80, ease: 'Power3.easeInOut'})
    gsap.to('h3', {delay: 1, duration: 1, x: 80, opacity: 1})
    gsap.to('.git-flat-button', { delay: 1, duration: 3, y: -40, opacity: 1})
}, [])
  //glb converted in js function for 3D models, 
  function Calculator(props) {
    const group = useRef()
    useFrame( ({clock}) => {
      group.current.rotation.y = clock.getElapsedTime() / 5
        })
    const { nodes, materials } = useGLTF("/calculator.glb");
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.12}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mainframe_LP__0.geometry}
                material={materials["Scene_-_Root"]}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }

  function Hotel(props) {
    const group = useRef()
    useFrame( ({clock}) => {
      group.current.rotation.y = clock.getElapsedTime() /15
        })
    const { nodes, materials } = useGLTF("/hotel.glb");
    return (
      <group ref={group} {...props} dispose={null} scale={3.2}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 3.43, 5.92]} scale={[5.96, 6.8, 3.57]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube1_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 4.93, 5.92]} scale={[6.17, 0.26, 3.7]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube3_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.96, 3.43, 4.27]} scale={[0.15, 6.8, 0.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube5_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 2.2, 5.92]} scale={[6.07, 0.4, 3.64]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube9_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.95, 3.68, 5.26]} scale={[0.13, 1.26, 0.99]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube11_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.94, 0.54, 4.2]} scale={[0.15, 3.68, 0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube21_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[3.58, 1.84, 5.15]}
              rotation={[0, 0, -0.75]}
              scale={[1.47, 0.01, 1.27]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube25_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[1.13, 8.64, 5.92]}
              rotation={[-0.02, -0.01, 0.24]}
              scale={[0.36, 0.36, 0.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube30_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-0.01, 0, 5.92]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube45_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.48, 7.75, 5.61]} scale={[1.01, 0.94, 0.54]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube53_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 0.5, 0.18]} scale={[4.54, 1, 2.67]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube54_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-0.07, 1.82, 0.15]} scale={[5.01, 0.08, 2.94]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube56_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, -1.48, 0.18]} scale={[4.54, 1, 2.67]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube57_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 5.75, 0.17]} scale={[4.65, 0.02, 2.73]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube58_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.01, 6.82, 0.18]} scale={[4.54, 0.74, 2.61]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube59_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[3.02, 4.89, -0.72]} scale={[0.07, 5.18, 0.8]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube60_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[3.02, 4.89, 0.18]} scale={[0.07, 5.18, 0.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube61_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[1.01, 8.54, 1.55]} scale={0.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube86_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.63, 8.48, 0.38]} scale={[0.57, 0.57, 0.68]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube90_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.43, 0.49, 3.07]} scale={[1.81, 1, 2.2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube91_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[0.31, 0.21, 0.65]}
              rotation={[0, 0, 0.09]}
              scale={[1, 1, 0.76]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube94_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[1.32, -0.07, 3.31]} scale={[11.54, 0.21, 12.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube95_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[1.75, 0, 0.59]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pSphere3_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-0.56, 0, 5.92]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube101_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.95, 3.68, 6.57]} scale={[0.13, 1.26, 0.99]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube103_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.95, 5.77, 6.57]} scale={[0.13, 1.26, 0.99]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube104_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.95, 5.77, 5.26]} scale={[0.13, 1.26, 0.99]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube105_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.96, 3.43, 7.57]} scale={[0.15, 6.8, 0.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube106_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.96, 5.77, 6.57]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.13, 1.26, 0.99]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube107_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.96, 5.77, 5.26]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.13, 1.26, 0.99]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube108_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.96, 3.68, 5.26]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.13, 1.26, 0.99]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube109_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.96, 3.68, 6.57]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.13, 1.26, 0.99]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube110_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.95, 3.43, 7.57]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.15, 6.8, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube111_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.95, 3.43, 4.27]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.15, 6.8, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube112_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.48, 7.75, 6.55]} scale={[1.01, 0.94, 0.54]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube113_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-3.06, 0, 5.92]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube114_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-2.52, 0, 5.92]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube115_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.79, 0, 5.91]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube116_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.25, 0, 5.91]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube117_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.67, 0, 5.91]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube118_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[3.2, 0, 5.91]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube119_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-1.37, 9.53, 6.29]} scale={[0.07, 0.27, 0.07]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCylinder24_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-1.05, 9.53, 6.29]} scale={[0.07, 0.27, 0.07]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCylinder25_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-0.74, 9.53, 6.29]} scale={[0.07, 0.27, 0.07]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCylinder26_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-1.05, 9.23, 6.29]} scale={[1.05, 0.2, 0.56]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube120_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-1.05, 8.79, 6.29]} scale={[0.9, 0.84, 0.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube121_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[3.58, 1.84, 6.72]}
              rotation={[0, 0, -0.75]}
              scale={[1.47, 0.01, 1.27]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube122_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[2.94, 0.54, 7.63]} scale={[0.15, 3.68, 0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube123_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-2.94, 0.54, 4.2]} scale={[0.15, 3.68, 0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube124_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-2.94, 0.54, 7.63]} scale={[0.15, 3.68, 0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube125_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 2.45, 5.92]} scale={[6.17, 0.26, 3.7]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube126_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 6.83, 5.92]} scale={[6.17, 0.22, 3.7]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube127_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.34, 8.54, 1.55]} scale={0.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube128_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-0.32, 8.54, 1.55]} scale={0.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube129_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[-0.99, 8.54, 1.55]} scale={0.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube130_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface31_LP_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface32_LP_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface33_LP_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface34_LP_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface35_LP_0.geometry}
              material={materials.material}
            />
            <group position={[3.74, 0, 1.48]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface26_LP_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface27_LP_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface28_LP_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface29_LP_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface30_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[3.02, 4.89, 0.86]} scale={[0.07, 5.18, 0.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube133_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-3, 4.89, 0.83]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube134_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-3, 4.89, 0.13]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube135_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-3, 4.89, 1.53]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube136_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-3, 4.89, -0.58]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube137_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.57, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube138_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-1.84, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube139_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-1.11, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube140_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-0.38, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube141_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[0.35, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube142_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[1.07, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube143_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[1.79, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube144_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[2.5, 4.89, -1.14]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube145_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[1.79, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube147_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[1.07, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube148_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[0.35, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube149_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-0.38, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube150_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-1.11, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube151_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-1.84, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube152_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-2.57, 4.89, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.07, 5.18, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube153_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[1.75, 0, 2.56]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pSphere4_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[6.19, 0.17, 5.57]}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube190_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.25, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface4_lamp_0.geometry}
                material={materials.lamp}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface4_LP_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[1.59, 0, 3.84]}
              rotation={[-Math.PI, 1.31, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface16_LP_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface17_LP_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface18_lamp_0.geometry}
                material={materials.lamp}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface22_lamp_0.geometry}
              material={materials.lamp}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface22_glass_0.geometry}
              material={materials.glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface22_LP_0.geometry}
              material={materials.material}
            />
            <group position={[0, 0, 7.33]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface25_lamp_0.geometry}
                material={materials.lamp}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface25_glass_0.geometry}
                material={materials.glass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface25_LP_0.geometry}
                material={materials.material}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }

  function Contain(props) {
    const group = useRef()
    useFrame( ({clock}) => {
        group.current.rotation.y = clock.getElapsedTime() / 5
          })
    const { nodes, materials } = useGLTF("/Container.glb");
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.125}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Material__102}
          />
        </group>
      </group>
    );
  }

  return(
    <>
      <div className='project-page'>
              <h1 className='project-title'>
              <CharAnimation
                        letterClass={letterClass}
                        strArray = {['P', 'r', 'o', 'j', 'e', 'c', 't', 's', ' ']}
                        idx={15}
                    />
                    | Using C++ and Qt FrameWork
              </h1>
              <Container className="py-4">
                  <Row className="justify-content-center">
                      <Tabs 
                        justify variant='pills' 
                        defaultActiveKey="tab-1" 
                        className="project-tabs">
                          <Tab                          //project 1 tab
                            className="tab-1" 
                            eventKey="tab-1" 
                            title="Container">
                              <div className="project-content">
                                  <h2>Transporting Containers</h2>
                                  <h3>Project Idea</h3>
                                  <p>Server program to stack cylinder and box objects onto pallets and send the XML objects over 
                                    a network to client program, which displays shipping objects in a table model view.</p>
                                  <h3>To Demonstrate</h3>
                                  <ul>
                                    <li> Factory and Momento Design Patterns</li>
                                    <li> XML writting using DOM and XMLStreamer</li>
                                    <li> TCP sockets</li>
                                    <li> Threading</li>
                                    <li> Serialization of class objects</li>
                                    <li> Table model view</li>
                                  </ul>
                              </div>
                              <div className='project-model'>
                              <Canvas camera={{ fov:70, position: [0,40,50]}}>
                                  <Suspense fallback={null}>
                                  <ambientLight />
                                  <directionalLight intensity={2} positon={[0,0,50]} />
                                  <Contain />
                                  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                                  </Suspense>

                              </Canvas>
                              <div className="git-flat-button">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://github.com/Johno4308"
                                >
                                    <FontAwesomeIcon 
                                      className="icon" 
                                      icon={faGithub} 
                                      color="#54047C">
                                    </FontAwesomeIcon>  
                                      GitHub Link
                                </a>
                              </div>
                              </div>
                          </Tab>
                          <Tab                      //project 2 tab
                              className="tab-2" 
                              eventKey="tab-2" 
                              title="Reservation">
                            <div className="project2-content">
                                  <h2>The Guest House</h2>
                                  <h3>Project Idea</h3>
                                  <p>To create a 5 room Bnb booking application that books in guests, checks dates and room avaliability</p>
                                  <h3>To Demonstrate</h3>
                                  <ul>
                                    <li> To hard code a UI without using QT onboard designer</li>
                                    <li> Implemenation of user input validation</li>
                                    <li> Serialization of class objects</li>
                                    <li> Converting and retreiving data to/from XML</li>
                                  </ul>
                              </div>
                              <div className='project2-model'>
                              <Canvas camera={{ fov:80, position: [0,30,50]}}>
                                  <Suspense fallback={null}>
                                  <ambientLight intensity={0.4}/>
                                  <Hotel />
                                  <OrbitControls 
                                    enablePan={true} 
                                    enableZoom={true} 
                                    enableRotate={true}/>
                                  </Suspense>
                              </Canvas>
                              <div className="git-flat-button">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://github.com/Johno4308"
                                >
                                    <FontAwesomeIcon 
                                      className="icon" 
                                      icon={faGithub} 
                                      color="#54047C">
                                    </FontAwesomeIcon>  
                                      GitHub Link
                                </a>
                              </div>
                              </div>
                          </Tab>
                          <Tab                          //project 3 tab
                            className="tab-3" 
                            eventKey="tab-3" 
                            title="Calculator">
                            <div className="project-content">
                                  <h2>Calculator</h2>
                                  <h3>Project Idea</h3>
                                  <p>To design a calculator with four basic operations, namely addition, subtraction, multiplication, and division.</p>
                                  <h3>To Demonstrate</h3>
                                  <ul>
                                    <li> To hard code a UI without using QT onboard designer</li>
                                    <li> Implementation of Singleton Design Pattern</li>
                                    <li> Implementation of Factory Design Pattern</li>
                                  </ul>
                              </div>
                              <div className='project-model'>
                              <Canvas camera={{ fov:70, position: [0,25,50]}}>
                                  <Suspense fallback={null}>
                                  <ambientLight />
                                  <directionalLight 
                                    intensity={1} 
                                    positon={[0,25,50]} />
                                  <Calculator />
                                  <OrbitControls 
                                    enablePan={true} 
                                    enableZoom={true} 
                                    enableRotate={true} />
                                  </Suspense>
                              </Canvas>
                              <div className="git-flat-button">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://github.com/Johno4308"
                                >
                                    <FontAwesomeIcon 
                                      className="icon" 
                                      icon={faGithub} 
                                      color="#54047C">
                                    </FontAwesomeIcon>  
                                      GitHub Link
                                </a>
                              </div>
                              </div>
                          </Tab>
                      </Tabs>
                  </Row>
              </Container>
      </div>
      <Loader type="ball-rotate" />
      </>
  )
}

export default Projects