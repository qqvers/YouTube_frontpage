import videos from "../data/videos";

export default function Videos({ showLeftMenu }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 my-8 mx-4 md:ml-24 text-gray-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${
        showLeftMenu && "xl:ml-64"
      }`}
    >
      {videos.map((item) => {
        return (
          <div key={item.id} className="w-full">
            <div className="relative bg-gray-500 rounded-2xl w-full h-auto">
              <img
                src={item.thumbnail}
                alt=""
                className="rounded-2xl object-cover w-full h-[180px]"
              />
              <span className="absolute bg-black/80 text-white text-sm rounded-md right-0 bottom-0 m-2 px-0.5">
                {item.duration}
              </span>
            </div>

            <div className="flex mt-2">
              <img
                src={item.thumbnail}
                alt=""
                className="rounded-full object-cover min-w-8 min-h-8 w-8 h-8"
              />
              <div className="ml-4">
                <h1 className="text-md font-medium">{item.title}</h1>
                <p className="text-sm">{item.channelName}</p>
                <span className="text-sm">{item.views}</span>
                <span className="ml-2 text-sm">•</span>
                <span className="ml-2 text-sm">{item.postedTime}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
