'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'
import axios from 'axios'

const CreatePrompt = () => {
    const router=useRouter();
    const {data: session} = useSession();



    const [submitting, setSubmitting]=useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag:'',
    });

    const createPrompt = async(e)=>{
        e.preventDefault();
        setSubmitting(true);
        

        try {
            // api call to the prompt endpoint
            const response = await axios.post ('http://localhost:3000/api/prompt/new', {
                prompt: post.prompt,
                userId: session?.user.id,
                tag: post.tag
            });

            if ( response.status == 201 ) {
                router.push('/');
            }
   
        } catch (error) {
            console.log(error);  
        } finally {
            setSubmitting(false)
        }
    }

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit= {createPrompt}
    
    />
  )
}

export default CreatePrompt;
