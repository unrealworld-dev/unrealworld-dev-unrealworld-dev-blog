import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
	children?: ReactNode;
	type?: "default" | "warning" | "danger";
}

export function Callout({
	children,
	type = "default",
	...props
}: CalloutProps) {
	return <div className={cn("my-4 items-start rounded-md border boder-l-4 p-4 w-full dark:max-w-none",
		{
			"border-red-900 bg-red-500 h-auto dark:prose": type === "danger",
			"border-t-yellow-900 bg-yellow-400 dark:prose": type === "warning",
		}
	)}
		{...props}
	>
		{children}
	</div>
}