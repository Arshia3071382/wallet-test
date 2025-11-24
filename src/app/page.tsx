import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import { Coin } from "@/type/Coin";
import Container from "@/components/Container";
import Button from "./../../src/components/Button";
import CoinTable from "@/components/CoinTable";

async function getCoinsPage(page: number = 1): Promise<{
  coins: Coin[];
  totalPages: number;
  currentPage: number;
  totalCoins: number;
}> {
  try {
    const response = await fetch('https://b.wallet.ir/coinlist/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: page,
        limit: 10,
      }),
    });

    if (!response.ok) {
      throw new Error(`خطا در دریافت صفحه ${page}`);
    }

    const data = await response.json();
    
    return {
      coins: data.items || [],
      totalPages: data.total_page || 1,
      currentPage: parseInt(data.page) || 1,
      totalCoins: data.count || 0,
    };
    
  } catch (error) {
    console.error('خطا در دریافت داده‌ها:', error);
    return {
      coins: [],
      totalPages: 1,
      currentPage: 1,
      totalCoins: 0,
    };
  }
}

export default async function CoinsPage({ 
  searchParams 
}: { 
  searchParams: { page?: string } 
}) {
  const currentPage = parseInt(searchParams.page || "1");
  
  
  const { coins, totalPages, totalCoins } = await getCoinsPage(currentPage);

  return (
    <Container>
      <main dir="rtl" className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-extrabold text-center mb-6 font-iranBold">
          لیست قیمت لحظه‌ای ارزهای دیجیتال 
          
        </h1>
        
   
        <div className="flex mb-5">
          <Button />
        </div>

        <div className="w-full">
          <CoinTable 
            coins={coins}
            page={currentPage}
            totalPages={totalPages}
          />
        </div>

        <MainContent />
      </main>
    </Container>
  );
}