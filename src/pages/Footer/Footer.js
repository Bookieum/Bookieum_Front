import styled from "styled-components";

const FooterDiv = styled.footer`
  text-align: center;
  background-color: white;
  font-size: 1.0rem;
  line-height: 3rem;
  height: 3rem; //calc(var(--vh, 1vh) * 100 + 66px);
  color: #000000;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Content>CopyRight bookieum</Content>
    </FooterDiv>
  );
};

export default Footer;
