import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export default function Singlepost() {
  const {current_user} = useContext(AuthContext)
  const { id } = useParams();
  const [post, setPost] = useState(null); // Initialize as null

  useEffect(() => {
    fetch(`/post/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setPost(response); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        // Handle the error as needed
      });
  }, [id]);

  return (
    <div>
      {
        current_user && current_user?
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={post && post.user && post.user.profile_image}
                    alt=""
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {post && post.user && post.user.username}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {post && post.created_at}
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {post && post.title}
              </h1>
            </header>
            <figure>
              <img src={post && post.image} alt="" />
            </figure>
            <p className="mt-8">{post && post.content}</p>
          </article>
        </div>
      </main>
    </div>:
            <p className='text-red-900 text-centre font-bold' >Not Authorized to view this page</p>
          }
        </div>
  );
}
