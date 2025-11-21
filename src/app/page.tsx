import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import Link from "next/link";
import { Coin } from "@/type/Coin";
import Container from "@/components/Container";
import Button from "./../../src/components/Button";
import Search from "./../../public/image/search_16dp_000000_FILL0_wght400_GRAD0_opsz20.png";
import Image from "next/image";
import CoinTable from "@/components/CoinTable";

export default async function CoinsPage() {
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
        <div className="flex  mb-5">
          <Button />
        </div>

        <div className="w-full">
          <CoinTable coins={coins}/>
           
        </div>

        <MainContent />
      </main>
    </Container>
  );
}
