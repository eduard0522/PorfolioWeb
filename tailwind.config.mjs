/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors:{
				primary:{
					900:'#110622',
					800:'#290061',
					700:'#421A7B',
					600:'#763CAC',
					500:'#BA82ED',
					400:"#763cac6a",
					300:"#9060bc88",
					200:"#DFC8FF"
				} ,
				primaryOpacity:{
					900:"#11062265",
					800:'#290061dd',
					700:'#421a7bb0',
					600:'#00000090',
					400:"#11062280",
					500:'#BA82ED56',
					200:"#DFC8FF30"
				},
				wOpacity:{
					900: "#ffffff80",
					800:'#ffffff60',
					700:'#ffffff30',
					600:'#ffffff40'
								}
			}
		},
	},
	plugins: [],
}
