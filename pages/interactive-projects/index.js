import Layout from '../../components/Layout'
import NameSqure from "../../components/ProjectNameSqure";

const projectsArray = [{
    name: "Re:Vision",
    color: 0,
    destination: "/revision"
}, {
    name: "Data Visualisation",
    color: 1,
    destination: "/data-visualisation"
}, {
    name: "Super Human",
    color: 2,
    destination: "/super-human"
}, {
    name: "Ambient Assisted Living",
    color: 3,
    destination: "/aal"
}, {
    name: "Virtual Kinship",
    color: 4,
    destination: "/connecting"
}]

function InteractiveProjects() {

    return (
        <Layout>
            <h1>The One Topic of Interaction</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl. Volutpat pellentesque sed fermentum mi scelerisque orci. Mi sem vitae nibh eget quis pellentesque in mauris.</p>
            <div>
                {
                projectsArray.map(project => {
                    return <NameSqure name={project.name} color={project.color} destination={project.destination} key={project.color} />
                })
            }
            </div>
        </Layout>
    )
}

export default InteractiveProjects