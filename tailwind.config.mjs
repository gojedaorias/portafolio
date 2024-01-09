/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			'sm': '640px',
	  
			'md': '768px',
	  
			'lg': '1024px',
	  
			'xl': '1280px',
		},
		extend: {
			colors: {
				'background': '#2B2C37',
				'movistar': '#009DF4',
				'wom': '#764ABC',
				'ntt': "#0072BB",
				'dale': "#02ABD2",
				'alemana': "#00A9A1",
				'html': '#E34F26',
				'css': '#0C73B8',
				'js': '#F7DF1E',
				'ts': '#3178C6',
				'react': '#00D8FF',
				'astro': '#FF5D01',
				'material': '#007FFF',
				'jest': '#99425B',
				
				'transparent': 'transparent',

			  },
		},
	},
	plugins: [],
}
