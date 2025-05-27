import Image from "next/image";

export default function Home() {
  return (
  <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <header className="absolute top-4 left-4 flex items-center space-x-2">
        <div className="rounded-full bg-white p-1 text-black font-bold text-sm">☻</div>
        <span className="text-sm">Yash Bhagat</span>
      </header>

      <nav className="absolute top-4 right-4 space-x-6 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#linkedin" className="hover:underline">LinkedIn</a>
      </nav>

      <div className="flex flex-col items-center text-center space-y-4 mt-10">
        <div className="w-24 h-24 overflow-hidden rounded-2xl border border-white/20 shadow-lg">
          <Image
            src="/profile.jpg" // ← Add this image in `public/profile.jpg`
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-medium">
          Product Designer driven by curiosity, intuition,<br/>
          and just the right amount of overthinking.
        </h1>

        <p className="text-gray-400 max-w-md text-sm">
          Designed for lending and payments at <a href="#" className="underline">slice</a>. 
          Previously at <a href="#" className="underline">CRED</a> & <a href="#" className="underline">PepperContent</a>.<br/>
          Alumnus BITS Pilani '21. Based in Bangalore, India.
        </p>
      </div>
    </main>
  );
}
