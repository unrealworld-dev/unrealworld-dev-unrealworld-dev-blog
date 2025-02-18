"use client";

import { useEffect, useRef } from "react";
import { createProgram } from "@/components/blog/webgl/webgl-shader";

import vertexShaderSource from "./glsl/planet-vertex.glsl"
import fragmentShaderSource from "./glsl/planet-framgent.glsl"


function CreatePlanet(gl: WebGL2RenderingContext, program: WebGLProgram, canvas: HTMLCanvasElement) {
    // 🔹 정점 버퍼 생성
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // 🔹 화면을 가득 채울 삼각형 2개 (정점 6개)
    const positions = new Float32Array([
        -1, -1, 1, -1, -1, 1,  // 첫 번째 삼각형
        -1, 1, 1, -1, 1, 1   // 두 번째 삼각형
    ]);

    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // 🔹 정점 속성 설정
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // 🔹 유니폼 변수 설정 (해상도 전달)
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
}

function CreateLight(gl: WebGL2RenderingContext, program: WebGLProgram) {

    const lightPosLocation = gl.getUniformLocation(program, "u_lightPos");
    gl.uniform3f(lightPosLocation, 1.0, 1.0, 2.0);
}

function CreateCamera(gl: WebGL2RenderingContext, program: WebGLProgram) {
    const cameraPosLocation = gl.getUniformLocation(program, "u_cameraPos");
    gl.uniform3f(cameraPosLocation, 0.0, 0.0, 2.0);
}

export default function WebGLPlanet() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl2");
        if (!gl) {
            console.error("WebGL2 not supported");
            return;
        }

        // 🔹 Shader Program 생성
        const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
        if (!program) return;

        gl.useProgram(program);

        CreatePlanet(gl, program, canvas);
        CreateLight(gl, program);
        CreateCamera(gl, program);

        // 🔹 WebGL 렌더링
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6); // 전체 화면 렌더링

        return () => {
            console.log("Cleaning up WebGL resources...");
            gl.useProgram(null);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
        };
    }, []);

    return <canvas ref={canvasRef} width={600} height={600} />;
}
