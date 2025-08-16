import Spinner from './spinner.tsx'
import ProjectCard from './project-card.tsx'

import TaskTribeImg from '../assets/tasktribe.png'
import StockSnapImg from '../assets/stocksnap.png'

export default function projects() {
    return(
        <section id="projects">
            <div className="px-10 mb-20">
                <Spinner caption="My projects" />
                <div className="grid gap-14">
                    <ProjectCard 
                        title="TaskTribe"
                        desc="A productivity-focused web app designed to help users manage and organize their tasks efficiently. Built with a modern frontend stack, TaskTribe emphasizes simplicity, responsive design, and a smooth user experience, making task management both intuitive and engaging."
                        src={ TaskTribeImg }
                        alt="A screenshot from the TaskTribe website"
                        url="https://tasktribe.app"
                        newTab={true}
                    />
                    <ProjectCard 
                        title="StockSnap"
                        desc="An inventory management and stocktaking platform built to simplify the way businesses handle their products. StockSnap enables users to track stock levels, record stocktakes, and manage inventory data efficiently, reducing errors and saving time."
                        src={ StockSnapImg }
                        alt="A screenshot from the StockSnap website"
                        url="https://stocksnap.co.za"
                        newTab={true}
                    />
                </div>
            </div>
        </section>
    )
}