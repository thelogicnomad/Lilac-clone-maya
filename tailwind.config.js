module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1B2838',
        'primary-light': '#2D4A5E',
        sand: '#A68864',
        'sand-light': '#C4A882',
        'sand-pale': '#E8D5BC',
        seafoam: '#7A9E91',
        'seafoam-dark': '#5B8377',
        'seafoam-light': '#A8C5B8',
        ivory: '#FAF7F2',
        'ivory-mid': '#F0EBE3',
        'ivory-dark': '#E3DDD5',
        'warm-gray': '#8A8580',
        'muted-sage': '#C5D1CA',

        cream: '#FAF7F2',
        olive: '#1B2838',
        'olive-light': '#2D4A5E',
        lavender: '#A68864',
        'lavender-light': '#C4A882',
        beige: '#F0EBE3',
        sage: '#7A9E91',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
