import CategoryCard from "./category-card";
import { gamja } from "@/utils/fonts"
import style from "./category.module.css"


export default function Category() {

	return (
		<div className="mt-12 w-full px-4 sm:px-6 lg:px-8">
			<div className="mb-8 text-center" style={{ fontFamily: 'Dunggeunmo' }}>
				<p className={`text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent ${style["animate-gradient-text"]}`}>
					Category List
				</p>
				<p className="mt-2 text-2xl text-gray-600 dark:text-gray-300">다양한 카테고리를 확인해 보세요</p>
			</div>
			<div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ${gamja.className} `} >
				<CategoryCard />
			</div>
		</div>
	);
}