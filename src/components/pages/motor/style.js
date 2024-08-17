import styled from 'styled-components';

// Define the wrapper for the file upload area
export const FileUploadWrapper = styled.div`
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Define the hidden file input
export const StyledFileUpload = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

// Define the custom label which serves as the clickable area for file upload
export const CustomLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) => 
    props.file 
      ? `url(${props.file}) no-repeat center center` 
      : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7_Rd3yDTcIPmE0Pe4sLXNpD6ElsqvvVofQ&s) no-repeat center center`
  };
  background-size: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  color: #fff;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Adjust hover effect as needed */
  }
`;

// Define the file preview image
export const FilePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`;
