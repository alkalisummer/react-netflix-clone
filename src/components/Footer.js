import React from 'react';
import { styled } from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
  font-weight: bold;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-deocoration: none;

  &:hover {
    text-deocoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescrContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 코리아</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink>화면 해설</FooterLink>
            <FooterLink>고객 센터</FooterLink>
            <FooterLink>미디어 센터</FooterLink>
            <FooterLink>이용 약관</FooterLink>
            <FooterLink>개인정보</FooterLink>
            <FooterLink>회사정보</FooterLink>
            <FooterLink>문의하기</FooterLink>
            <FooterLink>법적고지</FooterLink>
            <FooterLink>투자 정보</FooterLink>
            <FooterLink>입사 정보</FooterLink>
            <FooterLink>기프트카드</FooterLink>
            <FooterLink>쿠키 설정</FooterLink>
          </FooterLinkContent>
          <FooterDescrContainer>
            <FooterDescRights>ⓒ Netflix Rights Reserved</FooterDescRights>
          </FooterDescrContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
}

export default React.memo(Footer);
