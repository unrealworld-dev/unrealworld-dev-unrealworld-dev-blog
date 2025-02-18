"use client"

import { useEffect, useRef } from "react";
import { createProgram } from "@/components/blog/webgl/webgl-shader";

import vertex from "./glsl/triangle-vertex.glsl"
import fragment from "./glsl/triangle-fragment.glsl"

const vertexShaderSource = vertex;

const fragmentShaderSource = fragment;

export function createTraingle(gl: WebGL2RenderingContext, program: WebGLProgram) {
	const positions = new Float32Array([
		0.0, 0.5,
		-0.5, -0.5,
		0.5, -0.5
	])

	const positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

	const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
	gl.enableVertexAttribArray(positionAttributeLocation);

	gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
}

export default function WebGLTriangle() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const gl = canvas.getContext("webgl2");

		if (!gl) {
			console.error("do not support WebGL2");
			return;
		}
		
		gl.viewport(0, 0, canvas.width, canvas.height);

		const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
		if (!program) return;

		gl.useProgram(program);
		createTraingle(gl, program);
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
	}, []);

	return <canvas ref={canvasRef} width={600} height={600} />;
}