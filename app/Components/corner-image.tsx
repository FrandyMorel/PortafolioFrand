import Image from 'next/image';
const CornerImage = () => {
    return ( 
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/Corner-3.png" width={190} height={190} alt='Circle' className='w-full h-full'/>
        </div>
     );
}
 
export default CornerImage;