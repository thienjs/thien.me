/* eslint-disable @next/next/no-img-element */
import Title from "./Title";
import data from "~/data/data.json";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-10 md:ml-20">
      <Title num={2} title="Testimonials" />

      <div className="flex w-screen -mb-10 space-x-10 overflow-scroll hidescrollbar md:mx-auto md:-mr-0">
        {data.testimonials.map((testimonial, i) => (
          <div key={i} className="px-16 mt-5">
            <div className="backdrop-filter rotate-3 hover:rotate-0 cursor-pointer duration-100 backdrop-blur-3xl shadow-2xl border-2 border-darkerblue  bg-white/5  px-4 my-10 pb-3 md:min-w-[400px] min-w-[300px] rounded-lg">
              <h2 className="pt-5">{testimonial.value}</h2>
              <a
                href={testimonial.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4"
              >
                <img
                  src={testimonial.pfp}
                  alt={testimonial.name}
                  className="w-12 h-12 mt-4 rounded-full"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="mt-4 text-white">{testimonial.name}</h2>
                  <h2 className="text-white">{testimonial?.relation}</h2>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
