import { component$ } from "@builder.io/qwik"

export default component$(() => {
  const bannerImage = 'images/banner-new.svg';

  return <>
    <div className="flex sm:block md:flex items-center my-8 pb-24">

      <div className="content w-6/12 md:text-left sm:w-full md:mx-w-auto md:w-6/12 sm:order-last">
        <h2 className="text-6xl font-black text-white sm:text-4xl">
          Hi,
        </h2>

        <h2 className="text-6xl font-black text-white leading-none sm:text-4xl">
          I am Riyaz
        </h2>

        <h3 className="text-2xl font-bold text-white mt-4 sm:text-base">
          a Senior Front-End Engineer
        </h3>

        <a href="mailto:khanriyaz24@gmail.com" className="bg-gradient inline-block rounded shadow-lg mt-6 hover:bg-blue-600 px-10 py-2 text-white border-none font-semibold">
          Hire me
        </a>
        
        <a href="https://mrjs.dev/assets/riyaz-resume.pdf" target="_blank" className="ml-2 sm:ml-0 shadow-lg inline-block rounded mt-6 border-gray-200 border px-10 py-2 text-white font-semibold text-sm hover:bg-blue-700 ">
          Download CV
        </a>
      </div>

      <div className="banner w-6/12 md:w-7/12 sm:w-full sm:mt-10 sm:order-1 sm:mx-w-full">
        <img src={bannerImage} className="w-full" alt="banner image" />
      </div>
    </div>
  </>
})