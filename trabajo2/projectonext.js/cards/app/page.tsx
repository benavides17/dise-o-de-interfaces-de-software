export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#eaeaea] p-6">
      
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">

        {/* CARD 1 */}
        <div className="flex flex-col justify-between bg-zinc-900 rounded-3xl p-8 shadow-2xl flex-1">

          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl">
                LO
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-white font-semibold">
                  Liam O'Connor
                </h2>
                <span className="text-sm text-zinc-400">
                  Digital Illustrator
                </span>
              </div>
            </div>
            <button className="text-pink-400 text-xl">📌</button>
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-10">
            <div className="flex flex-col items-center">
              <span className="text-yellow-400 text-lg">★ 5.0</span>
              <span className="text-xs text-zinc-400">Rating</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-pink-400 text-lg">$120</span>
              <span className="text-xs text-zinc-400">Per Hour</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-purple-400 text-lg">8 yrs</span>
              <span className="text-xs text-zinc-400">Experience</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full hover:scale-105 transition">
            Hire Now
          </button>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col justify-between bg-white rounded-3xl p-8 shadow-xl flex-1">

          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-xl">
                AT
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-gray-900 font-semibold">
                  Alex Turner
                </h2>
                <span className="text-sm text-gray-500">
                  Art Director
                </span>
              </div>
            </div>
            <button className="text-pink-500 text-xl">📌</button>
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-10">
            <div className="flex flex-col items-center">
              <span className="text-yellow-500 text-lg">★ 4.9</span>
              <span className="text-xs text-gray-400">Rating</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-pink-500 text-lg">$180</span>
              <span className="text-xs text-gray-400">Per Hour</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-purple-500 text-lg">12 yrs</span>
              <span className="text-xs text-gray-400">Experience</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 border border-gray-300 text-gray-800 py-3 rounded-full hover:bg-gray-900 hover:text-white transition">
            Contact
          </button>
        </div>

      </div>
    </div>
  );
}