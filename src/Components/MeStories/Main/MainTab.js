import styled from "styled-components"

const MainTabWrapper = styled.div`
  border-bottom: 1px solid rgba(230, 230, 230);
  display: block;
  box-sizing: border-box;
`

const LinkWrapper = styled.ul`
  box-sizing: inherit;
  margin: 0;
  margin-bottom: -1px;
  padding: 0;
  list-style: none;
  display: flex;
`

const LinkBox = styled.li`
  outline: none;
  margin-right: 20px;
  box-sizing: inherit;
  padding-bottom: 8px;
  border-bottom: ${(props) => props.active && "1px solid rgb(117, 117, 117)"};
`

const Link = styled.a`
  text-decoration: none;
  color: ${(props) =>
    (props.active && "rgb(41, 41, 41)") || "rgb(117, 117, 117)"};
  line-height: 20px;
  font-size: 15px;
  font-family: "Noto Sans";
`

const MainTab = ({ type }) => {
  return (
    <MainTabWrapper>
      <LinkWrapper>
        <LinkBox active={type === "drafts"}>
          <Link href="/me/stories/drafts" active={type === "drafts"}>
            Drafts
          </Link>
        </LinkBox>
        <LinkBox active={type === "public"}>
          <Link href="/me/stories/public" active={type === "public"}>
            Publised
          </Link>
        </LinkBox>
      </LinkWrapper>
    </MainTabWrapper>
  )
}

export default MainTab
