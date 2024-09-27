import gql from "graphql-tag";
export const GET_ME = gql`
query {
    me {
    _id
    username
    email
    savedBooks {
        bookId
        authors
        description
        image
        link
        title
    }
    }
}
`;