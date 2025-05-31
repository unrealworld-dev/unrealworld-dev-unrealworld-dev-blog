import { BellIcon, CalendarIcon, HubotIcon, RepoIcon } from "@primer/octicons-react";
import InfoCard from "./info-card";
import styleIcon from "@/components/utils/icon-move.module.css"
import { gamja } from "@/utils/fonts"
import style from "./info-blog.module.css"

export default function InfoBlog() {
	return (
		<div className="">
			<div className="hidden md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
				<div className="grid-cols-2 md:grid w-full h-auto m-auto">
					<InfoCard
						icon={<HubotIcon size={30} className={`text-primary ${styleIcon['icon-jump']}`} />}
						count={100000}
						label="총 방문자"
					/>
					<InfoCard
						icon={<RepoIcon size={30} className={`text-primary ${styleIcon['icon-shake']}`} />}
						count={100000}
						label="포스트"
					/>
					<InfoCard
						icon={<BellIcon size={30} className={`text-primary ${styleIcon['icon-shake']}`} />}
						count={100000}
						label="구독자"
					/>
					<InfoCard
						icon={<CalendarIcon size={30} className={`text-primary ${styleIcon['icon-pulse']}`} />}
						count={100000}
						label="운영일"
					/>
				</div>
				<div style={{ fontFamily: 'Dunggeunmo' }} className={`text-center align-middle h-auto w-auto m-auto items-center md:m-16 lg:m-auto`}>
					<p className={`text-4xl m-2 ${gamja.style}`}>
					🌍 또 하나의 <span style={{ fontFamily: 'Dunggeunmo' }} className={`inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ${style["animate-gradient-text"]}`}>세계</span>에 오신것을 환영합니다.
						🚀
					</p>
					<p className="text-2xl">
						Unreal engine 새로운 새상을 만들기 위해 작업합니다.
					</p>
				</div>
			</div>
		</div>
	)

}