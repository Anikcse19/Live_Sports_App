const Today = () => {
  return (
    <div className="flex flex-col gap-2">
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner1.webp')`,
        }}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5"
      >
        <p className="text-xl font-bold text-gray-800">All</p>
        <p className="text-5xl font-bold text-gray-800">40</p>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner2.webp')`,
        }}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5"
      >
        <p className="text-xl font-bold text-gray-800">Cricket</p>
        <p className="text-4xl font-bold text-gray-800">22</p>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner3.webp')`,
        }}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5"
      >
        <p className="text-xl font-bold text-gray-800">Soccer</p>
        <p className="text-4xl font-bold text-gray-800">10</p>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner4.webp')`,
        }}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5"
      >
        <p className="text-xl font-bold text-gray-800">Tennis</p>
        <p className="text-4xl font-bold text-gray-800">8</p>
      </div>
    </div>
  );
};

export default Today;
