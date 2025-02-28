import { HubotIcon } from "@primer/octicons-react";
import style from "./info-card.module.css";
import styleIcon from "@/components/utils/icon-move.module.css"
import LineBar from "@/components/br/line-br";
import { vt323 } from "@/utils/fonts"

export default function InfoCard({ classname, label = "label", count, icon }: { classname?: string, label?: string, count: number, icon?: React.ReactNode }) {

  return (
    <div className={`m-auto ${style.card} m-12 rounded-xl relative p-6 hover:scale-105 transition-transform duration-300 ${classname} `}>
      <div className={`${style.guard}`}>
        {/* 아이콘 */}
        <div className="flex justify-center items-center mb-4">
          {icon ? icon : <HubotIcon size={30} className={`text-primary ${styleIcon['icon-jump']}`} />}
        </div>
        <LineBar />
        <br className={style.line} />
        {/* 내부 정의 */}
        <p className={`${vt323.className} text-6xl font-extrabold text-primary-foreground  text-center`}>
          {count.toLocaleString()}
        </p>
        <p className="text-sm mt-2 opacity-75 text-center">{label}</p>
      </div>
    </div>
  );
}
