import dynamic from "next/dynamic"


const Blog = () => {
  return (
    <div className="">
      <h1 className="font-inter font-bold text-2xl">Vol. 1</h1> 

      <div>
        <iframe src="/hops1.pdf" width={0}  height={0} alt='pdf-file' className="h-screen w-[20rem] md:w-[30rem] "/> 
      </div>

      {/* <h2>volume 2</h2>
      <div>
        <iframe src="/hops.pdf" width={1000} height={1000} alt='pdf file' className=""/> 
      </div> */}
    </div>
  )
}

export default Blog
