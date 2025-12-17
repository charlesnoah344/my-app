import Image from "next/image";

import { addPost, getPosts, removePost, editPost } from '@/lib/posts'


export default async function BlogApp() {
  const posts = await getPosts()
  return (
  
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 max-w-5xl mx-auto">
      <h1 className="text-center text-3xl my-0 sm:text-3xl md:text-4xl"> Wikipedia </h1>
      <form action={addPost} className="flex flex-col">
        <label className="text-center text-3xl my-0 sm:text-3xl md:text-4xl">
          <textarea placeholder="Entrer votre article" className="border w-full h-40 text-base my-8 sm:text-base md:text-base" name="title" ></textarea>
        </label>
        <button className="px-4 py-2 rounded-md font-medium text-blue-600 border-2 border-blue-600/90
         bg-white hover:bg-ppy-2 ink-50 ">Submit</button>
      </form>
      <h1 className="text-center text-xl my-0 sm:text-3xl md:text-4xl px-4 py-4 "> ARTICLES </h1>
        <ul>
        {posts.map((post, id) => (
          <div className="py-5">
          <form  >
            <div>
          <textarea
            name="title"
            defaultValue={post.title}
            className="border w-full h-40 px-2"
          >
          </textarea>
          <li className="bold text-1xl"> id de l'article : {post.id}</li>
          </div>
            <button formAction={removePost.bind(null, post.id)} key={id}  className="px-4 py-2 rounded-md font-medium text-blue-600 border-2 border-blue-600/90
             bg-white hover:bg-pink-50 ">
              Delete article
            </button>
            <button formAction={editPost} key={id} className="px-4 py-2 rounded-md font-medium text-blue-600 border-2 border-blue-600/90
             bg-white hover:bg-pink-50 ">
              Edit article
            </button>
            <input type="hidden" name="id" value={post.id} />

          </form>
          </div>
        ))}
      </ul>
      </div>
  )
}

