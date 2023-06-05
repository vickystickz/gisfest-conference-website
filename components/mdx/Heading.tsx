export default function Heading({ content }: { content: string }) {
	return (
		<h1 className="text-tc-0 text-h5 font-p-medium laptop:text-h3 font-clashDisplay">
			{content}
		</h1>
	);
}
