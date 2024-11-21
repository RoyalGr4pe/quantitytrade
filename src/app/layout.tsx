import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Quantity Trade",
	description: "Trading Fast and Smart - Tools designed to maximize profits and minimize loses.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div
					className="min-h-screen"
					style={{ backgroundImage: 'linear-gradient(90deg, #019267, #151D3B)', backgroundSize: 'cover', backgroundPosition: 'center' }}
				>
					<div className="flex items-center justify-center min-h-screen">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
