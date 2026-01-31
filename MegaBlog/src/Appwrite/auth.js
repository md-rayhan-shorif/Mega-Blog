import { Client, Account, Databases, ID } from 'appwrite';
import conf from '../conf/conf';

export class AuthService {
    client = new Client();
    account;
    databases;
    

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    async createAccount({ email, password, name, username }) {
        try {
            
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // ২. একাউন্ট তৈরি হলে লগইন করানো (সেশন তৈরি)
                await this.login({ email, password });

                // ৩. ডাটাবেসে ডকুমেন্ট তৈরি
                await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteProfilesCollectionId,
                    userAccount.$id,
                    {
                        userId: userAccount.$id,
                        username: username,
                        fullName: name, 
                        bio: 'New blogger',
                        followers: [],
                        following: [],
                        savedPosts: []
                    }
                );
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw error; 
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async logout() {
    try {
        await this.account.deleteSession('current');
    } catch (error) {
        console.log("Appwrite service :: logout :: error", error);
    }
}

    async getUserProfile(userId){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProfilesCollectionId,
                userId
            );
        } catch (error) {
            console.log("Appwrite service :: getUserProfile :: error", error);
        return null;
        }
    }
    // ! pore eta niye kaj korbo. eta profile show korar jonno. navbar e
    // getFilePreview(fileId){
    //     return this.
    // }

    async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
}
}

const authService = new AuthService();
export default authService;