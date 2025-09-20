'use client'
export default function NavBar(){
    return (
        <nav className="h-[70px] w-full xl:w-3/4 sticky top-0  md:top-1.5 z-40 md:py-3 max-w-landing-width mx-auto  flex justify-between items-center md:rounded-full border-b md:border border-[rgba(0,0,0,0.2)] xl:p-4 p-2 pl-4 backdrop-blur-md bg-white/80">
            <ul className="w-2/3 xl:w-1/3">
                <li className="font-semibold text-2xl text-black"><span className="text-blue-500 ">Axe</span> Digital</li>
            </ul>
            <ul className="hidden w-2/3 xl:flex flex-row items-center justify-between">
                <li><a href="#portfolio" className="hover:text-blue-500 text-black">Portfolio</a></li>
                <li><a href="#solutions" className="hover:text-blue-500 text-black">Nos solutions</a></li>
                <li><a href="#pricing" className="hover:text-blue-500 text-black">Nos prix</a></li>
                <li><a href="#testimonial" className="hover:text-blue-500 text-black">Temoignages</a></li>
                <li><a href="#faq" className="hover:text-blue-500 text-black">FAQ</a></li>
            </ul>
            <ul className="hidden xl:block ml-10">
                <button className="flex  gap-2.5 p-2.5 xl:p-3.5 rounded-full bg-black items-center justify-center" onClick={()=>{window.location.href='#pricing'}}>
                    <span className="text-white">Princing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
            </ul>
            <ul className="xl:hidden ml-10">
                <button className="flex  gap-2.5 p-2.5 xl:p-3.5 rounded-full bg-black items-center justify-center" onClick={()=>{window.location.href='#pricing'}}>
                    <span className="text-white">Princing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
            </ul>
        </nav>
    )
}