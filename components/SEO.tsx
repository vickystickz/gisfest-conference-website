import Head from 'next/head';
import { useRouter } from 'next/router';

//@todo - replace hard coded texts with site config

type TSEO = {
	title: string;
	description: string;
	author: string;
	ogimage: string;
};

const SEO = ({ title, description, author, ogimage }: TSEO) => {
	const router = useRouter();

	return (
		<Head>
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width viewport-fit=cover"
			/>
			<meta name="author" content={author} />
			<meta name="og:type" content={'website'} />
			<meta name="og:locale" content="en_US" />
			<meta name="description" content={description} />
			<meta property="og:site_name" content="GISfest" />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={ogimage} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@gis_fest" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogimage} />
			<meta
				property="og:url"
				content={`https://www.gisfest.org${router.asPath}`}
			/>
			<link rel="canonical" href={`https://www.gisfest.org${router.asPath}`} />
			<title>{title}</title>
		</Head>
	);
};

export default SEO;
