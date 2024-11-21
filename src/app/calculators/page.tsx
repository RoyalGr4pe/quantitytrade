import { Metadata } from 'next';
import Link from 'next/link';

import MarketCapToBreak from './components/MarketCapToBreak';
import MarketCapProfits from './components/MarketCapProfits';


export const metadata: Metadata = {
	title: "Quantity Trade - Calculators",
	description: "Trading Fast and Smart - Tools designed to maximize profits and minimize loses.",
};

const page = () => {
  return (
    <div className="h-screen flex lg:flex-row flex-col justify-center items-center p-4 gap-4">
      {/* The calculators */}
      <MarketCapToBreak />
      <MarketCapProfits />

      {/* Link back to the root */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="text-black bg-neonGreen px-4 py-2 rounded-md hover:bg-green-400 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default page;
