import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RegisterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 70%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
export const AuthBoxTitle = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  color: var(--text, #006dab);
  font-family: "Open Sans";
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const LoginText = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: start;
  width: 100%;
  color: var(--text, black);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: ${(props) => (props.$marginBottom ? "20px" : "")};
  span {
    color: var(--text, #006dab);
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
  width: 100%;
  margin-bottom: ${(props) => (props.$marginBottom2 ? "20px" : "")};
`;
export const InputLabel = styled.div`
  color: rgba(55, 55, 55, 0.8);
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  // Add focus styles
  &:focus {
    border-color: #007bff; // Change to your preferred color
    outline: none;
  }

  // Add some responsive design if needed
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  margin-top: ${(props) => (props.$marginTop ? "20px" : "")};
  background-color: #006dab; // Primary color
  color: #fff; // Text color
  border: none;
  font-size: 16px; // Large size font
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  outline: none;

  &:hover {
    background-color: #005a87; // Slightly darker shade for hover
    transform: scale(1.05); // Scale effect on hover
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const RememberMe = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  color: #373737;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  background-color: #fff;
  border: 2px solid #006dab; // Primary color
  border-radius: 4px;
  width: 16px; // Size of the checkbox
  height: 16px; // Size of the checkbox
  cursor: pointer;
  position: relative;
  outline: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:checked {
    background-color: #006dab; // Primary color when checked
    border-color: #006dab; // Border color when checked
  }

  &:checked::before {
    content: "✓";
    color: #fff; // Checkmark color
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px; // Adjust checkmark size if needed
  }

  &:hover {
    border-color: #005a87; // Darker shade on hover
  }
`;

export const ForgotPassword = styled.div`
  color: #006dab;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
export const ColorScheme = styled.div`
  position: absolute;
  top: 20px;
  right: 51%;
`;
export const AdminIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  h2 {
    margin: 0px;
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    margin: 0px;
    color: var(--text, #006dab);
    font-family: "Open Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const RegisterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
    height: 100vh;
  }
`;
