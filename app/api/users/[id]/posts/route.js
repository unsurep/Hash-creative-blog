import { dbConnect } from "@/utilities/dbConnect";
import Prompt from "@/models/prompt";

export const GET = async (request, { params })=>{
    try {
        await dbConnect();

        const prompts = await Prompt.find({
            creator: params._id
        }).populate ('creator');

        return new Response(JSON.stringify(prompts),{status:200})
        
    } catch (error) {
        return new Response ('Failed to fetch all prompts', {status:500})
        
    }
}