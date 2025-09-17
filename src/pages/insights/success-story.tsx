import { motion } from "framer-motion";
import { FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const SuccessStories = () => {
  const caseStudies = [
    {
      type: "video",
      title: "Estonian Tomato Processor Expands to West Africa",
      excerpt: "How we helped TomaTech increase exports by 140% in 18 months",
      quote: "Karagateway's market insights helped us avoid costly mistakes in Nigeria's retail sector.",
      author: "Kati Jõgi, CEO TomaTech",
      stats: ["140% export growth", "12 new distributor partnerships", "€2.8M annual revenue"]
    },
    {
      type: "story",
      title: "Nigerian Shea Butter in Nordic Cosmetics",
      excerpt: "From Lagos to Tallinn: Premium Naturals' EU breakthrough",
      quote: "Their documentation support cut our customs clearance time from 3 weeks to 4 days.",
      author: "Emeka Okoro, Founder Premium Naturals",
      stats: ["€450k first-year sales", "3 EU retailers secured", "40% profit margin"]
    }
  ];

  const testimonials = [
    {
      quote: "We doubled our African distribution network in 9 months through Karagateway's partner matching.",
      author: "Andres Kask, Export Manager",
      company: "Nordic Dairy Collective"
    },
    {
      quote: "Finally found reliable Nordic buyers who understand fair pricing for African producers.",
      author: "Amina Diallo",
      company: "Bamako Textiles"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#f9f5f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-12"
        >
          <h2 className="text-3xl font-bold text-[#4e3629] mb-2">
            Real Results. Real Businesses.
          </h2>
          <p className="text-[#7a5c49]">
            Proven success stories from our trade network
          </p>
        </motion.div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-48 relative ${study.type === 'video' ? 'bg-[#876e4B]' : 'bg-[#f4e9dc]'} flex items-center justify-center`}>
                {study.type === 'video' ? (
                  <>
                    <button className="absolute inset-0 flex items-center justify-center">
                      <FiPlay className="text-white text-4xl" />
                    </button>
                    <span className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Case Study Video
                    </span>
                  </>
                ) : (
                  <span className="text-[#4e3629] font-medium">Success Story</span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4e3629] mb-2">
                  {study.title}
                </h3>
                <p className="text-[#5e4336] text-sm mb-4">{study.excerpt}</p>
                
                <div className="border-l-4 border-[#876e4B] pl-4 mb-4">
                  <p className="italic text-[#5e4336]">"{study.quote}"</p>
                  <p className="text-[#876e4B] font-medium mt-1">{study.author}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.stats.map((stat, i) => (
                    <span key={i} className="text-xs bg-[#f4e9dc] text-[#876e4B] px-2 py-1 rounded">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-center text-xl font-semibold text-[#4e3629] mb-8">
            What Our Partners Say
          </h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm relative">
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#876e4B] hover:text-[#9a7f58]"
            >
              <FiChevronLeft size={24} />
            </button>
            
            <div className="text-center px-8">
              <p className="text-lg italic text-[#5e4336] mb-4">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="font-medium text-[#876e4B]">{testimonials[currentTestimonial].author}</p>
              <p className="text-sm text-[#7a5c49]">{testimonials[currentTestimonial].company}</p>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#876e4B] hover:text-[#9a7f58]"
            >
              <FiChevronRight size={24} />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${index === currentTestimonial ? 'bg-[#876e4B]' : 'bg-[#f4e9dc]'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;