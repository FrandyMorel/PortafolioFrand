"use client"
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return ( 
       <div className='z-20 w-full bg-darkbg/60 '>
           <div className='z-20 grid items-center mt-12 md:mt-0 h-full p-5 md:py-0 md:grid-cols-2 '>
          <Image src="/Home-4.png" priority width="600" height="600" alt="Profile pic" />
          
          <div className='flex flex-col justify-center max-w-md'>
            <h1 className='mb-5 text-2xl leading-tight text-center md:text-left
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

            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-0'>
                Como desarrollador busco solventar problemas utilizando herramientas para crear soluciones tecnologícas adaptadas a las necesidades de cada usuario
            </p>

                <div className='flex items-center mb-5 gap-3 md:justify-start md:gap-10'></div>
                <Link href="/projects" className='px-3 py-2 transition-all border-2 
                cursor-pointer text-md w-fit rounded-2xl hover:shadow-xl hover:shadow-white/25'>
                    Ver proyectos
                </Link>
          </div>
        </div> 
    </div>
     );
}
 
export default Introduction;