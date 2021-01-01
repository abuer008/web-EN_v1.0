import {Tween} from "react-gsap";

export const Fading = ({children}) => {
    return (
        <Tween from={{opacity: 0}} duration={1} ease="power3.out">
            {children}
        </Tween>
    )
}