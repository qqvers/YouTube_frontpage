import categories from "../data/categories";

export default function Categories({ showLeftMenu }) {
  return (
    <div
      className={`w-full flex items-center text-white overflow-hidden mt-16 mx-4 md:ml-24 ${
        showLeftMenu ? "xl:ml-64" : ""
      } custom-width`}
    >
      {categories.map((item) => {
        return (
          <button
            key={item.id}
            className="mr-4 text-sm px-4 py-1 rounded-md font-medium text-gray-300 bg-[#303030] hover:bg-[#404040]"
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
