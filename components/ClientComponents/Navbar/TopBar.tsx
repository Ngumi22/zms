export default function TopNav() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm text-gray-600">
      <div className="container mx-auto flex justify-between items-center">
        <div>Welcome to our store!</div>
        <div className="hidden sm:flex space-x-4">
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="hover:text-gray-900">
            About
          </a>
          <a href="#" className="hover:text-gray-900">
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}
