import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import Link from "next/link";
import { Coin } from "@/type/Coin";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Search from "./../../public/image/search_16dp_000000_FILL0_wght400_GRAD0_opsz20.png";
import Image from "next/image";

export default async function CoinsPage() {
  const mainBtn = [
    {
      id: 1,
      name: "دیفای",
    },
    {
      id: 1,
      name: "حریم خصوصی",
    },
    {
      id: 1,
      name: "متاورس",
    },
    {
      id: 1,
      name: "قابل استخراج",
    },
    {
      id: 1,
      name: "میم کوین",
    },
    {
      id: 1,
      name: "استیبل کوین",
    },
    {
      id: 1,
      name: "توکن",
    },
    {
      id: 1,
      name: "ICO",
    },
  ];

  const res = await fetch("https://b.wallet.ir/coinlist/list", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("خطا در دریافت اطلاعات ارزها");
  }

  const data = await res.json();
  const coins: Coin[] = data.items || [];

  return (
    <Container>
      <main dir="rtl" className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-extrabold text-center mb-6 font-iranBold">
          لیست قیمت لحظه‌ای ارزهای دیجیتال
        </h1>
        <div className="flex justify-between mb-5">
          {mainBtn.map((btn) => (
            <Button key={btn.id} {...btn} />
          ))}
        </div>

        <div className="overflow-x-auto rounded">
          <table
            dir="rtl"
            className="min-w-full bg-white rounded-2xl shadow-sm text-right"
          >
            <thead className="bg-gray-300 text-gray-700 text-sm">
              <tr>
                <th className="p-3">نام رمزارز</th>
                <th className="p-3">ارزش دلاری</th>
                <th className="p-3">تغییر روزانه</th>
                <th className="p-3">خرید از والت</th>
                <th className="p-3">فروش به والت</th>
                <th className="p-3">
                  <div className="flex bg-white gap-1 py-4 rounded pr-3">
                    <Image src={Search} alt="searchIcon" />
                    <input type="text" placeholder="جستوجو..." />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {coins.map((coin, index) => (
                <tr
                  key={coin.id}
                  className={`
            ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            hover:bg-gray-100 transition-all
          `}
                >
                  <td className="p-3 font-medium text-gray-800">
                    <div className="flex flex-row-reverse justify-end gap-2">
                      {coin.fa_name}
                      <img src={coin.icon} width={25} height={25} alt="" />
                    </div>
                  </td>
                  <td className="p-3 text-gray-600">
                    ${parseFloat(coin.price).toLocaleString()}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      parseFloat(coin.daily_change_percent) > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.daily_change_percent}%
                  </td>
                  <td className="p-3 text-gray-600">
                    {parseFloat(coin.buy_irt_price).toLocaleString()} تومان
                  </td>
                  <td>
                    {parseFloat(coin.sell_irt_price).toLocaleString()}تومان
                  </td>
                  <td className="p-3">
                    <Link
                      href={`/coin/${coin.currency_code}`}
                      className="inline-block mr-35 bg-blue-600 text-white py-1.5 px-4 rounded-lg hover:bg-blue-700 text-sm transition-colors"
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
      </main>
    </Container>
  );
}
