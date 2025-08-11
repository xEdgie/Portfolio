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
        <div className="grid grid-cols-5 gap-3 text-center w-8/12 m-auto my-10">
            <div className="col-span-3 rounded-lg overflow-hidden">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="col-span-2 flex flex-col justify-evenly h-full bg-black/25 backdrop-blur-md rounded-lg p-6">
                <h2 className="text-4xl font-bold">{props.title}</h2>
                <p className="text-xl">{props.desc}</p>
                <a className="underline" href={props.url} target="about:blank">Visit</a>
            </div>
        </div>
    )
}