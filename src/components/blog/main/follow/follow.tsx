import GithubFollowers from "./github-followers";
import GithubFollowing from "./github-following";



export default function FollowView(){


	return (
    <main>
      <h1>My GitHub Following</h1>
      <GithubFollowing />
			<GithubFollowers />
    </main>
	);
}