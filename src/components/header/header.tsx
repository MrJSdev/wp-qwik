import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const logo = '/images/mrjs-logo.svg';

  return (
    <div className='container relative mx-auto px-2 pt-2 sm:min-w-full'>
      <header className="text-left z-10">
          <a href="/">
            <img src={logo} className="h-12" alt="Logo" />
          </a>
      </header>
    </div>
  );
});
