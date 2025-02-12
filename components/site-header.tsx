import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";

export function SiteHeader() {
	return <header className="
    sticky top-0 w-full border-b border-border
    bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div className="flex h-14 max-w-screen-2xl items-center p-4">
			<MainNav />
			<div className="flex flex-1 items-center justify-end space-x-2">
				<nav className="flex items-center">
					<Link href={siteConfig.link.github} target="_blank" rel="noreferrer">
						<div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}>
							<Icons.github className="h-8 w-8" />
						</div>
					</Link>
					<Link href={siteConfig.link.youtube} target="_blank" rel="noreferrer">
						<div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}>
							<Icons.youtube className="h-4 w-4" />
						</div>
					</Link>
				</nav>
			</div>
		</div>
	</header>
}