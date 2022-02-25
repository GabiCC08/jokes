import styled from "styled-components";
import CategorySelector from "./CategorySelector";
import InputSearch from "./InputSearch";
import JokeCard from "./JokeCard";
import JokesTable from "./JokesTable";

export default function TestPage(props) {
  return (
    <Div>
      <Columns className="builder-columns">
        <Column className="builder-column">
          <Selector1 />

          <JokeCard1 joke="Here there is a joke" />
        </Column>

        <Column2 className="builder-column">
          <InputSearch1 />

          <JokesTable1
            dataSource={[
              {
                categories: "animal",
                value:
                  "Chuck Norris does not own a house. He walks into random houses and people move.",
              },
              {
                categories: "party",
                value:
                  "On his birthday, Chuck Norris randomly selects one lucky child to be thrown into the sun.",
              },
            ]}
            columns={[
              {
                title: "Joke",
                dataIndex: "value",
                key: "value",
              },
              {
                title: "Categoría",
                dataIndex: "categories",
                key: "categories",
              },
            ]}
          />
        </Column2>
      </Columns>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const Columns = styled.div`
  display: flex;
  @media (max-width: 999px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(50% - 10px);
  margin-left: 0px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const Selector1 = styled(CategorySelector)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
`;

const JokeCard1 = styled(JokeCard)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(50% - 10px);
  margin-left: 20px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const InputSearch1 = styled(InputSearch)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
`;

const JokesTable1 = styled(JokesTable)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
`;
