import * as introAnima from '../public/connecting/introAnima.json'
import * as intimatAnima from '../public/connecting/initimaCommAnima.json'
import * as catalogAnima from '../public/connecting/catalogAnima.json'
import * as flexibleAnima from '../public/connecting/flexibleComAnima.json'
import * as idleExample from '../public/connecting/idleExample.json'
import * as activeExample from '../public/connecting/activeExample.json'
import * as sleepyExample from '../public/connecting/sleepyExample.json'

export const connectingData = {
    research: {
        heading: "The development of contemporary kinship",
        plainText: "In the last project, we discussed the lack of elderly care services and tried to alleviate using “Ambient Assisted Living”. Nevertheless, the deeper reason that causes this problem was never set foot on - the collapse of the traditional family. Since the mid-1960s, the family in Germany - like in other highly developed industrial societies, has undergone pronounced change processes. Many social scientists believe that marriage and family are going through a crisis; there is even occasional talk of the “death of the family”.",
        plainText2: "Childlessness, single-parent family, and ageing population, the collapse of traditional family form has caused series of social problems and financial crisis; more children and adolescents no longer grow up during their entire childhood and adolescence with both birth parents, the kinship of modern generations become weaker. The straight consequence is, few relatives willing to take care of their own kins."
    },
    introduction: {
        heading: "The Connecting",
        plainText: "This project's focus points are now on us and on next generations reshaping the family forms in sociality, looking for the novel opportunity that digitalisation changed our family forms and the binding between individuals. And eventually to build a familial connection between strangers.",
        plainText2: "The connecting is a digital platform, and the family members can automatically bond. With the customised wearable smart bracelet, users can actually perceive and touch family members' hand wrist without physical boundaries."
    },
    character: {
        heading: 'Characterisation',
        plainText: "The actual person will be illustrated as a 2D character, and the user can check the state and interact with him directly. The character will be animated smoothly and has three types of states."
    },
    communication: {
        heading: 'Intimate Communication',
        plainText: "With a simple touch on hand wrist, the tactile signals will be delivered to the target and performed directly."
    },
    cataloging: {
        heading: 'Measurable kinship',
        plainText: "Communication was being catalogued and visualised, and the system will encourage the user to communicate and improve the quality of communication."
    },
    compatibility: {
        heading: 'Flexible compatibility',
        plainText: 'It also contains the smartphone version with full access, for most flexibilities in different scenarios.'
    },
    prototype: {
        heading: "Prototype",
        plainText: "As the final project of series topics, I want to experience the complete production processes and improve it. The first process is Design phase, through design methods such as scenarios visualising, the prototype of minimised screens was designed, the functions and relations of interface element were also established."
    },
    techniques: {
        heading: 'SwiftUI and SpriteKit',
        plainText: "The second process is based on the finished design to decide how to realise the idea in the design phase. SwiftUI is finally chosen as the UI framework for interface development in both platforms - smartphone and smartwatch. The Spritekit, the native framework for 2D animations is responsible for the 2D character and its movement. For more technical details, please visit my GitHub repository."
    },
    redesign: {
        heading: "Styling",
        plainText: "Finally, the big difference from traditional processes is the redesign phase. After the decision of techniques, the design must be improved for a higher standard and performance. To animate the character smoothly and naturally in Spritekit framework; and switch nicely the character states, that receive by target and interaction; the movements of character have been redesigned with strict technical requirements. For now, over 60 movements are being exported for random performing."
    },
    conclusion: {
        heading: "The epistemology of interactive design",
        plainText: "What is an ideal alternative form to the contemporary family institution? There is no certain answer. But here is a possible direction, by the symbiosis of human and machines, the shifts of family form in future and the communication between individuals can be replaced and progressed, with characterisation in a virtual world, the gender, races, and skin tone those stereotypical conditions would be eliminated.",
        plainText2: "In industrial design, the relationship between science, technology, and art has always been the core of the discussion. In the various periods experienced in history, the three have their own emphasis, and they have developed in completely different design directions, and have also exposed various drawbacks. Digitalisation and the emergence of digital products give us the first opportunity to fully integrate these three concepts. Digital applications are no longer limited to materials and processing techniques. In interface design's epistemology, the disputes between art, technology, and science are settled here. They should not be distinguished from each other and integrate and efficiently achieve the conceptual idea."
    }
}

export const connectingAnima = [introAnima, intimatAnima, catalogAnima, flexibleAnima]

export const statesExample = {
    idle: idleExample,
    active: activeExample,
    sleepy: sleepyExample
}

export const animaState = {
    idle: {
        heading: 'Idle state',
        plainText: 'The normal state - the user can interact with the character normally.'
    },
    active: {
        heading: 'Active state',
        plainText: 'The state shows the target is busy and not be able to interact.'
    },
    sleepy: {
        heading: 'Sleepy state',
        plainText: 'The state shows target is hoping to interact with the user.'
    }
}
