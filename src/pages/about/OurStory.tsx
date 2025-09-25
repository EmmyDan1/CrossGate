import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import visionValues from "../../data/dataOurStory";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const OurStory = () => {
  const values = [
    {
      name: "Trust",
      description: "Building transparent and reliable partnerships.",
    },
    {
      name: "Inclusivity",
      description:
        "Creating opportunities for African businesses and global partners alike.",
    },
    {
      name: "Impact",
      description: "Driving growth, innovation, and sustainable development.",
    },
    {
      name: "Excellence",
      description:
        "Delivering professional, high-quality service across all trade activities.",
    },
  ];

  return (
    <motion.section className="bg-[#f4e9dc] py-20 px-6 lg:px-24">
      <motion.header {...fadeInUp} className="text-center mb-20 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4e3629] mb-2">
          Karagateway{" "}
        </h2>
        <h2 className="text-[#876e4B] text-4xl md:text-5xl font-bold ">
          Connecting Africa to the World
        </h2>
      </motion.header>

      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#4e3629] mb-6 text-center">About Us</h3>
          <div className="bg-secondary rounded-2xl p-8 shadow-lg">
            <p className="text-[#4e3629] mb-6 text-lg leading-relaxed">
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
                Because to us, trade isn't just about goods it's about growth,
                equity, and global connection.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section - Moved below About Us */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl font-bold text-[#4e3629] mb-6">Our Mission</h3>
        <div className="bg-secondary rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <p className="text-xl text-[#4e3629] italic mb-4">
            "We help African producers reach global markets and bring global
            innovations to Africa, guiding partnerships from opportunity to
            impact."
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-3xl font-bold text-[#4e3629] text-center mb-8">
          Our Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-[#876e4B] mb-2">
                {value.name}
              </h4>
              <p className="text-[#4e3629] text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-3xl font-bold text-[#4e3629] text-center mb-8">
          Our Impact
        </h3>
        <div className="bg-secondary rounded-2xl p-8 shadow-lg">
          <p className="text-[#4e3629] text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Karagateway empowers African producers to access global markets
            while connecting international businesses to African opportunities.
            Our partnerships foster growth, knowledge exchange, and innovation —
            enabling trade that benefits local communities, industries, and the
            broader global economy.
          </p>
        </div>
      </motion.section>

      {/* Vision Section - Images Removed */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-[#876e4B] text-[#f4e9dc] rounded-2xl p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6">Our Vision</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connecting Africa and the world through trade, opportunity, and
              innovation that empowers communities and showcases excellence.
            </p>
            <h3 className="text-xl font-semibold mb-6">
              We see a future where:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visionValues.map(({ id, desc }) => (
                <div
                  key={id}
                  className="bg-[#f4e9dc]/10 p-4 rounded-lg backdrop-blur-sm border border-[#f4e9dc]/20"
                >
                  <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-[#4e3629] mb-12">
          Ready to be part of our story?
        </h3>
        <Button />
      </motion.div>
    </motion.section>
  );
};

export default OurStory;