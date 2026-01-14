export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FACC15",
                background: "#050505",
                surface: "#0F0F0F",
            },
            fontFamily: {
                display: ["Sora", "sans-serif"],
                handwriting: ["Delicious Handrawn", "cursive"],
            },
            animation: {
                'liquid': 'liquid 15s ease-in-out infinite',
                'scroll': 'scroll 40s linear infinite',
            },
            keyframes: {
                liquid: {
                    '0%, 100%': {
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        transform: 'translate(0, 0) rotate(0deg) scale(1)'
                    },
                    '33%': {
                        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
                        transform: 'translate(30px, -50px) rotate(10deg) scale(1.1)'
                    },
                    '66%': {
                        borderRadius: '70% 30% 40% 60% / 40% 70% 50% 30%',
                        transform: 'translate(-20px, 20px) rotate(-5deg) scale(0.95)'
                    }
                },
                scroll: {
                    'from': { transform: 'translateX(0)' },
                    'to': { transform: 'translateX(-50%)' }
                }
            }
        },
    },
    plugins: [],
}
