import { motion } from "framer-motion";
import { FounderImg, VisionImg } from "../../data/image";
import OurModelSection from "../../components/OurModel";

const OurStory = () => {
  return (
    <section className="bg-[#f4e9dc] py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#4e3629] mb-6">
          Born in Estonia. Rooted in Africa.{" "}
          <span className="text-[#876e4B]">Built for global trade.</span>
        </h2>
        <p className="text-xl text-[#7a5c49] max-w-4xl mx-auto">
          "We connect Nordic exporters with Africa's growing markets — and
          African producers with high-value European buyers."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 border-2 border-[#876e4B] rounded-lg"></div>
          <img
            src={FounderImg}
            alt="Founder"
            className="relative z-10 rounded-lg w-full h-96 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#876e4B] mb-4">
            Founder's Journey
          </h3>
          <p className="text-[#4e3629] mb-6">
            Born to a Nigerian father and Estonian mother, our founder grew up
            navigating both cultures. After witnessing the frustrating trade
            disconnects between these regions firsthand, the vision for
            CrossGate was born — to bridge markets through cultural
            understanding and streamlined logistics.
          </p>
          <div className="bg-[#876e4B]/10 p-4 rounded-lg border-l-4 border-[#876e4B]">
            <p className="italic text-[#4e3629]">
              "I realized trade wasn't about borders, but about building the
              right connections."
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#876e4B] text-[#f4e9dc] rounded-2xl mb-24"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={VisionImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
            <p className="text-xl mb-8 max-w-xl">
              Creating a seamless Afro-Nordic trade ecosystem where quality
              meets opportunity, and cultural understanding drives sustainable
              business growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Trust", "Innovation", "Partnership"].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f4e9dc]/10 p-4 rounded-lg backdrop-blur-sm border border-[#f4e9dc]/20"
                >
                  <h4 className="font-bold text-lg mb-1">{item}</h4>
                  <p className="text-xs md:text-sm">
                    {item === "Trust" &&
                      "Building long-term relationships through transparency"}
                    {item === "Innovation" &&
                      "Leveraging technology to simplify cross-border trade"}
                    {item === "Partnership" &&
                      "Growing together with our clients and partners"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full h-64 lg:h-full rounded-lg overflow-hidden shadow-2xl border-4 border-[#f4e9dc]">
              <img
                src={VisionImg}
                alt="Afro-Nordic trade connection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#876e4B]/80 to-transparent flex items-end p-6">
                <p className="text-[#f4e9dc] font-medium italic">
                  "Bridging continents through commerce"
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Model */}
      <OurModelSection />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-[#4e3629] mb-8">
          Ready to be part of our story?
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="px-8 py-3 bg-[#876e4B] text-[#f4e9dc] rounded-full font-medium hover:bg-[#9a7f58] transition-colors shadow-lg">
            Meet the Team
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-[#876e4B] text-[#876e4B] rounded-full font-medium hover:bg-[#876e4B]/10 transition-colors">
            Join Our Mission
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStory;
