export default function Header () {
    return (
        <header className="fixed top-0 items-center bg-black/50 backdrop-blur-md h-20">
            <nav className="grid grid-cols-3 w-full h-full">
                <ul className="flex m-1 col-start-2 items-center justify-center">
                    <a href="#overview"><li className="nav-item">Overview</li></a>
                    <a href="#experience"><li className="nav-item">Experience</li></a>
                    <a href="#skills"><li className="nav-item">Skills</li></a>
                    <a href="#projects"><li className="nav-item">Projects</li></a>
                    <a href="#contact"><li className="nav-item">Contact</li></a>
                </ul>
            </nav>
        </header>
    )
}