import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const CharacterQuery = () => {
    return (
        <Query
            query={gql`
        {
          characters {
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
                if (error) return <p>Error!</p>;

                return data.characters.results.map((character) => {
                    return (
                        <div key={character.id}>
                            <p>{character.name}</p>
                            <img
                                className="Image"
                                src={character.image}
                                alt={`Imagen de ${character.name}`}
                            />
                        </div>
                    );
                });
            }}
        </Query>
    );
};