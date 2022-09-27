import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const logo = 'images/mrjs-logo.svg';

  return (
    <header className="absolute left-auto right-auto z-10">
      <div className="container mx-auto">
        <img src={logo} className="h-12" alt="Logo" />  
      </div>
    </header>
  );
});
