import { Link } from "react-router";
import Charts from "./Chats";

const Home = () => {
  return (
    <div className="w-full h-dvh bg-[#0F141E]  overflow-hidden main ">
     <header className="w-full px-10 py-3 max-w-[1460px] m-auto">
        <nav className="text-neutral-200 flex   items-center">

            <div className="flex gap-1.5 items-center ">
                <img src="copilot-icon.svg" alt="logo" className="w-9 h-9" />
                <span className="text-blue-50 drop-shadow-2xl tracking-widest font-bold logo-name">DevCore</span>
            </div>
            <li className="flex gap-10 list-none grow  justify-center text-sm">
               <ul><a href="#">Features</a></ul> 
               <ul><a href="#">Resources</a></ul> 
               <ul><a href="#">Support</a></ul> 
               <ul><a href="#">Enterpise</a></ul> 
               <ul><a href="#">Pricing</a></ul> 
               <ul><a href="#">Contect</a></ul> 
            </li>

        </nav>
     </header>

     <main className="max-w-[1080px] m-auto h-full">
        <section className=" section-main  flex justify-center flex-col items-center h-[91%] ">
            <p className="text-xs px-5 py-1 text-white font-bold mb-1 bg-purple-500 rounded " >AI Tools</p>
            <h1 className="w-[60%] text-5xl text-center text-white font-bold leading-13 ">DevCore – The Core of <span className="heading">Intelligent</span> Code Assistance.</h1>
            <div className="">
              <svg width="272" height="8" viewBox="0 0 272 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M269.324 7.99445C165.26 1.51861 48.1761 5.29673 2.66743 7.99495C1.28982 8.07663 0.0981205 7.15583 0.00570267 5.93829C-0.0867152 4.72075 0.955142 3.66752 2.33276 3.58584C47.9765 0.879607 165.306 -2.90852 269.675 3.58635C271.053 3.67205 272.091 4.72832 271.994 5.94559C271.897 7.16285 270.702 8.08016 269.324 7.99445Z" fill="url(#paint0_linear_999_11627)"></path><defs><linearGradient id="paint0_linear_999_11627" x1="24.9606" y1="6.97522" x2="209.694" y2="-91.8367" gradientUnits="userSpaceOnUse"><stop stop-color="#3D1DFF"></stop><stop offset="0.223953" stop-color="#6147FF"></stop><stop offset="0.46354" stop-color="#D451FF"></stop><stop offset="0.750004" stop-color="#EC458D"></stop><stop offset="1" stop-color="#FFCA8B"></stop></linearGradient></defs></svg>
            </div>
            <p className="text-neutral-400 w-[60%] text-center mt-5">DevCore is an AI-powered coding assistant designed to help developers write, debug, and optimize code with ease.</p>
             
            <Link to={'/chats'}>
            <button className="mt-3 text-base bg-emerald-50 py-2 outline-none button-start  cursor-pointer  px-6 rounded-md font-bold "  ><span className="text-sm">DevCore Chat Now</span></button>
            </Link>
        </section>
     </main>
    </div>
  )
};

export default Home;
