import { Metadata } from 'next';
import Link from 'next/link';

import MarketCapToBreak from './components/MarketCapToBreak';
import MarketCapProfits from './components/MarketCapProfits';


export const metadata: Metadata = {
	title: "Quantity Trade - Calculators",
	description: "Trading Fast and Smart - Tools designed to maximize profits and minimize loses.",
	openGraph: {
		title: "Quantity Trade - Calculators",
		description: "Trading Fast and Smart - Tools designed to maximize profits and minimize losses.",
		url: "https://quantitytrade.vercel.app",
		siteName: "Quantity Trade",
		images: [
			{
				url: "https://i.imgur.com/7wb9vjk.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

const page = () => {
  return (
    <div className="h-full flex justify-center items-center px-4 py-16 overflow-y-auto">
      {/* The calculators */}
	  <div className='flex lg:flex-row flex-col gap-4'>
		<MarketCapToBreak />
		<MarketCapProfits />
	  </div>

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
