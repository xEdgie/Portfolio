interface props {
    title:string,
    desc:string,
    src:string,
    alt:string,
    url:string,
    newTab:boolean
}

export default function ProjectCard(props:props) {
    return(
        <article>
            <div className="grid grid-cols-2 gap-10">
                <div className="">
                    <p></p>
                    <p className="text-5xl font-anton mt-3.5 mb-2.5">{props.title}</p>
                    <p className="text-xl text-gray-400">{props.desc}</p>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <a href={props.url} target={props.newTab ? "_blank" : "_self"} rel="noopener noreferrer" className="block">
                        <img src={props.src} alt={props.alt} />
                    </a>
                </div>
            </div>
        </article>
    )
}