export default {
  theme: {
    extend: {
      keyframes: {
        bounceLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' }, // 20px chapga siljish
        },
      },
      animation: {
        bounceLeft: 'bounceLeft 0.5s ease-in-out',
      },
    },
  },
}
