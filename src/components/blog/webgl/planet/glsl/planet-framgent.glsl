#version 300 es
precision mediump float;

in vec3 v_normal;  
in vec2 v_texCoord; 

out vec4 fragColor;

uniform vec3 u_lightPos;
uniform vec3 u_cameraPos;

void main() {
    vec3 normal = normalize(v_normal);
    vec3 lightDir = normalize(u_lightPos);
    vec3 viewDir = normalize(u_cameraPos);
    vec3 reflectDir = reflect(-lightDir, normal);

    // 조명 계산 (Phong 조명 모델)
    vec3 ambient = vec3(0.1);
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diff * vec3(1.0, 0.8, 0.6);

    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    vec3 specular = spec * vec3(1.0);

    vec3 color = ambient + diffuse + specular;
    
    fragColor = vec4(color, 1.0);
}
