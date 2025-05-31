"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react";
import LoadingView from "../loading/loading-view";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return (
		<div className="w-full h-full">
			<LoadingView isLoading/>
			<div className="invisible h-0 overflow-hidden">{children}</div>
		</div>
	);

	return <NextThemesProvider {...props}>
		<LoadingView />
		{children}
		</NextThemesProvider>
}