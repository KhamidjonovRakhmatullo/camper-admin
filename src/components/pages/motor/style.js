import styled from 'styled-components';

export const FileUploadWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
`;

export const StyledFileUpload = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const CustomLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.file ? `url(${props.file}) no-repeat center center` : 'url(/path/to/default/image.png) no-repeat center center')};
  background-size: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  color: #fff;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Adjust hover effect as needed */
  }
`;

export const FilePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`;
