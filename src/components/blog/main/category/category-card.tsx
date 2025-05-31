import Image from "next/image";

export default function CategoryCard({ title = "title", description = "description", imageSrc = "/images/ghost.png" }: { title?: string, description?: string, imageSrc?: string }) {

	return (
		<div className="w-full m-auto p-6 max-w-sm overflow-hidden bg-[--background]
		border border-[--foreground] rounded-3xl 
		shadow-lg hover:shadow-2xl hover:shadow-[--foreground] 
		transform hover:scale-105 transition-transform duration-300 ease-in-out">
			<div className="h-32 relative rounded-lg overflow-hidden">
				<Image
					src={imageSrc}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
					className="object-cover"
				/>
			</div>
			<div className="p-4 text-center" style={{ fontFamily: 'Dunggeunmo' }}>
				<h2 className="text-2xl font-semibold text-[--foreground]">{title}</h2>
				<p className="text-[--foreground] mt-2" >{description}</p>
			</div>
		</div>
	);
}