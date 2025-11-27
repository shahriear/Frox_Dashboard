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
    <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-6 mt-6 transition-colors duration-300">
      <h3 className="font-bold mb-4">Products</h3>

      <table className="w-full text-left transition-colors duration-300">
        <thead>
          <tr className="text-gray-500 dark:text-gray-400 border-b transition-colors duration-300">
            <th>Image</th>
            <th>Name</th>
            <th>Color</th>
            <th>Sales</th>
            <th>Available</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <ProductsRow key={p.id} item={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
