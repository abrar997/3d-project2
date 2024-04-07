"use client";
import Header from "./components/header";
import * as BABYLON from "@babylonjs/core";
import { useEffect, useRef } from "react";
import "@babylonjs/loaders";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);

  useEffect(() => {
    async function RenderScene() {
      if (canvasRef.current) {
        engineRef.current = new BABYLON.Engine(canvasRef.current);
        sceneRef.current = await createScene();
      }
      engineRef.current?.runRenderLoop(() => {
        if (sceneRef.current) sceneRef.current.render();
      });
    }
    RenderScene();
    return () => {
      if (engineRef.current) engineRef.current?.dispose();
    };
  }, [canvasRef.current, engineRef.current, sceneRef]);

  const createScene = async function () {
    const engine = engineRef.current;
    if (!engine) return null;
    const scene = new BABYLON.Scene(engine);

    // const camera = new BABYLON.FollowCamera(
    //   "",
    //   new BABYLON.Vector3(1, 0, 1),
    //   scene
    // );
    scene.createDefaultCamera(true, false, false);

    const light = new BABYLON.HemisphericLight(
      "",
      new BABYLON.Vector3(0, 0.1, 0),
      scene
    );
    light.specular = BABYLON.Color3.FromHexString("#fff");
    const cat = await BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "ear.glb"
    );
    cat.meshes[0].position = new BABYLON.Vector3(0, 0, 0);
    cat.meshes[0].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
    cat.meshes[0].rotation = new BABYLON.Vector3(-0.7, 0.8, -0.7);

    // console.log(`children are ${cat.meshes[0].getChildMeshes()}`);

    scene.clearColor = BABYLON.Color4.FromHexString("#181818");

    return scene;
  };
  return (
    <div className="bg-[#181818] overflow-x-hidden h-screen ">
      <div>
        <Header />
      </div>
      <div className="px-12 grid items-center">
        <div className="text-main font-header grid gap-3 pt-12">
          <h2 className="text-2xl text-secondary">Welcome ,</h2>
          <h1
            className="text-7xl font-bold font-title uppercase whitespace-nowrap"
            style={{ textShadow: "2px 3px 3px gray" }}
          >
            FA Nursery
          </h1>
        </div>
        <div>
          <canvas
            ref={canvasRef}
            className="focus:outline-none h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}
