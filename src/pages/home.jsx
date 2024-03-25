import React, { useEffect, useState } from 'react'
import Profile from '../assets/perfil.jpg'
import Tail from '../assets/Tailwind.png'
import Boot from '../assets/Bootstrap.png'
import Fire from '../assets/Firebase.png'
import Mini from '../assets/miniatura.png'
import Furniro from '../assets/furniro.png'
import Hotmail from '../assets/outlook.png'
import Dev from '../assets/dev.png'

function Home() {

    
    const [theme, setTheme] = useState(() => {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark";
        }
        return "light";
    })

    // CAMBIAR MODO DARK / LIGHT
    useEffect(()=> {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
  return (

    // BARRA DE NAVEGACION

    <section className="h-screen bg-slate-100 dark:bg-black">
        
        <div className="fixed z-10 bg-slate-100 dark:bg-black py-4 lg:px-36 2xl:px-96 flex flex-row w-screen mx-auto items-center animate-fade-down justify-center lg:justify-between">

            <div className="w-[90%] md:w-full flex justify-between animate-fade-down">

                <div className=" lg:hidden ">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center animate-fade-down" tabIndex="0">
                    <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="menu-hotdog"> <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M7.25 1.25C3.93629 1.25 1.25 3.93629 1.25 7.25V16.75C1.25 20.0637 3.93629 22.75 7.25 22.75H16.75C20.0637 22.75 22.75 20.0637 22.75 16.75V7.25C22.75 3.93629 20.0637 1.25 16.75 1.25H7.25ZM6.69231 7C6.44803 7 6.25 7.33579 6.25 7.75C6.25 8.16421 6.44803 8.5 6.69231 8.5H17.3077C17.552 8.5 17.75 8.16421 17.75 7.75C17.75 7.33579 17.552 7 17.3077 7H6.69231ZM4.25 12.25C4.25 11.8358 4.51691 11.5 4.84615 11.5H19.1538C19.4831 11.5 19.75 11.8358 19.75 12.25C19.75 12.6642 19.4831 13 19.1538 13H4.84615C4.51691 13 4.25 12.6642 4.25 12.25ZM6.69231 16C6.44803 16 6.25 16.3358 6.25 16.75C6.25 17.1642 6.44803 17.5 6.69231 17.5H17.3077C17.552 17.5 17.75 17.1642 17.75 16.75C17.75 16.3358 17.552 16 17.3077 16H6.69231Z" fill="#169C5B"></path> </g> </g> </g></svg>
                    </button>

                    {isMobileMenuOpen && (
                        <div className="absolute z-50 flex flex-col w-1/3 sm:w-1/4 justify-start text-white font-bold mt-3 bg-gray-700 rounded-md shadow-lg animate-fade-down">
                            <a tabIndex="-1" href="#inicio" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Inicio</a>
                            <a tabIndex="-1" href="#habilidades" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Habilidades</a>
                            <a tabIndex="-1" href="#proyectos" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Proyectos</a>
                            <a tabIndex="-1" href="#footer" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Contacto</a>
                        </div>
                    )}
                </div>

                <img src={Dev} alt={Dev} className="w-10 h-10 scale-95" />

            <div className="hidden lg:flex text-base gap-10 text-black dark:text-white font-semibold items-center">
                <a href="#inicio" className="hover:text-green-500 hover:scale-110 duration-200">Inicio<span className="text-green-500 dark:text-green-300">/&gt;</span></a>
                <a href="#habilidades" className="hover:text-green-500 hover:scale-110 duration-200">Habilidades<span className="text-green-500 dark:text-green-300 hover:duration-300">/&gt;</span></a>            
                <a href="#proyectos" className="hover:text-green-500 hover:scale-110 duration-200">Proyectos<span className="text-green-500 dark:text-green-300">/&gt;</span></a>  
                <a href="#footer" className="hover:text-green-500 hover:scale-110 duration-200">Contacto<span className="text-green-500 dark:text-green-300">/&gt;</span></a>
                <button className="flex hover:scale-110 md:hover:scale-150 duration-200 focus:outline-none  rounded-lg" onClick={handleChangeTheme}>
                <svg width="32px" height="32px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#169C5B"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dark-mode</title> <g id="Layer_2" data-name="Layer 2"> <g id="Icons"> <g> <rect width="48" height="48" fill="none"></rect> <g> <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"></path> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"></path> </g> </g> </g> </g> </g></svg>
                </button>
            </div>

            

                <button className="md:hidden flex hover:scale-125 md:hover:scale-150 focus:outline-none rounded-lg" onClick={handleChangeTheme}>
                <svg width="32px" height="32px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#169C5B"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dark-mode</title> <g id="Layer_2" data-name="Layer 2"> <g id="Icons"> <g> <rect width="48" height="48" fill="none"></rect> <g> <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"></path> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"></path> </g> </g> </g> </g> </g></svg>
                </button>

            </div>

        </div>

    {/*     CONTENEDOR DESCRIPCION Y FOTO DE PERFIL      */}

        <div id="inicio" className="container sm:justify-center lg:w-3/4 xl:w-3/4 2xl:w-2/3 h-[90%] xl:h-[90%] flex flex-col md:flex-row items-center pt-16 sm:pt-0 px-10 mx-auto xl:flex-row animate-fade-right sm:gap-10">
            
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-lg md:text-2xl font-bold tracking-tight text-emerald-600 xl:text-3xl mt-4">
                    JOSE SANCHEZ
                </h2>
                <h3 className="text-lg md:text-2xl font-bold tracking-tight text-black dark:text-white xl:text-3xl mt-4">
                    DESARROLLADOR WEB
                </h3>
                <h3 className="text-lg md:text-2xl font-bold tracking-tight text-black dark:text-white xl:text-3xl mb-4">
                    FRONT-END JR
                </h3>
                <p className="text-sm md:text-lg block max-w-2xl md:max-w-2xl text-center md:text-start xl:text-left text-zinc-600 dark:text-zinc-400 font-semibold">Entusiasta del desarrollo web con experiencia en HTML5, CSS3, Javascript y ReactJS, además de librerías como Bootstrap y Tailwind. Apasionado por crear experiencias digitales de calidad y siempre proactivo en la búsqueda de nuevos desafíos.</p>

                <div className="mt-6 sm:-mx-2 mx-20">
                    
                    <a href="https://api.whatsapp.com/send?phone=51993671271" target="_blank">
                    <button className="inline-flex items-center justify-center px-4 text-sm py-1 text-white bg-gray-700 hover:bg-gray-800 rounded-lg sm:w-auto sm:mx-2 transition-transform hover:translate-y-2 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" role="img" viewBox="0 0 512 512" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#25d366" stroke="#ffffff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z"></path><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"></path></g></svg>
                        <span className="mx-2">
                            Conversemos
                        </span>
                    </button>
                    </a>
                    
                    <a href="https://drive.google.com/file/d/1a4u04_tw4jVWAFn7zix19E2eHE7RYIQH/view?usp=sharing" target="_blank">
                    <button className="inline-flex items-center justify-center px-6 text-sm py-1 text-white bg-gray-700 hover:bg-gray-800 rounded-lg sm:w-auto sm:mx-2 transition-transform hover:translate-y-2 ease-in-out mt-4 lg:mt-0">
                    <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" fill="#B30B00"></path> <path d="M24.0401 17.8976C22.7327 16.464 19.1701 17.0912 18.3094 17.1808C17.0891 15.9264 16.2284 14.504 15.8798 13.9664C16.3156 12.6224 16.6642 11.1104 16.6642 9.6768C16.6642 8.3328 16.1413 7 14.7576 7C14.2347 7 13.7989 7.2688 13.5374 7.7168C12.9273 8.792 13.1887 10.9312 14.1475 13.16C13.6245 14.7728 12.753 17.1808 11.7179 19.0512C10.3234 19.5888 7.28369 21.0112 7.02221 22.624C6.93505 23.072 7.10937 23.6096 7.45801 23.8784C7.80665 24.2368 8.24244 24.3264 8.67824 24.3264C10.4977 24.3264 12.328 21.7392 13.6354 19.4096C14.6814 19.0512 16.3265 18.5136 17.9825 18.2448C19.8891 20.0368 21.6323 20.2944 22.5039 20.2944C23.7242 20.2944 24.16 19.7568 24.3234 19.3088C24.5522 18.8832 24.3887 18.256 24.0401 17.8976ZM22.8199 18.7936C22.7327 19.152 22.2969 19.5104 21.5125 19.3312C20.5537 19.0624 19.693 18.6144 18.9958 17.9872C19.6059 17.8976 21.0767 17.7184 22.1226 17.8976C22.4712 17.9872 22.907 18.256 22.8199 18.7936ZM14.3872 8.0752C14.4744 7.896 14.6487 7.8064 14.823 7.8064C15.2588 7.8064 15.3459 8.344 15.3459 8.792C15.2588 9.8672 15.0845 11.0208 14.7358 12.0064C14.0386 10.0464 14.1257 8.6128 14.3872 8.0752ZM14.3 18.1664C14.7358 17.36 15.2588 15.848 15.4331 15.3104C15.8689 16.1168 16.6533 17.0128 17.002 17.4496C17.0891 17.3712 15.5203 17.7184 14.3 18.1664ZM11.3475 20.2272C10.1382 22.1872 9.00509 23.4416 8.30781 23.4416C8.22065 23.4416 8.04634 23.4416 7.95918 23.352C7.87202 23.1728 7.78486 22.9936 7.87202 22.8144C7.95918 22.0976 9.35373 21.112 11.3475 20.2272Z" fill="white"></path> </g></svg>
                        <span className="mx-1.5">
                            CV/Resume
                        </span>
                    </button>
                    </a>
                </div>
            </div>

        <div className="w-1/2 animate-fade-up ">
            <div className="flex justify-end relative w-full h-full mx-auto my-10">
                <div className="z-[1] "><img className=" rounded-3xl size-40 sm:size-64 lg:size-60 xl:size-72 2xl:size-96 flex-shrink-0 object-cover shadow-[10px_10px_rgba(0,_98,_90,_0.8),_15px_15px_rgba(0,_98,_90,_0.6),_20px_20px_rgba(0,_98,_90,_0.4),_25px_25px_rgba(0,_98,_90,_0.2),_30px_30px_rgba(0,_98,_90,_0.1)]" src={Profile} alt="Foto de perfil" /></div>
            </div>
        </div>
    </div>

    
        <div className="h-[20rem] flex flex-col items-center bg-slate-100 dark:bg-black" >
            <a href="#habilidades" className="animate-bounce bg-white dark:bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-900 dark:ring-zinc-200/20 shadow-lg rounded-full flex items-center justify-center" >
                <svg className="w-6 h-6 text-emerald-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
        </div>

    {/* LENGUAJES, LIBRERIAS Y FRAMEWORKS */}

    <div className=" bg-slate-100 dark:bg-black" id="habilidades">
        <div className="h-screen w-full">
            <div className="lg:w-5/6 xl:w-3/4 h-[100vh] sm:h-[90%] lg:h-[85%] xl:h-[90%] flex flex-col px-10 mx-auto text-center justify-center animate-fade-right gap-10 sm:gap-20 xl:gap-20">
                <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tight text-black dark:text-white xl:text-3xl">
                    LENGUAJES, LIBRERIAS Y FRAMEWORKS
                </h3>
                <div className="grid grid-cols-2 sm:grid sm:grid-cols-4 lg:flex gap-6 sm:gap-8 lg:gap-12 justify-center justify-items-center w-full sm:w-5/6 lg:w-full mx-auto">
                    
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg height="64px" width="64px" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M256 472l149-41 35-394H256"></path><path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"></path><path fill="#ffffff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"></path></g></svg>
                        </div><p className="text-zinc-900 dark:text-zinc-100 font-semibold justify-center">HTML5</p>
                        </a>
                    </div>

                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg height="64px" width="64px" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52"></path><path fill="#2965f1" d="M256 37V472l149-41 35-394"></path><path fill="#ebebeb" d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"></path><path fill="#ffffff" d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"></path></g></svg>
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold justify-center">CSS3</p></a>
                    </div>

                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold justify-center">Javascript</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://react.dev/" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#e6e6e6"></rect><circle cx="256" cy="256" r="36" fill="#50b2ce"></circle><path stroke="#50b2ce" strokeWidth="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path></g></svg>
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold justify-center">ReactJS</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://tailwindcss.com/" target="_autoblank">
                        <div className="flex w-16 h-16 mx-auto mb-2">
                        <img src={Tail} alt={Tail} />
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold mx-auto">Tailwind</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://getbootstrap.com/" target="_autoblank">
                        <div className="flex w-16 h-16 mx-auto mb-2">
                        <img src={Boot} alt={Boot} />
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold mx-auto">Bootstrap</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://firebase.google.com/" target="_autoblank">
                        <div className="flex  w-16 h-16 mx-auto mb-2">
                        <img src={Fire} alt={Fire} />
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold mx-auto">Firebase</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://github.com/" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Git" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path fill="#f05133" d="M440.8 238.9L273 71.2a24.7 24.7 0 00-35 0l-34.8 34.9l44.2 44.1a29.4 29.4 0 0137.2 37.5l42.5 42.5a29.4 29.4 0 11-17.6 16.6l-39.7-39.7v104.5a29.4 29.4 0 11-24.2-.9V205.3a29.4 29.4 0 01-16-38.6l-43.5-43.5l-115 115a24.7 24.7 0 000 34.9L239 440.8a24.7 24.7 0 0035 0l166.9-167a24.7 24.7 0 000-34.9"></path></g></svg>
                        </div>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold">GitHub</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

        {/* PROYECTOS */}

<div className="h-screen w-full bg-slate-100 dark:bg-black" id="proyectos">
    <div className="flex flex-col h-screen w-3/4 lg:w-11/12 xl:w-2/3 2xl:w-1/2 mx-auto justify-center gap-4 sm:gap-10 lg:gap-6 2xl:gap-10 pt-40 sm:pt-0">

        <div className="flex justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl 2xl:text-4xl font-bold tracking-tight text-black dark:text-white xl:text-3xl">PROYECTOS</h1>
        </div>

        <div className="flex sm:w-11/12 lg:w-2/3 xl:w-4/5 mx-auto ">

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:flex-row">
                <a href="https://kazali-store-blue.vercel.app/" target="_autoblank" className="block overflow-hidden rounded-l-lg">
                    <img className="transform transition-transform hover:scale-110 lg:w-72 lg:h-56 xl:w-96 xl:h-60" src={Mini} alt={Mini} />
                </a>

                <div className="p-3 lg:p-5 lg:h-52 lg:w-6/7">
                    
                        <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comercio Gamer</h5>
                        
                    <p className="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">Comercio parte de PC y otros, pensado en el publico Gamer.</p>
                    <div className="flex gap-4">
                        <a href="https://kazali-store-blue.vercel.app/" target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 duration-200">
                            Demo
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="https://github.com/JoseSanchez90/ProyectoFinal" target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 hover:scale-110 duration-200">
                            GitHub
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-row my-4 gap-2">
                        <svg height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M256 472l149-41 35-394H256"></path><path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"></path><path fill="#ffffff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"></path></g></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img" viewBox="0 0 512 512" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#e6e6e6"></rect><circle cx="256" cy="256" r="36" fill="#50b2ce"></circle><path stroke="#50b2ce" strokeWidth="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path></g></svg>

                        <div className="flex w-8 h-8">
                            <img src={Tail} alt={Tail} />
                        </div>

                        <div className="flex  w-8 h-8">
                        <img src={Fire} alt={Fire} />
                        </div>

                    </div>
                </div>
            </div>
        </div>  

        <div className="flex sm:w-11/12 lg:w-2/3 xl:w-4/5 mx-auto">

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:flex-row">
                <a href="https://furniro-ashy.vercel.app/" target="_autoblank" className="block overflow-hidden rounded-l-lg">
                    <img className="transform transition-transform hover:scale-110 w-96 h-56 lg:w-72 lg:h-56 xl:w-96 xl:h-60" src={Furniro} alt={Furniro} />
                </a>

                <div className="p-3 lg:p-5 lg:h-52 lg:w-6/7">
                    
                        <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comercio Muebles</h5>
                        
                    <p className="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">Comercio para venta de muebles, plantilla con diseño moderno.</p>
                    <div className="flex gap-4">
                        <a href="https://furniro-ashy.vercel.app/" target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 duration-200">
                            Demo
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="https://github.com/JoseSanchez90/Ecommerce-02" target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 hover:scale-110 duration-200">
                            GitHub
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-row my-4 gap-2">
                        <svg height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M256 472l149-41 35-394H256"></path><path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"></path><path fill="#ffffff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"></path></g></svg>

                        <svg height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52"></path><path fill="#2965f1" d="M256 37V472l149-41 35-394"></path><path fill="#ebebeb" d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"></path><path fill="#ffffff" d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"></path></g></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img" viewBox="0 0 512 512" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#e6e6e6"></rect><circle cx="256" cy="256" r="36" fill="#50b2ce"></circle><path stroke="#50b2ce" strokeWidth="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path></g></svg>

                        <div className="flex w-8 h-8">
                            <img src={Tail} alt={Tail} />
                        </div>

                    </div>
                </div>
            </div>
        </div> 

    </div>
</div>

        {/* <div className="mt-24 sm:-mt-40 lg:-mt-12 flex flex-col bg-slate-100 items-center backdrop-blur-lg dark:bg-black" >
            <a href="#contacto" className="animate-bounce bg-white dark:bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-900 dark:ring-zinc-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
        </div> */}


    {/* CONTACTO */}

<div className="flex bg-slate-100 dark:bg-black h-screen items-center" id="contacto">
	<div className="w-[90%] sm:w-[80%] lg:w-[45%] 2xl:w-[35%] flex flex-col gap-16 mx-auto px-6 py-4 rounded-2xl pt-32 sm:pt-0">
        <div className="text-center text-3xl 2xl:text-4xl font-bold tracking-tight text-black dark:text-white xl:text-3xl sm:py-1 2xl:py-6">
            <h3>CONTACTO</h3>
        </div>
        <div className="grid grid-cols-2 gap-y-10 sm:flex justify-between">
            <a href="mailto:josesancheztrujillo7@gmail.com" target="_autoblank" className="text-center hover:animate-rotate-y">
                <button>
                    <svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"></path> <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"></path> <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"></path> <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"></path> <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"></path> <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"></path> <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"></path> <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"></path> </g></svg>
                </button>
                <p className="text-black dark:text-white font-semibold">Gmail</p>
            </a>
            
            <a href="https://t.me/josesanchezt" target="_autoblank" className="text-center hover:animate-rotate-y">
                <button>
                    <svg fill="#0a89ff" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#0a89ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>telegram</title> <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path> </g></svg>
                </button>
                <p className="text-black dark:text-white font-semibold">Telegram</p>
            </a>
            
            <a href="https://www.linkedin.com/in/josesanchez90/" target="_autoblank" className="text-center hover:animate-rotate-y">
                <button>
                    <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
                </button>
                <p className="text-black dark:text-white font-semibold">LinkedIn</p>
            </a>

            <a href="https://github.com/JoseSanchez90" target="_autoblank" className="text-center hover:animate-rotate-y">
                <button>
                <svg width="64px" height="64px" viewBox="0 -0.5 24 24" id="meteor-icon-kit__regular-github" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z" fill="#758CA3"></path></g></svg>
                </button>
                <p className="text-black dark:text-white font-semibold">GitHub</p>
            </a>
        </div>

	</div>
</div>

<footer className="h-0" id="footer">
    
    <div className="flex py-16 sm:py-0 sm:fixed sm:origin-bottom-left sm:bottom-6 sm:left-10 justify-center items-center text-emerald-600 dark:text-emerald-300 sm:-rotate-90 bg-slate-100 dark:bg-black">
        <div className="hidden sm:flex bg-emerald-600 w-20 mr-4 h-[1px]">
        </div>
            <p className="text-xs sm:text-sm w-52 sm:w-full md:text-left text-center font-extralight"> © Perú, Lima - Jose Sanchez. Todos los derechos reservados.</p>
    </div>
            <a href="#" className="fixed z-10 origin-bottom-right bottom-5 right-5 justify-center items-center text-emerald-100 dark:text-emerald-300 bg-emerald-400 dark:bg-emerald-600 rounded p-2 hover:scale-110 transition-transform">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6"><path fillRule="evenodd" clipRule="evenodd" d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor"></path></svg>
            </a>
</footer>

    </section>

  )
}

export default Home