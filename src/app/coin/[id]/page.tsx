import { notFound } from "next/navigation";

export default async function CoinPage({ params }: any) {
  const { id } = params;


  const res = await fetch(`https://b.wallet.ir/coinlist/list`, { cache: "no-store" });
  if (!res.ok) notFound();
  const data = await res.json();
  const coin = data.items.find((c: any) => c.currency_code === id);

  if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        جزئیات ارز: {coin.id} - {coin.fa_name}
      </h1>
      <p className="text-gray-600">
        قیمت دلاری: ${parseFloat(coin.price).toLocaleString()}
      </p>
      <p className="text-gray-600">
        تغییر روزانه: {coin.daily_change}%
      </p>
      <p className="text-gray-600">
        قیمت به تومان: {parseFloat(coin.rial_price).toLocaleString()} تومان
      </p>
    </main>
  );
}
