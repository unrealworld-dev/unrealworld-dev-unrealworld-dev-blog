import GithubFollowing from "@/components/blog/main/follow/github-following";
import { ScrollMove } from "@/components/utils/scroll-move";

export default function Home() {
	return (
		<div className="h-full m-auto">
			<div className="h-64 w-full m-auto">space</div>
				<GithubFollowing />
		</div>
	);
}
