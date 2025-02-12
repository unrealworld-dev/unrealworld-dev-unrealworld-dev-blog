import type { NextConfig } from "next";
import { build } from 'velite'

const nextConfig: NextConfig = {
  /* config options here */
};

const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  import('velite').then(v => v.build({ watch: isDev, clean: !isDev }))
}

class VeliteWebpackPlugin {
  static started = false
  apply(/** @type {import('webpack').Compiler} */ compiler: { hooks: { beforeCompile: { tapPromise: (arg0: string, arg1: () => Promise<void>) => void; }; }; options: { mode: string; }; }) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      await build({ watch: dev, clean: !dev })
    })
  }
}

/** @type {import('next').NextConfig} */
export default {
  // next config here...
  webpack: (config: { plugins: VeliteWebpackPlugin[]; }) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}

