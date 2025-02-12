"use client";

import { useState } from "react";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link, { LinkProps } from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";

export function MobileNav() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="w-10 px-0 sm:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle Theme</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<MobileLink href="/" className="flex items-center">
					<Icons.logo className="mr-2 h-4 w-4" />
					<SheetTitle>
						<span className="font-bold">{siteConfig.name}</span>
					</SheetTitle>
				</MobileLink>
				<div className="flex flex-col gap-3 mt-3">
				<MobileLink onOpenChange={setOpen} href="/blog">
						Blog
					</MobileLink>
					<MobileLink onOpenChange={setOpen} href="/about">
						About
					</MobileLink>
					
				</div>
			</SheetContent>
		</Sheet>
	)
}

interface MobileLinkprops extends LinkProps {
	children: React.ReactNode;
	onOpenChange?: (open: boolean) => void;
	className?: string;
}

function MobileLink({
	href,
	onOpenChange,
	children,
	className,
	...props
}: MobileLinkprops) {
	const router = useRouter();
	return <Link
		href={href}
		onClick={() => {
			router.push(href.toString());
			onOpenChange?.(false);
		}}
		className={className}
		{...props}>
		{children}
	</Link>
}