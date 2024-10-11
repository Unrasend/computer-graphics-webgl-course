import { FundamentalsShaders } from "./shaders";
import {WebGLUtils} from "../../../shared/utils/webgl.utils.ts";

export class FundamentalsWebGLProgram {
  static run(canvas: HTMLCanvasElement): void {
    const gl = WebGLUtils.getContext(canvas);

    const vertexShader: WebGLShader = WebGLUtils.createShader(gl, gl.VERTEX_SHADER, FundamentalsShaders.vertexShaderSource);
    const fragmentShader: WebGLShader = WebGLUtils.createShader(gl, gl.FRAGMENT_SHADER, FundamentalsShaders.fragmentShaderSource);
    const program: WebGLProgram = WebGLUtils.createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation: GLint = gl.getAttribLocation(program, "a_position")!;
    const positionBuffer: WebGLBuffer = gl.createBuffer()!;

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ 0, 0, 0, 0.5, 0.7, 0, ]), gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(positionAttributeLocation);

    const size = 2;          // 2 components per iteration
    const type = gl.FLOAT;   // the data is 32bit floats
    const normalize = false; // don't normalize the data
    const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    WebGLUtils.resizeCanvasToDisplaySize(canvas);

    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clearColor(0, 0, 0.5, 0.8);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(program);
    gl.bindVertexArray(vao);

    const primitiveType = gl.TRIANGLES;
    const count = 3;
    gl.drawArrays(primitiveType, offset, count);
  }
}
