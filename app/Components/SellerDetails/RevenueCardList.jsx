const data = [
  { title: '1735 Orders', color: 'bg-green-100', amount: 'Orders' },
  { title: '$283k Earnings', color: 'bg-blue-100', amount: 'Earnings' },
  { title: '85k Transactions', color: 'bg-pink-100' },
  { title: '365k Followers', color: 'bg-purple-100' },
  { title: '125 Refunds', color: 'bg-yellow-100' },
  { title: '98% Conversation', color: 'bg-indigo-100' },
  { title: '37.85 Rating', color: 'bg-red-100' },
];

export default function RevenueCardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
      {data.map((card, i) => (
        <div
          key={i}
          className={`p-4 rounded-lg shadow text-center ${card.color}`}
        >
          <h4 className="font-bold">{card.title}</h4>
        </div>
      ))}
    </div>
  );
}
