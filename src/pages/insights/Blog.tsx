import { motion } from "framer-motion";
import { FiFileText, FiBook, FiTrendingUp } from "react-icons/fi";

const BlogSection = () => {
  const upcomingTopics = [
    {
      icon: <FiTrendingUp className="text-xl" />,
      title: "Market Insights",
      description: "Analysis on emerging trade opportunities"
    },
    {
      icon: <FiBook className="text-xl" />,
      title: "Trade Guides",
      description: "Practical resources for cross-border business"
    },
    {
      icon: <FiFileText className="text-xl" />,
      title: "Case Studies",
      description: "Success stories and lessons learned"
    }
  ];

  return (
    <section className="bg-[#f9f5f0] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#4e3629] mt-12">
            Insights & Resources
          </h2>
          <p className="text-[#7a5c49] mt-4 max-w-2xl mx-auto">
            Practical trade insights and market analysis coming soon. 
            Subscribe to be the first to access valuable content for your business.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {upcomingTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#876e4B] mb-4 flex justify-center">
                {topic.icon}
              </div>
              <h3 className="font-semibold text-[#4e3629] mb-2">
                {topic.title}
              </h3>
              <p className="text-[#5e4336] text-sm">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold text-[#4e3629] mb-4">
              Stay Updated
            </h3>
            <p className="text-[#5e4336] mb-6">
              Get notified when we publish new trade insights and market analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 border border-[#f4e9dc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#876e4B] focus:border-transparent"
              />
              <button className="px-6 py-2 bg-[#876e4B] text-white rounded-lg hover:bg-[#9a7f58] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;