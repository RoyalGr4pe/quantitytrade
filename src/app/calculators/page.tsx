import { Metadata } from 'next';

import MarketCapToBreak from './components/MarketCapToBreak';
import MarketCapProfits from './components/MarketCapProfits';
import PageLayout from '../components/PageLayout';

export const metadata: Metadata = {
	title: "Quantity Trade - Calculators",
	description: "Maximize your trading potential with Quantity Trade's powerful calculator tools. Our calculators are designed to help you make smarter, more informed decisions by quickly calculating key metrics such as market cap break-even points and potential profits. Whether you're an experienced trader or just starting out, these tools are perfect for anyone looking to optimize their strategies and minimize risk. Start calculating today and trade with confidence!",
	openGraph: {
		title: "Quantity Trade - Calculators",
		description: "Trading Fast and Smart - Tools designed to maximize profits and minimize losses.",
		url: "https://quantitytrade.vercel.app/calculators",
		siteName: "Quantity Trade",
		images: [
			{
				url: "https://i.imgur.com/4l3DPKe.png",
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const page = () => {
	return (
		<PageLayout>
			<div className="min-h-screen flex justify-center items-center px-4 py-16 overflow-y-auto">
				{/* The calculators */}
				<div className='flex lg:flex-row flex-col gap-4'>
					<MarketCapToBreak />
					<MarketCapProfits />
				</div>
			</div>
		</PageLayout>
	);
};

export default page;
