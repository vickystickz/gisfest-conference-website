import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="follow, index" />
				<meta name="Googlebot" content="follow, index" />
				<meta name="application-name" content="GISfest" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
