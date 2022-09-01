import { TFunction } from 'react-i18next';

interface Error {
  response: {
    data: {
      error: string;
      error_description: string;
    };
    status: number;
  };
}

export function handleError(error: Error | string, t: TFunction): string {
  if (
    error &&
    typeof error !== 'string' &&
    error.response &&
    error.response.data.error
  ) {
    switch (error.response.data.error) {
      case 'invalid_grant':
        return t('errors.invalid_email_or_password');
      default:
        return String(error);
    }
  }
  return String(error);
}
