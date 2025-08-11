import ExperienceItem from "./experience-item.tsx"
import Spinner from "./spinner.tsx"

export default function Experience() {
    return(
        <section id="experience">
            <div className="px-10 mb-20">
                <Spinner caption="My experience" />
                <div className="grid gap-14">
                    <ExperienceItem title="Frontend Developer & Marketing" company="Overcoats" time="2023 - Present" />
                </div>
            </div>
        </section>
    )
}