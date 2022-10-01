import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/main/hero';
import You from '~/components/main/you';
import Skill from '~/components/main/skill';
import Experience from '~/components/main/experience';
import Projects from '~/components/main/projects';
import '~/assets/icons/style.css';
import '~/assets/css/global.css';

export default component$(() => {
  return (
    <div className='container mx-auto px-2 sm:min-w-full'>
      <div className="relative">
        <Hero />
        <div className="absolute right-0 sm:relative sm:bottom-0 bottom-b-100 text-center left-0 w-full -mb-7">
          <div className="w-8/12 sm:w-full sm:shadow-md inline-block bg-white rounded-lg px-10 py-8 shadow-lg">
            <You />
          </div>
        </div>
      </div>
      <div className="mx-auto sm:px-0 sm:min-w-full bg-gray-100 rounded-t-lg">
        <Skill />
      </div>
      <div className="bg-gray-200 mx-auto px-2 sm:min-w-full ">
        <Projects />
      </div>
      <div className="mx-auto px-2 rounded-b-lg bg-gray-100 sm:min-w-full">
        <Experience />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Mr. JS Developer',
};
