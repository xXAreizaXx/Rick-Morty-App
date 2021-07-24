import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Cards from '../components/Cards/Cards'

export const CharacterQuery = ({ page }) => {
  return (
    <Query
      query={gql`
        {
          characters(page: ${page}) {
            results {
              id
              name
              image
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error! ❌</p>;

        return data.characters.results.map((character) => {
          return (
            <Cards
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          );
        });
      }}
    </Query>
  );
};