import { gql, useQuery } from "@apollo/client";


const GET_PRODUCT = gql`

    query GetProduct($id: String!) {
        product(id: $id) {
            id
            name
            inStock
            description
            gallery
            category
            brand
            attributes{
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }

        }
    }

`;

export const useProduct = (id) => {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: {
            id
        }
    });

    return {
        data,
        loading,
        error
    }
}