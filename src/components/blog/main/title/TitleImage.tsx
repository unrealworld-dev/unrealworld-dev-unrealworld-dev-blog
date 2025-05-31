"use client"

import Image from 'next/image';
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
			<Image
				src="/images/example-move-image.gif"
				alt="Animation"
				style={{
					width: '100vw',
					height: '100vh',
					objectFit: 'cover',
					position: 'fixed',
					top: `${scrollY * -0.3}px`,
					left: '0',
					zIndex: -100,
				}}
				width={1024}
				height={1024}
				unoptimized 
			/>
		</div>
	);
}
