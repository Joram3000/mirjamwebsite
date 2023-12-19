import { AppShell } from "@mantine/core";
import MirjamKroonHomepage from "../../pages/Home";
import NavbarNew from "../navbar/indexnew";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <AppShell>
      <AppShell.Header withBorder={false}>
        <NavbarNew />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
        {/* <MirjamKroonHomepage /> */}
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
