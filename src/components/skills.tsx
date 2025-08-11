import SkillBubble from './skill-bubble'

import ReactLogo from '../assets/react.svg'
import NextJSLogo from '../assets/nextjs.svg'
import HTML5Logo from '../assets/html5.svg'
import CSS3Logo from '../assets/css3.svg'
import BootstrapLogo from '../assets/bootstrap.svg'
import TailwindCSSLogo from '../assets/tailwindcss.svg'
import JavaScriptLogo from '../assets/javascript.svg'
import FirebaseLogo from '../assets/firebase.svg'
import IllustratorLogo from '../assets/illustrator.svg'
import PhotoshopLogo from '../assets/photoshop.svg'
import UnityLogo from '../assets/unity.svg'

export default function Skills() {
    return(
        <section id="skills">
            <h1 className="text-center text-6xl font-bold my-10">My Skills</h1>
            <div className="max-w-sm m-auto flex flex-wrap justify-center items-center">
                <SkillBubble src={ HTML5Logo} alt="HTML 5 logo" />
                <SkillBubble src={ CSS3Logo} alt="CSS 3 logo" />
                <SkillBubble src={ BootstrapLogo } alt="Bootstrap logo" />
                <SkillBubble src={ TailwindCSSLogo } alt="Tailwind CSS logo" />
                <SkillBubble src={ JavaScriptLogo } alt="JavaScript logo" />
                <SkillBubble src={ ReactLogo } alt="React logo" />
                <SkillBubble src={ NextJSLogo } alt="NextJS logo" />
                <SkillBubble src={ FirebaseLogo } alt="Firebase logo" />
                <SkillBubble src={ IllustratorLogo} alt="Adobe Illustrator logo" />
                <SkillBubble src={ PhotoshopLogo } alt="Adobe Photoshop logo" />
                <SkillBubble src={ UnityLogo } alt="Unity logo" />
            </div>
        </section>
    )
}