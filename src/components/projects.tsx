import ProjectCard from './project-card.tsx'

export default function projects() {
    return(
        <section id="projects">
            <h1 className="text-center text-6xl font-bold my-10">My Projects</h1>
            <ProjectCard 
                title="TaskTribe"
                desc="TaskTribe helps your team work together seamlessly. Create and assign tasks, track progress, and boost productivity."
                src="/src/assets/tasktribe.png"
                alt="A screenshot from the TaskTribe website"
                url="https://tasktribe.app"
                newTab={true}
            />
            <ProjectCard 
                title="StockSnap"
                desc="StockSnap is a collaborative inventory and stock taking system."
                src="/src/assets/stocksnap.png"
                alt="A screenshot from the StockSnap website"
                url="https://stocksnap.co.za"
                newTab={true}
            />
        </section>
    )
}