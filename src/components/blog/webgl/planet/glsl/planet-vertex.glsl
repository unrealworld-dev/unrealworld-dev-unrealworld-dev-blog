#version 300 es
precision mediump float;

layout (location = 0) in vec3 a_position; // 정점 위치
layout (location = 1) in vec3 a_normal;   // 노멀 벡터
layout (location = 2) in vec2 a_texCoord; // 텍스처 좌표

out vec3 v_normal;
out vec2 v_texCoord;

void main() {
    gl_Position = vec4(a_position, 1.0);
    v_normal = a_normal;  
    v_texCoord = a_texCoord;
}
