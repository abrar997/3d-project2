import * as BABYLON from "@babylonjs/core";
import { useEffect, useRef } from "react";
import "@babylonjs/loaders";
import Text from "./reusable/Text";

export default function First() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);

  useEffect(() => {
    async function renderScene() {
      if (canvasRef.current) {
        engineRef.current = new BABYLON.Engine(canvasRef.current, true);
        sceneRef.current = await createScene(engineRef.current);
        engineRef.current.runRenderLoop(() => {
          if (sceneRef.current) sceneRef.current.render();
        });
      }
    }

    renderScene();

    return () => {
      if (engineRef.current) {
        engineRef.current.stopRenderLoop();
        sceneRef.current?.dispose();
        engineRef.current.dispose();
      }
    };
  }, []);

  const createScene = async function (engine: BABYLON.Engine) {
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
      "ear.glb",
      scene
    );
    plant.meshes[0].position = new BABYLON.Vector3(-0.3, -0.3, 0);
    plant.meshes[0].scaling = new BABYLON.Vector3(0.45, 0.55, 0.45);
    plant.meshes[0].rotation = new BABYLON.Vector3(0, -2.5, 0);

    const ground = await BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "weed.glb",
      scene
    );
    ground.meshes[0].position = new BABYLON.Vector3(0.01, -0.3, 0.1);
    ground.meshes[0].scaling = new BABYLON.Vector3(0.42, 0.2, 0.2);
    ground.meshes[0].rotation = new BABYLON.Vector3(0, -2.9, -0.1);

    scene.clearColor = BABYLON.Color4.FromHexString("#0c0c0c");

    return scene;
  };

  return (
    <div id="home">
      <div className="lg:flex grid gap-12 lg:pt-12 lg:gap-0 justify-between items-center">
        <div>
          <Text
            subtitle=" Welcome ,"
            title="FA plant nursery"
            paragraph=" Sustainable practices, including water conservation, organic growing
            methods, and minimizing waste, are increasingly important
            considerations for modern plant nurseries"
            isWelcome
          />
        </div>
        <div className="h-full w-full relative">
          <canvas
            ref={canvasRef}
            className="focus:outline-none h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
