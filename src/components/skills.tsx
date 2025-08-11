import SkillBubble from './skill-bubble'

export default function Skills() {
    return(
        <section id="skills">
            <h1 className="text-center text-6xl font-bold my-10">My Skills</h1>
            <div className="max-w-sm m-auto flex flex-wrap justify-center items-center">
                <SkillBubble src="/src/assets/html5.svg" alt="HTML 5 logo" />
                <SkillBubble src="/src/assets/css3.svg" alt="CSS 3 logo" />
                <SkillBubble src="/src/assets/bootstrap.svg" alt="Bootstrap logo" />
                <SkillBubble src="/src/assets/tailwindcss.svg" alt="Tailwind CSS logo" />
                <SkillBubble src="/src/assets/javascript.svg" alt="JavaScript logo" />
                <SkillBubble src="/src/assets/react.svg" alt="React logo" />
                <SkillBubble src="/src/assets/nextjs.svg" alt="NextJS logo" />
                <SkillBubble src="/src/assets/firebase.svg" alt="Firebase logo" />
                <SkillBubble src="/src/assets/illustrator.svg" alt="Adobe Illustrator logo" />
                <SkillBubble src="/src/assets/photoshop.svg" alt="Adobe Photoshop logo" />
                <SkillBubble src="/src/assets/unity.svg" alt="Unity logo" />
            </div>
        </section>
    )
}