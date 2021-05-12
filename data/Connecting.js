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
        plainText: "In the last project, we discussed the lack of elderly care services and tried to alleviate using “Ambient Assisted Living”. Nevertheless, the deeper reason that causes this problem was never set foot on - the collapse of the traditional family. Since the mid-1960s, the family in Germany - like in other highly developed industrial societies, has undergone pronounced change processes. Many social scientists believe that marriage and family are going through a crisis; there is even occasional talk of the “death of the family”. Childlessness, single-parent family, and ageing population, the collapse of traditional family form has caused series of social problems and financial crisis; more children and adolescents no longer grow up during their entire childhood and adolescence with both birth parents.",
        plainText2: "So, in this inevitable trend, what impact will the new generation of digital and interaction design have on developing relationships between individuals?"
    },
    introduction: {
        heading: "The Connecting",
        plainText: "This project's focus points are now on us and on next generations reshaping the family forms in sociality, looking for the novel opportunity that digitalisation changed our family forms and the binding between individuals. And eventually to build a familial connection between strangers.",
        plainText2: "The rise of social networking has shown that virtualization is an important way to build connections in the future. Making virtual relationships more natural through more semantic means of interaction is the main innovation of this product. The Connecting is a wearable connectivity platform that enables a direct virtual relationship between two individuals in any location."
    },
    character: {
        heading: 'Characterisation',
        plainText: "In the CONNECTING platform, users automatically create their own personalized personas. Through the information collected by the bracelet sensors, the virtual character with a unique personality would be created to interact. To protect the user's privacy, the virtual persona can only present three basic simulated states."
    },
    communication: {
        heading: 'Intimate Communication',
        plainText: "The Connecting bracelet offers a unique direct interaction method. Touch the bracelet anywhere, anytime, and the close to skin haptic sensors will instantly simulate real touch to create a space-independent interaction experience."
    },
    cataloging: {
        heading: 'Measurable kinship',
        plainText: "It quantifies unfathomable communication while ensuring privacy and provides at-a-glance relationship charts while optimizing kinship through big data calculations."
    },
    compatibility: {
        heading: 'Flexible compatibility',
        plainText: 'It also contains the smartphone version with full access, for most flexibilities in different scenarios.'
    },
    prototype: {
        heading: "Wearable kinship",
        plainText: "Improve the interaction logic of the product according to various design methods such as persona and scenario, and consider the technical requirements together with the details to meet the project concept as much as possible within the framework of technology."
    },
    techniques: {
        heading: 'SwiftUI and SpriteKit',
        plainText: "The second process is based on the finished design to decide how to realise the idea in the design phase. SwiftUI is finally chosen as the UI framework for interface development in both platforms - smartphone and smartwatch. The Spritekit, the native framework for 2D animations is responsible for the 2D character and its movement. For more technical details, please visit my GitHub repository."
    },
    redesign: {
        heading: "Character with unique personality",
        plainText: "Using the latest SwiftUI framework and Spritkit framework, combined with motion design, hundreds of character animations were created and graded according to their characteristics in order to create virtual characters with unique personalities."
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
