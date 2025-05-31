export type SphereData = {
	vertices: number[];
	indices: number[];
	normals: number[];
	texCoords: number[];
}

export function createSphere(radius: number, latBands: number, lonBands: number) : SphereData {
	const vertices = [];
	const indices = [];
	const normals = [];
	const texCoords = [];

	for (let lat = 0; lat <= latBands; lat++) {
		const theta = (lat * Math.PI) / latBands;
		const sinTheta = Math.sin(theta);
		const cosTheta = Math.cos(theta);

		for (let lon = 0; lon <= lonBands; lon++) {
			const phi = (lon * 2 * Math.PI) / lonBands;
			const sinPhi = Math.sin(phi);
			const cosPhi = Math.cos(phi);

			const x = cosPhi * sinTheta;
			const y = cosTheta;
			const z = sinPhi * sinTheta;
			const u = lon / lonBands;
			const v = lat / latBands;

			// 위치
			vertices.push(radius * x, radius * y, radius * z);
			// 방향
			normals.push(x, y, z);
			// text uv
			texCoords.push(u, v);
		}
	}

	for (let lat = 0; lat < latBands; lat++) {
		for (let lon = 0; lon < lonBands; lon++) {
			const first = lat * (lonBands + 1) + lon;
			const second = first + lonBands + 1;

			indices.push(first, second, first + 1);
			indices.push(second, second + 1, first + 1);
		}
	}

	return { vertices, indices, normals, texCoords };
}