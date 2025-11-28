import CoinDet from "@/components/coinDet/CoinDet";
import Questions from "@/components/coinDet/Questions";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import  personImg from "./../../../../public/image/ffb863c4c260379e772d06aa84552d408ebcb5ba.png"
import Image from "next/image";

export default async function CoinPage({
  params,
}: {
  params: Promise<{ id?: string }>;
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
      <Container>
        <CoinDet coin={coin} />
          
        <Questions />
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <Image src={personImg} alt="personImg"/>
          <div className="flex flex-col justify-around gap-20 items-center md:items-start sm:gap-10 sm:mb-15">
            <h1 className="font-extrabold text-2xl">علاقه مند به خرید بیت کوین هستید؟</h1>
            <p className="text-md  sm: w-3/4 text-center sm:text-right">ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین داشته باشید.</p>
            <button className="bg-sky-700 rounded-3xl w-1/3 text-white py-3">اکنون شروع کنید </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
