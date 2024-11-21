import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="bg-darkBlue text-white p-4">
			<div className="w-full flex justify-between items-center">
				{/* Logo or Brand Name */}
				<div className="text-lg font-bold">
					<Link href="/">Quantity Trade</Link>
				</div>

				{/* Navigation Links */}
				<div className="space-x-4">
					<Link href="https://photon-sol.tinyastro.io/" className="hover:text-gray-400" target='blank_'>
						Photon
					</Link>
					<Link href="https://dexscreener.com/" className="hover:text-gray-400" target='blank_'>
						DEX Screener
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
