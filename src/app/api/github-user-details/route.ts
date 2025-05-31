import { GithubError } from "@/types/error";
import { Octokit } from "@octokit/core";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

  if (!GITHUB_ACCESS_TOKEN) {
    return NextResponse.json({ error: "GitHub Access Token is missing" }, { status: 500 });
  }

  const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

  try {
    const response = await octokit.request("GET /users/{username}", {
      username,
    });

    const userData = response.data;

    // 필요한 데이터만 추출
    const filteredData = {
      login: userData.login,
      avatar_url: userData.avatar_url,
      html_url: userData.html_url,
      name: userData.name || null,
      bio: userData.bio || null,
      followers: userData.followers,
      following: userData.following,
    };

    return NextResponse.json(filteredData);
  }  catch (error: unknown) {
      const err = error as GithubError;
      return NextResponse.json({ error: err.message }, { status: err.status || 500 });
    }
}
