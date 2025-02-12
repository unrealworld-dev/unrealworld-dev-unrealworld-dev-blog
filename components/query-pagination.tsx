"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

interface QueryPaginationProps {
	currentPages: number;
	totalPages: number;
	className?: string;
}

export function QueryPagination({ totalPages, className }: QueryPaginationProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const prevPage = currentPage - 1;
	const nextPage = currentPage + 1;
	console.log(currentPage + 1);

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};
	return <Pagination className={className}>
		<PaginationContent className="w-full grid grid-cols-3">
			<div className="col-span-1">
				{prevPage > 0 ? (
					<PaginationItem className="float-right">
						<PaginationPrevious href={createPageURL(prevPage)} />
					</PaginationItem>
				) : null}
			</div>

			<div className="col-span-1 w-full grid grid-cols-5" >
				{
					totalPages > 1
						? Array(totalPages).fill("").map((_, index) => (
							(currentPage - 2 <= index + 1) && (index + 1 <= currentPage + 2 + (currentPage < 3 ? 3 - currentPage : 0)) ? (
								<PaginationItem className="hidden sm:inline-block col-span-1" key={`page-button-${index}`}>
									<PaginationLink isActive={currentPage === index + 1} href={createPageURL(index + 1)}>
										{index + 1}
									</PaginationLink>
								</PaginationItem>)
								: null
						))
						: null
				}
			</div>
			<div className="col-span-1" >
				{nextPage <= totalPages ? (
					<PaginationItem className="float-left">
						<PaginationNext href={createPageURL(nextPage)} />
					</PaginationItem>
				) : null}
			</div>
		</PaginationContent>
	</Pagination>
}
