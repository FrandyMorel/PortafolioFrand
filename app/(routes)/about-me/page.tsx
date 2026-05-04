import TransitionPage from "@/app/Components/TransitionPage";
import ContainerPage from '../../Components/container';
import Avatar from "@/app/Components/avatar";
import CounterServices from '../../Components/counter-service';

const PageAboutMe = () => {
    return ( 
        <>
        <TransitionPage/>
        <ContainerPage>
            <Avatar/>
            <h1 className="text-2xl leading-tight text-center
            md:text-5xl md:text-left md:mt-10">Toda mi{' '}
                <span className="font-black text-secondary">
                    trayectoria profesional
                </span>
            </h1>
            <CounterServices/>
        </ContainerPage>
        </>
        
     );
}
 
export default PageAboutMe; 