export default function SellerInfo() {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 sm:p-6 w-full transition-colors duration-300">
      <div className="flex flex-col items-center text-center transition-colors duration-300">
        <img
          src="/photos/pic.png"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover"
          alt="Seller"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4 text-gray-900 dark:text-white transition-colors duration-300">
          FoxMedia_JSC
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Since 2012
        </p>
      </div>

      <div className="mt-4 sm:mt-6 text-xs sm:text-sm space-y-1.5 sm:space-y-2 transition-colors duration-300">
        <p className="text-gray-900 dark:text-white">
          <strong className="text-gray-700 dark:text-gray-300">
            Owner Name:
          </strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">Johnson Mark</span>
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong className="text-gray-700 dark:text-gray-300">
            Company Type:
          </strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">Partnership</span>
        </p>
        <p className="text-gray-900 dark:text-white break-all sm:break-normal">
          <strong className="text-gray-700 dark:text-gray-300">Email:</strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">
            foxmedia@gmail.co
          </span>
        </p>
        <p className="text-gray-900 dark:text-white break-all sm:break-normal">
          <strong className="text-gray-700 dark:text-gray-300">Website:</strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">
            foxmedia.co.uk
          </span>
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong className="text-gray-700 dark:text-gray-300">
            Contact No:
          </strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">
            (+18) 985 45632
          </span>
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong className="text-gray-700 dark:text-gray-300">Fax:</strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">
            (+18) 985 45648
          </span>
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong className="text-gray-700 dark:text-gray-300">
            Location:
          </strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">
            United Kingdom
          </span>
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong className="text-gray-700 dark:text-gray-300">Joined:</strong>{' '}
          <span className="text-gray-600 dark:text-gray-400">
            18 January 2012
          </span>
        </p>
      </div>
    </div>
  );
}
