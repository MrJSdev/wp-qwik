import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <>
      <input
        type="range"
        value={state.number}
        max={50}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
      <div
        style={{
          '--state': `${state.count * 0.1}`,
        }}
        class={{
          host: true,
          pride: loc.query['pride'] === 'true',
        }}
      >
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            class={{
              square: true,
              odd: i % 2 === 0,
            }}
            style={{ '--index': `${i + 1}` }}
          />
        )).reverse()}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Extra catchy title',
};