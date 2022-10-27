import { useQuery, gql } from '@apollo/client';

// Import everything needed to use the `useQuery` hook
// import { useQuery, gql} from '@apollo/client';


const GET_DATA = gql`
  query GetData {
    categories{
        name
        products {
        id
        name
        brand
        inStock
        gallery
        category
        description
        prices{
            amount
            currency {
                symbol
                label
            }
        }
        attributes{
            type
            name
            items{
            value
            displayValue
            id
            }
        }
        }
    }
}
`;


export const useProducts = () => {
    const { error, loading, data } = useQuery(GET_DATA);

    return {
        error,
        loading,
        data
    }
}