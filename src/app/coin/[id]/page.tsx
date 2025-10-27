import { notFound } from "next/navigation";

interface Coin {
  id: string;
  name: string;
  price: string;
}

export default async function CoinPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const res = await fetch(`https://b.wallet.ir/coinlist/list`, { cache: "no-store" });
  if (!res.ok) notFound();
  const data = await res.json();
  const coin: Coin | undefined = data.items.find((c: any) => c.currency_code === id);

  if (!coin) notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        جزئیات ارز: {coin.id} - {coin.name}
      </h1>
      <p className="text-gray-600">
        قیمت: {parseFloat(coin.price).toLocaleString()} دلار
      </p>
    </main>
  );
}
