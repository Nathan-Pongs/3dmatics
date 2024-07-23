import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Functionalities from './components/Functionalities';
import Accounts from './components/Accounts';
import Paymnet from './components/Payment';
import Reference from './components/Reference';
function App() {
  return (
    <div className="App">
        <div id='home' className='fixed bg-[#1C1557] w-full h-full'>
        </div>
        <section className='relative'>
          <Header />
        </section>
        <section className='relative md:p-[0px] p-[50px]'>
          <Banner />
        </section>
        <section id='about project' className='relative w-full pt-[100px]'>
          <About />
        </section>
        <section className='relative p-[50px] md:p-[100px] w-ful bg-slate-200'>
          <Functionalities />
        </section>
        <section id='accounts' className='relative bg-slate-200 p-[20px]'>
          <Accounts />
        </section>
        <section id='payment' className='relative bg-slate-200 p-[20px] py-[40px]'>
          <Paymnet />
        </section>
        <section id='reference' className='relative bg-black p-[20px] py-[40px]'>
          <Reference />
        </section>
    </div>
  );
}

export default App;
