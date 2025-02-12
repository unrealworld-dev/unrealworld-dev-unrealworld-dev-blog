import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
	return (
		<footer>
			<div className="mb-6 mt-15 flex flex-col items-center">
				<div className="mb-3 flex space-x-4" >
					<a target="_blank" rel="noreferrer" href="mailto:unraelworld.dev@gmail.com">
						<span className="sr-only">Mail</span>
						<Mail className="h-6 w-6" />
					</a>
					<a target="_blank" rel="noreferrer" href={siteConfig.link.youtube}>
						<span className="sr-only">youtube</span>
						<Icons.youtube className="h-6 w-6"/>
					</a>
					<a target="_blank" rel="noreferrer" href={siteConfig.link.github}>
						<span className="sr-only">Github</span>
						<Icons.github className="h-6 w-6"/>
					</a>
				</div>
				<div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
					<a href={siteConfig.link.personalSite} target="_blank">
						{siteConfig.author}
					</a>
				</div>
			</div>
		</footer>
	)
}