import styled from "styled-components";

interface CustomInputProps {
    placeholderText: string,
    backgroundImageURL: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StyledInputProps {
    backgroundImage?: string;
  }

export default function CustomInput({ placeholderText, backgroundImageURL, value, onChange } : CustomInputProps) {
  return (
    <StyledInput
      placeholder={placeholderText}
      backgroundImage={backgroundImageURL}
      value={value}
      onChange={onChange}
    />
  );
}

const StyledInput = styled.input<StyledInputProps>`
  width: 300px;
  height: 60px;
  border-radius: 8px;
  background: #fff;
  border: none;
  background-image: url(${(props) => props.backgroundImage});
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 32px;
  padding: 14px 14px 14px 68px;
  border: 1px solid #000;
`;