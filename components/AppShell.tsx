import { AppShell, Container, Header, List, Navbar } from '@mantine/core';
import Link from 'next/link';
import { ReactElement } from 'react';

interface ShellProps {
  children?: React.ReactNode;
}

function Shell({ children }: ShellProps): ReactElement {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} padding="xs">
          <List>
            <List.Item>
              <Link href="/compound-interest">Juros compostos</Link>
            </List.Item>
          </List>
        </Navbar>
      }
      header={
        <Header height={60} padding="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Container fluid>{children}</Container>
    </AppShell>
  );
}

export default Shell;
