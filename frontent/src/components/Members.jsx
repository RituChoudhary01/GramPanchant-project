import React from "react";

const Members = ({ members }) => {
  return (
    <section className="py-16 px-6 bg-black text-white">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12
               bg-clip-text text-transparent
               bg-gradient-to-r from-red-500 via-green-400 to-pink-500
               animate-gradient-x">
 Panchayat Members
</h2>
        

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300 transform hover:-translate-y-1"
          >
            {/* Member Name */}
            <h3 className="text-2xl font-bold mb-2 text-yellow-400">
              {member.name}
            </h3>

            {/* Member Role */}
            <p className="text-gray-300 text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;





