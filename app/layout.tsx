import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

// TODO: pull data from the eventbrite api

export const metadata: Metadata = {
	title: "EventFinder",
	description: "EventFinder finds all the best events in your area.",
	icons: {
		icon: "/assets/images/logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={poppins.variable}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
