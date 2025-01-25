import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Mini from '../assets/miniatura.png'
import Tail from '../assets/Tailwind.png';
import Fire from '../assets/Firebase.png';
import Furniro from '../assets/furniro.png';
import Intellipos from '../assets/intellipos.png'

const MySwiper = () => {

  return (

    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-3/4">

      <SwiperSlide>

        {/* COMERCIO GAMER  */}

            <div className="object-cover bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 grid grid-cols-2 shadow-[4px_4px_8px_rgba(21,21,21,0.8)] dark:shadow-[4px_4px_8px_rgba(255,255,255,0.7)]">

                <a href="https://kazali-store-blue.vercel.app/" target="_autoblank" className="block overflow-hidden rounded-l-lg object-cover">
                    <img className="transform transition-transform hover:scale-110 object-cover" src={Mini} alt={Mini} />
                </a>

                <div className="flex flex-col p-3 md:p-4">

                    <div>
                        <h5 className="mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comercio Gamer</h5>
                        <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">Comercio parte de PC y otros, pensado en el publico Gamer.</p>
                    </div>
                      
                    <div className="flex gap-2">
                        <a href="https://kazali-store-blue.vercel.app/" target="_autoblank" className="inline-flex items-center px-3 py-2 md:text-sm md:font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 duration-200">
                            Demo
                        </a>
                        <a href="https://github.com/JoseSanchez90/ProyectoFinal" target="_autoblank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 hover:scale-110 duration-200">
                            GitHub
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
        
      </SwiperSlide>

      <SwiperSlide>

        {/* COMERCIO MUEBLES   */}

            <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 grid grid-cols-2 shadow-[4px_4px_8px_rgba(21,21,21,0.8)] dark:shadow-[4px_4px_8px_rgba(255,255,255,0.7)]">
                <a href="https://furniro-ashy.vercel.app/" target="_autoblank" className="block overflow-hidden rounded-l-lg">
                    <img className="transform transition-transform hover:scale-110 h-full" src={Furniro} alt={Furniro} />
                </a>

                <div className="flex flex-col p-3 md:p-4">
                    
                        <h5 className="mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comercio Muebles</h5>
                        
                    <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">Comercio para venta de muebles, plantilla con diseño moderno.</p>
                    <div className="flex gap-4">
                        <a href="https://furniro-ashy.vercel.app/" target="_autoblank" className="inline-flex items-center px-3 py-2 md:text-sm md:font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 duration-200">
                            Demo
                        </a>
                        <a href="https://github.com/JoseSanchez90/Ecommerce-02" target="_autoblank" className="inline-flex items-center px-3 py-2 md:text-sm md:font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 hover:scale-110 duration-200">
                            GitHub
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

      </SwiperSlide>

      <SwiperSlide>

        {/* WEB EMPRESA  */}

            <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 grid grid-cols-2 shadow-[4px_4px_8px_rgba(21,21,21,0.8)] dark:shadow-[4px_4px_8px_rgba(255,255,255,0.7)]">
                <a href="https://intellipos.vercel.app/" target="_autoblank" className="block overflow-hidden rounded-l-lg">
                    <img className="transform transition-transform hover:scale-110 h-full" src={Intellipos} alt={Intellipos} />
                </a>

                <div className="flex flex-col p-3 md:p-4">
                    
                        <h5 className="mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Empresa</h5>
                        
                    <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">Web realizada para la empresa IntelliPOS dedicado al Sistema de ventas.</p>
                    <div className="flex gap-4">
                        <a href="https://intellipos.vercel.app/" target="_autoblank" className="inline-flex items-center px-3 py-2 md:text-sm md:font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 duration-200">
                            Demo
                        </a>
                        <a href="https://github.com/JoseSanchez90/Web-Intellipos" target="_autoblank" className="inline-flex items-center px-3 py-2 md:text-sm md:font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 hover:scale-110 duration-200">
                            GitHub
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

      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
