import * as RevisionAnima from "../public/revisionStartAnima.json";
import * as VisualDataAnima from "../public/visualDataStartAnima.json";
import * as SuperHumanAnima from "../public/superHumanStartAnima.json";
import * as AALAnima from "../public/AALStartAnima.json";
import * as ConnectingAnima from '../public/connectingStartAnima.json'

export const projectsArray = [{
    name: "Re:Vision",
    color: 0,
    destination: "/revision",
    title: "I. Re:Vision",
    subTitle: "The Introduction of Interaction",
    explain: "Lorem ipsum dolor sit amet, " +
        "consectetur adipiscing elit. " +
        "Potenti orci sit fusce neque, " +
        "id egestas quis quisque nisl. " +
        "Volutpat pellentesque sed fermentum mi scelerisque orci. " +
        "Mi sem vitae nibh eget quis pellentesque in mauris.",
    animaData: RevisionAnima,
    movePointer: "5%"
}, {
    name: "Visual Data",
    color: 1,
    destination: "/data-visualisation",
    title: "II. The Syrian Civil War",
    subTitle: "Interaction based on amounts of data",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl.",
    animaData: VisualDataAnima,
    movePointer: "11%"
}, {
    name: "Super Human",
    color: 2,
    destination: "/super-human",
    title: "III. Super Human",
    subTitle: "Speculative Design, The discuss of future Human Computer Interaction.",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl.",
    animaData: SuperHumanAnima,
    movePointer: "26%"
}, {
    name: "Ambient Assisted Living",
    color: 3,
    destination: "/aal",
    title: "IV. Ambient Assisted Living",
    subTitle: "Part I. The implementation of future HCI.",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl.",
    animaData: AALAnima,
    movePointer: "42%"
}, {
    name: "Virtual Kinship",
    color: 4,
    destination: "/connecting",
    title: "V. Connecting",
    subTitle: "Part II. Rethinking of future connectivity of individuals.",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl.",
    animaData: ConnectingAnima,
    movePointer: "55%"
}]

export const interactionPageInfo = {
    title: "The Attitude towards Interactive Design.",
    subTitle: "Illustrated with five separate projects.",
    explain: ""
}

export const colorSqureArray = ["#FFEA7D", "#808080", "#4078CD", "#1F9F71", "#FF6A65"]

export const menuList = [
    {
        id: 0,
        title: "Interactive Projects",
        destination: "/interactive-projects",
        isActive: true
    }, {
        id: 1,
        title: "Product Design",
        destination: "/product-projects",
        isActive: false
    }, {
        id: 2,
        title: "Minor Projects",
        destination: "/minor-projects",
        isActive: false
    }, {
        id: 3,
        title: "About",
        destination: "/about",
        isActive: false
    }, {
        id: 4,
        title: "Contact",
        destination: "/contact",
        isActive: false,
    }
]
