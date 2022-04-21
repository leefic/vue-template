import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from 'path'


// https://vitejs.dev/config/
export default defineConfig({
	resolve:{
		alias:{
			'@':resolve(__dirname,'src')
		}
	},
	server:{
		port:3000,
		open:true,
		cors:true,
		hmr:true,
		proxy:{
			'/api':{
				target:'http://localhost:6000',
				changeOrigin:true,
				rewrite:path=>path.replace(/^\/api/,'')
			}
		}
	},
	plugins: [
		vue(),
	],
});
