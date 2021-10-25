module.exports = {
    purge: [
        './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'Kumbh_Sans': ['Kumbh Sans', 'sans-serif']
            },
            backgroundImage: {
                'pattern-mobile': "url('./images/bg-pattern-mobile.svg')",
            },
            colors: {
                blue: {
                    soft: 'hsl(240, 73%, 65%)',
                },
                violet: {
                    soft: 'hsl(273, 75%, 66%)',
                },
            },
        },
    },
};