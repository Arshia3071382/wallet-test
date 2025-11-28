import Image from "next/image";
import iran from "@/../public/image/images-removebg-preview.png";
import arrow from "@/../public/image/arrow_drop_down_39dp_000000_FILL0_wght400_GRAD0_opsz40.png";
import { Coin } from "@/type/Coin";

import chart from "./../../../public/image/chart.png";
import Container from "../Container";
import MainContent from "../MainContent";
import AboutCoinDet from "../AboutCoinDet";
import CoinChart from "../CoinChart";

export default function CoinDet({ coin }: { coin: Coin }) {
  function formatNumber(num: number | string) {
    return Math.floor(Number(num)).toLocaleString("en-US");
  }

  return (
    <div>
      <Container>
        <div className=" flex flex-col  md:grid grid-cols-15 shadow rounded-3xl py-10 bg-white">
          <div className="col-span-7">
            <div className="px-1.5 ">
              <h1 className="mr-10 mb-10 font-bold">قیمت لحظه‌ای:</h1>

              <div className="flex justify-between items-center px-10">
                <div className="flex items-center gap-2">
                  <Image
                    src={coin.icon}
                    alt="Wallet Logo"
                    width={60}
                    height={40}
                    className="object-contain inline-block"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl">{coin.fa_name}</p>
                    <p className=" text-gray-400">{coin.currency_code}</p>
                  </div>
                </div>
                <div>
                  <p>{formatNumber(coin.irt_price)} تومان</p>
                  <p className=" text-gray-400">
                    {formatNumber(coin.buy_irt_price)} $
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 mt-10"></div>
              <div className="flex flex-col mt-15 px-10">
                <div className="flex justify-between items-center mb-5">
                  <h2>تغییرات قیمت امروز :</h2>
                  <p
                    className={`p-3 font-semibold ${
                      parseFloat(coin.daily_change_percent) > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.daily_change_percent}%
                  </p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <h2>خرید {coin.fa_name} :</h2>
                  <p className="text-green-600">
                    {formatNumber(coin.buy_irt_price)} تومان
                  </p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <h2>فروش {coin.fa_name} :</h2>
                  <p className="text-red-500">
                    {formatNumber(coin.sell_irt_price)} تومان
                  </p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <h2>بالاترین قیمت ۲۴ ساعت گذشته :</h2>
                  <p className="text-green-500">
                    {formatNumber(coin.sell_irt_price)} تومان
                  </p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <h2>پایین ترین قیمت ۲۴ ساعت گذشته :</h2>
                  <p className="text-red-500">
                    {formatNumber(coin.sell_irt_price)} تومان
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-0.5 bg-gray-200 col-span-1 mr-10"></div>

          <div className="col-span-7 px-10 flex flex-col justify-between md:justify-between text-2xl  gap-10 mt-15 md:mt-0">
            <div className="gap-3">
              <h2 className="text-right text-lg font-bold">ارسال می‌کنید :</h2>

              <div className="flex w-full justify-around bg-[#F6F4F4] rounded-3xl mt-3">
                <input
                  type="text"
                  className="outline-none text-sm  py-3"
                  placeholder="مقدار را وارد کنید"
                />

                <div className="w-0.5 h-12 bg-gray-200"></div>
                <div className="flex items-center justify-between w-1/2">
                  <div className="flex items-center gap-1">
                    <Image alt="country" src={iran} width={40} height={40} />
                    <p className="text-sm text-gray-400">تومان</p>
                  </div>
                  <Image alt="arrow-down" src={arrow} width={40} height={40} />
                </div>
              </div>
            </div>

            <div className="gap-4">
              <h2 className="text-right text-lg font-bold">دریافت می‌کنید :</h2>

              <div className="flex  justify-around bg-[#F6F4F4] rounded-3xl mt-3">
                <input
                  type="text"
                  placeholder="مقدار را وارد کنید"
                  className="outline-none text-sm  py-3"
                />
                <div className="w-0.5 h-12 bg-gray-200"></div>
                <div className="flex items-center justify-between w-1/2">
                  <div className="flex items-center gap-1">
                    <Image
                      alt="country"
                      src={coin.icon}
                      width={30}
                      height={40}
                    />
                    <p className="text-sm text-gray-400">{coin.fa_name}</p>
                  </div>
                  <Image alt="arrow-down" src={arrow} width={40} height={40} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">نرخ ارز یک</h2>
                <p className="text-lg font-bold">
                  {formatNumber(coin.irt_price)} دلار
                </p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">نرخ ارز دو</h2>
                <p className="text-lg font-bold">
                  {formatNumber(coin.irt_price)} تومان
                </p>
              </div>

              <div className="flex justify-center items-center">
                <button className="border-blue-700 hover:bg-blue-700 hover:text-white border rounded-4xl bg-white text-blue-700 px-30 py-2 mt-10 w-full">
                  ادامه خرید
                </button>
              </div>
            </div>
          </div>
        </div>

        <AboutCoinDet coin={coin} />

        <div className="flex flex-col justify-center items-center gap-4 pr-15">
          <h1 className="font-extrabold text-3xl text-center mt-30 ">
            نمودار قیمت
            <span> {coin.fa_name} </span>و نرخ برابری تومان
          </h1>
          <CoinChart coinCode={coin.currency_code} />
        </div>

        <div
          className="my-30 flex flex-col 
          justify-between items-center gap-20 "
        >
          <h1 className="font-bold text-3xl text-center">
            توضیحات بیشتر در مورد<span> {coin.fa_name}</span>
          </h1>
          <div>
            <p className="text-gray-500 leading-7">{coin.about}</p>
            <p className="text-gray-500 leading-7">{coin.about}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
