import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  width: calc(100% - 180px);
  right: 0;
  top: 0;
  height: calc(100% - 100px);
  background-color: #141414;
  padding: 10px 15px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #d99207;
  padding-bottom: 5px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.h2`
  color: #d99207;
  font-size: 26px;
  margin-left: 5px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const Meta = styled.span`
  color: #d99207;
  font-size: 16px;
  margin-right: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Button = styled.button`
  border: none;
  background-color: #d99207;
  padding: 5px;
  border-radius: 3px;
  color: #000;
  margin-right: 5px;
  font-weight: 500;
  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  color: #d99207;
  font-size: 24px;
`;

export const TracksList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;
