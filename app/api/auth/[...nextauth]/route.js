import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { dbConnect } from "@/utilities/dbConnect";
import User from "@/models/user";



const handler = NextAuth ({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })

    ],

    callbacks: {
        // this session would tell us the user that is currently online
        async session({ session }) {
            const sessionUser = await User.findOne ({
                email: session.user.email
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },

        async signIn ({ profile  }) {
            try {
                await dbConnect();
                
                // check if user(user coming from models) already exist
                const userExists = await User.findOne({
                    email: profile.email
                });
    
    
    
                // if not, create a new user
                if (!userExists) {
                    await User.create ({
                        email: profile.email,
                        username: profile.name.replace (" ", "").toLowerCase(),
                        image: profile.picture
                    });
                }
    
    
                return true;
            } catch (error) {
                console.log(error);
                return false;
                
            }
    
    
        }





    }





    

    

})

export { handler as GET, handler as POST};