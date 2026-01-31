import conf from "../conf/conf";
import {Client, ID, Databases, Query, Storage} from 'appwrite'

export class AppwriteService {

    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, authorId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    authorId,
                    likes: [],
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage , }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async toggleLike(slug, usre)






};