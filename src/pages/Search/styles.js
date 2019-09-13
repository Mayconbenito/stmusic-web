import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  width: calc(100% - 180px);
  right: 0;
  top: 0;
  height: calc(100% - 100px);
  background-color: #141414;
  overflow-y: scroll;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  background-color: #141414;
  border: none;
  border-bottom: 3px solid #000;
  padding: 10px;
  font-size: 26px;
  color: #fff;

  &::placeholder {
    font-family: Roboto;
    color: #fff;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 10px 15px
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  margin-bottom: 30px;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 0.15;
    }
    30% {
      opacity: 0.3;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SectionTitle = styled.span`
  font-size: 24px;
  color: #d99207;
`;

export const SectionItems = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  flex-wrap: wrap;
`;
