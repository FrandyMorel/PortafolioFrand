import Image from 'next/image';
const CornerImage = () => {
    return ( 
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/Corner-1.png" width={300} height={300} alt='Circle' className='w-full h-full'/>
        </div>
     );
}
 
export default CornerImage;