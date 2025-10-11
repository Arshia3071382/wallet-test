import Image from "next/image";
import Link from "next/link";

type Coin = {
  id: number;
  currency_code: string;
  en_name: string;
  fa_name: string;
  price: string;
  icon: string;
};

export default async function Home() {
  const res = await fetch("https://b.wallet.ir/coinlist/list", {
    cache: "no-store",
  });
  const data = await res.json();

  const coins: Coin[] = data.items;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        لیست رمزارزها 💰
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <Link
            href={`/coin/${coin.currency_code}`}
            key={coin.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center"
          >
           
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {coin.fa_name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {coin.en_name} ({coin.currency_code})
            </p>
            <p className="text-gray-700 font-medium">
              قیمت: ${parseFloat(coin.price).toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
