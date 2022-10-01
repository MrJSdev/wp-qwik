import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  const profilePhoto = 'images/riyaz-profile-photo.avif';

  return (
    <div className="flex flex-wrap sm:inline-block text-left">
      <div className="flex-2 pr-4 sm:w-full sm:text-center sm:mb-5">
        <img src={profilePhoto} className="w-40 sm:m-auto sm:w-32 rounded-full border-2 border-gray-200" alt="" />
      </div>
      <div className="flex-1 order-2 text-gray-800 text-base sm:text-sm">
        <p className="mb-6">
          A Senior Frontend Engineer with over six years of experience and a passion for writing quality, high-performance, and maintainable code following best practices by heart.
        </p>
        <p>
          I have a background in developing many web apps. In my current company, I am working on invoicing and bills, and on my previous company, I worked on fleet management systems that helped many transports, governments, and school entities.
        </p>
      </div>
    </div>
  )

})

export const head: DocumentHead = {
  title: 'Portfolio',
};



