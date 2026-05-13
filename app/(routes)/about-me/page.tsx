import TransitionPage from "@/app/Components/TransitionPage";
import ContainerPage from '../../Components/container';
import Avatar from "@/app/Components/avatar";
import CounterServices from '../../Components/counter-service';
import TimeLine from '../../Components/time-line';

const PageAboutMe = () => {
    return ( 
        <>
        <TransitionPage/>
        <ContainerPage>
            <Avatar/>
            <h1 className="text-2xl leading-tight text-center
            md:text-4xl md:text-left md:mt-8">Toda mi{' '}
                <span className="font-black text-secondary">
                    trayectoria profesional
                </span>
            </h1>
            <CounterServices />
            <TimeLine />
        </ContainerPage>
        </>
        
     );
}
 
export default PageAboutMe; 