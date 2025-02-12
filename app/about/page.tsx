import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export default async function AboutPage() {
	return (
		<div className="cantainer max-w-6xl py-6 lg:py-10 mx-auto">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-x-4">
					<h1 className="inline-block font-black text-4xl lg:text-5xl">
						About Me
					</h1>
				</div>
			</div>
			<hr className="my-8" />
			<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
				<div className="min-w-48 max-w-48 flex flex-col gap-2 mx-auto">
					<Avatar className="h-48 w-48">
						<AvatarImage src="/avatar150.png" alt={siteConfig.author} />
						<AvatarFallback>UW</AvatarFallback>
					</Avatar>
					<h2 className="text-2xl font-bold text-center break-words">
						{siteConfig.author}
					</h2>
					<p className="text-muted-foreground text-center break-words">
						Software Developer
					</p>
				</div>
				<p className="text-muted-foreground text-lg py-4 m-auto">
					Unreal Engine 과 VR을 통한 새로운 세상을 만들어 갑니다.
					<br/>
					<br/>
					관심있는 기술
					<br/>
					- Unreal
					<br/>
					- VR
					<br/>
					- AI
					<br/>
					<br/>
					도전을 좋아하며 원리를 알아가는 것에 흥미를 느낌니다.
				</p>
			</div>
		</div>
	)
}