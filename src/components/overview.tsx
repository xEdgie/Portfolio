export default function overview() {
    return(
        <section id="overview" className="flex h-screen">
            <div className="max-md:pb-10 flex justify-between items-center max-md:flex-col px-10">
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] pl-20">
                    <h1 className="text-6xl sm:text-[80px]">
                        <span className="font-primary">FRONTEND</span>
                        <br />
                        <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-gray-400">
                        Hi! I'm <span className="font-medium text-gray-50">Chris</span>, a Frontend Developer passionate about crafting clean, responsive, and user-friendly websites.
                    </p>
                </div>
            </div>
        </section>
    )
}