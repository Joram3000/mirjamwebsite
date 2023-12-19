import { AppShell } from "@mantine/core";
import MirjamKroonHomepage from "../../pages/Home";
import NavbarNew from "../navbar/indexnew";

const Layout: React.FC = () => {
  return (
    <AppShell header={{ height: 100 }}>
      <AppShell.Header>
        <NavbarNew />
      </AppShell.Header>

      <AppShell.Main>
        <MirjamKroonHomepage />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
