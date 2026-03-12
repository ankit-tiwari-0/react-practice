import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black  px-8 py-3 mb-2">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
  <img
    src="https://4.bp.blogspot.com/-xoHUpPNF-SI/WqJX5lTqXDI/AAAAAAAACnU/Xf8OouKS4zsc1WPdXfWI9Hle7BNw5IYrQCLcBGAs/s1600/mia-khalifa-age-wiki-latest-news-personal-life-biography-full-profile.jpg"
    alt="GalleryHub Logo"
    className="h-15 w-15 rounded-full object-cover border-2 border-yellow-400 shadow-md"
  />

  <h1 className="text-4xl font-bold">
    Gallery<span className="text-yellow-400">-Hub</span>
  </h1>
</div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-300 text-2xl font-medium">
          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="/" className="hover:text-yellow-400 transition">
            Explore
          </a>
          <a href="/" className="hover:text-yellow-400 transition">
            About
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;