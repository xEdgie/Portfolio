import ProjectCard from './project-card.tsx'

import TaskTribeImg from '../assets/tasktribe.png'
import StockSnapImg from '../assets/stocksnap.png'

export default function projects() {
    return(
        <section id="projects">
            <h1 className="text-center text-6xl font-bold my-10">My Projects</h1>
            <ProjectCard 
                title="TaskTribe"
                desc="TaskTribe helps your team work together seamlessly. Create and assign tasks, track progress, and boost productivity."
                src={ TaskTribeImg }
                alt="A screenshot from the TaskTribe website"
                url="https://tasktribe.app"
                newTab={true}
            />
            <ProjectCard 
                title="StockSnap"
                desc="StockSnap is a collaborative inventory and stock taking system."
                src={ StockSnapImg }
                alt="A screenshot from the StockSnap website"
                url="https://stocksnap.co.za"
                newTab={true}
            />
        </section>
    )
}