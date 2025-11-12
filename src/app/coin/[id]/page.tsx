import { notFound } from "next/navigation";
import CoinDet from "@/components/coinDet/CoinDet";

import Questions from "@/components/coinDet/Questions";
import Image from "next/image";
import StartImg from "./../../../../public/image/StartSectionImg.png"
import { Coin } from "@/type/Coin";

export default async function CoinPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params; 

  const res = await fetch("https://b.wallet.ir/coinlist/list", {
    cache: "no-store",
  });
  if (!res.ok) notFound();

 const data: { items: Coin[] } = await res.json();

 const coin = data.items.find(
  (c: { currency_code: string }) => c.currency_code === id
) as Coin | undefined;

if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8 overflow-hidden">
      {/* پاس دادن داده به کامپوننت جزئیات */}
      <CoinDet coin={coin} />
      <Questions />

      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center mx-auto mt-24">
        <div >
          <Image  src={StartImg} alt="" />
        </div>
        <div className=" flex flex-col gap-6 text-center items-center">
          <h2 className="font-extrabold  text-2xl">علاقه مند به خرید 
             <span> {coin.fa_name} </span>
            هستید ؟
          </h2>
          <p className="text-2xl text-gray-500">
            ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین داشته باشید.
          </p>
          <button className="bg-sky-600 rounded-3xl px-10 py-3 text-white">شروع کنید</button>
        </div>
      </div>
  
      </div>
    </main>
  );
}
