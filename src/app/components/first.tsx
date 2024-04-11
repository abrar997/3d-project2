import * as BABYLON from "@babylonjs/core";
import { useEffect, useRef } from "react";
import "@babylonjs/loaders";

export default function First() {
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

    scene.createDefaultCamera(false, false, false);

    const light = new BABYLON.HemisphericLight(
      "",
      new BABYLON.Vector3(0, 0.1, 0),
      scene
    );
    light.specular = BABYLON.Color3.FromHexString("#16A34A");
    const plant = await BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "ear.glb"
    );
    plant.meshes[0].position = new BABYLON.Vector3(-0.3, -0.3, 0);
    plant.meshes[0].scaling = new BABYLON.Vector3(0.45, 0.55, 0.45);
    plant.meshes[0].rotation = new BABYLON.Vector3(0, -2.5, 0);
    const ground = await BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "weed.glb"
    );
    ground.meshes[0].position = new BABYLON.Vector3(0.01, -0.3, 0.1);
    ground.meshes[0].scaling = new BABYLON.Vector3(0.42, 0.2, 0.2);
    ground.meshes[0].rotation = new BABYLON.Vector3(-0, -2.9, -0.1);

    scene.clearColor = BABYLON.Color4.FromHexString("#0c0c0c");

    return scene;
  };
  return (
    <div>
      <div className="lg:flex grid gap-12 lg:pt-12 lg:gap-0 justify-between items-center">
        <div className="grid lg:gap-3 gap-1">
          <h2 className="lg:text-2xl text-secondary gap-2 flex items-center">
            Welcome ,
          </h2>
          <h1 className="lg:text-7xl text-4xl capitalize font-bold whitespace-nowrap font-title">
            FA plant nursery
          </h1>
          <p className="text-sm lg:text-paragraph text-text lg:leading-6">
            Sustainable practices, including water conservation, organic growing
            methods, and minimizing waste, are increasingly important
            considerations for modern plant nurseries
          </p>
        </div>
        <div className="h-full w-full">
          <canvas
            ref={canvasRef}
            className="focus:outline-none h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
