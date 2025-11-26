// "use client";
// import { useState } from "react";
// import CustomerRow from "./CustomerRow";

// const customers = [
//   { id: 1, name: "Raymond Barton", email: "tim@site.com", phone: "+099 856 245", address: "1126 S San Jose Dr, TX", online: true, joined: "28 Jan 2022" },
//   { id: 2, name: "Gary Simmons", email: "josephw@me.com", phone: "+099 856 245", address: "198 Macvier St, CA", online: true, joined: "28 Jan 2022" },
//   { id: 3, name: "Doug Bird", email: "josephw@me.com", phone: "+099 856 245", address: "718 Boyce St, KY", online: false, joined: "28 Jan 2022" },
//   // ... baki gula add korle cholbe
// ];

// export default function CustomersList() {
//   const [openMenu, setOpenMenu] = useState(null);

//   return (
//     <div className="mt-6 bg-white p-6 rounded-xl shadow">
//       <h2 className="text-lg font-semibold mb-4">Customers List</h2>

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

  const customers = [
    {
      id: 1,
      name: "Shuvo1",
      email: "tim@site.com",
      phone: "+099 856 245",
      address: "1126 S San Jose Dr, TX",
      online: true,
      joined: "28 Jan 2022",
    },
    {
      id: 2,
      name: "Shuvo2",
      email: "josephw@me.com",
      phone: "+099 856 245",
      address: "198 Macvier St, CA",
      online: true,
      joined: "28 Jan 2022",
    },
    {
      id: 3,
      name: "Shuvo1",
      email: "tim@site.com",
      phone: "+099 856 245",
      address: "1126 S San Jose Dr, TX",
      online: true,
      joined: "28 Jan 2022",
    },
    {
      id: 4,
      name: "Shuvo2",
      email: "josephw@me.com",
      phone: "+099 856 245",
      address: "198 Macvier St, CA",
      online: true,
      joined: "28 Jan 2022",
    },
    {
      id: 5,
      name: "Shuvo1",
      email: "tim@site.com",
      phone: "+099 856 245",
      address: "1126 S San Jose Dr, TX",
      online: true,
      joined: "28 Jan 2022",
    },
    {
      id: 6,
      name: "Shuvo2",
      email: "josephw@me.com",
      phone: "+099 856 245",
      address: "198 Macvier St, CA",
      online: true,
      joined: "28 Jan 2022",
    },
  ];

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow">
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
          {customers.map((item) => (
            <CustomerRow
              key={item.id}
              customer={item}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
