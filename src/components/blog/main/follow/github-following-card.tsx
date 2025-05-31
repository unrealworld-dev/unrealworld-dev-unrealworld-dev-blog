"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface GithubUser {
	login: string;
	avatar_url: string;
	html_url: string;
	name: string;
	bio: string;
	followers: number;
	following: number;
}

export default function GithubFollowingCard({ user }: { user: GithubUser }) {
	const [userDetails, setUserDetails] = useState<GithubUser | null>(null);

	const fetchUserDetails = async () => {
		const res = await fetch(`/api/github-user-details?username=${user.login}`);
		if (res.ok) {
			const data = await res.json();
			setUserDetails(data);
		}
	};
	useEffect(() => {
		fetchUserDetails();
	}, [user]);

	if (!userDetails) return <div className="w-48 h-64 bg-gray-100 rounded-lg animate-pulse">Loading...</div>;

	return (
		<div className="bg-[--background] rounded-lg overflow-hidden w-48 border-4 border-[--foreground] flex-shrink-0">
			<Link href={user.html_url} target="_blank" >
				<div className="h-32 relative">
					<Image
						className="object-cover"
						src={userDetails.avatar_url}
						alt={userDetails.login}
						fill
						sizes="100%"
					/>
				</div>
			</Link>
			<div className="relative w-20 h-20 -mt-10 mx-auto">
					<Link href={userDetails.html_url} target="_blank" rel="noopener noreferrer">
					<Image
						className="rounded-full border-4 border-[--foreground]"
						src={userDetails.avatar_url}
						alt={userDetails.login}
						width={128}
						height={128}
					/>
					</Link>
			</div>
			<div className="bg-[--background] text-center p-4">
				<h3 className="text-xl font-semibold h-16 overflow-hidden text-ellipsis">{userDetails.name || userDetails.login}</h3>
				<p className="text-gray-600 text-sm mt-2 mb-2 h-16 overflow-hidden text-ellipsis">{userDetails.bio || "No bio available"}</p>
			</div>
		</div>
	);
}