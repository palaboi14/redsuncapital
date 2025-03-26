
const OurStoryContent = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              It's a hard market for innovative capital partners. It's a good market for us.
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                At <span className="font-semibold">Red Sun Capital</span>, we're not just another lender in the crowded real estate financing landscape. 
                We're a team of dedicated professionals with decades of combined experience who understand what investors really need.
              </p>
              <p>
                We founded Red Sun Capital because we saw the gap in the market. Traditional lenders are too slow, too rigid, and too 
                disconnected from the realities of real estate investing. Hard money lenders often charge exorbitant rates and fees 
                that eat into your profits.
              </p>
              <p>
                Our approach is different. We combine the reliability and strength of institutional capital with the speed, flexibility, 
                and personal touch of a boutique lender. We're relationship-driven, not transaction-obsessed, and we're committed to 
                helping our clients build wealth through real estate.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/846241cd-64dd-42cb-87d6-477db0e379c3.png" 
                alt="Red Sun Capital Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-heritage-500 rounded-lg z-0 hidden md:block"></div>
          </div>
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/846241cd-64dd-42cb-87d6-477db0e379c3.png" 
                alt="Red Sun Capital Office" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-heritage-500 rounded-lg z-0 hidden md:block"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6 text-gray-600">
              <p>
                What sets us apart is our commitment to innovation and service. We're constantly developing new loan products that address 
                the evolving needs of real estate investors. Our deep understanding of local markets across the country allows us to 
                make informed lending decisions quickly.
              </p>
              <p>
                We believe that success in real estate financing comes from building lasting relationships. That's why we take the time 
                to understand your investment strategy and goals. We're advisors as much as we are lenders, providing insights and guidance 
                that help you make better investment decisions.
              </p>
              <p>
                At Red Sun Capital, we're proud of our track record of helping investors achieve their goals. Whether you're an experienced 
                investor with a large portfolio or just getting started, we have loan solutions designed to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStoryContent;
