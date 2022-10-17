import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { tepmAnimation } from "./CustomAnimations";

export function CustomModel(props) {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/dance_model.glb"
  );

  useEffect(() => {
    gltf.scene.position.set(0, -0.9, 0);
    gltf.animations.push(tepmAnimation);
    // console.log(gltf.animations);
  }, [gltf]);

  // Here's the animation part
  // *************************
  let mixer;

  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      // console.log(clip);
      const action = mixer.clipAction(clip);

      // if (JSON.stringify(tepmAnimation) === JSON.stringify(clip)) {
      //   console.log(tepmAnimation);
      //   console.log(clip);
      // }

      // console.log(tepmAnimation);
      // console.log(clip);

      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************

  return <primitive object={gltf.scene} />;
}

export default CustomModel;
