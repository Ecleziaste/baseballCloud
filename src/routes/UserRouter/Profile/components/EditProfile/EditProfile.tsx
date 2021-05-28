import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import InputProfile from "../InputProfile";

const EditProfile: React.FC<Props> = () => {
  const onSubmit = (value: Values) => {
    console.log("value", value);
  };

  return (
    <div>
      <PhotoForm>
        <ImageBox>
          <Image />
        </ImageBox>
        <ChooseLink>Choose Photo</ChooseLink>
      </PhotoForm>
      <InfoForm>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <NameBox>
              <SmallInputBox>
                <Field
                  value={"undefined"}
                  name="firstName"
                  component={InputProfile}
                />
              </SmallInputBox>
              <SmallInputBox>
                <Field
                  value={"undefined"}
                  name="lastName"
                  component={InputProfile}
                />
              </SmallInputBox>
            </NameBox>
          )}
        />
      </InfoForm>
    </div>
  );
};

const PhotoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 23px;
`;
const ImageBox = styled.div`
  display: block;
  margin-bottom: 8px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid tomato;
`;
const Image = styled.div`
  background-image: url("https://baseballcloud-staging-assets.s3.amazonaws.com/profile/469/size_100_100_159a71f5-9233-415a-8ab7-63811fecb9b4.png");
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
const ChooseLink = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;
const InfoForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;
const NameBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const SmallInputBox = styled.div`
  display: flex;
  height: 40px;
  padding: 0 16px;
  transition: all 0.2s;
`;

export default EditProfile;

type Props = {};
type Values = {};
