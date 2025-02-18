
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

// 타입 선언
type IconHoverShakeProps = Readonly<{
	children: React.ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>
}>;

export function IconHoverShake({ children, className = "", onClick = () => { } }: IconHoverShakeProps) {

	return (
		<motion.button onClick={onClick} whileHover={{
			rotate: [-5, 5, -5, 0],
			transition: { duration: 0.5, repeat: 0.5 },
			className: className
		}}>
			{children}
		</motion.button>
	)
}