export default function CoinPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-blue-600">
        صفحه جزئیات ارز: {params.id}
      </h1>
    </main>
  );
}
