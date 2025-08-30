import React from "react";

const Photos = ({ photos }) => {
  return (
    <section className="py-16 px-6 bg-black text-white">
         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12
               bg-clip-text text-transparent
               bg-gradient-to-r from-red-500 via-green-400 to-pink-500
               animate-gradient-x">
  Photo Gallery
</h2>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo._id}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
