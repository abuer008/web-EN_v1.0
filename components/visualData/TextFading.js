import {Tween} from 'react-gsap'

export const TextFading = ({children}) => {
    return (
        <Tween from={{opacity: 0, y: 50}}
               ease='power1.inOut'
               duration={1}
               delay={0.3}
               stagger={0.3}
        >
            {children}
        </Tween>
    )
}