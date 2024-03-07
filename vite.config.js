import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ViteConfig = defineConfig(env => {
    const { command, mode, isPreview, isSsrBuild } = env;
    const options = {
        appType: "spa",
        mode,
        plugins: [
            react()
        ],
    }

    if (command === 'serve') {
        return {
            ...options,
            server: {
                host: "192.168.100.21"
                //open: true,
            },
            build: {
                sourcemap: true
            },

        }
    } else { // 결과추출 
        return {
            ...options,
            build: {
                sourcemap: true
                // rollupOptions: {
                //     output: {
                //         manualChunks(id) {
                //             if (id.includes("node_modules")) {
                //                 const module = id.split("node_modules/").pop().split("/")[0];
                //                 return `vendor/${module}`;
                //             }
                //         }
                //     }
                // }
            }
        }
    }
});

export default ViteConfig;