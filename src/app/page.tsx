import Image from "next/image";
import background from '../../public/background.jpg'
import { MdArrowRight } from "react-icons/md";
import latopBlack from '../../public/download.jpeg'
import { FaWindows, FaAndroid } from "react-icons/fa";


export default function Home() {
  return (

    <div className="">
      <Image className="absolute top-0 -z-10 w-screen   bg-repeat" src={background} alt="" />
      <main className="px-28 space-y-28">

        {/* Hero Section */}
        <section className="flex justify-end items-center mt-20 px-20">
          <div className="w-[600px] p-10 flex flex-col justify-center gap-5">
            <p className="font-bold text-5xl text-start ">Offer speed and style with all in one tablet POS Pacakges</p>
            <div className="flex gap-5">
              <p className="px-5 py-3 border-2 rounded-lg">Get Your Offer</p>
              <p className="px-5 py-3 border-t-2 border-b-2 border-red-700">Join Our 200+ Global Customers</p>
            </div>
          </div>

        </section>


        {/*  */}
        <section className="px-10 flex flex-wrap gap-10 justify-between">
          <div className="flex flex-col gap-5 lg:basis-1/4">
            <h2 className="font-semibold text-xl">Easy Installation</h2>
            <hr />
            <p className="text-white/60">Goodbye to messy setup, simply plug in your tablet and start the day</p>

          </div>


          <div className="flex flex-col gap-5 lg:basis-1/4">
            <h2 className="font-semibold text-xl">Easy Installation</h2>
            <hr />
            <p className="text-white/60">Goodbye to messy setup, simply plug in your tablet and start the day</p>

          </div>


          <div className="flex flex-col gap-5 lg:basis-1/4">
            <h2 className="font-semibold text-xl">Easy Installation</h2>
            <hr />
            <p className="text-white/60">Goodbye to messy setup, simply plug in your tablet and start the day</p>

          </div>
        </section>

        {/*  */}
        <section className="flex justify-center items-center">
          <div>
            <Image src={latopBlack} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="flex gap-3 font-bold text-4xl">
              <span>  Tyledirect POS Tablet </span>
              <FaWindows />
              /
              <FaAndroid />
            </h1>
            <p className="text-white/60">Portable kit ready for any challenge your business may face. The bundle includes :</p>

            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/60">

                  Tablet with android and apple options
                </p>
              </li>

              <li className="flex items-center gap-2">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/60">

                  Tablet with android and apple options
                </p>
              </li>


              <li className="flex items-center gap-2">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/60">

                  Tablet with android and apple options
                </p>
              </li>


              <li className="flex items-center gap-2">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/60">

                  Tablet with android and apple options
                </p>
              </li>
            </ul>
            <span className=" flex">
              <p className="px-5 py-3 border-2 rounded-lg">Get Your Offer</p>
              <p className="px-5 py-3">Contact Sales</p>
            </span>
          </div>
        </section>

        {/* section of packages */}

        <section className="my-10 flex justify-evenly">
          <div className="rounded-lg p-10 bg-gradient-to-tr  from-black/90 via-gray-800 to-white/50"  >
            <h3 className="text-2xl font-bold">Bundle 1</h3>
            <p className="text-white/60">Al Essentails you needed to make a start </p>
            <ul className="space-y-1">
              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>

            </ul>

            <span className="gap-2 my-2 flex flex-col px-20 justify-center items-center  text-red-600">
              <p className="text-2xl text-white/80">249</p>
              {/* <span className="w-3/4 bg-red-900 h-[1px] mx-auto"></span> */}
              <p className="text-white/50 border-t-2 border-red-900 px-4">Learn More</p>
            </span>

          </div>


          <div className="rounded-lg p-10 bg-gradient-to-tr  from-white/5 via-gray-800 to-white/50"  >
            <h3 className="text-2xl font-bold">Bundle 1</h3>
            <p className="text-white/60">Al Essentails you needed to make a start </p>
            <ul className="space-y-1">
              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>

            </ul>

            <span className="gap-2 my-2 flex flex-col px-20 justify-center items-center  text-red-600">
              <p className="text-2xl text-white/80">249</p>
              {/* <span className="w-3/4 bg-red-900 h-[1px] mx-auto"></span> */}
              <p className="text-white/50 border-t-2 border-red-900 px-4">Learn More</p>
            </span>
          </div>


          <div className="rounded-lg p-10 bg-gradient-to-tr  from-black/90 via-gray-800 to-white/50"  >
            <h3 className="text-2xl font-bold">Bundle 1</h3>
            <p className="text-white/60">Al Essentails you needed to make a start </p>
            <ul className="space-y-1">
              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>



              <li className="flex items-center ">
                <MdArrowRight className="text-red-700 text-2xl font-bold" />
                <p className="text-white/70">
                  Tablet With Stand
                </p>
              </li>

            </ul>


            <span className="gap-2 my-2 flex flex-col px-20 justify-center items-center  text-red-600">
              <p className="text-2xl text-white/80">249</p>
              {/* <span className="w-3/4 bg-red-900 h-[1px] mx-auto"></span> */}
              <p className="text-white/50 border-t-2 border-red-900 px-4">Learn More</p>
            </span>

          </div>
        </section>


        {/* Discover the setup */}
        <section className="flex justify-center items-center">
          <div className="space-y-5 text-center">

            <h2 className="text-4xl font-bold text-white/70">Discover the Setup</h2>
            <span className="flex justify-evenly gap-20">
              <button className=" p-3 bg-gradient-to-t from-gray-800 to-gray-600  shadow-inner rounded-xl">Contactless Payment</button>
              <button className=" p-3 bg-gradient-to-t from-gray-800 to-gray-600  shadow-inner rounded-xl">Cash Drawer</button>
              <button className=" p-3 bg-gradient-to-t from-gray-800 to-gray-600  shadow-inner rounded-xl">Kitchen Display</button>
              <button className=" p-3 bg-gradient-to-t from-gray-800 to-gray-600  shadow-inner rounded-xl">Thermal Printer</button>
            </span>
          </div>
        </section>


        {/* Enjoy Your Simple Payment Processing */}
        <section className="text-center">
          <div className="text-center space-y-5">

            <h1 className="text-4xl font-bold text-white/70">Enjoy Your Simple Payment Processing </h1>
            <p className="text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid qui illo beatae natus alias tempore nostrum, nam tempora. </p>
            <ul>

              <li className="flex items-center justify-center">  <MdArrowRight className="text-red-700 text-2xl font-bold" /> Seamless Integration between your payment processor and point of sale</li>
              <span className="flex justify-center items-center gap-10">

                <li className="flex items-center justify-center"><MdArrowRight className="text-red-700 text-2xl font-bold" /> Mobile and COunter top options </li>
                <li className="flex items-center justify-center"> <MdArrowRight className="text-red-700 text-2xl font-bold" />Easy to manage, blended rates</li>
              </span>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
