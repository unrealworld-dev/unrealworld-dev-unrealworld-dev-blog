"use client";

import { useEffect, useRef } from "react";
import { createProgram } from "@/components/blog/webgl/webgl-shader";

import vertexShaderSource from "./glsl/planet-vertex.glsl"
import fragmentShaderSource from "./glsl/planet-framgent.glsl"
import { createSphere, SphereData } from '@/libs/webgl/sphere'


export type AttributeWebGL = {
    indexLoc: GLuint;
    size: GLint;
    type: GLenum;
    normalized?: GLboolean;
    stride?: GLsizei;
    offset?: GLintptr;
}

export type BindBufferGL = {
    target: GLenum;
    srcData: AllowSharedBufferSource | null;
    usage: GLenum
}


function createSphereBuffers(gl: WebGL2RenderingContext, sphereData: SphereData) {
    const vao = gl.createVertexArray();
    const vbo = gl.createBuffer();
    const ebo = gl.createBuffer();
    const normalBuffer = gl.createBuffer();
    const texCoordBuffer = gl.createBuffer();

    function setupBuffer(buffer: WebGLBuffer, bindBuffer: BindBufferGL, attributeData?: AttributeWebGL) {
        gl.bindBuffer(bindBuffer.target, buffer);
        gl.bufferData(bindBuffer.target, bindBuffer.srcData, bindBuffer.usage);
        if (attributeData) {
            gl.enableVertexAttribArray(attributeData.indexLoc);
            gl.vertexAttribPointer(attributeData.indexLoc, attributeData.size, attributeData.type, attributeData.normalized ?? false, attributeData.stride ?? 0, attributeData.offset ?? 0);
        }
    }

    gl.bindVertexArray(vao);

    setupBuffer(vbo,
        { target: gl.ARRAY_BUFFER, srcData: new Float32Array(sphereData.vertices), usage: gl.STATIC_DRAW },
        { indexLoc: 0, size: 3, type: gl.FLOAT, normalized: false }
    )

    setupBuffer(normalBuffer,
        { target: gl.ARRAY_BUFFER, srcData: new Float32Array(sphereData.normals), usage: gl.STATIC_DRAW },
        { indexLoc: 1, size: 3, type: gl.FLOAT, normalized: false }
    )

    setupBuffer(texCoordBuffer,
        { target: gl.ARRAY_BUFFER, srcData: new Float32Array(sphereData.texCoords), usage: gl.STATIC_DRAW },
        { indexLoc: 2, size: 2, type: gl.FLOAT, normalized: false }
    )

    setupBuffer(ebo,
        { target: gl.ELEMENT_ARRAY_BUFFER, srcData: new Uint16Array(sphereData.indices), usage: gl.STATIC_DRAW }
    )

    return { vao, vbo, ebo, normalBuffer, texCoordBuffer, indexCount: sphereData.indices.length };
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

        const sphere = createSphere(1.0, 32, 32);
        const sphereBuffers = createSphereBuffers(gl, sphere);
        gl.bindVertexArray(sphereBuffers.vao);

        // 🔹 WebGL 렌더링
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.drawElements(gl.TRIANGLES, sphereBuffers.indexCount, gl.UNSIGNED_SHORT, 0);


        return () => {
            console.log("Cleaning up WebGL resources...");
            gl.useProgram(null);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

            // 리소스 삭제
            gl.deleteBuffer(sphereBuffers.vbo);
            gl.deleteBuffer(sphereBuffers.ebo);
            gl.deleteBuffer(sphereBuffers.normalBuffer);
            gl.deleteBuffer(sphereBuffers.texCoordBuffer);
            gl.deleteVertexArray(sphereBuffers.vao);
        };
    }, []);

    return <canvas ref={canvasRef} width={600} height={600} />;
}
