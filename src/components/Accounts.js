import sellerImg from '../img/seller_img.png';
import customerImg from '../img/customer_img.png';
const Accounts = () => {
    return (
        <section className="relative grid gap-4">
            <h1 data-aos="zoom-in" data-aos-duration="3000" className='text-3xl text-[#195A95]'>Accounts</h1>
            <div className="text-start flex flex-col gap-4 items-center">
                <h1 data-aos="zoom-in" data-aos-duration="3000" className='text-2xl'>How to become a seller?</h1>
                <p data-aos="zoom-in" data-aos-duration="3000">Creators on the 3D Models Marketplace design and produce high-quality 3D assets, including characters, environments, and objects. They use advanced 3D software to craft detailed models, which they upload to the platform with descriptions and preview images. By engaging with the community, responding to feedback, and updating their work, creators help maintain the marketplace's quality and drive its success.</p>
                <img data-aos="zoom-in" data-aos-duration="3000" src={sellerImg} alt=''/>
            </div>
            <div className="text-start flex flex-col gap-4 items-center">
                <h1 data-aos="zoom-in" data-aos-duration="3000" className='text-2xl'>How to become a customer?</h1>
                <p data-aos="zoom-in" data-aos-duration="3000">A customer on the 3D Models Marketplace is typically a developer, designer, or
                    hobbyist seeking high-quality 3D assets for their projects. They browse the
                    platform's extensive collection, using search and filter options to find models that
                    meet their specific needs. Customers review detailed descriptions, preview
                    images, and user ratings before making a purchase. By acquiring ready-made 3D
                    models, customers can save time and enhance the visual appeal and functionality
                    of their games, animations, virtual reality experiences, or other creative
                    endeavors.
                </p>
                <img data-aos="zoom-in" data-aos-duration="3000" className='h-full w-[1024px]' src={customerImg} alt=''/>
            </div>
        </section>
    )
}
export default Accounts;