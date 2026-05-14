import TransitionPage from '@/app/Components/TransitionPage';
import AvatarServices from '../../Components/avatar-services';
import CornerImage from '../../Components/corner-image';
import SliderServices from '../../Components/Slider-services';
import Link from 'next/link';

const PageService = () => {
    return ( 
   <>
   <TransitionPage />

   <CornerImage />

   <AvatarServices />

<div className="grid items-center py-30 justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
  
  <div className="max-w-[420px] z-10 mt-4 md:mt-0 px-10 md:px-0">
    
    <h1 className="text-xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
      Habilidades{" "}
      <span className="font-bold text-secondary">
        en las que destaco.
      </span>
    </h1>
    
    <p className="mb-3 md:text-xl lg:text-xl text-sm mt-2 md:mr-10 ml-4 md:ml-0 text-gray-300">
      En mi trayectoria profesional he desarrollado habilidades técnicas y creativas
       que me permiten crear soluciones innovadoras y adaptadas a las necesidades de cada proyecto,
        siempre enfocándome en la calidad y los resultados.
    </p>
        <Link href="https://wa.me/18299098558?text=Hola%20¿Me%20comunico%20con%20Frandy%20Morel?%20Me%20interesa%20su%20perfil%20¿Puede%20hablarme%20con%20más%20detalles%20sobre%20sus%20cualidades%20y%20habilidades." className="px-3 py-2 rounded-lg mt-2 ml-4 md:ml-0 bg-secondary hover:bg-secondary/65">Contacta conmigo</Link>
  </div>
   
   {/* slider */}
 <div>
    <SliderServices/>
 </div>
</div>
   </>
    );
}
 
export default PageService;