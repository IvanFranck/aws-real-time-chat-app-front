import graphQLClient from "@/APIClient"
import { getUser } from "@/graphql/queries"

export const findContact = async (email: string) => {
    try {
        const response = await graphQLClient.graphql({
            query: getUser,
            variables: {
                email
            }
        })
        return response
    } catch (error) {
        console.error(error)
        throw new Error("Error when finding user")
    }
    
}