import { PiPlant } from "react-icons/pi";
import * as Babylon from "@babylonjs/core";
import { useEffect, useRef } from "react";
import "@babylonjs/loaders";

export default function About() {
  const aboutCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const aboutSceneRef = useRef<Babylon.Scene | null>(null);
  const aboutEngineRef = useRef<Babylon.Engine | null>(null);

  useEffect(() => {
    async function RenderScene() {
      if (aboutCanvasRef.current) {
        aboutEngineRef.current = new Babylon.Engine(aboutCanvasRef.current);
        aboutSceneRef.current = await AboutCreateScene();
      }
      aboutEngineRef.current?.runRenderLoop(() => {
        if (aboutSceneRef.current) aboutSceneRef.current.render();
      });
    }
    RenderScene();
    return () => {
      if (aboutEngineRef.current) aboutEngineRef.current?.dispose();
    };
  }, [aboutCanvasRef.current, aboutEngineRef.current, aboutSceneRef]);

  const AboutCreateScene = async function () {
    const engine = aboutEngineRef.current;
    if (!engine) return null;
    const scene = new Babylon.Scene(engine);

    scene.createDefaultCamera(false, false, false);

    const light = new Babylon.HemisphericLight(
      "",
      new Babylon.Vector3(0, 0.1, 0),
      scene
    );
    light.specular = Babylon.Color3.FromHexString("#16A34A");
    const about = await Babylon.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "ear.glb"
    );
    about.meshes[0].position = new Babylon.Vector3(-0.3, -0.3, 0);
    // about.meshes[0].scaling = new Babylon.Vector3(0.001, 0.001, 0.001);
    about.meshes[0].rotation = new Babylon.Vector3(0, -2.5, 0);

    scene.clearColor = Babylon.Color4.FromHexString("#0c0c0c");

    return scene;
  };
  return (
    <div className="lg:grid grid-cols-4">
      <div className="col-span-2">
        <canvas ref={aboutCanvasRef} className="focus:outline-none w-full " />
      </div>
      <div className="col-span-2 grid gap-3">
        <h2 className="text-secondary font-header">About Us</h2>
        <h1 className="text-4xl font-header capitalize flex gap-1 font-semibold">
          Let's tell you our story <PiPlant className="text-sm" />
        </h1>
        <p className="lg:text-paragraph text-sm text-text lg:leading-6">
          At <span className="text-secondary">FA,</span> we are passionate about
          bringing the beauty of nature into your life. With a commitment to
          quality and customer satisfaction, we offer a diverse selection of
          plants carefully curated to suit every taste and need. Whether you're
          an experienced gardener or just starting your green journey, our team
          of experts is here to provide guidance and support every step of the
          way. From vibrant indoor plants to lush outdoor landscapes, we strive
          to inspire and empower our customers to create thriving green spaces
          that enhance their homes and lives. With a focus on sustainability and
          environmental stewardship, we aim to foster a deeper connection to the
          natural world and promote a greener, healthier planet for generations
          to come. Welcome to <span className="text-secondary">FA</span>, where
          your love for plants meets our passion for excellence.
        </p>
      </div>
    </div>
  );
}
