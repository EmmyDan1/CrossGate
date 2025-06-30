import { motion } from "framer-motion";
import { FiDownload, FiCheckCircle } from "react-icons/fi";

const BlogSection = () => {
  const articles = [
    {
      title: "Top 10 Estonian Products African Markets Need Now",
      excerpt: "Discover the Nordic goods experiencing surging demand across Africa's growing consumer markets.",
      category: "Market Trends",
      date: "May 15, 2023",
      readTime: "8 min read",
      content: (
        <div className="prose prose-sm max-w-none text-[#5e4336]">
          <h3 className="text-xl font-semibold text-[#4e3629] mb-4">The Nordic Advantage in African Markets</h3>
          
          <p>Our 2023 trade data reveals these Estonian products are in highest demand:</p>
          
          <ol className="space-y-3 my-4 list-decimal pl-5">
            <li><strong>Smart Dairy Equipment:</strong> Pasteurizers and cheese-making tools (37% demand increase)</li>
            <li><strong>Modular Solar Units:</strong> 200W-500W systems for SMEs (62% more inquiries)</li>
            <li><strong>Rye Health Foods:</strong> Gluten-free crispbread requested by Ghanaian supermarkets</li>
            <li><strong>Wooden Educational Toys:</strong> ECO-certified designs popular in South Africa</li>
            <li><strong>Baltic Sea Minerals:</strong> Cosmetic-grade peat extracts for Nigerian beauty brands</li>
          </ol>

          <div className="bg-[#f4e9dc]/30 p-4 rounded-lg border-l-4 border-[#876e4B] my-6">
            <h4 className="font-semibold text-[#4e3629] mb-2">Key Insight:</h4>
            <p>African buyers pay 15-30% premiums for Estonian products due to EU certifications. Q2 2023 volumes exceed pre-pandemic levels by 40%.</p>
          </div>
        </div>
      )
    },
    {
      title: "Exporting Shea Butter to Europe: Complete Guide",
      excerpt: "Step-by-step requirements for West African producers to meet EU standards.",
      category: "Export Playbook",
      date: "April 28, 2023",
      readTime: "12 min read",
      content: (
        <div className="prose prose-sm max-w-none text-[#5e4336]">
          <h3 className="text-xl font-semibold text-[#4e3629] mb-4">Meeting the €420M EU Shea Market Demand</h3>
          
          <div className="grid gap-4 my-4">
            <div className="p-4 bg-white rounded-lg shadow-xs border border-[#f4e9dc]">
              <h4 className="font-semibold text-[#876e4B]">Quality Standards</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>FFA content ≤ 2% (EU Regulation 2022/1395)</li>
                <li>Moisture content ≤ 8%</li>
                <li>Zero sand/sediment (GMP+ certification)</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-xs border border-[#f4e9dc]">
              <h4 className="font-semibold text-[#876e4B]">Packaging Rules</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>25kg food-grade plastic drums (not jute sacks)</li>
                <li>Organic labels in 12pt+ font</li>
                <li>Laser-etched batch numbers</li>
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#876e4B] pl-4 my-6 italic text-[#5e4336]">
            "Estonian manufacturers pay €4.20/kg for premium shea - 18% above EU average"
            <div className="not-italic font-medium mt-1">- Nordic Beauty Association</div>
          </blockquote>
        </div>
      )
    },
    {
      title: "CrossGate Market Entry Checklist",
      excerpt: "Field-tested 12-point checklist for Nordic-African market expansion.",
      category: "Resource",
      date: "February 18, 2023",
      readTime: "PDF Download",
      isDownload: true,
      content: (
        <div className="prose prose-sm max-w-none text-[#5e4336]">
          <h3 className="text-xl font-semibold text-[#4e3629] mb-4">Your 12-Step Roadmap</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 border border-[#f4e9dc] rounded-lg">
              <h4 className="font-semibold text-[#876e4B] mb-2">Pre-Market Phase</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#876e4B] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Regulatory gap analysis (€1,200 avg.)</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#876e4B] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Test sample shipment</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-[#f4e9dc] rounded-lg">
              <h4 className="font-semibold text-[#876e4B] mb-2">First 90 Days</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#876e4B] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Register local entity</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#876e4B] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Hire bilingual agent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 bg-[#876e4B] text-[#f4e9dc] rounded hover:bg-[#9a7f58] transition-colors">
              <FiDownload className="mr-2" />
              Download Full Checklist (PDF)
            </button>
          </div>
        </div>
      )
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
            Trade Insights & Reports
          </h2>
          <p className="text-[#7a5c49]">
            Data-driven analysis and practical guides for Afro-Nordic trade
          </p>
        </motion.div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#876e4B]"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-medium text-[#876e4B] bg-[#f4e9dc]/50 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-[#7a5c49]">
                  {article.date} • {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#4e3629] mb-2">
                {article.title}
              </h3>
              <p className="text-[#5e4336] mb-4">{article.excerpt}</p>
              
              {/* Full article content embedded */}
              {article.content}

              {article.isDownload && (
                <div className="mt-4">
                  <button className="inline-flex items-center text-sm font-medium text-[#876e4B] hover:text-[#9a7f58] transition-colors">
                    <FiDownload className="mr-1" />
                    Download Resource
                  </button>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;