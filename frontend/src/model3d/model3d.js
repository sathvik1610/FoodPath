
import React, { useState } from 'react';
import  { useRef, useEffect } from 'react';

import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import {  Raycaster, Vector2 } from 'three';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';


export function Model3d(props) {
  const { nodes, materials } = useGLTF('/my3dmodel.glb');
  // const sceneRef = useRef(); // Reference for the scene
  // const raycasterRef = useRef(new THREE.Raycaster()); // Reference for the raycaster
  // const mouseRef = useRef(new THREE.Vector2()); // Reference for the mouse position (initialized using useRef)
  // const { camera, scene } = useThree(); // Get camera and scene from @react-three/fiber

  // // Function to handle mouse click
  // const handleMouseClick = (event) => {
  //   // Get mouse position in normalized device coordinates (-1 to +1)
  //   mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
  //   mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

  //   // Get the ray from the camera and mouse position
  //   const raycaster = raycasterRef.current;

  //   // Set the ray's origin and direction based on camera and mouse position
  //   raycaster.ray.origin.setFromMatrixPosition(camera.matrixWorld); // Camera position
  //   raycaster.ray.direction.set(mouseRef.current.x, mouseRef.current.y, 1).unproject(camera); // Mouse direction

  //   // Cast ray to detect intersection with objects
  //   const intersects = raycaster.intersectObjects(scene.children, true); // Check all objects in the scene

  //   if (intersects.length > 0) {
  //     // Get the name of the clicked object (foremost object)
  //     const clickedObject = intersects[0].object;
  //     console.log(`Clicked on: ${clickedObject.name}`);
      
  //     // Call the handleClick function passed from App.js or perform other actions
  //     props.handleClick(clickedObject.name);
  //   }
  // };

  // useEffect(() => {
  //   // Add event listener for mouse click
  //   window.addEventListener('click', handleMouseClick);
    
  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('click', handleMouseClick);
  //   };
  // }, []);




 
 
  const [stomachcolor, setstomachcolor] = useState('#66ff66');
  const [heartcolor, setheartcolor] = useState('#ff0000');
  const [braincolor, setbraincolor] = useState('#ff9999');
  const [lungscolor, setlungscolor] = useState('#cc9900');
  const [kidneycolor, setkidneycolor] = useState('#ff0000');
  const [livercolor, setlivercolor] = useState('#993300');
  const [intestinecolor, setintestinecolor] = useState('#ffff00');
  return (
    <group {...props} dispose={null}>
    <group name="Scene">
      <group onClick={() => props.handleClick('stomach')}>
      <mesh
        name="Stomach"
        castShadow
        receiveShadow
        geometry={nodes.Stomach.geometry}
        material={new MeshStandardMaterial({ color:   stomachcolor, transparent: true,opacity: props.stomachOpacity})}
        position={[0.18, -0.052, -0.173]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}>
        <mesh
          name="Mucosa_of_stomach"
          castShadow
          receiveShadow
          geometry={nodes.Mucosa_of_stomach.geometry}
          material={new MeshStandardMaterial({ color:   stomachcolor, transparent: true, opacity: props.stomachOpacity})}
        />
      </mesh>
      </group>
      <group onClick={() => props.handleClick('lungs')}>
      <mesh
        name="lungs"
        castShadow
        receiveShadow
        geometry={nodes.lungs.geometry}
        material={new MeshStandardMaterial({ color:   lungscolor, transparent: true, opacity: props.lungsOpacity })}
        position={[0.644, 0.511, -0.09]}
        rotation={[Math.PI / 2, 0, -1.67]}
        scale={18.337}
      />
      </group>
      <group onClick={() => props.handleClick('liver')}>
      <group
        name="Liver"
        position={[0.179, 0.094, 0.147]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}>
        <mesh
          name="Mesh"
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={new MeshStandardMaterial({ color:   livercolor , transparent: true, opacity: props.liverOpacity})}
        />
        <mesh
          name="Mesh_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={new MeshStandardMaterial({ color:   livercolor , transparent: true, opacity: props.liverOpacity})}
        />
      </group>
      </group>
      <group onClick={() => props.handleClick('kidneys')}>
      <mesh
        name="kidney"
        castShadow
        receiveShadow
        geometry={nodes.kidney.geometry}
        material={new MeshStandardMaterial({ color:   kidneycolor, transparent: true, opacity: props.kidneyOpacity })}
        position={[0.034, -0.334, 0.17]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}
      />
      </group>
      <group onClick={() => props.handleClick('intestines')}>
      <mesh
        name="Jejunum"
        castShadow
        receiveShadow
        geometry={nodes.Jejunum.geometry}
        material={new MeshStandardMaterial({ color:   intestinecolor , transparent: true , opacity: props.intestineOpacity})}
        position={[0.23, -0.695, -0.072]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}
      />
      <mesh
        name="Ascending_colon"
        castShadow
        receiveShadow
        geometry={nodes.Ascending_colon.geometry}
        material={new MeshStandardMaterial({ color:   intestinecolor , transparent: true, opacity: props.intestineOpacity})}
        position={[0.126, -0.857, 0.288]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={0.092}
      />
      <mesh
        name="Descending_colon"
        castShadow
        receiveShadow
        geometry={nodes.Descending_colon.geometry}
        material={new MeshStandardMaterial({ color:   intestinecolor , transparent: true, opacity: props.intestineOpacity})}
        position={[0.126, -0.857, 0.288]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={0.092}
      />
      <mesh
        name="Transverse_colon"
        castShadow
        receiveShadow
        geometry={nodes.Transverse_colon.geometry}
        material={new MeshStandardMaterial({ color:   intestinecolor , transparent: true, opacity: props.intestineOpacity})}
        position={[0.126, -0.857, 0.288]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={0.092}
      />
      </group>
      <group onClick={() => props.handleClick('heart')}>
      <mesh
        name="Right_atrium"
        castShadow
        receiveShadow
        geometry={nodes.Right_atrium.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor , transparent: true, opacity: props.heartOpacity})}
        position={[0.038, -4.351, -0.025]}
        rotation={[Math.PI / 2, 0, -1.67]}
        scale={3.667}
      />
      <mesh
        name="Right_ventricle"
        castShadow
        receiveShadow
        geometry={nodes.Right_ventricle.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor, transparent: true, opacity: props.heartOpacity })}
        position={[0.038, -4.351, -0.025]}
        rotation={[Math.PI / 2, 0, -1.67]}
        scale={3.667}
      />
      <mesh
        name="Left_atrium"
        castShadow
        receiveShadow
        geometry={nodes.Left_atrium.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor , transparent: true, opacity: props.heartOpacity})}
        position={[0.038, -4.351, -0.025]}
        rotation={[Math.PI / 2, 0, -1.67]}
        scale={3.667}
      />
      <mesh
        name="Left_ventricle"
        castShadow
        receiveShadow
        geometry={nodes.Left_ventricle.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor , transparent: true, opacity: props.heartOpacity})}
        position={[0.038, -4.351, -0.025]}
        rotation={[Math.PI / 2, 0, -1.67]}
        scale={3.667}
      />
      <mesh
        name="Pulmonary_trunk"
        castShadow
        receiveShadow
        geometry={nodes.Pulmonary_trunk.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor, transparent: true, opacity: props.heartOpacity })}
        position={[-0.026, 0.442, -0.045]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}
      />
      <mesh
        name="Ascending_aorta"
        castShadow
        receiveShadow
        geometry={nodes.Ascending_aorta.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor , transparent: true, opacity: props.heartOpacity})}
        position={[0.125, 0.549, -0.074]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}
      />
      <mesh
        name="Superior_vena_cava"
        castShadow
        receiveShadow
        geometry={nodes.Superior_vena_cava.geometry}
        material={new MeshStandardMaterial({ color:   heartcolor, transparent: true , opacity: props.heartOpacity })}
        position={[0.118, 0.629, 0.024]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}
      />
      </group>
      <group onClick={() => props.handleClick('brain')}>
      <group
        name="brain"
        position={[0.137, 1.779, -0.065]}
        rotation={[-Math.PI, 1.472, -Math.PI]}
        scale={3.667}>
        <mesh
          name="Superior_frontal_gyrus"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus.geometry}
          material={new MeshStandardMaterial({ color:   braincolor , transparent: true, opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_1"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_1.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true, opacity: props.brainOpacity })}
        />
        <mesh
          name="Superior_frontal_gyrus_2"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_2.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true , opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_3"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_3.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true , opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_4"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_4.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true, opacity: props.brainOpacity })}
        />
        <mesh
          name="Superior_frontal_gyrus_5"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_5.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true , opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_6"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_6.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true , opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_7"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_7.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true, opacity: props.brainOpacity })}
        />
        <mesh
          name="Superior_frontal_gyrus_8"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_8.geometry}
          material={new MeshStandardMaterial({ color:   braincolor , transparent: true, opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_9"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_9.geometry}
          material={new MeshStandardMaterial({ color:   braincolor , transparent: true, opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_10"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_10.geometry}
          material={new MeshStandardMaterial({ color:   braincolor , transparent: true, opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_11"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_11.geometry}
          material={new MeshStandardMaterial({ color:   braincolor , transparent: true, opacity: props.brainOpacity})}
        />
        <mesh
          name="Superior_frontal_gyrus_12"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_12.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true, opacity: props.brainOpacity })}
        />
        <mesh
          name="Superior_frontal_gyrus_13"
          castShadow
          receiveShadow
          geometry={nodes.Superior_frontal_gyrus_13.geometry}
          material={new MeshStandardMaterial({ color:   braincolor, transparent: true , opacity: props.brainOpacity})}
        />
      </group>
      </group>
    </group>
  </group>
  );
}

useGLTF.preload('/my3dmodel.glb');
