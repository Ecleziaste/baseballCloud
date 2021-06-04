import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import InputProfile from "../InputProfile";
import TitleLine from "../TitleLine";
import TextAreaProfile from "../TextAreaProfile";
import { useSelector } from "react-redux";
import { selectCurrentProfile } from "../../../../../store/current_profile/selectors";
// import { useDispatch } from "react-redux";
// import { setCurrentProfile } from "../../../../../store/current_profile/actions";

const EditProfile: React.FC<Props> = ({ toggleEditBtn }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setCurrentProfile({}));
  // }, []);

  const current_profile = useSelector(selectCurrentProfile)!;

  const onSubmit = (value: Values) => {
    console.log("value", value);
  };

  return (
    <Container>
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
            <div>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="firstName"
                    defaultValue={`${current_profile?.first_name || ""}`}
                    placeholder="First Name *"
                    label="First Name *"
                    component={InputProfile}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="lastName"
                    defaultValue={current_profile?.last_name || ""}
                    placeholder="Last Name *"
                    label="Last Name *"
                    component={InputProfile}
                  />
                </SmallInputBox>
              </FormBox>
              <BigInputBox>
                <Field
                  name="position"
                  defaultValue={current_profile?.position || ""}
                  label="Position in Game *"
                  placeholder="Position in Game *"
                  component={InputProfile}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="position2"
                  defaultValue={current_profile?.position2 || ""}
                  label="Secondary Position in Game"
                  placeholder="Secondary Position in Game"
                  component={InputProfile}
                />
              </BigInputBox>
              <TitleLine title="Personal Info" />
              <BigInputBox>
                <Field
                  name="age"
                  defaultValue={current_profile?.age || ""}
                  placeholder="Age"
                  label="Age *"
                  component={InputProfile}
                />
              </BigInputBox>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="feet"
                    defaultValue={current_profile?.feet || ""}
                    placeholder="Feet"
                    label="Feet *"
                    component={InputProfile}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="inches"
                    defaultValue={current_profile?.inches || ""}
                    placeholder="Inches"
                    label="Inches"
                    component={InputProfile}
                  />
                </SmallInputBox>
              </FormBox>

              <BigInputBox>
                <Field
                  name="weight"
                  defaultValue={current_profile?.weight || ""}
                  label="Weight *"
                  placeholder="Weight *"
                  component={InputProfile}
                />
              </BigInputBox>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="throws"
                    defaultValue={current_profile?.throws_hand || ""}
                    placeholder="Throws *"
                    label="Throws *"
                    component={InputProfile}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="bats"
                    defaultValue={current_profile?.bats_hand || ""}
                    placeholder="Bats *"
                    label="Bats *"
                    component={InputProfile}
                  />
                </SmallInputBox>
              </FormBox>

              <TitleLine title="School" />
              <BigInputBox>
                <Field
                  name="school"
                  defaultValue={current_profile?.school?.name || ""}
                  placeholder="School"
                  label="School *"
                  component={InputProfile}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="schoolYear"
                  defaultValue={current_profile?.school_year || ""}
                  placeholder="School Year"
                  label="School Year "
                  component={InputProfile}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="team"
                  defaultValue={String(current_profile?.teams) || ""}
                  placeholder="Team"
                  label="Team"
                  component={InputProfile}
                />
              </BigInputBox>
              <TitleLine title="Facility" />
              <BigInputBox>
                <Field
                  name="facility"
                  defaultValue={String(current_profile?.facilities) || ""}
                  placeholder="Facility"
                  label="Facility"
                  component={InputProfile}
                />
              </BigInputBox>
              <TitleLine title="About" />
              <TextAreaBox>
                <Field
                  name="bio"
                  defaultValue={current_profile?.biography || ""}
                  placeholder="Describe yourself in a few words"
                  label="Describe yourself in a few..."
                  component={TextAreaProfile}
                />
              </TextAreaBox>

              <BtnsWrapper>
                <CancelBtn onClick={() => toggleEditBtn(false)}>
                  Cancel
                </CancelBtn>
                <SaveBtn type="submit" onClick={() => handleSubmit()}>
                  Save
                </SaveBtn>
              </BtnsWrapper>
            </div>
          )}
        />
      </InfoForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
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
const FormBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 21px;
`;
const SmallInputBox = styled.div`
  display: flex;
  height: 40px;
  width: 48%;
  transition: all 0.2s;
`;
const BigInputBox = styled(SmallInputBox)`
  display: flex;
  align-self: center;
  width: 100%;
  margin-bottom: 10px;
`;
const TextAreaBox = styled(BigInputBox)`
  height: 142px;
`;
const BtnsWrapper = styled(FormBox)`
  margin: 0;
`;
const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  overflow: visible;
  width: 48%;
  padding: 7px 19px 10px 18px;
  border-radius: 4px;
  border: solid 1px #d1d7db;
  background-color: #fff;
  /* box-shadow: 0 2px 25px 0 rgb(0 0 0 / 0%); */
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    border: solid 1px #48bbff;
    color: #48bbff;
    box-shadow: 0 0 4px 0 #b3d4fc;
  }
  &:active {
    box-shadow: inset 1px 1px 3px rgba(133, 133, 133, 0.3);
  }
`;
const SaveBtn = styled(CancelBtn)`
  color: #fff;
  box-shadow: 0 0 4px 0 rgb(72 187 255 / 0%);
  background-color: #48bbff;
  &:hover {
    color: #fff;
  }
`;

export default EditProfile;

type Props = { toggleEditBtn: (value: boolean) => void };
type Values = {};
