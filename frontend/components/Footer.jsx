import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-[#F3F2ED]">
      <p className="mb-2">Tobias Scharl &copy; {new Date().getFullYear()}</p>
      <div className="flex text-sm text-gray-400">
        <Link className="hover:underline" href="/imprint">
          Imprint
        </Link>
        <span className="mx-2">&bull;</span>
        <Link className="hover:underline" href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default Footer;
