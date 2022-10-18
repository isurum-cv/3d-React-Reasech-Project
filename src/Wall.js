import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  TextureLoader,
  MeshLambertMaterial,
  BoxBufferGeometry,
  Mesh,
  BackSide,
} from "three";

const Wall = () => {
  const wall1 = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/image/Wall/wall1.jpg"
  );
  const wall2 = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/image/Wall/wall2.jpg"
  );
  const wall3 = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/image/Wall/wall3.jpg"
  );
  const wall4 = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/image/Wall/wall4.jpg"
  );
  const wall5 = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/image/Wall/wall5.jpg"
  );
  const wall6 = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/image/Wall/wall6.jpg"
  );

  const wall = useRef();

  var mats = [wall1, wall2, wall3, wall4, wall5, wall6].map((pic) => {
    return new MeshLambertMaterial({ map: pic });
  });
  var geom = new BoxBufferGeometry(2, 2, 2);
  var box = new Mesh(geom, mats);

  return (
    <mesh ref={wall} scale={20} castShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial map={wall1} attachArray="material" side={BackSide} />
      {/* <meshBasicMaterial map={wall2} attachArray="material" side={BackSide} />
      <meshBasicMaterial map={wall3} attachArray="material" side={BackSide} />
      <meshBasicMaterial map={wall4} attachArray="material" side={BackSide} />
      <meshBasicMaterial map={wall5} attachArray="material" side={BackSide} />
      <meshBasicMaterial map={wall6} attachArray="material" side={BackSide} /> */}
    </mesh>
  );
};

export default Wall;
