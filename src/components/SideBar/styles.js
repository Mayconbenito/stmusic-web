import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  width: 180px;
  height: calc(100% - 100px);
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d99207;
  padding-bottom: 5px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  align-items: center;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
`;

export const MenuText = styled(Link)`
  font-family: Roboto;
  font-size: 24px;
  color: #d99207;
  font-weight: bold;
  margin-left: 5px;

  &:hover {
    color: #fff;
  }
`;

export const CreatePlaylist = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px 15px 0px 15px;
`;

export const PlaylistLabel = styled.label`
  color: #d99207;
  font-size: 12px;
  font-weight: 500;
`;

export const PlaylistInput = styled.input`
  height: 30px;
  padding: 2px 5px;
  border-radius: 3px;
  background-color: #141414;
  border: none;
  margin-top: 2px;
  color: #d99207;

  &::placeholder {
    color: #d99207;
  }
`;

export const CreatePlaylistButton = styled.button`
  background-color: #141414;
  color: #d99207;
  border-radius: 3px;
  margin-top: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-weight: 500;
`;

export const Profile = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Username = styled.span`
  min-width: 100px;
  font-family: Roboto;
  font-size: 14px;
  color: #d99207;
`;

export const ProfileButton = styled.button`
  background-color: #141414;
  color: #d99207;
  border-radius: 3px;
  margin-top: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-weight: 500;
`;
