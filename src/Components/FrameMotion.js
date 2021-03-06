//animation settings for framer motion to apply to components in the app
export const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };


export const pageTransition = {
    type: 'ease',
    ease: 'anticipate',
    duration: 0.75
};


export const pageStyle = {
    position: "absolute"
};