"use client"
import { useEffect, useState } from 'react';

export default function TitleImage() {
	const [scrollY, setScrollY] = useState(0);

	// 스크롤 이벤트 핸들러
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY); // 스크롤 위치 저장
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="flex h-screen w-screen z-0">
			<img
				src="/images/example-move-image.gif"
				alt="Animation"
				style={{
					width: '100vw',
					height: '100vh',
					objectFit: 'cover',
					position: 'fixed', // 이미지가 화면에 고정되도록 설정
					top: `${scrollY * -0.3}px`, // 스크롤에 따라 조금씩 내려감 (0.3배 속도)
					left: '0',
					zIndex: -100, // z-index 추가 (고정된 이미지가 다른 콘텐츠 위에 오도록 설정)
				}}
			/>
		</div>
	);
}
