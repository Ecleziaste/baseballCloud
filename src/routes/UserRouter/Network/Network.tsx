import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import PageHeader from "../../../components/PageHeader";
import NetworkCard from "./NetworkCard";
import Selector from "../../../components/Selector";
import SelectorInput from "../../../components/SelectorInput";
import SearchInput from "../../../components/SearchInput";
import { Form, Field } from "react-final-form";
import { OPTIONS } from "../../../constants";
import { ProfilesSelects } from "../../../Types";
import { useDispatch, useSelector } from "react-redux";
import { setProfiles } from "../../../store/profiles/actions";
import { selectProfiles } from "../../../store/profiles/selectors";
import ReactPaginate from "react-paginate";
import { selectHeaders } from "../../../store/user/selectors";
import { http } from "../../../services/http";

enum Titles {
  school = "School",
  team = "Team",
  position = "Position",
  age = "Age",
  favorite = "All",
  profiles_count = "Show: 10",
}

const Network: React.FC<Props> = () => {
  const headers = useSelector(selectHeaders)!;
  http.setAuthorizationHeader(headers);
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles)!
    .profiles.slice()
    .sort(
      (a, b): any => a.first_name.toLowerCase() > b.first_name.toLowerCase()
    )!;
  const totalCount = useSelector(selectProfiles)!.total_count!;
  const [selects, setSelects] = useState<ProfilesSelects>({
    player_name: undefined,
    school: undefined,
    team: undefined,
    position: undefined,
    age: undefined,
    favorite: undefined,
    profiles_count: 10,
    offset: 0,
  });

  const pagesCount = Math.ceil(totalCount / selects.profiles_count);
  const displayUsers = profiles.map((profile) => {
    return <NetworkCard player={profile} key={profile.id} />;
  });
  const handleSelect = (fieldName: any, value: any) => {
    const newData = { ...selects, [fieldName]: value };
    setSelects(newData);
  };
  const changePage = ({ selected }: { selected: number }) => {
    const showPages = selects.profiles_count * selected;
    setSelects({ ...selects, ["offset"]: showPages });
  };

  useEffect(() => {
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
                <Players>
                  Available Players {`(${totalCount.toString()})`}
                </Players>
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
          <TableBody>{displayUsers}</TableBody>
        </PageBody>
        <PaginationContainer>
          <ReactPaginate
            previousLabel={"«"}
            nextLabel={"»"}
            breakLabel="..."
            pageCount={pagesCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={changePage}
            containerClassName="pagination"
            pageLinkClassName="link"
            pageClassName="list"
            previousLinkClassName="prev"
            nextLinkClassName="last"
            breakClassName="break"
            activeClassName="active"
            activeLinkClassName="activeLink"
          />
        </PaginationContainer>
      </Main>
    </AppLayout>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  position: sticky;
  bottom: 0;
  text-decoration: none;
  font-size: 16px;
  margin: 16px 0;
  .pagination {
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: sticky;
    bottom: 0;
    text-decoration: none;
    list-style-type: none;
  }
  .list {
    margin: 0 2px;
  }
  .prev {
    display: flex;
    z-index: 2;
    padding: 6px 12px;
    cursor: pointer;
    background-color: rgba(238, 238, 238, 0.7);
    border: none;
    border-radius: 4px;
    margin: 0 2px;
    &:hover {
      background-color: #eeeeee;
    }
  }
  .last {
    display: flex;
    z-index: 2;
    padding: 6px 12px;
    cursor: pointer;
    background-color: rgba(238, 238, 238, 0.7);
    border: none;
    border-radius: 4px;
    margin: 0 2px;
    &:hover {
      background-color: #eeeeee;
    }
  }
  .break {
    display: flex;
    z-index: 2;
    padding: 6px 12px;
    cursor: default;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    margin: 0 2px;
  }
  .link {
    display: flex;
    z-index: 2;
    padding: 6px 12px;
    cursor: pointer;
    background-color: rgba(238, 238, 238, 0.7);
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #eeeeee;
    }
  }
  .active {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #48bbff;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #48bbff;
    }
  }
  .activeLink {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #48bbff;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #48bbff;
    }
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
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
