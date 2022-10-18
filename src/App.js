import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceModel from "./DanceModel";
import SittingModel from "./SittingModel";
import CommonModel from "./CommonModel";
import CustomModel from "./CustomModel";
import { FloatingGrid } from "./FloatingGrid";
import { Ground } from "./Ground";
import background from "./image/wherehouse.jpg";

import "./App.css";

const App = () => {
  return (
    <div class="sketchfab-embed-wrapper">
      {" "}
      <iframe
        title="Worker"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/1099d54b5bef4aa1862848b7c90d7cb9/embed"
      >
        {" "}
      </iframe>{" "}
      <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        {" "}
        <a
          href="https://sketchfab.com/3d-models/worker-1099d54b5bef4aa1862848b7c90d7cb9?utm_medium=embed&utm_campaign=share-popup&utm_content=1099d54b5bef4aa1862848b7c90d7cb9"
          target="_blank"
          style="font-weight: bold; color: #1CAAD9;"
        >
          {" "}
          Worker{" "}
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/Jeremy_Zh?utm_medium=embed&utm_campaign=share-popup&utm_content=1099d54b5bef4aa1862848b7c90d7cb9"
          target="_blank"
          style="font-weight: bold; color: #1CAAD9;"
        >
          {" "}
          Easy Game Studio{" "}
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1099d54b5bef4aa1862848b7c90d7cb9"
          target="_blank"
          style="font-weight: bold; color: #1CAAD9;"
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
  // const [action, setAction] = useState("");

  // const onChangeAnimation = (tempAction) => {
  //   setAction(tempAction);
  // };

  // return (
  //   <div
  //     style={{
  //       width: "100vw",
  //       height: "100vh",
  //       display: "flex",
  //       flexDirection: "row",
  //     }}
  //   >
  //     <Canvas
  //       camera={{ position: [2, 0, 12.25], fov: 15 }}
  //       style={{
  //         backgroundColor: "#acb3bf",
  //         width: "80vw",
  //         height: "100vh",
  //         backgroundImage: `url(${background})`,
  //       }}
  //     >
  //       <ambientLight intensity={1.25} />
  //       <ambientLight intensity={0.1} />
  //       <directionalLight intensity={0.4} />
  //       <Suspense fallback={null}>
  //         <CommonModel selectedModel={action} position={[0, 0.1, 0]} />
  //       </Suspense>
  //       <Ground />
  //       <FloatingGrid />
  //       <OrbitControls />
  //     </Canvas>
  //     <div
  //       style={{
  //         width: "20vw",
  //         height: "120px",
  //         display: "flex",
  //         flexWrap: "wrap",
  //         flexDirection: "row",
  //         marginTop: 30,
  //       }}
  //     >
  //       <button
  //         style={{
  //           height: "50px",
  //           margin: "5px",
  //         }}
  //         onClick={() => onChangeAnimation("")}
  //       >
  //         Default
  //       </button>
  //       <button
  //         style={{
  //           height: "50px",
  //           margin: "5px",
  //         }}
  //         onClick={() => onChangeAnimation("Crouching")}
  //       >
  //         Crouching
  //       </button>
  //       <button
  //         style={{
  //           height: "50px",
  //           margin: "5px",
  //         }}
  //         onClick={() => onChangeAnimation("Lifting Object")}
  //       >
  //         Lifting Object
  //       </button>
  //       <button
  //         style={{
  //           height: "50px",
  //           margin: "5px",
  //         }}
  //         onClick={() => onChangeAnimation("Picking Up")}
  //       >
  //         Picking Up
  //       </button>
  //       <button
  //         style={{
  //           height: "50px",
  //           margin: "5px",
  //         }}
  //         onClick={() => onChangeAnimation("Snatch")}
  //       >
  //         Snatch
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default App;
