// "use client";
// import { useState } from "react";
// import CustomerRow from "./CustomerRow";

// export default function CustomersList() {
//   const [openMenu, setOpenMenu] = useState(null);

//   const customers = [
//     {
//       id: 1,
//       name: "Shuvo1",
//       email: "tim@site.com",
//       phone: "+099 856 245",
//       address: "1126 S San Jose Dr, TX",
//       online: true,
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 2,
//       name: "Shuvo2",
//       email: "josephw@me.com",
//       phone: "+099 856 245",
//       address: "198 Macvier St, CA",
//       online: true,
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 3,
//       name: "Shuvo1",
//       email: "tim@site.com",
//       phone: "+099 856 245",
//       address: "1126 S San Jose Dr, TX",
//       online: true,
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 4,
//       name: "Shuvo2",
//       email: "josephw@me.com",
//       phone: "+099 856 245",
//       address: "198 Macvier St, CA",
//       online: true,
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 5,
//       name: "Shuvo1",
//       email: "tim@site.com",
//       phone: "+099 856 245",
//       address: "1126 S San Jose Dr, TX",
//       online: true,
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 6,
//       name: "Shuvo2",
//       email: "josephw@me.com",
//       phone: "+099 856 245",
//       address: "198 Macvier St, CA",
//       online: true,
//       joined: "28 Jan 2022",
//     },
//   ];

//   return (
//     <div className="mt-6 bg-white dark:bg-slate-700 p-6  transition-colors duration-300">
//       <h2 className="text-lg font-medium mb-4 transition-colors duration-300">Customers List</h2>

//       <table className="w-full text-left transition-colors duration-300">
//         <thead>
//           <tr className="border-b text-gray-600 dark:text-gray-300 transition-colors duration-300">
//             <th className="p-3"></th>
//             <th className="p-3">Name</th>
//             <th className="p-3">E-mail</th>
//             <th className="p-3">Phone</th>
//             <th className="p-3">Billing Address</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Joined</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {customers.map((item) => (
//             <CustomerRow
//               key={item.id}
//               customer={item}
//               openMenu={openMenu}
//               setOpenMenu={setOpenMenu}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import CustomerRow from "./CustomerRow";

export default function CustomersList() {
  const [openMenu, setOpenMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 2; // change this to show more per page

  const customers = [
    { id: 1, name: "Shuvo1", email: "tim@site.com", phone: "+099 856 245", address: "1126 S San Jose Dr, TX", online: true, joined: "28 Jan 2022" },
    { id: 2, name: "Shuvo2", email: "josephw@me.com", phone: "+099 856 245", address: "198 Macvier St, CA", online: true, joined: "28 Jan 2022" },
    { id: 3, name: "Shuvo1", email: "tim@site.com", phone: "+099 856 245", address: "1126 S San Jose Dr, TX", online: true, joined: "28 Jan 2022" },
    { id: 4, name: "Shuvo2", email: "josephw@me.com", phone: "+099 856 245", address: "198 Macvier St, CA", online: true, joined: "28 Jan 2022" },
    { id: 5, name: "Shuvo1", email: "tim@site.com", phone: "+099 856 245", address: "1126 S San Jose Dr, TX", online: true, joined: "28 Jan 2022" },
    { id: 6, name: "Shuvo2", email: "josephw@me.com", phone: "+099 856 245", address: "198 Macvier St, CA", online: true, joined: "28 Jan 2022" },
  ];

  // Pagination logic
  const indexOfLast = currentPage * customersPerPage;
  const indexOfFirst = indexOfLast - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(customers.length / customersPerPage);

  return (
    <div className="mt-6 bg-whit dark:bg-slate-00 p-6 rounded-xl shadow border transition-colors duration-300">
      <h2 className="text-lg font-medium mb-4 transition-colors duration-300">Customers List</h2>

      <table className="w-full text-left transition-colors duration-300">
        <thead>
          <tr className="border-b text-gray-00 dark:text-gray-00 transition-colors duration-300">
            <th className="p-3"></th>
            <th className="p-3">Name</th>
            <th className="p-3">E-mail</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Billing Address</th>
            <th className="p-3">Status</th>
            <th className="p-3">Joined</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentCustomers.map((item) => (
            <CustomerRow
              key={item.id}
              customer={item}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-gray-00 dark:hover:bg-slate-700 dark:bg-slate-00 disabled:opacity-50 transition-colors duration-300"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 ${
              currentPage === i + 1 ? "bg-gray-200 dark:bg-slate-00 font-semibold" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 disabled:opacity-50 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
