import { component$ } from '@builder.io/qwik';
import SkillItem from '~/components/main/skill-item';

import skills from '~/data/skills-data';
export default component$(() => {
  return <>
    <div class="py-12 sm:py-6 mt-10 rounded px-4">
      <h2 class="text-3xl font-bold uppercase py-10 mt-5 sm:text-2xl sm:py-5 text-center text-primary">
        Skills
      </h2>
      <div class="flex flex-wrap -mx-2">
        {skills.map((skill) => <SkillItem skill={skill} />)}
      </div>
    </div>
  </>;
})