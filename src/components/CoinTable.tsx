"use client";

import Link from "next/link";
import Image from "next/image";
import { Coin } from "@/type/Coin";
import Search from "@/../public/image/search_16dp_000000_FILL0_wght400_GRAD0_opsz20.png";
import Pagination from "./Pagination"; 

interface CoinTableProps {
  coins: Coin[];
  page: number;
  totalPages: number;
}

export default function CoinTable({
  coins,
  page,
  totalPages,
}: CoinTableProps) {

  return (
    <div className="w-full">

      {/*Desktop Table*/}
      <div className="overflow-x-auto rounded hidden md:block">
        <table dir="rtl" className="min-w-full bg-white rounded-2xl shadow-sm text-right">
          <thead className="bg-gray-300 text-gray-700 text-sm">
            <tr className="grid grid-cols-6 gap-2 w-full p-2">
              <th className="p-2 text-center">نام رمزارز</th>
              <th className="p-2 text-center">ارزش دلاری</th>
              <th className="p-2 text-center">تغییر روزانه</th>
              <th className="p-2 text-center">خرید از والت</th>
              <th className="p-2 text-center">فروش به والت</th>
              <th className="p-2 text-center">
                <div className="flex bg-white gap-1 rounded px-1 py-1 items-center max-w-[150px] mx-auto">
                  <Image src={Search} alt="search" width={12} height={12} />
                  <input 
                    type="text" 
                    placeholder="جستوجو..." 
                    className="outline-none text-xs w-full" 
                  />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin, index) => (
              <tr
                key={coin.id}
                className={`grid grid-cols-6 gap-2 p-2 items-center transition-colors
                ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                hover:bg-blue-50 border-b border-gray-200`}
              >
                <td className="text-xs md:text-sm font-medium text-gray-900">
                  <div className="flex flex-row-reverse items-center justify-end gap-2">
                    <span>{coin.fa_name}</span>
                    <img 
                      src={coin.icon} 
                      width={24} 
                      height={24} 
                      alt={coin.fa_name}
                      className="rounded-full"
                    />
                  </div>
                </td>

                <td className="text-center text-xs md:text-sm text-gray-700 font-medium">
                  ${parseFloat(coin.price).toLocaleString()}
                </td>
                
                <td className={`text-center font-semibold text-xs md:text-sm ${
                  parseFloat(coin.daily_change_percent) > 0
                  ? "text-green-600"
                  : "text-red-500"
                }`}>
                  {coin.daily_change_percent}%
                </td>

                <td className="text-center text-xs md:text-sm text-gray-700">
                  {parseFloat(coin.buy_irt_price).toLocaleString()}
                </td>

                <td className="text-center text-xs md:text-sm text-gray-700">
                  {parseFloat(coin.sell_irt_price).toLocaleString()} تومان
                </td>

                <td className="text-center">
                  <Link
                    href={`/coin/${coin.currency_code}`}
                    className="inline-block bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    معامله
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Mobile View */}
      <div className="md:hidden flex flex-col gap-4 mt-5">
    
        <div className="flex bg-gray-300 gap-1 rounded-lg px-3 py-7 items-center border justify-between border-gray-300 shadow-sm">
          <h2 className="mr-3">نام ارز</h2>
          <h2 className="mr-20">ارزش دلاری</h2>
          <h2>تغییر روزانه</h2>
          
        </div>

      
        {coins.map((coin, index) => (
          <div 
            key={coin.id} 
            className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img 
                  src={coin.icon} 
                  width={36} 
                  height={36} 
                  className="rounded-full border border-gray-300" 
                  alt={coin.fa_name} 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-gray-900">{coin.fa_name}</span>
                  <span className="text-xs text-gray-500">{coin.currency_code}</span>
                </div>
              </div>

              <div className="flex flex-row justify-between gap-35 items-end">
                <span className="text-gray-700 font-medium text-sm">
                  ${parseFloat(coin.price).toLocaleString()}
                </span>
                <span className={`text-xs font-semibold ${
                  parseFloat(coin.daily_change_percent) > 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}>
                  {coin.daily_change_percent}%
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2 text-gray-600 border-t pt-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">قیمت خرید:</span>
                <span className="font-medium text-gray-900">{parseFloat(coin.buy_irt_price).toLocaleString()} تومان</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">قیمت فروش:</span>
                <span className="font-medium text-gray-900">{parseFloat(coin.sell_irt_price).toLocaleString()} تومان</span>
              </div>
            </div>

            <Link
              href={`/coin/${coin.currency_code}`}
              className="bg-blue-600 text-white text-center py-2.5 rounded-lg w-full mt-2 hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
            >
              معامله
            </Link>
          </div>
        ))}
      </div>

    
      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} /> // اصلاح تایپو
      )}

      
      {coins.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-lg mb-2">🚫</div>
          <div className="font-medium">هیچ ارزی در این صفحه یافت نشد</div>
          <div className="text-sm mt-1">لطفاً صفحه دیگری را امتحان کنید</div>
        </div>
      )}

    </div>
  );
}