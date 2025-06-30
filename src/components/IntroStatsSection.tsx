
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Continents Connected",
    value: 2,
    duration: 2,
  },
  {
    label: "Products Sourced",
    value: 500,
    duration: 3,
  },
  {
    label: "SMEs & Trade Councils",
    value: 30,
    duration: 2,
  },
];

const IntroStatsSection = () => {
  return (
    <section
      className="relative bg-lightbrown py-14 px-6 md:px-24 text-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 96%, 0 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[22px] md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto text-[#4e3629]"
      >
        <span className="relative inline-block">
          “We connect Nordic exporters with Africa’s growing markets — and
          African producers with high-value European buyers.”
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#d4a373] opacity-60 rounded" />
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-10 max-w-5xl mx-auto"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-bold text-[#4e3629] drop-shadow">
              <CountUp end={stat.value} duration={stat.duration} />+
            </h3>
            <p className="mt-3 uppercase tracking-widest text-sm text-[#8a6b56] font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center gap-6 mt-16"
      >
        <button className="bg-[#8a6b56] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#a1785c] transition duration-300 shadow-md">
          Partner With Us
        </button>
        <button className="border border-[#8a6b56] text-[#8a6b56] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#f6eee7] transition duration-300">
          Request Trade Matchmaking
        </button>
      </motion.div>
    
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mt-20 max-w-3xl mx-auto text-[#4e3629] text-base md:text-lg leading-relaxed px-4"
      >
        <h3 className="text-xl font-semibold mb-2">About CrossGate Connect</h3>
        <p className="text-[#5e4336] opacity-90">
          CrossGate Connect is a modern pan-African trade platform facilitating
          economic bridges between Nordic exporters and African producers.
          Through strategic matchmaking, curated events, and partnership
          support, we channel sustainable capital and global opportunity into
          key African markets.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroStatsSection;
