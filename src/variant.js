export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                easy: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}