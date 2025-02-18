#version 300 es
precision mediump float;

layout (location = 0) in vec4 a_position; // 정점 위치 입력

void main() {
    gl_Position = a_position; // 정점 위치 설정
}
