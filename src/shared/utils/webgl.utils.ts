export class WebGLUtils {
  static CreateShaderError = class extends Error {
    constructor(error: string) {
      super(error);
      this.name = 'WebGL_Create_Shader_Error';
    }
  }

  static CreateProgramError = class extends Error {
    constructor(error: string) {
      super(error);
      this.name = 'WebGL_Create_Program_Error';
    }
  }

  static WebGL2NotSupported = class extends Error {
    constructor(error: string) {
      super(error);
      this.name = 'WebGL_VER_2_Not_Supported';
    }
  }

  static getContext(canvas: HTMLCanvasElement): WebGL2RenderingContext {
    const gl: WebGL2RenderingContext | null = canvas.getContext("webgl2");

    if (gl) {
      return gl;
    }

    throw new WebGLUtils.WebGL2NotSupported('Could not initialize WebGL2 context');
  }

  static createShader(gl: WebGL2RenderingContext, type: GLenum, source: string): WebGLShader {
    const shader = gl.createShader(type)!;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success) {
      return shader;
    }

    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    throw new WebGLUtils.CreateShaderError(gl.getShaderInfoLog(shader) ?? 'unknown');
  }

  static createProgram(gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
    const program: WebGLProgram = gl.createProgram()!;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (success) {
      return program;
    }

    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    throw new WebGLUtils.CreateProgramError(gl.getProgramInfoLog(program) ?? 'unknown');
  }

  static resizeCanvasToDisplaySize(canvas: HTMLCanvasElement): boolean {
    // Lookup the size the browser is displaying the canvas in CSS pixels.
    const displayWidth  = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    const needResize = canvas.width  !== displayWidth ||
                       canvas.height !== displayHeight;

    if (needResize) {
      // Make the canvas the same size
      canvas.width  = displayWidth;
      canvas.height = displayHeight;
    }

    return needResize;
  }
}
