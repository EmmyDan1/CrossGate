import { motion } from "framer-motion";
import { FounderImg, VisionImg } from "../../data/image";

import { Link } from "react-router-dom";
import visionValues from "../../data/dataOurStory";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const OurStory = () => {
  return (
    <motion.section className="bg-[#f4e9dc] py-20 px-6 lg:px-24">
      <motion.header {...fadeInUp} className="text-center mb-20 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4e3629] mb-">
          Karagateway{" "}
        </h2>
        <h2 className="text-[#876e4B] text-4xl md:text-5xl font-bold ">
          Connecting africa to the world
        </h2>
        {/* <p className="text-xl text-[#7a5c49] max-w-4xl mx-auto">
          "We connect Nordic exporters with Africa's growing markets   and
          African producers with high-value European buyers."
        </p> */}
      </motion.header>

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
            loading="lazy"
            className="relative z-10 rounded-lg w-full h-96 object-cover"
          />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#4e3629] mb-4 font-poppins">
            About Us
          </h3>
          <p className="text-[#4e3629] mb-6">
            Karagateway simplifies international trade, helping African
            producers reach global markets while enabling international
            businesses to access opportunities across Africa. We provide expert
            guidance, streamline cross-border operations, and empower businesses
            on both sides to grow confidently. We bridge complex trade processes
            with real opportunities, enabling businesses to focus on growth and
            innovation. Through our expertise, networks, and advisory support,
            we create seamless connections that benefit African producers and
            global partners alike.
          </p>
          <div className="bg-[#876e4B]/10 p-4 rounded-lg border-l-4 border-[#876e4B]">
            <p className="italic text-[#4e3629]">
              Because to us, trade isn’t just about goods it’s about growth,
              equity, and global connection.
            </p>
          </div>
        </motion.article>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#876e4B] text-[#f4e9dc] rounded-2xl mb-24"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={VisionImg}
            alt="Vision Background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
            <p className="text-xl mb-8 max-w-xl">
              Connecting Africa and the world through trade, opportunity, and
              innovation that empowers communities and showcases excellence.
            </p>
            <h3 className="text-xl font-semibold ">We see a future where:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visionValues.map(({ id, desc }) => (
                <div
                  key={id}
                  className="bg-[#f4e9dc]/10 p-4 rounded-lg backdrop-blur-sm border border-[#f4e9dc]/20"
                >
                  <h4 className="font-bold text-lg mb-1"></h4>
                  <p className="text-xs md:text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full h-64 lg:h-full rounded-lg overflow-hidden shadow-2xl border-4 border-[#f4e9dc]">
              <img
                src={VisionImg}
                alt="Afro-Nordic trade connection"
                loading="lazy"
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
      </motion.section>

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
          <Link to="/team">
            <button className="px-8 py-3 bg-[#876e4B] text-[#f4e9dc] rounded-full font-medium hover:bg-[#9a7f58] transition-colors shadow-lg">
              Meet the Team
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-3 bg-transparent border-2 border-[#876e4B] text-[#876e4B] rounded-full font-medium hover:bg-[#876e4B]/10 transition-colors">
              Join Our Mission
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default OurStory;
