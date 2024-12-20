import { Image_ } from "src/frontend/entities/image";
import { data } from "src/frontend/api";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { linksSlice } from "src/frontend/shared/global-state/slices/links";

import { styled } from "styled-components";

export const Header = () => {
  const dispatch = useDispatch_();

  const { header } = useSelector_((s) => s.linksSlice);

  const handleServiceHeader = () => {
    dispatch(
      linksSlice.actions.headerServiceRM({
        header: { ...header!, service: !header?.service },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.headerServiceRM({
        header: { ...header!, service: false },
      })
    );
  };

  return (
    <Header_>
      <a href="/">
        <LogoBox>
          <Image_ src={data.links.header} width={148} height={29.77}></Image_>
        </LogoBox>
      </a>
      <Link
        $hovered={header?.service!}
        href="https://brontosaur.ru"
        target="_blank"
        rel="noopener noreferrer"
        onTouchStart={handleServiceHeader}
        onTouchEnd={handleLeave}
        onMouseEnter={handleServiceHeader}
        onMouseLeave={handleLeave}
      >
        На страницу сервиса
      </Link>
    </Header_>
  );
};

const LogoBox = styled.div`
  ${(p) => (p.className = "LogoBox")};
  display: flex;
  transform: translate(calc(19.5 * var(--dv)), calc(-3 * var(--dv)));
  @media (max-width: 48rem) {
    transform: translate(calc(-2 * var(--mv)), calc(-5 * var(--mv)));
  }
`;

const Header_ = styled.header`
  ${(p) => (p.className = "Header")};
  width: calc(1368 * var(--dv));
  height: calc(50 * var(--dv));
  border-radius: calc(14 * var(--dv));

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: calc(36 * var(--dv)) calc(36 * var(--dv)) 0;

  @media (max-width: 48rem) {
    border-radius: calc(14 * var(--mv));
    width: calc(728 * var(--mv));
    height: calc(60 * var(--mv));
    margin: calc(20 * var(--mv)) auto 0;
  }
`;

const Link = styled.a<{ $hovered: boolean }>`
  width: calc(208 * var(--dv));
  height: calc(50 * var(--dv));

  padding: calc(10 * var(--dv)) calc(20 * var(--dv));
  gap: calc(80 * var(--dv));
  border-radius: calc(10 * var(--dv));

  color: white;
  background: ${(p) => (p.$hovered ? "var(--primary)" : "var(--main)")};

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: fit-content;
    height: fit-content;
    padding: calc(18 * var(--mv)) calc(24 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(22 * var(--mv));
    border-radius: calc(10 * var(--mv));
  }
`;
