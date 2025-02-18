import Link from "next/link";



export default function NavBar() {

	return (
		<nav className="hidden sm:flex">
			<ul className="flex space-x-6 text-xs font-medium">
				<li>
					<Link
						href="/about"
						className="color-hover transition-colors duration-200"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href="/posts"
						className="color-hover transition-colors duration-200"
					>
						Posts
					</Link>
				</li>
			</ul>
		</nav>
	)
}