import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parallel Processing",
  description: "A Next.js app demonstrating parallel processing with server components.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}