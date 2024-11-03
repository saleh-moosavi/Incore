export default function Footer() {
  return (
    <div className="bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-10 justify-between justify-items-center">
        <article className="grid grid-cols-3 order-2 md:order-1 gap-x-5 justify-items-center">
          <div>
            <h2 className="text-white font-bold text-lg text-left mb-5">
              About
            </h2>
            <ul className="text-gray-400 text-left">
              <li className="my-2">About Us</li>
              <li className="my-2">Careers</li>
              <li className="my-2">Jobs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg text-left mb-5">
              Support
            </h2>
            <ul className="text-gray-400 text-left">
              <li className="my-2">Call Center</li>
              <li className="my-2">Telegram</li>
              <li className="my-2">Whatsapp</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg text-left mb-5">FAQ</h2>
            <ul className="text-gray-400 text-left">
              <li className="my-2">Payments</li>
              <li className="my-2">Privacy</li>
              <li className="my-2">Terms</li>
            </ul>
          </div>
        </article>
        {/* Footer Form */}
        <article className="flex flex-col order-1 md:order-2 mb-10 md:mb-0 gap-y-5">
          <h2 className="text-white font-bold text-lg">Contact Us</h2>
          <p className="text-gray-400 text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <div className="relative">
            <input
              className="py-2 px-3 w-full rounded-full placeholder:text-sm bg-transparent border-transparent outline outline-stone-600 outline-1 transition-all duration-300 hover:shadow-[0_0_20px_#fff] focus:shadow-[0_0_10px_#48CFCB] text-white"
              type="text"
              placeholder="Enter Your Message ..."
            />
            <a
              className="absolute top-0 right-0 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-zinc-400 transition-all duration-300"
              href=""
            >
              Send
            </a>
          </div>
        </article>
      </div>
      <h2 className="pb-5 text-sm text-white font-bold text-center">
        2024 All Rights Reserved
      </h2>
    </div>
  );
}
