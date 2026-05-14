import  Image  from 'next/image';
import Link from 'next/link';

interface IportfolioBoxProps {

    data:{
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: IportfolioBoxProps) => {
    const {data} = props;
    const {title, image, urlGithub, urlDemo} = data;
    return ( 
    
        <div className="p-4 border-2 rounded-xl border-teal-50 hover:shadow-lg hover:shadow-teal-50/80 transition duration-150">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image src={image} alt="Image product" width={300} height={300} 
            className="w-full md:w-[200px] md:h-[120px] rounded-2xl"/>
         
         <div className="flex gap-5 mt-5">
            <Link href={urlGithub} target="_blank"
            className="p-2 transition duration-150 rounded-lg
             bg-indigo-500 hover:bg-indigo-500/80">
                Github
             </Link>
             <Link href={urlDemo} target="_blank"
            className="p-2 transition duration-150 rounded-lg
             bg-secondary hover:secondary/80">
                Demo
             </Link>
             </div>
        </div>
     );
}
 
export default PortfolioBox;