import { component$ } from '@builder.io/qwik';
import experiences from '~/data/experience.json';
import ExperienceItem from '~/components/main/experience-item';
import { Experience } from '~/types/Portfolio';
export default component$(() => {

  return <>
    {
    experiences.map(
      (experience: Experience, index: number) => (
      <ExperienceItem title="Experience" experience={experience} total={experiences.length} index={index} />
    ))
    }
    
    {
    experiences.map(
      (experience: Experience, index: number) => (
      <ExperienceItem title="Experience" experience={experience} total={experiences.length} index={index} />
    ))
    }
  </>
});