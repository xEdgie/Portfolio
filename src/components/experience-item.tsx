interface ExperienceItemProps {
    title:string,
    company:string,
    time:string
}

export default function ExperienceItem(props:ExperienceItemProps) {
    return(
        <article>
            <p className="text-xl text-gray-400">{ props.company }</p>
            <p className="text-5xl font-anton mt-3.5 mb-2.5">{ props.title }</p>
            <p className="text-lg text-gray-400">{ props.time }</p>
            <br />
            <p className="text-md max-w-[40%] text-gray-400">At Overcoats, I’ve had the opportunity to combine my love for design and development. I’ve built and maintained multiple e-commerce websites using Shopify and custom Bootstrap-based solutions, ensuring they’re both responsive and intuitive. Alongside development, I’ve also taken on the role of Graphic Designer, shaping the visual identity of our projects and delivering graphics that elevate the overall user experience.</p>
        </article>
    )
}