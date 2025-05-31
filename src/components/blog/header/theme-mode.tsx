import { IconHoverShake } from "@/components/utils/icon-button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeModeToggle() {
	const { theme, setTheme } = useTheme();

	const themeModeHandle = () => {
    const body = document.documentElement;
    body.classList.add("theme-transition");

		setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => {
      body.classList.remove("theme-transition");
    }, 1000);
	};

	return (
		<IconHoverShake onClick={themeModeHandle}>
			{theme === "light" ?
				<Moon className="color-default color-hover-moon " /> :
				<Sun className="color-default color-hover-sun " />}
		</IconHoverShake>
	)
}