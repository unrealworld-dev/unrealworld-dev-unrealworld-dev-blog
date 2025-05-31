#version 300 es
precision mediump float;

uniform vec2 u_resolution;
out vec4 fragColor; // gl_FragColor 대신 사용

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    fragColor = vec4(uv, 0.5, 1.0);
}