import Image from "next/image";
import Header from "../app/component/header";
import Footer from "../app/component/footer";

export default function Home() {
  return(
      <>
    <section className="homepage">
      <div className="container2">
      <img src="src/app/images/bg.webp" alt=" "></img>
       <div className="container">
        <h1 className="text1 focus-in-contract-bck">Hello My Self HARIS IRFAN....</h1>
        <h2 className="text2 blur-out-contract">WELCOME TO BMW GARAGE</h2>
        <h3 className="text2 blur-out-contract">Explore the best cars and models.</h3>
        <p className="w-1/2 font-medium py-2 bounce-in-right">The BMW Group is the world's leading provider of premium cars and motorcycles and the home of the BMW, MINI, Rolls-Royce and BMW Motorrad brands.
        </p>
       </div>
      </div>
    </section>
     <Footer /> 
     </>
  );
}


