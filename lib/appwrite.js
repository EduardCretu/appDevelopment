import { Client, Avatars, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
  .setProject("<PROJECT_ID>") // Replace with your project ID
  .setPlatform('com.example.idea-tracker');


export const account = new Account(client)
export const avatars = new Avatars(client)
