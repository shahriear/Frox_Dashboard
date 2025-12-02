import ProductsRow from './ProductsRow';

const products = [
  {
    id: 1,
    image: '/productsImage/2.png',
    name: 'Cubitt Smart Watch CT2S Waterproof',
    color: 'Silver',
    sales: 556,
    available: 453,
    price: 576.28,
  },
  {
    id: 2,
    image: '/productsImage/11.png',
    name: 'Cubitt Smart Watch CT2S Waterproof',
    color: 'Silver',
    sales: 556,
    available: 453,
    price: 576.28,
  },
];

export default function ProductsTable() {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-3 sm:p-4 md:p-6 mt-4 sm:mt-6 transition-colors duration-300 overflow-x-auto table-container">
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Products
      </h3>

      <table className="w-full text-left transition-colors duration-300 min-w-max">
        <thead>
          <tr className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-slate-700 transition-colors duration-300 bg-gray-50 dark:bg-slate-700">
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold">
              Image
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold hidden sm:table-cell">
              Name
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold hidden md:table-cell">
              Color
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold">
              Sales
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold hidden sm:table-cell">
              Available
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold">
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {products && products.length > 0 ? (
            products.map(p => <ProductsRow key={p.id} item={p} />)
          ) : (
            <tr>
              <td
                colSpan={6}
                className="px-2 sm:px-3 md:px-4 py-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400"
              >
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
