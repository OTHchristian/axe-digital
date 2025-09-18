export default function NavBar(){
    return (
        <nav className="sticky top-0  md:top-10 z-40 md:py-3 max-w-landing-width mx-auto w-full flex justify-between items-center md:rounded-full border-b md:border border-[rgba(0,0,0,0.2)] xl:p-4 p-2 pl-4 backdrop-blur-md bg-white/80">
            <ul className="w-2/3 xl:w-1/3">
                <li className="font-semibold text-2xl text-black"><span className="text-blue-500 ">Axe</span> Digital</li>
            </ul>
            <ul className="hidden w-2/3 xl:flex flex-row items-center justify-between">
                <li><a href="#services" className="hover:text-blue-500 text-black">Portfolio</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-500 text-black">How it works</a></li>
                <li><a href="#methodes" className="hover:text-blue-500 text-black">pricing</a></li>
                <li><a href="#a-propos" className="hover:text-blue-500 text-black">Testimonial</a></li>
                <li><a href="#contact-us" className="hover:text-blue-500 text-black">FAQ</a></li>
            </ul>
            <ul className="ml-10">
                <li className="flex  gap-2.5 p-2.5 xl:p-3.5 rounded-full bg-black items-center justify-center">
                    <span className="text-white">Princing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </li>
            </ul>
        </nav>
    )
}