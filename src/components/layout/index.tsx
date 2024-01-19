import { AppShell, useMantineTheme } from "@mantine/core";
import Navbar from "../navbar/index";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import ScrollToTop from "../../helpers/ScrollToTop";

const Layout: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: 90 }} bg={theme.colors.custom[0]}>
      <AppShell.Header withBorder={false}>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <ScrollToTop />
        <Outlet />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
