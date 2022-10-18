import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceModel from "./DanceModel";
import SittingModel from "./SittingModel";
import CommonModel from "./CommonModel";
import CustomModel from "./CustomModel";
import { FloatingGrid } from "./FloatingGrid";
import { Ground } from "./Ground";
//import background from "./image/wherehouse.jpg";
import Wall from "./Wall";

import "./App.css";

const App = () => {
  const [action, setAction] = useState("");

  const onChangeAnimation = (tempAction) => {
    setAction(tempAction);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "#acb3bf",
          width: "80vw",
          height: "100vh",
          // backgroundImage: `url(${background})`,
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          {/* <CommonModel selectedModel={action} position={[0, 0.1, 0]} /> */}
          <Wall />
        </Suspense>
        {/* <Ground /> */}

        {/* <FloatingGrid /> */}
        <OrbitControls />
      </Canvas>
      <div
        style={{
          width: "20vw",
          height: "120px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <button
          style={{
            height: "50px",
            margin: "5px",
          }}
          onClick={() => onChangeAnimation("")}
        >
          Default
        </button>
        <button
          style={{
            height: "50px",
            margin: "5px",
          }}
          onClick={() => onChangeAnimation("Crouching")}
        >
          Crouching
        </button>
        <button
          style={{
            height: "50px",
            margin: "5px",
          }}
          onClick={() => onChangeAnimation("Lifting Object")}
        >
          Lifting Object
        </button>
        <button
          style={{
            height: "50px",
            margin: "5px",
          }}
          onClick={() => onChangeAnimation("Picking Up")}
        >
          Picking Up
        </button>
        <button
          style={{
            height: "50px",
            margin: "5px",
          }}
          onClick={() => onChangeAnimation("Snatch")}
        >
          Snatch
        </button>
      </div>
    </div>
  );
};

export default App;
