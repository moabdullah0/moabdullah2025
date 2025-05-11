import React from "react";

const KindWords = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-medium text-white text-center mb-2">
        Kind Words
      </h2>

      <p className="text-gray-300 text-center mb-10">
        See what my clients have to say about working with me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* First Question Card */}
        <div className="border border-gray-600 p-6 rounded-lg">
          <h3 className="text-xl text-white font-medium mb-4">
            How do you ensure my project stays on budget and timeline?
          </h3>

          <p className="text-gray-300 mb-4">
            I break projects into clear milestones with fixed costs for each
            phase (e.g., design, MVP, testing). You&rsquo;ll get weekly updates,
            and we&rsquo;ll adjust scope early if needed. My tools
            (Next.js/Laravel/Prisma) speed up development, reducing unexpected
            delays.
          </p>
        </div>

        {/* Second Question Card */}
        <div className="border border-gray-600 p-6 rounded-lg ">
          <h3 className="text-xl text-white font-medium mb-4">
            How do you handle security and maintenance post-launch?
          </h3>

          <p className="text-gray-300 mb-4">
            I build security into the stack (Laravel&rsquo;s encryption, Next.js
            SSR protection) and offer optional maintenance packages. You&#39;ll
            get docs/training to manage basics, plus priority support if you
            need me to step back in.
          </p>

          <div className="mt-6 ">
            <h4 className="text-white font-medium mb-2">Why it works:</h4>
            <ul className="text-gray-300">
              <li className="flex items-start mb-2">
                <span className="text-cyan-400 mr-2">→</span>
                Highlights your technical rigor.
              </li>
              <li className="flex items-start mb-2">
                <span className="text-cyan-400 mr-2">→</span>
                Upsells ongoing services gently.
              </li>
            </ul>
            <p className="text-gray-300 italic">
            He is easy to work with and responds quickly to any request we
            have ever had.
          </p>
          </div>
        </div>

        {/* Third Question Card */}
        <div className="border border-gray-600 p-6 rounded-lg">
          <h3 className="text-xl text-white font-medium mb-4">
            What if I need changes after development starts?
          </h3>

          <p className="text-gray-300">
            Flexibility is key! I document requirements upfront, but if changes
            arise, we&#39;ll assess impact on timeline/budget before coding. For
            small tweaks (e.g., UI colors), I often absorb them. For larger
            shifts, we revise the plan together.
          </p>
        </div>

       
      </div>

      {/* Stats Section */}
      <div className="bg-[#6C63FF] rounded-lg p-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center p-4 rounded-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">5+</h3>
            <p className="text-white/90 text-sm md:text-base">Years Of Experience</p>
          </div>
          
          <div className="flex flex-col items-center p-4  rounded-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">300+</h3>
            <p className="text-white/90 text-sm md:text-base">Completed Projects</p>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-white/90 text-sm md:text-base">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KindWords;
