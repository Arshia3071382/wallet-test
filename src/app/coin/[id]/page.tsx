import { Metadata } from "next";

type CoinPageProps = {
  params: { id: string };
};

export default function CoinPage({ params }: CoinPageProps) {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        صفحه جزئیات ارز: {params.id}
      </h1>
      <p className="text-gray-600">
        اطلاعات دقیق این رمزارز به‌زودی در این بخش قرار می‌گیرد.
      </p>
    </main>
  );
}
