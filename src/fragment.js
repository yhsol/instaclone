export const USER_FAGMENT = `

fragment UserParts on User {
    id
    userName
    email
    firstName
    lastName
    bio
    posts {
        id
        caption
    }
}

`;
