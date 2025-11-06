import { notFound } from "next/navigation";
import CoinDet from "@/components/coinDet/CoinDet";

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
  const coin = data.items.find(
    (c: { currency_code: string }) => c.currency_code === id
  );

  if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      {/* پاس دادن داده به کامپوننت جزئیات */}
      <CoinDet coin={coin} />
    </main>
  );
}
