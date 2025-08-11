interface ExperienceItemProps {
    title:string,
    company:string,
    time:string
}

export default function ExperienceItem(props:ExperienceItemProps) {
    return(
        <div>
            <p className="text-xl text-gray-400">{ props.company }</p>
            <p className="text-5xl font-anton mt-3.5 mb-2.5">{ props.title }</p>
            <p className="text-lg text-gray-400">{ props.time }</p>
        </div>
    )
}