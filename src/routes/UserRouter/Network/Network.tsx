import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import PageHeader from "../components/PageHeader";
import NetworkCard from "../components/NetworkCard";
import Selector from "../../../components/Selector";
import SelectorInput from "../../../components/SelectorInput";
import SearchInput from "../components/SearchInput";
import { Form, Field } from "react-final-form";
import Pagination from "../components/Pagination";
import { OPTIONS } from "../../../constants";
import { ProfilesSelects } from "../../../Types";
import { useDispatch, useSelector } from "react-redux";
import { setProfiles } from "../../../store/profiles/actions";
import { selectProfiles } from "../../../store/profiles/selectors";

enum Titles {
  school = "School",
  team = "Team",
  position = "Position",
  age = "Age",
  favorite = "All",
  profiles_count = "Show: 10",
}

const Network: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector(selectProfiles)!.total_count.toString();
  const profiles = useSelector(selectProfiles)!
    .profiles.slice()
    .sort(
      (a, b): any => a.first_name.toLowerCase() > b.first_name.toLowerCase()
    );

  const [selects, setSelects] = useState<ProfilesSelects>({
    player_name: undefined,
    school: undefined,
    team: undefined,
    position: undefined,
    age: undefined,
    favorite: undefined,
    profiles_count: 10,
    offset: 10,
  });

  const handleSelect = async (fieldName: any, value: any) => {
    const newData = { ...selects, [fieldName]: value };
    await setSelects(newData);
  };

  useEffect(() => {
    console.log(selects);

    dispatch(setProfiles(selects));
  }, [selects]);

  const onSubmit = () => {};

  return (
    <AppLayout>
      <Main>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <div>
              <HeaderRow>
                <PageHeader title="Network" />
                <Selectables>
                  <Field
                    name="school"
                    fieldName="school"
                    component={SelectorInput}
                    title={Titles.school}
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="team"
                    fieldName="team"
                    component={SelectorInput}
                    title="Team"
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="position"
                    component={Selector}
                    title={Titles.position}
                    options={OPTIONS.position}
                    defaultTitle={Titles.position}
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="age"
                    fieldName="age"
                    component={SelectorInput}
                    title={Titles.age}
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="favorite"
                    component={Selector}
                    title={Titles.favorite}
                    options={OPTIONS.favorite}
                    defaultTitle={Titles.favorite}
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="profiles_count"
                    component={Selector}
                    title={Titles.profiles_count}
                    options={OPTIONS.profiles_count}
                    defaultTitle={Titles.profiles_count}
                    handleSelect={handleSelect}
                  />
                </Selectables>
              </HeaderRow>

              <Container>
                <Players>Available Players {`(${totalCount})`}</Players>
                <SearchPlayer>
                  <Field
                    name="player_name"
                    fieldName="player_name"
                    component={SearchInput}
                    placeholder="Player Name"
                    handleSelect={handleSelect}
                  ></Field>
                </SearchPlayer>
              </Container>
            </div>
          )}
        />

        <PageBody>
          <TableHeaders>
            <Title $width="19.5%">Player Name</Title>
            <Title $width="10%">Sessions</Title>
            <Title $width="23%">School</Title>
            <Title $width="23%">Teams</Title>
            <Title $width="15%">Age</Title>
            <Title $width="8%">Favorite</Title>
          </TableHeaders>
          <TableBody>
            {profiles.map((profile) => {
              return <NetworkCard player={profile} key={profile.id} />;
            })}
          </TableBody>
        </PageBody>

        <Pagination />
      </Main>
    </AppLayout>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  /* overflow: auto; */
  width: 100%;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled(HeaderRow)`
  padding: 16px;
`;
const Players = styled.div`
  display: flex;
  line-height: 1.25;
  font-size: 18px;
  color: #414f5a;
  font-weight: 400;
`;
const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 23px;
`;
const TableHeaders = styled.div`
  display: flex;
  width: 100%;
  min-height: 44px;
  margin-bottom: 6px;
  background-color: #fff;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: #667784;
`;
const Selectables = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const SearchPlayer = styled.div``;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div<{ $width: string }>`
  display: flex;
  max-width: 100%;
  width: ${(props) => props.$width};
  justify-content: flex-start;
  text-overflow: ellipsis;
`;

export default Network;

type Props = {};
