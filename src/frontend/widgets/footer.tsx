import { Image_ } from "src/frontend/entities/image";
import { Webonizer } from "src/frontend/entities/webonizer";
import { data } from "src/frontend/api";
import { useExpectedWidth } from "src/frontend/shared/expected-width";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { linksSlice } from "src/frontend/shared/global-state/slices/links";
import { styled } from "styled-components";

export const Footer = () => {
  const dispatch = useDispatch_();

  const { footer } = useSelector_((s) => s.linksSlice);

  const handleVkFooter = () => {
    dispatch(
      linksSlice.actions.footerVkRM({
        footer: { ...footer!, vk: !footer?.vk },
      })
    );
  };

  const handleTgFooter = () => {
    dispatch(
      linksSlice.actions.footerTgRM({
        footer: { ...footer!, tg: !footer?.tg },
      })
    );
  };

  const handleServiceFooter = () => {
    dispatch(
      linksSlice.actions.footerServiceRM({
        footer: { ...footer!, service: !footer?.service },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.footerVkRM({ footer: { ...footer!, vk: false } })
    );
    dispatch(
      linksSlice.actions.footerTgRM({ footer: { ...footer!, tg: false } })
    );
    dispatch(
      linksSlice.actions.footerServiceRM({
        footer: { ...footer!, service: false },
      })
    );
  };

  const client = typeof window !== "undefined" ? window : undefined;
  const width = useExpectedWidth(768, client);

  return (
    <Footer_>
      <Box>
        <a href="/">
          <LogoBox>
            <Image_
              src={data.links.footer.logo}
              width={148}
              height={29.77}
            ></Image_>
          </LogoBox>
        </a>
        <Contacts>
          <Telephone href="tel:+79516878803">+7-951-687-88-03</Telephone>
          <Email href="mailto:sales@brontosaur.ru">sales@brontosaur.ru</Email>
        </Contacts>
      </Box>
      <LinksWebonizer>
        <Links>
          <a
            href="https://vk.com/brontosaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image_
              src={
                footer?.vk
                  ? data.links.footer.vk.black
                  : data.links.footer.vk.white
              }
              width={!width ? 50 : 60}
              height={!width ? 50 : 60}
              onTouchStart={handleVkFooter}
              onTouchEnd={handleLeave}
              onMouseEnter={handleVkFooter}
              onMouseLeave={handleLeave}
            ></Image_>
          </a>
          <a
            href="https://t.me/DenBrontosaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image_
              src={
                footer?.tg
                  ? data.links.footer.tg.black
                  : data.links.footer.tg.white
              }
              width={!width ? 50 : 60}
              height={!width ? 50 : 60}
              onTouchStart={handleTgFooter}
              onTouchEnd={handleLeave}
              onMouseEnter={handleTgFooter}
              onMouseLeave={handleLeave}
            ></Image_>
          </a>
          <Link
            $hovered={footer?.service!}
            href="https://brontosaur.ru"
            target="_blank"
            rel="noopener noreferrer"
            onTouchStart={handleServiceFooter}
            onTouchEnd={handleLeave}
            onMouseEnter={handleServiceFooter}
            onMouseLeave={handleLeave}
          >
            На страницу сервиса
          </Link>
        </Links>
        <Webonizer></Webonizer>
      </LinksWebonizer>
    </Footer_>
  );
};

const LogoBox = styled.div`
  ${(p) => (p.className = "LogoBox")};
  display: flex;
  transform: translate(calc(-1 * var(--dv)), calc(15 * var(--dv)));
`;

const LinksWebonizer = styled.div`
  ${(p) => (p.className = "LinksWebonizer")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  @media (max-width: 48rem) {
    align-items: start;
    gap: calc(60 * var(--mv));
  }
`;

const Footer_ = styled.footer`
  ${(p) => (p.className = "Footer")};
  width: calc(1368 * var(--dv));
  height: calc(282 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: var(--main);
  margin: 0 auto calc(36 * var(--dv));
  padding: calc(40 * var(--dv));
  display: flex;
  justify-content: space-between;

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: fit-content;
    border-radius: calc(14 * var(--mv));
    margin: 0 auto calc(20 * var(--mv));
    padding: calc(40 * var(--mv));
    flex-direction: column;
    align-items: start;
    gap: calc(60 * var(--mv));
  }
`;

const Box = styled.div`
  ${(p) => (p.className = "Box")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 48rem) {
    gap: calc(60 * var(--mv));
  }
`;

const Contacts = styled.div`
  ${(p) => (p.className = "Contacts")};
  display: flex;
  flex-direction: column;
  gap: calc(30 * var(--dv));

  @media (max-width: 48rem) {
    gap: calc(30 * var(--mv));
  }
`;

const Telephone = styled.a`
  ${(p) => (p.className = "Telephone")};
  width: calc(230 * var(--dv));
  height: calc(32 * var(--dv));

  font-family: Raleway;
  font-size: calc(24 * var(--dv));
  font-weight: 600;
  line-height: calc(32 * var(--dv));
  text-align: left;

  color: white;
  transform: translate(0, calc(-3 * var(--dv)));

  @media (max-width: 48rem) {
    width: calc(230 * var(--mv));
    height: calc(32 * var(--mv));
    font-size: calc(24 * var(--mv));
    line-height: calc(32 * var(--mv));
  }
`;

const Email = styled(Telephone)`
  transform: translate(0, 0);
`;

const Links = styled.div`
  ${(p) => (p.className = "Links")};
  display: flex;
  gap: calc(24 * var(--dv));
  transform: translate(0, calc(5.5 * var(--dv)));
  @media (max-width: 48rem) {
    gap: calc(20 * var(--mv));
  }
`;

const Link = styled.a<{ $hovered: boolean }>`
  width: calc(284 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(20 * var(--dv));
  border-radius: calc(10 * var(--dv));

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  background: ${(p) => (p.$hovered ? "var(--primary)" : "#fff")};
  color: ${(p) => (p.$hovered ? "#fff" : "var(--main)")};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: fit-content;
    height: fit-content;
    padding: calc(18 * var(--mv)) calc(20 * var(--mv));
    border-radius: calc(10 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;
