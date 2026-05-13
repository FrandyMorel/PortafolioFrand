"use client"
import MotionTransition from "./transition-component";
import  Image from 'next/image';


const AvatarPorfolio = () => {
    return ( 
        <MotionTransition position="buttom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/Avatar-3.png" width={300} height={300} className="h-full w-full" alt="avatar" />
        </MotionTransition>
     );
}
 
export default AvatarPorfolio;