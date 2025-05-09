/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './app/components/**/*.{js,jsx,ts,tsx}',
        './app/routes/**/*.{js,jsx,ts,tsx}',
        './app/root.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                vet: {
                    primary: '#2563eb', // mavi
                    secondary: '#22d3ee', // cyan
                    accent: '#fbbf24', // sarı
                    danger: '#ef4444', // kırmızı
                    cardBlue: '#bfdbfe',
                    cardGreen: '#bbf7d0',
                    cardYellow: '#fef9c3',
                    cardPink: '#fbcfe8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                logo: ['Poppins', 'Inter', 'sans-serif'],
            },
            boxShadow: {
                card: '0 2px 8px 0 rgba(0,0,0,0.06)',
            },
            // Merkezi hizalama için utility
            centerize: {
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
            },
        },
    },
    plugins: [],
}; 