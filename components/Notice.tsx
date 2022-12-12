import Container from './Container';

type Props = {};

const Notice = ({ children }: React.PropsWithChildren<Props>) => {
  if (!children) {
    return null;
  }

  return (
    <aside className="fixed bottom-0 w-full md:sticky md:top-0 z-50 bg-neutral-100 p-2 text-center text-sm md:text-base">
      <Container>{children}</Container>
    </aside>
  );
};

export default Notice;
