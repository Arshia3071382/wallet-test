import { Coin } from "@/type/Coin";
import bitImg from "./../../public/image/bit-img.jpg";
import Image from "next/image";

function AboutCoinDet({ coin }: { coin: Coin }) {
  return (
    <div>
      <div className="hidden lg:flex flex-row justify-center items-center gap-10 mt-20">
        <div className="flex flex-col gap-10 w-1/2">
          <h1 className="font-extrabold text-3xl">
            درباره
            <span className="text-blue-500"> {coin.fa_name}</span>
          </h1>
          <p className="text-gray-500 leading-7">{coin.about}</p>
        </div>

        <div
          className="flex flex-col 
          justify-between items-center gap-20 lg:flex-row-reverse pr-10 "
        >
          <Image
            className="rounded-2xl"
            width={500}
            height={300}
            src={bitImg}
            alt="bitCoin"
          />
        </div>
      </div>


      <div className=" flex flex-col justify-center  items-center gap-10 mt-20  lg:hidden ">
        <div className="flex flex-col gap-10 w-1/2 mx-auto">
          <h1 className="font-bold text-3xl text-center">
            درباره
            <span className="text-blue-500"> {coin.fa_name}</span>
          </h1>
          
        </div>

        <div
          className="flex flex-col 
          justify-between items-center gap-20 "
        >
          <Image
            className="rounded-2xl"
            width={500}
            height={300}
            src={bitImg}
            alt="bitCoin"
          />
        </div>
        <p className="text-gray-500 leading-7">{coin.about}</p>
      </div>
    </div>
  );
}

export default AboutCoinDet;
