import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'enums';
import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { Venue } from 'pages/Venue';

import { PageLayout } from './layouts/Page';

export function Router({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  const [, { language }] = useTranslation();
  // react router v6 not accepting regex on path yet
  // https://github.com/remix-run/react-router/issues/8254
  // const localePath = `:locale(${SUPPORTED_LOCALES.join('|')})`;

  return (
    <Routes>
      <Route
        path="/:locale"
        element={
          <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        }
      >
        <Route index element={<Home />} />
        <Route path={`${AppRoute.User}/:id`} element={<Venue />} />
        <Route path={`${AppRoute.Venue}/:id`} element={<Venue />} />
        <Route path={AppRoute.About} element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${language}`} replace />} />
    </Routes>
  );
}
