"use client"
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';


const Introduction = () => {
    return ( 
       <div className='z-20 w-full bg-darkbg/60 overflow-y-hidden'>
           <div className='grid items-center md:mt-0 mt-14 h-full p-5 md:py-0 md:grid-cols-2'>
          <Image src="/Home-4.png" priority width="600" height="600" alt="Profile pic" className="mx-auto lg:mx-0 w-[300px] h-[250px] md:w-[600px] md:h-[600px]" />
          <div className='flex flex-col mx-auto lg:mx-0 md:ml-10 lg:ml-0 justify-center max-w-md'>
            <h1 className='text-2xl leading-tight text-center md:text-left
            md:text-4xl md:mb-10'>Si tienes una idea creativa. <br/>  
            <TypeAnimation 
            sequence={[
                "Evalúala",
                1000,
                "Desarróllala",
                1000,
                "Optimízala",
                1000,
                "Automatízala",
                1000              
            ]}
            wrapper='span'
            speed={30}
            repeat={Infinity}
            className='block font-bold text-secondary'
            />
            </h1>

            <p className='mx-auto mb-2 md:text-xl text-[1rem] md:mx-0 md:mb-0'>
                Como desarrollador busco solventar problemas utilizando herramientas para crear soluciones tecnologícas adaptadas a las necesidades de cada usuario
            </p>

                <div className='flex item-center md:mt-7 justify-center gap-3 md:mb-0 mb-30 md:justify-start md:gap-12'> 

                    <Link href="/portfolio" className='px-3 py-2 transition-all border-2 
                cursor-pointer text-md w-fit rounded-2xl hover:shadow-xl hover:shadow-white/25'>
                    Ver proyectos
                </Link>
                <Link href="https://wa.me/18299098558?text=Hola%20¿Me%20comunico%20con%20Frandy%20Morel?%20Me%20interesa%20su%20perfil."
                target="_blank" rel="noopener noreferrer" className='px-3 py-2 transition-all border-2 text-secondary border-secondary
                cursor-pointer text-md w-fit rounded-2xl hover:shadow-xl hover:shadow-secondary/25'>
                    Contacta conmigo
                </Link>
                </div>
               
          </div>
        </div> 
    </div>
     );
}
 
export default Introduction;