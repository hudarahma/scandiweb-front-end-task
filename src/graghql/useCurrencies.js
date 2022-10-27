import { useQuery ,gql } from "@apollo/client";


const GET_CURRENCIES = gql`

    query {
        currencies {
        label
        symbol
        }
    }

`;

export const useCurrencies = () => {
    const { error, loading, data } = useQuery(GET_CURRENCIES);

    return {
        error,
        loading,
        data
    }
}