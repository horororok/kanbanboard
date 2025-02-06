import { styled } from "styled-components";
import Notification from "../common/Notification";
import { useState } from "react";

const Nav = ({ handleDarkMode }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <Container>
      <Navbar>
        <Logo src="/image/Logo.svg" alt="로고" />
        <>
          <Profile>
            <ProfileImage src="/image/avatar.png" alt="기본프로필이미지" />
            <ProfileName onClick={() => setIsNotificationOpen(true)}>
              김태훈님
              <ArrowDownIcon
                src="/icon/icon-arrow-down.png"
                alt="화살표아이콘"
                $isOpen={isNotificationOpen}
              />
            </ProfileName>
            {isNotificationOpen && (
              <Notification
                handleDarkMode={handleDarkMode}
                onClose={() => setIsNotificationOpen(false)}
              />
            )}
          </Profile>
        </>
      </Navbar>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Navbar = styled.div`
  max-width: 1200px;
  margin: auto 0;
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 162px;
  height: 36px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const ProfileName = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  text-align: center;
  width: 93px;
  height: auto;
`;

const ArrowDownIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
