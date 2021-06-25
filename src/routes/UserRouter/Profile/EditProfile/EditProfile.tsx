import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import TitleLine from "../components/TitleLine";
import { useDispatch, useSelector } from "react-redux";
// import { selectCurrentProfile } from "../../../../store/current_profile/selectors";
import EditSelector from "./EditSelector";
import EditInput from "./EditInput";
import TextAreaProfile from "../components/TextAreaProfile";
import DUMMY from "../../../../assets/images/avatar_dummy.png";
import { OPTIONS } from "../../../../constants";
import { CurrentProfile, UpdateProfileSelects } from "../../../../Types";
import {
  uploadPhoto,
  updateCurrentProfile,
} from "../../../../store/current_profile/actions";
// import AvatarInput from "./AvatarInput";

const EditProfile: React.FC<Props> = ({ toggleEditBtn, profile }) => {
  const dispatch = useDispatch();
  // const profile = useSelector(selectCurrentProfile)!;
  const [fileName, setFileName] = useState("file name");
  const [selects, setSelects] = useState<UpdateProfileSelects>({
    age: profile?.age || undefined,
    avatar: profile?.avatar || undefined,
    bats_hand: profile?.bats_hand || undefined,
    biography: profile?.biography || undefined,
    facilities: profile?.facilities || [],
    feet: profile?.feet || undefined,
    first_name: profile?.first_name || undefined,
    id: profile?.id || undefined,
    inches: profile?.inches || undefined,
    last_name: profile?.last_name || undefined,
    position: profile?.position || undefined,
    position2: profile?.position2 || undefined,
    school: profile?.school || {},
    school_year: profile?.school_year || undefined,
    teams: profile?.teams || [],
    throws_hand: profile?.throws_hand || undefined,
    weight: profile?.weight || undefined,
  });

  const [photoBtn, setPhotoBtn] = useState(false);

  const onSubmit = async (values = selects) => {
    console.log("values", values);
    await dispatch(updateCurrentProfile(values));
  };

  const handleSelect = async (fieldName: any, value: any) => {
    const newData = { ...selects, [fieldName]: value };
    await setSelects(newData);
  };

  const chooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0] as File;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result?.toString());
      setSelects({ ...selects, avatar: reader.result?.toString() });
    };
    console.log(selects);

    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  // useEffect(() => {}, [selects]);
  return (
    <Container>
      <InfoForm>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <div>
              <PhotoForm>
                <ImageBox>
                  <Image $avatar={selects?.avatar || DUMMY} />
                </ImageBox>
                <ChooseLink>
                  <Field name="avatar">
                    {(props) => (
                      <Avatar>
                        {photoBtn === true ? (
                          <>
                            <Label
                              htmlFor="avatar"
                              onClick={() => setPhotoBtn(true)}
                            >
                              {fileName}
                            </Label>
                            <AvatarInput
                              {...props.input}
                              id="avatar"
                              type="file"
                              accept="image/*"
                              onChange={chooseImage}
                            />
                            <AvatarBox>
                              <Label
                                onClick={() =>
                                  dispatch(
                                    uploadPhoto({
                                      name: selects.avatar!,
                                    })
                                  )
                                }
                              >
                                Upload Photo
                              </Label>
                              <Label>Cancel</Label>
                            </AvatarBox>
                          </>
                        ) : (
                          <>
                            <Label
                              htmlFor="avatar"
                              onClick={() => setPhotoBtn(true)}
                            >
                              Choose Photo
                            </Label>
                            <AvatarInput
                              {...props.input}
                              id="avatar"
                              type="file"
                              accept="image/*"
                            />
                          </>
                        )}
                      </Avatar>
                    )}
                  </Field>
                </ChooseLink>
              </PhotoForm>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="first_name"
                    fieldName="first_name"
                    defaultValue={`${profile?.first_name || ""}`}
                    title="First Name *"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="last_name"
                    fieldName="last_name"
                    defaultValue={profile?.last_name || ""}
                    title="Last Name *"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
              </FormBox>
              <BigInputBox>
                <Field
                  name="position"
                  defaultValue={profile?.position || ""}
                  title={
                    OPTIONS.position.find(
                      (opt) => opt.payload === profile?.position
                    )?.text || "Position in Game *"
                  }
                  component={EditSelector}
                  options={OPTIONS.position}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="position2"
                  defaultValue={profile?.position2 || ""}
                  title={
                    OPTIONS.position.find(
                      (opt) => opt.payload === profile?.position2
                    )?.text || "Position in Game *"
                  }
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
                  defaultValue={profile?.age || ""}
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
                    defaultValue={profile?.feet || ""}
                    title="Feet *"
                    component={EditInput}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="inches"
                    fieldName="inches"
                    defaultValue={profile?.inches || ""}
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
                  defaultValue={profile?.weight || ""}
                  title="Weight *"
                  component={EditInput}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <FormBox>
                <SmallInputBox>
                  <Field
                    name="throws_hand"
                    defaultValue={profile?.throws_hand || ""}
                    title={profile?.throws_hand.toUpperCase() || "Throws *"}
                    component={EditSelector}
                    options={OPTIONS.throws}
                    handleSelect={handleSelect}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    name="bats_hand"
                    defaultValue={profile?.bats_hand || ""}
                    title={profile?.bats_hand.toUpperCase() || "Bats *"}
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
                  defaultValue={profile?.school?.name || ""}
                  title={
                    OPTIONS.school.find(
                      (opt) => opt.payload.name === profile?.school?.name
                    )?.text || "School *"
                  }
                  component={EditSelector}
                  options={OPTIONS.school}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="school_year "
                  defaultValue={profile?.school_year || ""}
                  title={
                    OPTIONS.school_year.find(
                      (opt) => opt.payload === profile?.school_year
                    )?.text || "School Year *"
                  }
                  component={EditSelector}
                  options={OPTIONS.school_year}
                  handleSelect={handleSelect}
                />
              </BigInputBox>
              <BigInputBox>
                <Field
                  name="team"
                  defaultValue={String(profile?.teams) || []}
                  title="Team"
                  component={EditSelector}
                  options={OPTIONS.team}
                  handleSelect={handleSelect}
                  // renderElement={() => (
                  //   <>
                  //     {profile?.teams.map((team) => (
                  //       <SelectValue text={team.name} />
                  //     ))}
                  //   </>
                  // )}
                />
              </BigInputBox>
              <TitleLine title="Facility" />
              <BigInputBox>
                <Field
                  name="facility"
                  defaultValue={String(profile?.facilities) || ""}
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
                  defaultValue={profile?.biography || "..."}
                  title="Describe yourself in a few words"
                  component={TextAreaProfile}
                  handleSelect={handleSelect}
                />
              </TextAreaBox>

              <BtnsWrapper>
                <CancelBtn onClick={() => toggleEditBtn(false)}>
                  Cancel
                </CancelBtn>
                <SaveBtn
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                    toggleEditBtn(false);
                  }}
                >
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
const Avatar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const AvatarBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* align-self: center; */
  margin-top: 10px;
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
  margin: 0 5px;
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

type Props = {
  toggleEditBtn: (value: boolean) => void;
  profile: CurrentProfile;
};
