import StackElement from './stack-element.tsx'
import Spinner from './spinner.tsx'

import CSS3Logo from '../assets/css3.svg'
import HTML5Logo from '../assets/html5.svg'
import JavaScriptLogo from '../assets/javascript.svg'
import BootstrapLogo from '../assets/bootstrap.svg'
import TailwindCSSLogo from '../assets/tailwindcss.svg'
import ReactLogo from '../assets/react.svg'
import NextJSLogo from '../assets/nextjs.svg'
import FirebaseLogo from '../assets/firebase.svg'
import ShopifyLogo from '../assets/shopify.svg'
import IllustratorLogo from '../assets/illustrator.svg'
import PhotoshopLogo from '../assets/photoshop.svg'
import UnityLogo from '../assets/unity.svg'

export default function Skills() {
    return(
        <section id="skills">
            <div className="px-10 mb-20">
                <Spinner caption="My stack" />
                <div className='space-y-20'>
                    <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            <h1 className="text-5xl font-bold">Frontend</h1>
                        </div>
                        <div className="col-span-7 flex flex-wrap gap-y-9 gap-x-11">
                            <StackElement name="CSS 3" src={ CSS3Logo} alt="CSS 3 logo" />
                            <StackElement name="HTML 5" src={ HTML5Logo} alt="HTML 5 logo" />
                            <StackElement name="JavaScript" src={ JavaScriptLogo } alt="JavaScript logo" />
                            <StackElement name="Bootstrap" src={ BootstrapLogo } alt="Bootstrap logo" />
                            <StackElement name="Tailwind CSS" src={ TailwindCSSLogo } alt="Tailwind CSS logo" />
                            <StackElement name="React" src={ ReactLogo } alt="React logo" />
                            <StackElement name="Next.js" src={ NextJSLogo } alt="NextJS logo" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            <h1 className="text-5xl font-bold">Tools</h1>
                        </div>
                        <div className="col-span-7 flex flex-wrap gap-y-9 gap-x-11">
                            <StackElement name="Firebase" src={ FirebaseLogo } alt="Firebase logo" />
                            <StackElement name="Shopify" src={ ShopifyLogo } alt="Shopify logo" />
                            <StackElement name="Illustrator" src={ IllustratorLogo} alt="Adobe Illustrator logo" />
                            <StackElement name="Photoshop" src={ PhotoshopLogo } alt="Adobe Photoshop logo" />
                            <StackElement name="Unity" src={ UnityLogo } alt="Unity logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}