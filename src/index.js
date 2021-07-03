import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

reportWebVitals();
