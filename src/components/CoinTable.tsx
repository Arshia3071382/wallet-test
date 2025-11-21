"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Coin } from "@/type/Coin";
import Search from "@/../public/image/search_16dp_000000_FILL0_wght400_GRAD0_opsz20.png";

export default function CoinTable({ coins }: { coins: Coin[] }) {
  const [page, setPage] = useState(1);

  const perPage = 10; 
  const totalPages = Math.ceil(coins.length / perPage);

  const start = (page - 1) * perPage;
  const currentCoins = coins.slice(start, start + perPage);

  return (
    <div className="w-full">

      {/* ---------------- Desktop Table ---------------- */}
      <div className="overflow-x-auto rounded hidden md:flex ">
        <table dir="rtl" className="min-w-full bg-white rounded-2xl shadow-sm text-right">
          <thead className="bg-gray-300 text-gray-700 text-sm w-full hidden md:table-header-group">
            <tr className="grid grid-cols-6 gap-2 w-full p-2">
              <th className="p-2 text-center text-xs md:text-sm">نام رمزارز</th>
              <th className="p-2 text-center text-xs md:text-sm">ارزش دلاری</th>
              <th className="p-2 text-center text-xs md:text-sm">تغییر روزانه</th>
              <th className="p-2 text-center text-xs md:text-sm">خرید از والت</th>
              <th className="p-2 text-center text-xs md:text-sm">فروش به والت</th>
              <th className="p-2 text-center text-xs md:text-sm">
                <div className="flex bg-white gap-1 rounded px-1 py-1 items-center max-w-[150px] mx-auto">
                  <Image src={Search} alt="search" width={12} height={12} />
                  <input
                    type="text"
                    placeholder="جستوجو..."
                    className="w-full outline-none text-xs"
                  />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {currentCoins.map((coin, index) => (
              <tr
                key={coin.id}
                className={`
                  grid grid-cols-6 gap-2 p-2 items-center
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  hover:bg-gray-100 transition-all border-b border-gray-200 last:border-b-0
                `}
              >
                <td className="p-1 font-medium text-gray-800 text-xs md:text-sm">
                  <div className="flex flex-row-reverse justify-end items-center gap-2">
                    <span>{coin.fa_name}</span>
                    <img src={coin.icon} width={20} height={20} className="object-contain" />
                  </div>
                </td>

                <td className="p-1 text-gray-600 text-xs md:text-sm text-center">
                  ${parseFloat(coin.price).toLocaleString()}
                </td>

                <td
                  className={`p-1 font-semibold text-xs md:text-sm text-center ${
                    parseFloat(coin.daily_change_percent) > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {coin.daily_change_percent}%
                </td>

                <td className="p-1 text-gray-600 text-xs md:text-sm text-center">
                  {parseFloat(coin.buy_irt_price).toLocaleString()}
                </td>

                <td className="p-1 text-gray-600 text-xs md:text-sm text-center">
                  {parseFloat(coin.sell_irt_price).toLocaleString()} تومان
                </td>

                <td className="p-1">
                  <div className="mr-10 lg:mr-15">
                    <Link
                      href={`/coin/${coin.currency_code}`}
                      className="inline-block bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 text-xs md:text-sm whitespace-nowrap"
                    >
                      معامله
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- Mobile View ---------------- */}
      <div className="md:hidden flex flex-col gap-4 mt-5">
        <div className="flex justify-between bg-gray-200 p-5 rounded gap-10">
          <h2>نام ارز</h2>
          <h2 className="mr-20">ارزش دلاری</h2>
          <h2>تغییر روزانه</h2>
        </div>

        {currentCoins.map((coin) => (
          <div key={coin.id} className="bg-white shadow rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={coin.icon} width={30} height={30} />
                <p className="font-bold">{coin.fa_name}</p>
              </div>

              <p className="text-gray-700">
                ${parseFloat(coin.price).toLocaleString()}
              </p>

              <p
                className={`font-semibold ${
                  parseFloat(coin.daily_change_percent) > 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {coin.daily_change_percent}%
              </p>
            </div>

            <div className="flex flex-col mt-2 text-gray-600">
              <div className="flex justify-between">
                <h3>قیمت خرید :</h3>
                <p>{parseFloat(coin.buy_irt_price).toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <h3>قیمت فروش :</h3>
                <p>{parseFloat(coin.sell_irt_price).toLocaleString()}</p>
              </div>
            </div>

            <Link
              href={`/coin/${coin.currency_code}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full text-center mt-3"
            >
              معامله
            </Link>
          </div>
        ))}
      </div>

      {/* ---------------- Pagination ---------------- */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-4 py-1.5 rounded border ${
              num === page
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
