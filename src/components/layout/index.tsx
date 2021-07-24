import Header from 'components/header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
