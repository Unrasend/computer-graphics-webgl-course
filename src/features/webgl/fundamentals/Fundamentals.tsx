import React, {useEffect, useRef } from "react";
import {FundamentalsWebGLProgram} from "./fundamentals.webgl.ts";

const Fundamentals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      FundamentalsWebGLProgram.run(canvasRef.current);
    }
  }, []);

  return <div className="flex flex-col">
    <h2>Render exercise:</h2>
    <canvas className="w-full grow bg-red mb-xl" ref={canvasRef}></canvas>
    <h3><a href="https://webgl2fundamentals.org/webgl/lessons/webgl-fundamentals.html">WebGL2 Fundamentals Lesson Source</a></h3>
  </div>;
}

export default Fundamentals;
