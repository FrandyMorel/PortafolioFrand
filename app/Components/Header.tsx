import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "../../data";

const Header = () => {
    return (  
        <MotionTransition position="buttom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20 md:pl-20 sm:px-0">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        Frandy
                        <span className="text-secondary">
                        Morel
                        </span>
                    </h1>
                    </Link>
                    <div className="flex items-center justify-center md:mr-4 gap-7">
                        {socialNetworks.map(({logo, src, id}) => (
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}
 
export default Header;