import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import Link from "next/link";

type Coin = {
  id: number;
  en_name: string;
  fa_name: string;
  currency_code: string;
  price: string;
  daily_change: string;
  rial_price: string;
};

export default async function CoinsPage() {

  const res = await fetch("https://b.wallet.ir/coinlist/list", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("خطا در دریافت اطلاعات ارزها");
  }

  const data = await res.json();
  const coins: Coin[] = data.items || [];

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        لیست قیمت لحظه‌ای ارزهای دیجیتال 💰
      </h1>

      <div className="overflow-x-auto flex flex-col sm:flex-row">
        <table
          dir="rtl"
          className="min-w-full bg-white rounded-xl shadow-sm text-right"
        >
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-3">نام رمزارز</th>
              <th className="p-3">ارزش دلاری</th>
              <th className="p-3">تغییر روزانه</th>
              <th className="p-3">قیمت به تومان</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody >
            {coins.map((coin) => (
              <tr
                key={coin.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="p-3 font-medium text-gray-800">
                  {coin.fa_name} ({coin.currency_code})
                </td>
                <td className="p-3 text-gray-600">
                  ${parseFloat(coin.price).toLocaleString()}
                </td>
                <td
                  className={`p-3 font-semibold ${
                    parseFloat(coin.daily_change) > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {coin.daily_change}%
                </td>
                <td className="p-3 text-gray-600">
                  {parseFloat(coin.rial_price).toLocaleString()} تومان
                </td>
                <td className="p-3 text-left">
                  <Link
                    href={`/coin/${coin.currency_code}`}
                    className="inline-block bg-blue-600 text-white py-1.5 px-4 rounded-lg hover:bg-blue-700 text-sm transition-colors"
                  >
                    مطالعه
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MainContent />
      <Footer />
    </main>
  );
}
