import { Image_ } from "src/frontend/entities/image";
import { data } from "src/frontend/api";
import { useEffect, useRef, useState } from "react";
import { styled, keyframes } from "styled-components";

export const SplashScreen = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const spans = ref.current.querySelectorAll("span");
      const lastSpan = spans[spans.length - 1];

      const restartAnimation = () => {
        spans.forEach((span) => {
          span.classList.remove("animate");
        });

        setTimeout(() => {
          spans.forEach((span) => {
            span.classList.add("animate");
          });
        }, 50);
      };

      lastSpan?.addEventListener("animationend", () => {
        setHide(true);
        setTimeout(() => {
          setHide(false);
          restartAnimation();
        }, 1000);
      });
    }
  }, []);

  return (
    <SplashScreenContainer $hide={hide}>
      <SplashImage>
        <Image_ src={data.links.splash} width={150} height={150} />
      </SplashImage>

      <SplashText ref={ref}>
        <SplashTextSpan className="animate">b</SplashTextSpan>
        <SplashTextSpan className="animate">r</SplashTextSpan>
        <SplashTextSpan className="animate">o</SplashTextSpan>
        <SplashTextSpan className="animate">n</SplashTextSpan>
        <SplashTextSpan className="animate">t</SplashTextSpan>
        <SplashTextSpan className="animate">o</SplashTextSpan>
        <SplashTextSpan className="animate">s</SplashTextSpan>
        <SplashTextSpan className="animate">a</SplashTextSpan>
        <SplashTextSpan className="animate">u</SplashTextSpan>
        <SplashTextSpan className="animate">r</SplashTextSpan>
      </SplashText>
    </SplashScreenContainer>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const bounceIn = keyframes`
  0% { transform: translateX(calc(-25 * var(--dv))); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const SplashScreenContainer = styled.div<{ $hide: boolean }>`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(12 * var(--dv));
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.$hide ? 0 : 1)};
`;

const SplashImage = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
`;

const SplashText = styled.div`
  display: flex;
  gap: calc(5 * var(--dv));
`;

const SplashTextSpan = styled.span`
  font-family: Raleway;
  font-size: calc(76.93 * var(--dv));
  font-weight: 500;
  line-height: calc(90.32 * var(--dv));
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  opacity: 0;

  &.animate {
    animation: ${bounceIn} 1s forwards;
  }

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:nth-child(8) {
    animation-delay: 0.7s;
  }
  &:nth-child(9) {
    animation-delay: 0.8s;
  }
  &:nth-child(10) {
    animation-delay: 0.9s;
  }
`;
