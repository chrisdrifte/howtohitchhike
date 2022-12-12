import PreviewRibbon from './PreviewRibbon';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <div className="min-h-screen">
      {preview && <PreviewRibbon />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
