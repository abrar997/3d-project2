import * as BABYLON from "@babylonjs/core";
import { useEffect, useRef } from "react";
import "@babylonjs/loaders";
import { PiPlant } from "react-icons/pi";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  message: string;
};

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    async function RenderScene() {
      if (canvasRef.current) {
        engineRef.current = new BABYLON.Engine(canvasRef.current, true);
        sceneRef.current = await createScene(engineRef.current);
      }
      engineRef.current?.runRenderLoop(() => {
        if (sceneRef.current) sceneRef.current.render();
      });
    }
    RenderScene();
    return () => {
      if (engineRef.current) engineRef.current?.dispose();
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

    const man = await BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "man.glb"
    );
    man.meshes[0].position = new BABYLON.Vector3(0.3, -0.4, 0.6);
    man.meshes[0].scaling = new BABYLON.Vector3(0.0042, 0.0042, 0.0042);
    man.meshes[0].rotation = new BABYLON.Vector3(0, -2.2, 0);

    const roads = await BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./items/",
      "roads.glb"
    );
    roads.meshes[0].position = new BABYLON.Vector3(0, -0.4, 0.5);
    roads.meshes[0].scaling = new BABYLON.Vector3(0.055, 0.05, 0.077);
    roads.meshes[0].rotation = new BABYLON.Vector3(0, -2.2, 0);

    scene.clearColor = BABYLON.Color4.FromHexString("#0c0c0c");

    return scene;
  };

  return (
    <div className="grid gap-4 lg:gap-10">
      <div className="grid lg:gap-2 lg:items-center lg:justify-center lg:text-center">
        <h2 className="text-secondary text-sm">We will be happy if you </h2>
        <h1 className="lg:text-4xl text-2xl text-main font-header flex lg:text-center capitalize">
          Contact Us <PiPlant className="text-sm" />
        </h1>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 lg:gap-12 gap-4 items-start">
          <div className="grid gap-4 col-span-2">
            <p className="text-text lg:text-paragraph text-sm lg:leading-6">
              We value your feedback and inquiries! Whether you have questions
              about our products, need gardening advice, or want to inquire
              about our services, our team at FA is here to assist you. Feel
              free to reach out to us through the contact form below, and we'll
              get back to you as soon as possible. Alternatively, you can visit
              our nursery in person during our operating hours to speak with our
              knowledgeable staff directly. We're passionate about helping you
              cultivate your green spaces and look forward to hearing from you
              soon!
            </p>
            <form
              className="grid gap-4 text-sm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="w-full bg-transparent border rounded border-secondary outline-none p-2 placeholder:text-sm"
                placeholder="example@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">email is required</p>
              )}
              <textarea
                className="w-full bg-transparent border rounded border-secondary outline-none p-2 placeholder:text-sm"
                placeholder="your message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">message is required</p>
              )}
              <button className="bg-secondary lg:w-24 hover:bg-opacity-70 transition-all duration-300 rounded py-2">
                send
              </button>
            </form>
          </div>
          <div className="hidden lg:flex items-center justify-center w-full col-span-2 relative">
            <canvas
              className="h-full w-full focus:outline-none"
              ref={canvasRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
