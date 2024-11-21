import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen p-4">
			<div className="text-center text-white p-8 rounded-lg shadow-lg bg-opacity-75 bg-darkBlue">
				<h1 className="text-4xl font-bold mb-4">Welcome to Our Tools</h1>
				<p className="text-xl mb-6">Access a variety of calculators to help you with your trading and investments.</p>
				<Link
					href="/calculators"
					className="inline-block py-3 px-6 bg-neonGreen text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition duration-300"
				>
					Go to Calculators
				</Link>
			</div>
		</div>
	);
}
