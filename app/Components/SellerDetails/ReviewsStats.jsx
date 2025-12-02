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
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-3 sm:p-4 md:p-6 transition-colors duration-300">
      {/* Title */}
      <h3 className="font-semibold mb-3 text-base sm:text-lg text-gray-900 dark:text-white transition-colors duration-300">
        Customer Reviews
      </h3>

      {/* Stars + Rates */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
        <div className="text-lg sm:text-xl text-yellow-400 transition-colors duration-300">
          ★★★★★
        </div>
        <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg transition-colors duration-300">
          12k rates
        </span>
      </div>

      {/* Total reviews */}
      <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-3 text-sm sm:text-base transition-colors duration-300">
        Total 12k reviews
      </h4>

      {/* Star Progress Bars */}
      <div className="space-y-2 sm:space-y-3">
        {/* 5 star */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 flex-shrink-0">
            5 star
          </span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-1.5 sm:h-2 rounded transition-colors duration-300">
            <div
              className="bg-purple-600 h-full rounded transition-colors duration-300"
              style={{ width: '95%' }}
            ></div>
          </div>
        </div>

        {/* 4 star */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 flex-shrink-0">
            4 star
          </span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-1.5 sm:h-2 rounded transition-colors duration-300">
            <div
              className="bg-green-400 h-full rounded transition-colors duration-300"
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>

        {/* 3 star */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 flex-shrink-0">
            3 star
          </span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-1.5 sm:h-2 rounded transition-colors duration-300">
            <div
              className="bg-blue-400 h-full rounded transition-colors duration-300"
              style={{ width: '50%' }}
            ></div>
          </div>
        </div>

        {/* 2 star */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 flex-shrink-0">
            2 star
          </span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-1.5 sm:h-2 rounded transition-colors duration-300">
            <div
              className="bg-orange-400 h-full rounded transition-colors duration-300"
              style={{ width: '30%' }}
            ></div>
          </div>
        </div>

        {/* 1 star */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 flex-shrink-0">
            1 star
          </span>
          <div className="flex-1 bg-gray-200 dark:bg-slate-600 h-1.5 sm:h-2 rounded transition-colors duration-300">
            <div
              className="bg-red-400 h-full rounded transition-colors duration-300"
              style={{ width: '10%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contact seller form */}
      <div className="mt-4 sm:mt-6">
        <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
          Contact this seller
        </h4>

        <input
          placeholder="Subject"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2 sm:p-2.5 w-full rounded-lg text-xs sm:text-sm mb-2 sm:mb-3 transition-colors duration-300"
        />

        <textarea
          placeholder="Message"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2 sm:p-2.5 w-full h-20 sm:h-24 rounded-lg text-xs sm:text-sm mb-2 sm:mb-3 transition-colors duration-300 resize-none"
        ></textarea>

        <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300">
          Send message
        </button>
      </div>
    </div>
  );
}
