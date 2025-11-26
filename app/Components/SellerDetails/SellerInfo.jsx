export default function SellerInfo() {
  return (
    <div className="bg-white shadow rounded-lg p-6 w-full ">
      <div className="flex flex-col items-center text-center">
        <img
          src="/photos/pic.png"
          className="w-24 h-24 rounded-full object-cover"
          alt="Seller"
        />
        <h2 className="text-xl font-bold mt-4">FoxMedia_JSC</h2>
        <p className="text-sm text-gray-500">Since 2012</p>
      </div>

      <div className="mt-6 text-sm space-y-2">
        <p>
          <strong>Owner Name:</strong> Johnson Mark
        </p>
        <p>
          <strong>Company Type:</strong> Partnership
        </p>
        <p>
          <strong>Email:</strong> foxmedia@gmail.co
        </p>
        <p>
          <strong>Website:</strong> foxmedia.co.uk
        </p>
        <p>
          <strong>Contact No:</strong> (+18) 985 45632
        </p>
        <p>
          <strong>Fax:</strong> (+18) 985 45648
        </p>
        <p>
          <strong>Location:</strong> United Kingdom
        </p>
        <p>
          <strong>Joined:</strong> 18 January 2012
        </p>
      </div>
    </div>
  );
}
