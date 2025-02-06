import styled, { useTheme } from "styled-components";

const Notification = ({ handleDarkMode, onClose }) => {
  const theme = useTheme();

  const handleItemClick = () => {
    alert("준비 중입니다.");
  };
  return (
    <>
      <Overlay onClick={onClose} />
      <NotificationContainer>
        <NotificationItem onClick={handleItemClick}>
          마이페이지
        </NotificationItem>
        <NotificationItem onClick={handleItemClick}>설정</NotificationItem>
        <NotificationItem onClick={handleDarkMode}>
          {theme.mode === "dark" ? "dark" : "light"}
        </NotificationItem>
      </NotificationContainer>
    </>
  );
};

export default Notification;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 100;
`;

const NotificationContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: ${({ theme }) =>
    theme.colors[theme.mode].background.primary};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  z-index: 101;
`;

const NotificationItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors[theme.mode].background.secondary};
  }
`;
