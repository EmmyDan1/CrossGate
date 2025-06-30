import React, { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/TestimonialsData";
import renderStars from "../components/renderStars";
import debounce from "./Debounce";

const TestimonialCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let isScrolling = false;

    const handleScrollEnd = debounce(() => {
      isScrolling = false;
    }, 100);

    const handleScroll = () => {
      isScrolling = true;
      handleScrollEnd();
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      if (isScrolling) return;

      const carouselRect = scrollContainer.getBoundingClientRect();
      if (Math.abs(carouselRect.top) > window.innerHeight * 0.5) return;

      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % testimonials.length;
        const testimonialElement = scrollContainer.children[
          nextIndex
        ] as HTMLElement;

        scrollContainer.scrollTo({
          left:
            testimonialElement.offsetLeft -
            scrollContainer.clientWidth / 2 +
            testimonialElement.clientWidth / 2,
          behavior: "smooth",
        });

        return nextIndex;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPaused]);

  const goToTestimonial = (index: number) => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    setActiveIndex(index);
    const testimonialElement = scrollContainer.children[index] as HTMLElement;

    scrollContainer.scrollTo({
      left:
        testimonialElement.offsetLeft -
        scrollContainer.clientWidth / 2 +
        testimonialElement.clientWidth / 2,
      behavior: "smooth",
    });
  };
  return (
    <section className="py-12 px-4 bg-lightbrown">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#4e3629]">
          What Our Clients Say
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] snap-center"
            >
              <div className="bg-white p-6 rounded-3xl shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg group">
                {/* Avatar bubble */}
                <div className="relative -mt-8 mb-4 self-center">
                  <div className="absolute -inset-1 bg-[#876e4B] rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full object-cover border-4 border-white z-10"
                  />
                </div>

                {/* Content bubble */}
                <div className="bg-white rounded-2xl p-5 flex-grow flex flex-col">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-semibold text-[#4e3629]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#876e4B] text-xs uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="flex justify-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="text-gray-600 text-sm text-center mb-4 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="mt-auto">
                    <svg
                      className="w-6 h-6 text-[#876e4B] mx-auto opacity-70"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 mx-1.5 rounded-full transition-all ${
                index === activeIndex ? "bg-[#876e4B] w-4" : "bg-[#f4e9dc]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
