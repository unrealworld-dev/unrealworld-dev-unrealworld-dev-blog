#version 300 es
precision mediump float;

out vec4 fragColor;

uniform vec2 u_resolution;
uniform vec3 u_lightPos; // 광원 위치
uniform vec3 u_cameraPos; // 카메라 위치

struct Sphere {
    vec3 center;
    float radius;
};

// 구 교차점 계산 함수
float sphIntersect(in vec3 ro, in vec3 rd, in Sphere sph, out vec3 hitPoint, out vec3 normal) {
    vec3 oc = ro - sph.center;
    float b = dot(rd, oc);
    float c = dot(oc, oc) - sph.radius * sph.radius;
    float h = b * b - c;
    if (h < 0.0) return -1.0; // 교차점 없음

    h = -b - sqrt(h);
    hitPoint = ro + h * rd;
    normal = normalize(hitPoint - sph.center);
    return h;
}

void main() {
    vec2 uv = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
    uv.x *= u_resolution.x / u_resolution.y; // 화면 비율 보정

    // 카메라 설정
    vec3 ro = u_cameraPos;
    vec3 rd = normalize(vec3(uv, -1.0));

    // 구 설정
    Sphere sphere = Sphere(vec3(0.0, 0.0, 0.0), 0.5);

    // 교차점 및 법선 계산
    vec3 hitPoint, normal;
    float t = sphIntersect(ro, rd, sphere, hitPoint, normal);

    vec3 color = vec3(0.0);
    if (t > 0.0) {
        // 조명 계산 (Phong 조명 모델)
        vec3 lightDir = normalize(u_lightPos - hitPoint);
        vec3 viewDir = normalize(u_cameraPos - hitPoint);
        vec3 reflectDir = reflect(-lightDir, normal);

        // Ambient
        vec3 ambient = vec3(0.1);

        // Diffuse
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = diff * vec3(1.0, 0.8, 0.6);

        // Specular
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 16.0);
        vec3 specular = spec * vec3(1.0);

        color = ambient + diffuse + specular;
    }

    fragColor = vec4(color, 1.0);
}