import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceModel from "./DanceModel";
import SittingModel from "./SittingModel";
import CommonModel from "./CommonModel";
import CustomModel from "./CustomModel";

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
          backgroundColor: "#111a21",
          width: "80vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          {/* <CommonModel selectedModel={action} position={[0, -0.9, 0]} /> */}
          <CustomModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div
        style={{
          width: "20vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <button
          style={{
            height: "50px",
          }}
          onClick={() => onChangeAnimation("")}
        >
          Default
        </button>
        <button
          style={{
            height: "50px",
          }}
          onClick={() => onChangeAnimation("dance")}
        >
          Dancing
        </button>
        <button
          style={{
            height: "50px",
          }}
          onClick={() => onChangeAnimation("sit")}
        >
          Sitting
        </button>
      </div>
    </div>
  );
};

export default App;
