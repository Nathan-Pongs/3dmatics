import infoImg from '../img/info_img.png';
import saleImg from '../img/sale_img.png';
const About = () => {
    return (        
        <section className="relative w-full bg-slate-200 p-[20px] pt-[50px]">
            <div className="text-center md:text-start flex flex-col">
                <h1 data-aos="zoom-in" data-aos-duration="3000" className="text-center text-[#195A95] text-3xl">What is “3Dmatics marketplace” all about?</h1>
                <p data-aos="zoom-in" data-aos-duration="3000">3Dmatic is Marketplace project which is an innovative platform designed to connect creators and buyers of high-quality 3D models. This marketplace allows artists to upload, showcase, and sell their 3D assets, including characters, Architectures, and objects, across various categories. Buyers can easily browse through an extensive collection of models, select assets that fit their needs, and purchase them for use in games, animations, virtual reality experiences, and more. By fostering a vibrant community of 3D artists and users, the marketplace aims to become a go-to resource for all things related to 3D modeling.</p>
                <img data-aos="zoom-in" data-aos-duration="3000" src={infoImg} alt=''/>
            </div>
            <div className="text-center md:text-start pt-[40px] flex flex-col">
                <h1 data-aos="zoom-in" data-aos-duration="3000" className="text-center text-[#195A95] text-3xl">Why it is?</h1>
                <p data-aos="zoom-in" data-aos-duration="3000">The 3D Models Marketplace was created to address the growing demand for high-quality 3D assets in industries such as gaming, animation, virtual reality, and augmented reality. As these fields continue to expand, developers and designers require a diverse and readily available pool of 3D models to expedite their creative processes and enhance their projects. Additionally, the marketplace provides a valuable platform for 3D artists to monetize their skills, gain exposure, and engage with a global audience. By streamlining the buying and selling process of 3D assets, the marketplace aims to foster innovation, reduce production times, and ultimately support the creative and economic ecosystem of the 3D modeling industry.</p>
                <img data-aos="zoom-in" data-aos-duration="3000" src={saleImg} alt=''/>
            </div>
        </section>
    )
}
export default About;