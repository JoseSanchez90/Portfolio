import React, { useState } from 'react'
import Profile from '../assets/perfil.jpg'
import Tail from '../assets/Tailwind.png'
import Boot from '../assets/Bootstrap.png'
import Fire from '../assets/Firebase.png'
import Lol from '../assets/lol.png'
import Mini from '../assets/miniatura.png'

function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleEnviarClick = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            setShowErrorAlert(true);
            setShowSuccessAlert(false);
            setTimeout(() => setShowErrorAlert(false), 3000); // Ocultar la alerta de éxito después de 3 segundos
          } else {
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
            // Puedes resetear el formulario si lo deseas
            // document.getElementById('contactForm').reset();
            setTimeout(() => setShowSuccessAlert(false), 3000); // Ocultar la alerta de éxito después de 3 segundos
          }
      };
    
  return (

    // BARRA DE NAVEGACION

    <section className={`h-screen bg-slate-100 dark:bg-black ${darkMode ? 'dark' : ''}`}>
        
        <div className="fixed z-10 bg-slate-100 dark:bg-black lg:px-36 xl:px-44 2xl:px-96 flex flex-row w-full mx-auto justify-center md:justify-between items-center py-4 animate-fade-down" >
        
            <button class="hover:scale-110 hover:text-zinc-500 dark:hover:text-zinc-300 dark:text-white" onClick={toggleDarkMode}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z" fill="#000000"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#000000"></path> </g></svg>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
                    
            <div className="hidden lg:flex text-base gap-10 text-black font-semibold">
                <a href="#inicio" className="hover:text-green-500 hover:scale-110">Inicio<span className="text-green-500">/&gt;</span></a>
                <a href="#habilidades" className="hover:text-green-500 hover:scale-110">Habilidades<span className="text-green-500">/&gt;</span></a>            
                <a href="#proyectos" className="hover:text-green-500 hover:scale-110">Proyectos<span className="text-green-500">/&gt;</span></a>  
                <a href="#contacto" className="hover:text-green-500 hover:scale-110">Contacto<span className="text-green-500">/&gt;</span></a>
            </div>

            <div className="absolute lg:hidden w-screen ml-8 sm:w-5/6 ">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center animate-fade-down" tabIndex="0">
                <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="menu-hotdog"> <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1.25C3.93629 1.25 1.25 3.93629 1.25 7.25V16.75C1.25 20.0637 3.93629 22.75 7.25 22.75H16.75C20.0637 22.75 22.75 20.0637 22.75 16.75V7.25C22.75 3.93629 20.0637 1.25 16.75 1.25H7.25ZM6.69231 7C6.44803 7 6.25 7.33579 6.25 7.75C6.25 8.16421 6.44803 8.5 6.69231 8.5H17.3077C17.552 8.5 17.75 8.16421 17.75 7.75C17.75 7.33579 17.552 7 17.3077 7H6.69231ZM4.25 12.25C4.25 11.8358 4.51691 11.5 4.84615 11.5H19.1538C19.4831 11.5 19.75 11.8358 19.75 12.25C19.75 12.6642 19.4831 13 19.1538 13H4.84615C4.51691 13 4.25 12.6642 4.25 12.25ZM6.69231 16C6.44803 16 6.25 16.3358 6.25 16.75C6.25 17.1642 6.44803 17.5 6.69231 17.5H17.3077C17.552 17.5 17.75 17.1642 17.75 16.75C17.75 16.3358 17.552 16 17.3077 16H6.69231Z" fill="#118E00"></path> </g> </g> </g></svg>
                </button>

                {isMobileMenuOpen && (
                    <div className="absolute z-50 flex flex-col w-1/3 sm:w-1/4 justify-start text-white font-bold mt-3 bg-gray-700 rounded-md shadow-lg animate-fade-down">
                        <a tabIndex="-1" href="#inicio" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Inicio</a>
                        <a tabIndex="-1" href="#habilidades" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Habilidades</a>
                        <a tabIndex="-1" href="#proyectos" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Proyectos</a>
                        <a tabIndex="-1" href="#contacto" className="dropdown-item text-sm hover:text-gray-900 py-2 px-4">Contacto</a>
                    </div>
                )}
            </div>

        </div>

    {/*     CONTENEDOR DESCRIPCION Y FOTO DE PERFIL      */}

        <div id="inicio" className="container sm:justify-center lg:w-3/4 xl:w-3/4 2xl:w-2/3 h-[90%] xl:h-[90%] flex flex-col md:flex-row items-center pt-16 sm:pt-0 px-10 mx-auto xl:flex-row animate-fade-right sm:gap-10">
            
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-emerald-600 xl:text-3xl mt-4">
                    JOSE SANCHEZ
                </h2>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight white-black xl:text-3xl mt-4">
                    DESARROLLADOR WEB
                </h3>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black xl:text-3xl mb-4">
                    FRONT-END JR
                </h3>
                <p className="block max-w-2xl md:max-w-2xl text-center md:text-start xl:text-left text-zinc-600 font-semibold">Comenzando en el campo del desarrollo web, estoy realizando proyectos y estudiando mas lenguajes, he aprendido HTML5, CSS3, Javascript y framework ReactJS, librerias como Bootstrap y Tailwind.</p>

                <div className="mt-6 sm:-mx-2 mx-20">
                    
                    <a href="https://api.whatsapp.com/send?phone=51993671271" target="_blank">
                    <button className="inline-flex items-center justify-center px-4 text-sm py-1 text-white bg-gray-700 hover:bg-black rounded-lg sm:w-auto sm:mx-2 transition-transform hover:translate-y-2 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" role="img" viewBox="0 0 512 512" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z"></path><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"></path></g></svg>
                        <span className="mx-2">
                            Conversemos
                        </span>
                    </button>
                    </a>

                    <a href="https://drive.google.com/file/d/1a4u04_tw4jVWAFn7zix19E2eHE7RYIQH/view?usp=sharing" target="_blank">
                    <button className="inline-flex items-center justify-center px-6 text-sm py-1 mt-4 text-white bg-blue-600 hover:bg-blue-900 rounded-lg sm:w-auto sm:mx-2 sm:mt-0 transition-transform hover:translate-y-2 ease-in-out">
                    <svg fill="#c33c3c" width="32px" height="32px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" stroke="#c33c3c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m28.6 11.4h5.1a1.11 1.11 0 0 0 1.1-1.1 1.32 1.32 0 0 0 -.3-.8l-7.2-7.1a.89.89 0 0 0 -.7-.3 1.11 1.11 0 0 0 -1.1 1.1v5.1a3.12 3.12 0 0 0 3.1 3.1z"></path> <path d="m49.83 32.45a1.43 1.43 0 0 0 -1.39-1.45h-12a1.43 1.43 0 0 0 -1.44 1.44v1.44a1.43 1.43 0 0 0 1.4 1.44h6.14l-11 11a1.42 1.42 0 0 0 0 2l1 1a1.54 1.54 0 0 0 1.09.45 1.32 1.32 0 0 0 .94-.38l11-11v6a1.43 1.43 0 0 0 1.43 1.44h1.53a1.43 1.43 0 0 0 1.47-1.4z"></path> <path d="m18.35 20.68h-1.46v4.93h1.46a1.56 1.56 0 0 0 1.56-1.1 3.93 3.93 0 0 0 .24-1.44 3.61 3.61 0 0 0 -.36-1.77 1.53 1.53 0 0 0 -1.44-.62z"></path> <path d="m11.29 20.93a1.27 1.27 0 0 0 -.84-.25h-1.45v2.23h1.46a1.18 1.18 0 0 0 .84-.28 1.09 1.09 0 0 0 .3-.86 1 1 0 0 0 -.33-.84z"></path> <path d="m33.24 16h-7.84a4.67 4.67 0 0 1 -4.7-4.6v-7.8a1.42 1.42 0 0 0 -1.34-1.5h-12.56a4.67 4.67 0 0 0 -4.7 4.6v29.4a4.6 4.6 0 0 0 4.62 4.6h17.88v-.1a15.92 15.92 0 0 1 10.2-14.9v-8.1a1.58 1.58 0 0 0 -1.56-1.6zm-20.75 7.65a2.93 2.93 0 0 1 -1.89.56h-1.6v2.71h-1.51v-7.55h3.24a2.64 2.64 0 0 1 1.76.63 2.3 2.3 0 0 1 .66 1.8 2.35 2.35 0 0 1 -.66 1.85zm8.66 1.9a2.73 2.73 0 0 1 -2.53 1.45h-3.26v-7.63h3.26a3.85 3.85 0 0 1 1.17.17 2.49 2.49 0 0 1 1.28.95 3.43 3.43 0 0 1 .54 1.22 5.6 5.6 0 0 1 .14 1.29 5 5 0 0 1 -.6 2.55zm7.92-4.84h-3.81v1.74h3.34v1.31h-3.34v3.16h-1.57v-7.54h5.38z"></path> </g> </g></svg>
                    <span className="mx-2">
                         Curriculum
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

    
        <div className="h-[20rem] flex flex-col items-center pt-4 2xl:pt-8 bg-slate-100 dark:bg-black" >
            <a href="#habilidades" className="animate-bounce bg-white dark:bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-900 dark:ring-zinc-200/20 shadow-lg rounded-full flex items-center justify-center" >
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
        </div>

    {/* LENGUAJES, LIBRERIAS Y FRAMEWORKS */}

    <div className="bg-slate-100 dark:bg-black" id="habilidades">
        <div className="h-screen md:w-full">
            <div className="lg:w-5/6 xl:w-3/4 h-[100%] sm:h-[80%] lg:h-[85%] xl:h-[90%] flex flex-col px-10 mx-auto text-center justify-center animate-fade-right gap-20 sm:gap-28 xl:gap-32 ">
                <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tight text-black xl:text-3xl">
                    LENGUAJES, LIBRERIAS Y FRAMEWORKS
                </h3>
                <div className="grid grid-cols-2 sm:grid sm:grid-cols-4 lg:flex gap-6 sm:gap-8 lg:gap-12 justify-center justify-items-center w-full sm:w-5/6 lg:w-full mx-auto">
                    
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg height="64px" width="64px" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M256 472l149-41 35-394H256"></path><path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"></path><path fill="#ffffff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"></path></g></svg>
                        </div><p className="text-zinc-500 font-semibold justify-center">HTML5</p>
                        </a>
                    </div>

                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg height="64px" width="64px" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52"></path><path fill="#2965f1" d="M256 37V472l149-41 35-394"></path><path fill="#ebebeb" d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"></path><path fill="#ffffff" d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"></path></g></svg>
                        </div>
                        <p className="text-zinc-500 font-semibold justify-center">CSS3</p></a>
                    </div>

                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                        </div>
                        <p className="text-zinc-500 font-semibold justify-center">Javascript</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://react.dev/" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#e6e6e6"></rect><circle cx="256" cy="256" r="36" fill="#50b2ce"></circle><path stroke="#50b2ce" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path></g></svg>
                        </div>
                        <p className="text-zinc-500 font-semibold justify-center">ReactJS</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://tailwindcss.com/" target="_autoblank">
                        <div className="flex w-16 h-16 mx-auto mb-2">
                        <img src={Tail} alt={Tail} />
                        </div>
                        <p className="text-zinc-500 font-semibold mx-auto">Tailwind</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://getbootstrap.com/" target="_autoblank">
                        <div className="flex w-16 h-16 mx-auto mb-2">
                        <img src={Boot} alt={Boot} />
                        </div>
                        <p className="text-zinc-500 font-semibold mx-auto">Bootstrap</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://firebase.google.com/" target="_autoblank">
                        <div className="flex  w-16 h-16 mx-auto mb-2">
                        <img src={Fire} alt={Fire} />
                        </div>
                        <p className="text-zinc-500 font-semibold mx-auto">Firebase</p></a>
                    </div>
                    <div className="flex flex-col w-28 hover:animate-jump"><a href="https://github.com/" target="_autoblank">
                        <div className="flex justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Git" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path fill="#f05133" d="M440.8 238.9L273 71.2a24.7 24.7 0 00-35 0l-34.8 34.9l44.2 44.1a29.4 29.4 0 0137.2 37.5l42.5 42.5a29.4 29.4 0 11-17.6 16.6l-39.7-39.7v104.5a29.4 29.4 0 11-24.2-.9V205.3a29.4 29.4 0 01-16-38.6l-43.5-43.5l-115 115a24.7 24.7 0 000 34.9L239 440.8a24.7 24.7 0 0035 0l166.9-167a24.7 24.7 0 000-34.9"></path></g></svg>
                        </div>
                        <p className="text-zinc-500 font-semibold">GitHub</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="h-[20rem] -mt-16 flex flex-col items-center bg-slate-100 dark:bg-black" >
        <a href="#proyectos" className="animate-bounce bg-white dark:bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-900 dark:ring-zinc-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
    </div>

        

        {/* PROYECTOS */}

<div className="h-screen bg-slate-100 dark:bg-black" id="proyectos">
    <div className="flex flex-col h-screen w-2/3 lg:w-1/2 mx-auto justify-center gap-10 xl:gap-20">

        <div className="flex justify-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tight text-black xl:text-3xl">PROYECTOS</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-20 sm:w-5/6 xl:w-4/5 mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://kazali-store-blue.vercel.app/" target="_autoblank" className="block overflow-hidden rounded-t-lg">
                    <img className="transform transition-transform hover:scale-110" src={Mini} alt={Mini} />
                </a>
                <div className="p-5">
                    <a href="https://kazali-store-blue.vercel.app/" target="_autoblank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-Commerce Gamer</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Comercio parte de PC y otros, pensado en el publico Gamer.</p>
                    <a href="https://kazali-store-blue.vercel.app/" target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Demostracion
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-not-allowed" type="button" disabled>
                <a type="button" disabled>
                    <img className="rounded-t-lg cursor-not-allowed" src={Lol} alt={Lol} />
                </a>
                <div className="p-5">
                    <a target="_autoblank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white" disabled>Musica Web</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Proyecto pequeño para buscar y escuchar musica personalizada.</p>
                    <a target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-not-allowed">
                        Demostracion
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>       
    </div>
</div>

        <div className="h-[20rem] -mt-16 flex flex-col items-center backdrop-blur-lg bg-slate-100 dark:bg-black" >
            <a href="#contacto" className="animate-bounce bg-white dark:bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-900 dark:ring-zinc-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
        </div>

    {/* CONTACTO */}

<div className="flex bg-slate-100 h-screen items-center" id="contacto">
	<div className="w-[90%] sm:w-[80%] lg:w-[45%] 2xl:w-[35%] mx-auto px-6 py-4 rounded-2xl shadow-lg bg-slate-300">
		<form className="space-y-6">
            <div className="text-center text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight text-black xl:text-3xl py-1 sm:py-6">
                <h3>CONTACTO</h3>
            </div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name"></label>
                    <input className="p-3 text-lg rounded-xl bg-gray-100 w-full" placeholder="Nombre completo" type="text" id="name" required/>
                </div>

                <div>
					<label className="" htmlFor="email"></label>
					<input className="p-3 text-lg rounded-xl bg-gray-100 w-full" placeholder="Correo electronico" type="email" id="email" required/>
				</div>
			</div>

			<div className="w-full">
				<label className="" htmlFor="message"></label>

				<textarea className="p-3 text-lg rounded-xl bg-gray-100 w-full" placeholder="Por favor, explique detalladamente el propósito de este mensaje. Me comunicaré contigo lo antes posible" rows="8" id="message" required></textarea>
			</div>

        {showSuccessAlert && (
        <div className="fixed inset-y-[83%] sm:fixed sm:inset-6 sm:flex sm:items-end pointer-events-none p-4 sm:justify-between ">
            <div class="flex w-full max-w-56 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-center w-12 bg-emerald-500">
                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                    </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                    <div class="mx-3">
                        <span class="font-semibold text-emerald-500 dark:text-emerald-400">Éxito</span>
                        <p class="text-sm text-gray-600 dark:text-gray-200">Mensaje enviado!</p>
                    </div>
                </div>
            </div>
        </div>

        )}
        {showErrorAlert && (
        <div className="fixed inset-y-[83%] sm:fixed sm:inset-6 sm:flex sm:items-end pointer-events-none p-4 sm:justify-between ">
            <div class="flex w-full max-w-60 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-center w-12 bg-red-500">
                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                    <div class="mx-3">
                        <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                        <p class="text-sm text-gray-600 dark:text-gray-200">
                            Completa el formulario!
                        </p>
                    </div>
                </div>
            </div>
        </div>
          )}

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<button type="button" className="w-[50%] rounded-lg btn btn-primary" onClick={handleEnviarClick}>Enviar</button>
			</div>
		</form>
	</div>
</div>

<footer class="md:h-0">
    
    <div class="flex py-8 md:py-0 md:fixed md:origin-bottom-left md:bottom-6 md:left-10 justify-center items-center text-emerald-500 dark:text-emerald-300 md:-rotate-90">
        <div class="hidden md:flex bg-emerald-400 w-20 mr-4 h-[1px]">
        </div>
            <p class="text-xs sm:text-sm w-52 sm:w-full md:text-left text-center font-extralight"> © Perú, Lima - Jose Sanchez. Todos los derechos reservados.</p>
    </div>
            <a href="#inicio" class="fixed z-10 origin-bottom-right bottom-5 right-5 justify-center items-center text-emerald-100 dark:text-emerald-300 bg-emerald-400 dark:bg-emerald-600 rounded p-2 hover:scale-110 transition-transform">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor"></path></svg>
            </a>
</footer>

    </section>

  )
}

export default Home