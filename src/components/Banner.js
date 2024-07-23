import img1 from '../img/function1_img.png';
import img2 from '../img/function2_img.png';
import img3 from '../img/function3_img.png';
import img4 from '../img/function4_img.png';
const Banner = () => {
    return (
        <div className="relative flex flex-col md:flex-row gap-4 p-[20px] items-center justify-center p-[30px] pt-[100px]">
            <div className="flex items-center justify-center text-white w-full">
                <div>
                    <h1 className="text-2xl">Buy Professional</h1>
                    <h1 className="font-bold text-4xl text-black">Model</h1>
                    <h1 className="">Find the exact right 3D content for your needs, including AR/VR, gaming, advertising, entertainment and others.</h1>
                    <div className='pt-[20px]'>
                        <button className='rounded-[10px] p-[10px] bg-slate-200 text-black hover:text-[#0EC8BD]'><a href='#'>View Project</a></button>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
                <img src={img1} alt=''/>
                <img src={img2} alt=''/>
                <img src={img3} alt=''/>
                <img src={img4} alt=''/>
            </div>
        </div>
    )
}
export default Banner;