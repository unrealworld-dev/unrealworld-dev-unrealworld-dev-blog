import { GithubError } from "@/types/error";
import { Octokit } from "@octokit/core";
import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

  if (!GITHUB_ACCESS_TOKEN) {
    return NextResponse.json({ error: "GitHub Access Token is missing" }, { status: 500 });
  }

  const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

  try {
    const response = await octokit.request("GET /user/following", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
      const err = error as GithubError;
      return NextResponse.json({ error: err.message }, { status: err.status || 500 });
    }
}
