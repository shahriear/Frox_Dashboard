const data = [
  {
    title: '1735 Orders',
    color: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-900 dark:text-green-300',
  },
  {
    title: '$283k Earnings',
    color: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-900 dark:text-blue-300',
  },
  {
    title: '85k Transactions',
    color: 'bg-pink-100 dark:bg-pink-900/30',
    textColor: 'text-pink-900 dark:text-pink-300',
  },
  {
    title: '365k Followers',
    color: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-900 dark:text-purple-300',
  },
  {
    title: '125 Refunds',
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
    textColor: 'text-yellow-900 dark:text-yellow-300',
  },
  {
    title: '98% Conversation',
    color: 'bg-indigo-100 dark:bg-indigo-900/30',
    textColor: 'text-indigo-900 dark:text-indigo-300',
  },
  {
    title: '37.85 Rating',
    color: 'bg-red-100 dark:bg-red-900/30',
    textColor: 'text-red-900 dark:text-red-300',
  },
];

export default function RevenueCardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
      {data.map((card, i) => (
        <div
          key={i}
          className={`p-2 sm:p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center ${card.color}`}
        >
          <h4
            className={`font-bold text-xs sm:text-sm transition-colors duration-300 ${card.textColor}`}
          >
            {card.title}
          </h4>
        </div>
      ))}
    </div>
  );
}
