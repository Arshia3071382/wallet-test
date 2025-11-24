import { notFound } from "next/navigation";

export default async function CoinPage({
  params,
}: {
  params: { id?: string };
}) {
  const { id } = params;
  if (!id) notFound();

  const res = await fetch("https://b.wallet.ir/coinlist/list", { cache: "no-store" });
  if (!res.ok) notFound();

  const data = await res.json();
  const coin = data.items.find((c: { currency_code: string }) => c.currency_code === id);
  if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        جزئیات ارز: {coin.id} - {coin.fa_name}
      </h1>
      <p className="text-gray-600">قیمت دلاری: ${parseFloat(coin.price || "0").toLocaleString()}</p>
      <p className="text-gray-600">تغییر روزانه: {coin.daily_change || 0}%</p>
      <p className="text-gray-600">
        قیمت به تومان: {parseFloat(coin.rial_price || "0").toLocaleString()} تومان
      </p>
    </main>
  );
}
