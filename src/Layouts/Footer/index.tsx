import { Link } from '@tablecheck/tablekit-typography';
import { useTranslation } from 'react-i18next';

import { AppRoute } from 'enums';

import { FooterLink, FooterWrapper } from './styles';

export function Footer(): JSX.Element | null {
  const [t, { language }] = useTranslation();

  return (
    <FooterWrapper>
      <div>
        <FooterLink to={`/${language}/${AppRoute.About}`}>
          {t('attributes.links.about')}
        </FooterLink>
      </div>
      <div>
        <Link href={`http://tablecheck.com/${language}/join`} target="_blank">
          {t('attributes.links.powered_by')}
        </Link>
      </div>
    </FooterWrapper>
  );
}
