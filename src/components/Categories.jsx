import { useState } from "react";
import categories from "../data/categories";

export default function Categories() {
  const [currentCategories, setCurrentCategories] = useState(categories);
  return (
    <div className="w-full flex items-center text-white mt-16 mx-4 md:ml-24 custom-width">
      {currentCategories.map((item) => {
        return (
          <button
            key={item.id}
            className="mr-4 text-sm px-4 py-1 rounded-md font-medium bg-gray-600 hover:bg-gray-700"
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
