import MainHeader from "@/components/MainHeader/MainHeader";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout>
      <Header>
        <MainHeader />
      </Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </Layout>
  );
};

export default MainLayout;
