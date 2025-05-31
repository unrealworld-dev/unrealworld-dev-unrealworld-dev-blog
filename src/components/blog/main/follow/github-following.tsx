"use client";

import { useEffect, useState } from "react";
import GithubFollowingCard, { GithubUser } from "./github-following-card";
import { ScrollMove } from "@/components/utils/scroll-move";

export default function GithubFollowing() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchFollowing = async () => {
		try {
			const res = await fetch("/api/github-following");
			if (!res.ok) throw new Error("Failed to fetch");
			const data = await res.json();
			setUsers(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchFollowing();
	}, []);

	return (
		<div className="w-full h-full relative">
			<div
				className="flex flex-nowrap space-x-4 pb-2 overflow overflow-x-scroll"
			>
				{
					loading ? (
						<div className="flex-shrink-0 w-48 h-full bg-gray-200 animate-pulse rounded-lg">Loading...</div>
					) : (
						<ScrollMove className="w-full" dataSpeed="slow">
							{
								users.map((user: GithubUser) => (
									<div key={user.login} className="flex-shrink-0">
										<GithubFollowingCard user={user} />
									</div>
								))
							}
						</ScrollMove>
					)
				}
			</div>
		</div>
	);
}