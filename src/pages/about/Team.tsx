import { motion } from "framer-motion";


const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daniel Victor",
      position: "Chairman",
      image: "/team-erik.jpg", 
    },
    {
      name: "Richard Abiola",
      position: "African Partnerships Lead",
      image: "/team-amina.jpg",
    },
    {
      name: "Lars Bergström",
      position: "European Trade Strategist",
      image: "/team-lars.jpg",
    },
    {
      name: "Ngozi Okeke",
      position: "Producer Relations Manager",
      image: "/team-ngozi.jpg",
    },
    {
      name: "Freja Nielsen",
      position: "Sustainability Coordinator",
      image: "/team-freja.jpg",
    },
    {
      name: "Kwame Asante",
      position: "Logistics Specialist",
      image: "/team-kwame.jpg",
    },
  ];

  return (
    <section className="bg-[#f9f5f0] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#4e3629] mb-4 mt-12">
            Meet the Team
          </h2>
          <p className="text-[#876e4B] max-w-2xl mx-auto">
            The bridge-builders connecting Nordic expertise with African
            potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="h-48 bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#4e3629]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[#876e4B]">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
