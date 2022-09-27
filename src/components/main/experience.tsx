import { component$ } from '@builder.io/qwik';
import experiences from '~/data/experience.json';
import educations from '~/data/education.json';
import ExperienceItem from '~/components/main/experience-item';
import { Experience } from '~/types/Portfolio';
export default component$(() => {



  return <>
    <div class="experiences py-10 sm:py-6 inline-block w-full px-2">
      <h2 class="text-3xl font-bold uppercase py-10 sm:py-5 sm:text-2xl text-center text-primary">
        Experience & Education
      </h2>
      <div class="flex flex-wrap -mx-2">
        <div class="item w-1/2 sm:w-full px-2 mb-4">
          {experiences.map(
            (experience: Experience, index: number) => (
              <ExperienceItem
                title="Experience"
                experience={experience}
                total={experiences.length}
                index={index} />)
          )}
        </div>

        <div class="item w-1/2 sm:w-full px-2 mb-4">
          {educations.map(
            (experience: Experience, index: number) => (
              <ExperienceItem
                title="Education"
                experience={experience}
                total={experiences.length}
                index={index} />)
          )}
        </div>
      </div>
    </div>
  </>
});