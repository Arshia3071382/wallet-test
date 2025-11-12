import Image from "next/image";
import iran from "@/../public/image/images-removebg-preview.png";
import arrow from "@/../public/image/arrow_drop_down_39dp_000000_FILL0_wght400_GRAD0_opsz40.png";
import { Coin } from "@/type/Coin";
import bitImg from "./../../../public/image/bit-img.jpg"
import chart from "./../../../public/image/chart.png"

export default function CoinDet({ coin }: { coin: Coin }) {
  return (
    <div>
      <div className=" flex flex-col  md:grid grid-cols-15 shadow rounded-3xl py-10">

        <div className="col-span-7">
          <div className="px-1.5 ">
            <h1 className="mr-10 mb-10 font-bold">قیمت لحظه‌ای</h1>

            <div className="flex justify-between items-center px-10">
              <div>
                <Image
                  src={coin.icon}
                  alt="Wallet Logo"
                  width={100}
                  height={40}
                  className="object-contain inline-block"
                />
                <p className="font-bold text-xl">{coin.fa_name}</p>
              </div>
              <div>
                <p>{coin.price} تومان</p>
                <p>{coin.buy_irt_price} $</p>
              </div>
            </div>

            <div className="flex flex-col mt-15 px-10">
              <div className="flex justify-between items-center mb-5">
                <h2>تغییرات قیمت امروز :</h2>
                <p className={`p-3 font-semibold ${
                    parseFloat(coin.daily_change_percent) > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}>{coin.daily_change_percent}</p>
                
  
              </div>
              <div className="flex justify-between items-center mb-5">
                <h2>خرید {coin.fa_name} :</h2>
                <p>{coin.buy_irt_price} تومان</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <h2>فروش {coin.fa_name} :</h2>
                <p>{coin.sell_irt_price} تومان</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <h2>بالاترین قیمت ۲۴ ساعت گذشته :</h2>
                <p>{coin.sell_irt_price}</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-0.5 bg-gray-300 col-span-1 mr-10"></div>


        <div className="col-span-7 px-10 flex flex-col justify-center md:justify-between text-2xl w-ful  gap-10 mt-15">
          <div className="gap-3">
            <h2 className="text-right">ارسال می‌کنید :</h2>

            <div className="flex w-full justify-around bg-gray-300 rounded-3xl">
              <input
                type="text"
                className="rounded-4xl"
                placeholder="مقدار را وارد کنید"
              />
              <div className="flex items-center justify-center">
                <Image alt="country" src={iran} width={40} height={40} />
                <Image alt="arrow-down" src={arrow} width={40} height={40} />
              </div>
            </div>
          </div>

          <div className="gap-4">
            <h2 className="text-right">دریافت می‌کنید :</h2>

            <div className="flex w-full justify-around bg-gray-300 rounded-3xl">
              <input
                type="text"
                placeholder="مقدار را وارد کنید"
                className="rounded-4xl"
              />
              <div className="flex items-center justify-around">
                <Image alt="country" src={coin.icon} width={40} height={40} />
                <Image alt="arrow-down" src={arrow} width={40} height={40} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2>نرخ ارز یک</h2>
              <p>{coin.irt_price}</p>
            </div>
            <div className="flex justify-between">
              <h2>نرخ ارز دو</h2>
              <p>{coin.irt_price}</p>
            </div>

            <div className="flex justify-center items-center">
              <button className="border-blue-700 hover:bg-blue-700 hover:text-white border rounded-4xl bg-white text-blue-700 px-30 py-2 mt-10">
                ادامه خرید
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-20">
        <h1 className="font-extrabold text-3xl  text-center  sm:text-right px-10 pr-20">
          درباره 
      
          <span className="text-blue-500"> {coin.fa_name}</span>
          </h1>

          <div className="flex flex-col 
          justify-between items-center gap-20 lg:flex-row-reverse pr-10 ">
            <Image className="rounded-2xl" width={500} height={300} src={bitImg} alt="bitCoin" />
            <p className="w-150">{coin.about}</p>
          </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 pr-15">
        <h1 className="font-extrabold text-3xl text-center mt-30 font-serif ">نمودار قیمت 
          <span> {coin.fa_name} </span>
           و نرخ برابری تومان
        </h1>
        <Image src={chart} alt="chart" />
      </div>
    </div>
  );
}
