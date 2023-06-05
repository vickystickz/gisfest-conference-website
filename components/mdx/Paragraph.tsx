export default function ParaGraph({ content }: { content: string }) {
	return (
		<p className="text-tc-0 font-p-regular text-body laptop:text-h5 markdown-bg ">
			{content}
		</p>
	);
}
