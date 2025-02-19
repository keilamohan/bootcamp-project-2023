import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type IBlog = {
    title: string;
  slug: string; 
    date: Date;
    description: string; // for preview
  image: string; // for individual blog page
    comments: Comment[]; // array for comments
};

export type IComment = {
  user: string;
  comment: string;
  time: Date;
}   

// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: {type: String, required:false}
    //content: { type: String, required: true },
});

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;