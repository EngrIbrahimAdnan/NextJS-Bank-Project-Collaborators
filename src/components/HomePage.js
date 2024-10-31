"use client";

import Image from "next/image";
import Link from "next/link";
import Img1 from "@/assets/HomePageImg1.jpg";

function HomePage() {
  return (
    <>
      <main className="grid p-10 md:gap-0 place-items-center bg-white grid-cols-1   overflow-hidden md:grid-cols-2 md:p-20">
        <div>
          <Image
            width={970}
            height={300}
            alt="Boubyan Bank Debit Cards"
            className="md:rounded-s-[100px] rounded-2xl"
            src={Img1}
          />
        </div>
        <div className="text-[#54585a] flex flex-col items-center justify-center text-left">
          <div>
            <h1 className="m-5 text-4xl font-bold">
              Unique private banking <br />
              experience
            </h1>
            <p className="m-5">Private banking cards and benefits</p>
            <Link href="/login">
              <button className="mx-5 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-6 py-2 hover:scale-110 hover:bg-[#b39521] hover:text-white hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-300">
                Bank with us today
              </button>
            </Link>
          </div>
        </div>

        <div className="pt-10">
          <Image
            width={970}
            height={300}
            alt="Boubyan Bank Debit Cards"
            className="md:rounded-s-[100px] rounded-2xl"
            src={Img1}
          />
        </div>
        <div className="text-[#54585a] flex flex-col items-center justify-center text-left">
          <div>
            <h1 className="m-5 text-4xl font-bold">
              Unique private banking <br />
              experience
            </h1>
            <p className="m-5">Private banking cards and benefits</p>
            <Link href="/login">
              <button className="mx-5 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-6 py-2 hover:scale-110 hover:bg-[#b39521] hover:text-white hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-300">
                Bank with us today
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
