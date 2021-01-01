import {Tween} from 'react-gsap'
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export const TextFading = ({children}) => {
    return (
        <Tween from={{opacity: 0, y: 50}}
               ease='power1.inOut'
               duration={1}
               delay={0.3}
        >
            {children}
        </Tween>
    )
}