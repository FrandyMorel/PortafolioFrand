import ContainerPage from "@/app/Components/container";
import TransitionPage from '@/app/Components/TransitionPage';
import AvatarPorfolio from '../../Components/avatar-portfolio';
import CornerImage from '../../Components/corner-image';
import PortfolioBox from './../../Components/portfolio-box';
import { dataPortfolio } from "@/data";


const PorfolioPage = () => {
    return ( 
        <ContainerPage>
           <TransitionPage />
           <AvatarPorfolio/>
           <CornerImage/>

            <div className="flex flex-col justify-center h-full md:-translate-y-18">
               <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
               Mis proyectos  
               <span className="text-secondary font-bold"> más recientes</span>
               </h1>

               <div className="relative z-10 grid max-w-4xl gap-6 mx-auto
               mt-4 sm:grid-cols-2 md:grid-cols-4">
                  {dataPortfolio.map((data) => (
                     <PortfolioBox key={data.id} data={data} />
                  ))}
               </div>
            </div>

        </ContainerPage>
     );
}
 
export default PorfolioPage;