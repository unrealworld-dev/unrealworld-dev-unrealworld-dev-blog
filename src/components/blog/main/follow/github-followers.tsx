"use client";

import { ScrollMove } from "@/components/utils/scroll-move";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}



function GithubFollowersList() {
  const [users, setUsers] = useState<GithubUser[]>([]);

  const fetchFollowers = async () => {
    const res = await fetch("/api/github-followers");
    if (!res.ok) throw new Error("Failed to fetch");
    const data: GithubUser[] = await res.json();
    setUsers(data);
    console.log(data)
  };

  useEffect(() => {
    fetchFollowers();
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="flex flex-nowrap -space-x-2 pb-2 overflow overflow-x-scroll">
        {
          users.map((user, index) => (
            <div key={index} className="">
              <Image
                src={user.avatar_url}
                alt={user.login}
                width={40}
                height={40}
                className="rounded-full" />
            </div>
          ))
        }
      </div>
    </div>
  );
}


export default function GithubFollowers() {
  return (
    <div>
      <h2>Followers List</h2>
      <GithubFollowersList />
    </div>
  );
}