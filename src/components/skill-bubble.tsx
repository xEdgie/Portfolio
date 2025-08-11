interface SkillBubbleProps {
    src:string,
    alt:string
}

export default function SkillBubble(props:SkillBubbleProps) {
    return(
        <div className="overflow-hidden rounded-full w-14 h-14 bg-gray-700 p-2.5 mx-1 my-0.5">
            <img className="w-full h-full" src={props.src} alt={props.alt}/>
        </div>
    )
}