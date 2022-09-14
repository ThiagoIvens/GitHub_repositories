import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 5rem;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1,
  span {
    text-align: center;
  }

  span a {
    text-decoration: none;
    cursor: pointer;
  }

  div {
    padding-block: 0.2rem;

    input {
      color: #000;
      font-size: 20px;
      border: none;
      padding: 10px 40px;
      border-radius: 20px 0px 0px 20px;
      background: #dfe8fe;

      transition: background 0.25s ease !important;
    }

    input:focus {
      outline: none !important;
    }

    button {
      cursor: pointer;
      color: #000;
      font-size: 20px;
      border: none;
      padding: 10px 40px;
      border-radius: 0px 20px 20px 0px;
      background: #dfe8fe;

      transition: background 0.25s ease !important;

      &:hover {
        background: #ccdbfd;
      }
    }

    @media (max-width: 425px) {
      input {
        width: 100%;
        font-size: 20px;
        border: none;
        padding: 10px 40px;
        border-radius: 20px 20px 0px 0px;
        background: #bbc3d5;
        transition: background 0.25s ease !important;
      }

      input:focus {
        outline: none !important;
      }

      button {
        width: 100%;
        cursor: pointer;
        font-size: 20px;
        border: none;
        padding: 10px 40px;
        border-radius: 0px 0px 20px 20px;
        background: #bbc3d5;
        transition: background 0.25s ease !important;
      }
    }
  }
  @media (max-width: 425px) {
    padding: 2.5rem;
  }
`;

export const FiltersContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-inline: 1rem;

  width: 100%;
  max-width: 400px;

  h4 {
    margin: 0 1rem 0 0;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;
