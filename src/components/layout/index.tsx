import { AppShell, useMantineTheme } from "@mantine/core";
import NavbarNew from "../navbar/indexnew";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const Layout: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <AppShell header={{ height: 100 }} bg={theme.colors.custom[0]}>
      <AppShell.Header withBorder={false}>
        <NavbarNew />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
