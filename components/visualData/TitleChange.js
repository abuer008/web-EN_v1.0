import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Tween } from 'react-gsap'

gsap.registerPlugin(TextPlugin)

export const TitleChange = ({children}) => {
    return (
        <Tween to={{text: 'Syrian Civil War'}} duration={2} delay={1.5}>
            {children}
        </Tween>
    )
}