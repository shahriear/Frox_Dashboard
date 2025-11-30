// export default function ReviewsStats() {
//   return (
//     <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-6 mt-6 transition-colors duration-300">
//       <h3 className="font-semibold mb-2">Customer Reviews</h3>

//       <div className="flex items-center gap-2">
//         <div className="text-yellow-500 text-xl transition-colors duration-300">★★★★★</div>
//         <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">(12k rates)</span>
//       </div>

//       <h4 className="mt-4 mb-2 font-semibold">Total 12k reviews</h4>

//       <div className="space-y-2">
//         {[5, 4, 3, 2, 1].map(star => (
//           <div key={star} className="flex items-center gap-2">
//             <span className="w-10">{star} star</span>
//             <div className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded transition-colors duration-300">
//               <div
//                 className="h-full bg-purple-500 rounded transition-colors duration-300"
//                 style={{ width: `${star * 15}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6">
//         <h4 className="font-semibold mb-2">Contact this seller</h4>
//         <input
//           placeholder="Subject"
//           className="border p-2 w-full rounded mb-2"
//         />
//         <textarea
//           placeholder="Message"
//           className="border p-2 w-full h-20 rounded"
//         ></textarea>
//         <button className="bg-indigo-600 text-white w-full py-2 mt-2 rounded transition-colors duration-300">
//           Send message
//         </button>
//       </div>
//     </div>
//   );
// }

export default function ReviewsStats() {
  return (
    <div className="bg-white text-black dark:bg-slate-400 shadow rounded-xl p-6 transition-colors duration-300">
      {/* Title */}
      <h3 className="font-semibold mb-3 text-lg transition-colors duration-300">Customer Reviews</h3>

      {/* Stars + Rates */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-yellow-400 text-2xl transition-colors duration-300">★★★★★</div>
        <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-sm px-3 py-1 rounded-md transition-colors duration-300">
          12k rates
        </span>
      </div>

      {/* Total reviews */}
      <h4 className="text-gray-800 font-semibold mb-3 transition-colors duration-300">Total 12k reviews</h4>

      {/* Star Progress Bars */}
      <div className="space-y-3">
        {/* 5 star */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-sm text-gray-600 dark:text-gray-100 transition-colors duration-300">5 star</span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-2 rounded transition-colors duration-300">
            <div
              className="bg-purple-600 h-2 rounded transition-colors duration-300"
              style={{ width: '95%' }}
            ></div>
          </div>
        </div>

        {/* 4 star */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-sm text-gray-600 dark:text-gray-100 transition-colors duration-300">4 star</span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-2 rounded transition-colors duration-300">
            <div
              className="bg-green-400 h-2 rounded transition-colors duration-300"
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>

        {/* 3 star */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-sm text-gray-600 dark:text-gray-100 transition-colors duration-300">3 star</span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-2 rounded transition-colors duration-300">
            <div
              className="bg-blue-400 h-2 rounded transition-colors duration-300"
              style={{ width: '50%' }}
            ></div>
          </div>
        </div>

        {/* 2 star */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-sm text-gray-600 dark:text-gray-100 transition-colors duration-300">2 star</span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-2 rounded transition-colors duration-300">
            <div
              className="bg-orange-400 h-2 rounded transition-colors duration-300"
              style={{ width: '30%' }}
            ></div>
          </div>
        </div>

        {/* 1 star */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-sm text-gray-600 dark:text-gray-100 transition-colors duration-300">1 star</span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-2 rounded transition-colors duration-300">
            <div
              className="bg-red-400 h-2 rounded transition-colors duration-300"
              style={{ width: '10%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contact seller form */}
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Contact this seller</h4>

        <input
          placeholder="Subject"
          className="border p-2 w-full rounded mb-3"
        />

        <textarea
          placeholder="Message"
          className="border p-2 w-full h-24 rounded mb-3"
        ></textarea>

        <button className="bg-indigo-600 text-white w-full py-2 rounded transition-colors duration-300">
          Send message
        </button>
      </div>
    </div>
  );
}
