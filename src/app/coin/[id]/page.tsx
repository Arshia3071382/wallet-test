import { notFound } from "next/navigation";
import Image from "next/image";
import iran from "./../../../../public/image/images-removebg-preview.png";
import arrow from "./../../../../public/image/arrow_drop_down_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";

export default async function CoinPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://b.wallet.ir/coinlist/list`, {
    cache: "no-store",
  });
  if (!res.ok) notFound();
  const data = await res.json();
  const coin = data.items.find(
    (c: { currency_code: string }) => c.currency_code === id
  );

  if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <div className="grid grid-cols-14 shadow rounded-3xl py-10">
        <div className=" col-span-7 ">
          <div className="px-1.5">
            <h1>قیمت لحظه ای</h1>
            <div className="flex justify-between items-center px-10">
              <div>
                <Image
                  src={coin.icon}
                  alt="Wallet Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
                {coin.fa_name}
              </div>
              <div>
                <p>{coin.price}تومان</p>
                <p>{coin.buy_irt_price} $</p>
              </div>
            </div>

            <div className="flex flex-col mt-15 px-10">
              <div className="flex justify-between items-center mb-5 ">
                <h2>تغییرات قیمت امروز :</h2>
                <p>{coin.daily_change_percent}</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <h2>خرید{coin.fa_name} :</h2>
                <p>{coin.buy_irt_price} تومان</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <h2>فروش{coin.fa_name} :</h2>
                <p>{coin.sell_irt_price} تومان</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <h2>بالاترین قیمت 24 ساعت گذشته :</h2>
                <p>{coin.daily_change_percent}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-7 px-20 flex flex-col justify-between text-2xl ">
          <div className="gap-3">
            <h2 className="text-right">ارسال می کنید : </h2>

            <div className="flex w-full justify-center bg-gray-300 rounded-3xl">
              <input
                type="text"
                className="w-36 px-30 rounded-4xl"
                placeholder="مقدار را وارد کنید"
              />
              <div className=" flex items-center justify-around">
                <Image alt="country" src={iran} width={40} height={40} />
                <Image alt="arrow-down" src={arrow} />
              </div>
            </div>
          </div>
          <div className="gap-4">
            <h2 className="text-right">دریافت می کنید : </h2>

            <div className="flex w-full justify-center bg-gray-300 rounded-3xl">
              <input
                type="text"
                placeholder="مقدار را وارد کنید"
                className="w-36 px-30 rounded-4xl "
              />
              <div className=" flex items-center justify-around">
                <Image alt="country" src={coin.icon} width={40} height={40} />
                <Image alt="arrow-down" src={arrow} />
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
              <button className="border-blue-700 border rounded-4xl bg-white  text-blue-700 px-30 py-5 mt-10">
                ادامه خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
