function createShader(gl: WebGL2RenderingContext, type: GLenum, source: string) {
	const shader = gl.createShader(type);
	if (!shader)
		return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.log("Shader complie error:", gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
};

export function createProgram(gl: WebGL2RenderingContext, vertexSource: string, fragmentSource: string) {

	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

	if (!vertexShader || !fragmentShader) return null;

	gl.shaderSource(vertexShader, vertexSource);
	gl.compileShader(vertexShader);

	gl.shaderSource(fragmentShader, fragmentSource);
	gl.compileShader(fragmentShader);

	const program = gl.createProgram();

	if (!program) {
		console.error("shader Program Create Fail");
		return null;
	}
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error("program link Fail : ", gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
		return null;
	}
	return program;
}