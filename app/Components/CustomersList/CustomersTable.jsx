// "use client";
// import { useState } from "react";
// import CustomerRow from "./CustomerRow";

// export default function CustomersTable() {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const customersPerPage = 2; // show 2 per page for example

//   const customers = [
//     {
//       id: 1,
//       name: "Raymond Barton",
//       email: "tim.jennings@site.com",
//       phone: "+099 856 245",
//       address: "1126 S San Jose Dr, Abilene, Texas(TX), 79605",
//       status: "Online",
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 2,
//       name: "Gary Simmons",
//       email: "josephw@me.com",
//       phone: "+099 856 245",
//       address: "198 Macvier St, Bishop, California(CA), 93514",
//       status: "Online",
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 3,
//       name: "Doug Bird",
//       email: "josephpw@me.com",
//       phone: "+099 856 245",
//       address: "718 Boyce St, Madisonville, Kentucky(KY)",
//       status: "Offline",
//       joined: "28 Jan 2022",
//     },
//     {
//       id: 4,
//       name: "Alice Johnson",
//       email: "alice.j@me.com",
//       phone: "+099 856 245",
//       address: "55 Main St, Los Angeles, California(CA)",
//       status: "Online",
//       joined: "01 Feb 2022",
//     },
//   ];

//   // Pagination logic
//   const indexOfLast = currentPage * customersPerPage;
//   const indexOfFirst = indexOfLast - customersPerPage;
//   const currentCustomers = customers.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(customers.length / customersPerPage);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow border">
//       <h2 className="text-lg font-semibold mb-4">Customers List</h2>

//       <table className="w-full text-left text-sm">
//         <thead>
//           <tr className="border-b bg-gray-50 text-gray-600">
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
//           {currentCustomers.map((c) => (
//             <CustomerRow
//               key={c.id}
//               customer={c}
//               openMenu={openMenu}
//               setOpenMenu={setOpenMenu}
//             />
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-end mt-4 space-x-2">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           className="px-3 py-1 border rounded hover:bg-gray-100"
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>

//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 border rounded hover:bg-gray-100 ${
//               currentPage === i + 1 ? "bg-gray-200 font-semibold" : ""
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           className="px-3 py-1 border rounded hover:bg-gray-100"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
