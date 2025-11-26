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
//     <div className="mt-6 bg-white p-6 ">
//       <h2 className="text-lg font-medium mb-4">Customers List</h2>

//       <table className="w-full text-left">
//         <thead>
//           <tr className="border-b text-gray-600">
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
    <div className="mt-6 bg-white p-6 rounded-xl shadow border">
      <h2 className="text-lg font-medium mb-4">Customers List</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
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
          className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded hover:bg-gray-100 ${
              currentPage === i + 1 ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
