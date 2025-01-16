import { defineConfig, ConfigEnv, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  console.log(`configuring vite with command: ${command}, mode: ${mode}`);
  const cwd = process.cwd();
  const env = { ...loadEnv(mode, cwd, "VITE_") };

  const serverConfig: UserConfig["server"] = {
    host: true,
    port: Number(env.VITE_PORT),
    strictPort: true,
  };

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          exportType: "default",
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: "**/*.svg",
      }),
    ],
    preview: serverConfig,
    server: serverConfig,
    build: {
      outDir: "build",
      sourcemap: env.VITE_SOURCEMAP === "true",
    },
    define: {
      __IS_DEV__: JSON.stringify(mode === "development"),
    },
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        app: path.resolve(__dirname, "src/app"),
        entities: path.resolve(__dirname, "src/entities"),
        features: path.resolve(__dirname, "src/features"),
        pages: path.resolve(__dirname, "src/pages"),
        shared: path.resolve(__dirname, "src/shared"),
        widgets: path.resolve(__dirname, "src/widgets"),
      },
    },
  };
});
