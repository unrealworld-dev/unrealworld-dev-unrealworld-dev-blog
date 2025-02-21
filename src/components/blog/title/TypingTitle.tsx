"use client"

import { useState, useEffect } from 'react';
import styles from './Typing.module.css'

interface TypewriterProps {
	texts?: string[];
	typingSpeed?: number;
	delayBetweenTexts?: number;
	className?: string;
}

export default function Typewriter({
	texts = ["**Typewriting effect**"],
	typingSpeed = 100,
	delayBetweenTexts = 2000,
	className = ""
}: TypewriterProps) {
	const [displayText, setDisplayText] = useState('');
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [isTypingComplete, setIsTypingComplete] = useState(false);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		let isMounted = true;
		let currentIndex = 0;

		const typeNextCharacter = () => {
			const currentText = texts[currentTextIndex];

			if (currentIndex <= currentText.length && isMounted) {
				setDisplayText(currentText.slice(0, currentIndex));
				setIsTypingComplete(false);
				currentIndex++;

				// Add random variation to typing speed for more realistic effect
				const randomDelay = typingSpeed * (0.8 + Math.random() * 0.4);
				timeoutId = setTimeout(typeNextCharacter, randomDelay);
			} else if (isMounted) {
				setIsTypingComplete(true);
				timeoutId = setTimeout(() => {
					if (isMounted) {
						currentIndex = 0;
						setCurrentTextIndex((prev) => (prev + 1) % texts.length);
						setIsTypingComplete(false);
					}
				}, delayBetweenTexts);
			}
		};

		typeNextCharacter();

		return () => {
			isMounted = false;
			clearTimeout(timeoutId);
		};
	}, [currentTextIndex, texts, typingSpeed, delayBetweenTexts]);

	return (
		<div className={`font-mono ${className}`}>
			<span>{displayText}</span>
			<span
				className={`inline-block w-[2px] h-[1em] ml-[2px] align-middle bg-[--foreground] ${isTypingComplete ? styles['animate-cursor-blink'] : 'opacity-100'}`}
				style={{
					animationDuration: '1s',
					animationIterationCount: 'infinite',
				}}
			/>
		</div>
	);
}