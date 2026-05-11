import MotionTransition from "./transition-component";
import Image from 'next/image';

const AvatarServices = () => {
    return ( 
        <MotionTransition position="right" className="bottom-0 left-0 md:inline-block md:absolute hidden">
            <Image src="/AvatarS.png" width={250} height={250} className="w-[300px] h-full" alt={"Avatar"}/>
        </MotionTransition>
     );
}
 
export default AvatarServices;