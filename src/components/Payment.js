import paymentImg from '../img/payment_img.png';
const Paymnet = () => {
    return (
        <section className='relative flex flex-col gap-4 items-center justify-center'>
            <h1 data-aos="zoom-in" data-aos-duration="3000" className='text-3xl text-[#195A95]'>Payment</h1>
            <p data-aos="zoom-in" data-aos-duration="3000">Payment on the 3D Models Marketplace is a secure and streamlined process
                designed to protect both buyers and creators. Customers can choose from
                various payment methods, including credit cards, digital wallets, and other online
                payment systems. Once a purchase is made, the platform processes the
                transaction and ensures the funds are securely transferred. Creators receive their
                earnings through regular payouts, with the marketplace taking a small commission
                to maintain and improve the platform. This efficient payment system ensures that
                creators are fairly compensated for their work while providing customers with a
                seamless purchasing experience.
            </p>
            <img data-aos="zoom-in" data-aos-duration="3000" src={paymentImg} alt=''/>
        </section>
    )
}
export default Paymnet;