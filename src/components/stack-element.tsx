interface SkillBubbleProps {
    name:string,
    src:string,
    alt:string
}

export default function StackElement(props:SkillBubbleProps) {
    return(
        <div className="flex gap-3 h-10 items-center">
            <img className="w-full h-full" src={props.src} alt={props.alt}/>
            <span className="text-2xl whitespace-nowrap">{ props.name }</span>
        </div>
    )
}