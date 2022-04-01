/*
@description: Input & Footer Component
*/

import styled from "styled-components";
import { Stack, TextField, PrimaryButton, Text } from "@fluentui/react";
import { useCallback, useState } from "react";
import ImageBox from "./ImageBox";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
`;

const StyledContent = styled.div`
  background-color: #777;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 6;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  width: 80%;
`;

const StyledTextField = styled(TextField)`
  flex: 7;
`;

const StyledNameDiv = styled.div`
  flex: 3;
`;

const StyledImageContainer = styled.div`
  display: flex;
`;

const styles = {
  color: "red",
};

const StyledFooter = styled.div`
  background-color: #555;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  $ {
    .save-button {
    }
    .cancel-button {
      color: red;
    }
  }
`;

export default () => {
  const [userName, setUserName] = useState(""); //user name
  const [checked, setChecked] = useState([false, false, false]); //checkbox state
  const [data, setData] = useState<any>({}); //storage(JSON)

  //event handler of NameEdit
  const handleNameChange = (e: any) => {
    setUserName(e.target.value);
    if (data[e.target.value]) {
      setChecked(data[e.target.value].checked);
    } else {
      setChecked([false, false, false]);
    }
  };

  //method for saving name & checkbox
  const handleSave = () => {
    if (userName == "") {
      alert("Input is empty");
      return;
    }
    setData((data: any) => {
      const newData = { ...data };
      newData[userName] = { checked };
      return newData;
    });
    alert("letter saved");
  };

  //cancel method
  const handleCancel = () => {
    setChecked([false, false, false]);
    setUserName("");
  };

  //method for checking Ith checkbox
  const setIChecked = (i: any, val: any) => {
    setChecked((checked) => {
      let newChecked: any = [...checked];
      newChecked[i] = val;
      return newChecked;
    });
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeader>
          <StyledNameDiv>User Name:&nbsp;</StyledNameDiv>
          <StyledTextField
            placeholder="Input user name"
            value={userName}
            onChange={handleNameChange}
          />
        </StyledHeader>
        <StyledImageContainer>
          <Stack gap={10}>
            <ImageBox id={1} checked={checked[0]} setIChecked={setIChecked} />
            <ImageBox id={2} checked={checked[1]} setIChecked={setIChecked} />
            <ImageBox id={3} checked={checked[2]} setIChecked={setIChecked} />
          </Stack>
        </StyledImageContainer>
      </StyledContent>
      <StyledFooter>
        <Stack gap={10} horizontal={true}>
          <PrimaryButton
            text="Save"
            onClick={handleSave}
            className="save-button"
          />
          <PrimaryButton
            text="Cancel"
            onClick={handleCancel}
            className="cancel-button"
          />
        </Stack>
      </StyledFooter>
    </StyledContainer>
  );
};
