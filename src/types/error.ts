import Error from "next/error";

export interface GithubError extends Error {
  status?: number;
  message?: string;
}