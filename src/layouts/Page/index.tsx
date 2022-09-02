import { Outlet } from 'react-router-dom';

import { AppProvider } from 'contexts/AppContext';

import { Footer } from '../Footer';
import { TopNav } from '../TopNav';

export function PageLayout({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  return (
    <AppProvider>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
    </AppProvider>
  );
}
