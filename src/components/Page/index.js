import './page.scss';

function Page({ children }) {
  return (
    <main id="page" data-testid="page">
      {children}
    </main>
  );
}

export default Page;
