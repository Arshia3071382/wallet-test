import { notFound } from "next/navigation";
import CoinDet from "@/components/coinDet/CoinDet";
import MainContent from "@/components/MainContent";
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

  const data = await res.json();
  const coin : Coin = data.items.find(
    (c: { currency_code: string }) => c.currency_code === id
  );

  if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      {/* پاس دادن داده به کامپوننت جزئیات */}
      <CoinDet coin={coin} />
      <Questions />

      <div className="w-full">
        <div className="grid grid-cols-10 max-w-180 mx-auto mt-25">
        <div className="col-span-4">
          <Image className="" src={StartImg} alt="" />
        </div>
        <div className="col-span-6 flex flex-col justify-between items-center">
          <h2 className="font-extrabold text-2xl">علاقه مند به خرید 
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
