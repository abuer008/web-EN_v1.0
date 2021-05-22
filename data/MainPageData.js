import * as RevisionAnima from "../public/revisionStartAnima.json";
import * as VisualDataAnima from "../public/visualDataStartAnima.json";
import * as SuperHumanAnima from "../public/superHumanStartAnima.json";
import * as AALAnima from "../public/AALStartAnima.json";
import * as ConnectingAnima from '../public/connectingStartAnima.json'

export const projectsArray = [{
    name: "Re:Vision",
    color: 0,
    destination: "/revision",
    title: "Language",
    subTitle: "The Introduction of Interaction",
    explain: "Interactive design is a language that translating information from one into another. The re:vision project introduced the essentiality of interactive design. Let’s see how optical signals are translated into the haptic language.",
    animaData: RevisionAnima,
    movePointer: "5%"
}, {
    name: "Visual Data",
    color: 1,
    destination: "/data-visualisation",
    title: "Performance",
    subTitle: "Interaction based on amounts of data",
    explain: "Data, the foundation of interface design. Representing data, decoration and making data more understandable to a human, are the essential tasks of interface design.",
    animaData: VisualDataAnima,
    movePointer: "11%"
}, {
    name: "Super Human",
    color: 2,
    destination: "/super-human",
    title: "Strategic thinking",
    subTitle: "Speculative Design, The discuss of future Human Machine Interaction.",
    explain: "What would be the future HMI looks like? In my opinion, the symbiosis between human being and machines in the future have become realistic.",
    animaData: SuperHumanAnima,
    movePointer: "26%"
}, {
    name: "Ambient Assisted Living",
    color: 3,
    destination: "/aal",
    title: "Design thinking",
    subTitle: "Part I. The implementation of future HMI.",
    explain: "The embedded machine can be deeply affected our lives, and improving the authentic impairment in society - the lack of elderly care services.",
    animaData: AALAnima,
    movePointer: "42%"
}, {
    name: "Virtual Kinship",
    color: 4,
    destination: "/connecting",
    title: "The Epistemology of Interaction Design",
    subTitle: "Part II. Rethinking of future connectivity of individuals.",
    explain: "Further considerations of the influence of contemporary digitalisation are not only challenging how we live but also the relationship between individuals, how we interact with others - virtual kinship, and the novel form of households.",
    animaData: ConnectingAnima,
    movePointer: "55%"
}]

export const interactionPageInfo = {
    title: "The Attitude towards Interactive Design.",
    subTitle: "Demonstrated with five separate projects.",
    explain: ""
}

export const colorSqureArray = ["#FFEA7D", "#808080", "#4078CD", "#1F9F71", "#FF6A65"]

export const menuList = [
    {
        id: 0,
        title: "Work",
        destination: "/work",
        isActive: false
    },
    {
        id: 1,
        title: "Interactive Projects",
        destination: "/interactive-projects",
        isActive: true
    }, {
        id: 2,
        title: "Product Design",
        destination: "/product-projects",
        isActive: false
    }, {
        id: 3,
        title: "Minor Projects",
        destination: "/minor-projects",
        isActive: false
    }, {
        id: 4,
        title: "About",
        destination: "/about",
        isActive: false
    }, {
        id: 5,
        title: "Contact",
        destination: "/contact",
        isActive: false,
    }
]
