import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import TitleLine from "../components/TitleLine";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentProfile } from "../../../../store/current_profile/selectors";
import EditSelector from "./EditSelector";
import EditInput from "./EditInput";
import TextAreaProfile from "../components/TextAreaProfile";
import DUMMY from "../../../../assets/images/avatar_dummy.png";
import { OPTIONS } from "../../../../constants";
import { getSchools } from "../../../../store/schools/actions";
import { getTeams } from "../../../../store/teams/actions";
import { getFacilities } from "../../../../store/facilities/actions";
import {
  Team,
  Facility,
  School,
  UpdateProfileSelects,
} from "../../../../Types";

const EditProfile: React.FC<Props> = ({ toggleEditBtn }) => {
  const dispatch = useDispatch();
  const current_profile = useSelector(selectCurrentProfile)!;
  const avatar = current_profile?.avatar;

  const [selects, setSelects] = useState<UpdateProfileSelects>({
    age: current_profile?.age || undefined,
    avatar: current_profile?.avatar || undefined,
    bats_hand: current_profile?.bats_hand || undefined,
    biography: current_profile?.biography || undefined,
    facilities: current_profile?.facilities || [],
    feet: current_profile?.feet || undefined,
    first_name: current_profile?.first_name || undefined,
    id: current_profile?.id || undefined,
    inches: current_profile?.inches || undefined,
    last_name: current_profile?.last_name || undefined,
    position: current_profile?.position || undefined,
    position2: current_profile?.position2 || undefined,
    school: current_profile?.school || {},
    school_year: current_profile?.school_year || undefined,
    teams: current_profile?.teams || [],
    throws_hand: current_profile?.throws_hand || undefined,
    weight: current_profile?.weight || undefined,
  });

  const onSubmit = ({ ...selects }) => {
    console.log("values", { ...selects });
  };

  const handleSelect = async (fieldName: any, value: any) => {
    const newData = { ...selects, [fieldName]: value };
    await setSelects(newData);
  };

  useEffect(() => {}, [selects]);

  return (
    <Container>
      <PhotoForm>
        <ImageBox>
          <Image $avatar={avatar || DUMMY} />
        </ImageBox>
        <ChooseLink>
          <Label htmlFor="avatar"> Choose Photo</Label>
          <AvatarInput id="avatar" type="file" accept="image/*" />
        </ChooseLink>
      </PhotoForm>
      <InfoForm>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <div>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="first_name"
                    fieldName="first_name"
                    defaultValue={`${current_profile?.first_name || ""}`}
                    title="First Name *"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="last_name"
                    fieldName="last_name"
                    defaultValue={current_profile?.last_name || ""}
                    title="Last Name *"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
              </FormBox>
              <BigInputBox>
                <Field
                  name="position"
                  defaultValue={current_profile?.position || ""}
                  title="Position in Game *"
                  component={EditSelector}
                  options={OPTIONS.position}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="position2"
                  defaultValue={current_profile?.position2 || ""}
                  title="Secondary Position in Game"
                  component={EditSelector}
                  options={OPTIONS.position}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <TitleLine title="Personal Info" />
              <BigInputBox>
                <Field
                  name="age"
                  fieldName="age"
                  defaultValue={current_profile?.age || ""}
                  title="Age *"
                  component={EditInput}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="feet"
                    fieldName="feet"
                    defaultValue={current_profile?.feet || ""}
                    title="Feet *"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="inches"
                    fieldName="inches"
                    defaultValue={current_profile?.inches || ""}
                    title="Inches"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
              </FormBox>

              <BigInputBox>
                <Field
                  name="weight"
                  fieldName="weight"
                  defaultValue={current_profile?.weight || ""}
                  title="Weight *"
                  component={EditInput}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="throws_hand"
                    defaultValue={current_profile?.throws_hand || ""}
                    title="Throws *"
                    component={EditSelector}
                    options={OPTIONS.throws}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="bats_hand"
                    defaultValue={current_profile?.bats_hand || ""}
                    title="Bats *"
                    component={EditSelector}
                    options={OPTIONS.bats}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
              </FormBox>

              <TitleLine title="School" />
              <BigInputBox>
                <Field
                  name="school"
                  defaultValue={current_profile?.school?.name || ""}
                  title="School *"
                  component={EditSelector}
                  options={OPTIONS.school}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="school_year "
                  defaultValue={current_profile?.school_year || ""}
                  title="School Year "
                  component={EditSelector}
                  options={OPTIONS.school_year}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="team"
                  defaultValue={String(current_profile?.teams) || ""}
                  title="Team"
                  component={EditSelector}
                  options={OPTIONS.team}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <TitleLine title="Facility" />
              <BigInputBox>
                <Field
                  name="facility"
                  defaultValue={String(current_profile?.facilities) || ""}
                  title="Facility"
                  component={EditSelector}
                  options={OPTIONS.facility}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <TitleLine title="About" />
              <TextAreaBox>
                <Field
                  name="biography"
                  fieldName="biography"
                  defaultValue={current_profile?.biography || ""}
                  title="Describe yourself in a few words"
                  component={TextAreaProfile}
                  handleSelect={handleSelect}
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
`;
const Image = styled.div<{ $avatar: string | null | undefined }>`
  background-image: url(${(props) => props.$avatar});
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
const ChooseLink = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;
const AvatarInput = styled.input`
  display: none;
  background-color: transparent;
  border: none;
`;
const Label = styled.label`
  display: flex;
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
