import fs from "fs";
import path from "path";

export function loadShader(shaderPath: string): string {
    return fs.readFileSync(path.join(process.cwd(), shaderPath), "utf8");
}