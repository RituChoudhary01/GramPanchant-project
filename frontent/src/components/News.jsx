// import React from "react";

// const News = ({ news }) => {
//   return (
//     <section className="py-16 px-6 bg-black text-white">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-400">
//         Latest News
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {news.map((item) => (
//           <div
//             key={item._id}
//             className="bg-gray-900 p-6 rounded-xl shadow-2xl hover:shadow-yellow-500/50 transition-shadow duration-300 transform hover:-translate-y-1"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-yellow-400">{item.title}</h3>
//             <p className="text-gray-300 leading-relaxed">{item.content}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default News;

import React from "react";

const News = ({ news }) => {
  return (
    <section className="py-16 px-6 bg-black text-white">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12
               bg-clip-text text-transparent
               bg-gradient-to-r from-red-500 via-green-400 to-pink-500
               animate-gradient-x">
  News & Updates
</h2>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {news.map((item) => (
          <div
            key={item._id}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300"
          >
            {/* Optional Date */}
            {item.date && (
              <p className="text-sm text-gray-500 mb-2">
                {new Date(item.date).toLocaleDateString()}
              </p>
            )}

            {/* News Title */}
            <h3 className="text-2xl font-extrabold mb-3 text-yellow-400">
              {item.title}
            </h3>

            {/* News Description */}
            <p className="text-gray-300 leading-relaxed text-justify">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;







