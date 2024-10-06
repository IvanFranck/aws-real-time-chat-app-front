import { Amplify } from 'aws-amplify';
import appsyncConfig from "./aws-exports"
import { generateClient } from "aws-amplify/api"


Amplify.configure({
    ...appsyncConfig,
    API: {
      GraphQL: {
        ...appsyncConfig.API.GraphQL,
        defaultAuthMode: 'apiKey'
      }
    }
  });
  
  
const graphQLClient = generateClient();

export default graphQLClient;