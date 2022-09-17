import styled from "styled-components";
import styles from "../../styles/styles.js";

export const PageTemplate = styled.div`
  background-color: ${styles.colors.colorBackground};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow-y: scroll;
  padding: 1rem;
  padding-bottom: 5rem;
  width: 100%;
`;
