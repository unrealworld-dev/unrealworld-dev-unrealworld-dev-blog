import styles from "./loading-view.module.css"; // CSS 모듈 사용

interface LoadingViewProp {
  isLoading?: boolean
}

export default function LoadingView({ isLoading=false } : LoadingViewProp) {
  const loadingText = "Loading";

  return (
    <div className={`${styles.loadingContainer} ${!isLoading ? styles.fadeOutUp : ""}`}>
      <div className={styles.jumpingText}>
        {loadingText.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}