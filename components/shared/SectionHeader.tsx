type TSectionHeader = {
	title: string;
	paragraph: string;
};

export default function SectionHeader({ title, paragraph }: TSectionHeader) {
	return (
		<div className="text-center text-tc-0 space-y-4 ">
			<h3 className=" text-h3 font-p-semibold">{title}</h3>
			<p className="body font-p-regular">{paragraph}</p>
		</div>
	);
}
