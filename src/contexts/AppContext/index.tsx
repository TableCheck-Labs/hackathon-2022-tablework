import styled from '@emotion/styled';
// import * as Sentry from '@sentry/browser';
import {
  Alert,
  AlertAppearance,
  AlertPosition
} from '@tablecheck/tablekit-alert';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { handleError } from './errorHandler';
import { AppContextState } from './types';

const GlobalAlert = styled(Alert)`
  width: auto;
  right: 3%;
`;

const contextDefaultValues: AppContextState = {
  alertMessage: '',
  error: null,
  isLoading: false,
  isAdmin: false,
  isApiDisabled: false,
  updateError: () => {},
  setLoading: () => {},
  setAlertMessage: () => {},
  setAlertAppearance: () => {},
  setIsAdmin: () => {}
};

export const AppContext =
  React.createContext<AppContextState>(contextDefaultValues);

export const AppProvider: React.FC = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  const [t] = useTranslation();
  const location = useLocation();
  const isApiDisabled = location.search.includes('isApiDisabled');
  const [error, setError] = React.useState<string | null>(
    contextDefaultValues.error
  );
  const [isLoading, setLoading] = React.useState<boolean>(
    contextDefaultValues.isLoading
  );
  const [isAdmin, setIsAdmin] = React.useState<boolean>(
    contextDefaultValues.isAdmin
  );
  const [alertMessage, setAlertMessage] = React.useState<string>(
    contextDefaultValues.alertMessage
  );
  const [alertAppearance, setAlertAppearance] = React.useState<AlertAppearance>(
    AlertAppearance.Primary
  );

  const updateError = (newError: string | null) => {
    if (newError) {
      const parsedError = handleError(newError, t);
      setError(parsedError);
      // Sentry.captureException(parsedError);
    } else {
      setError(null);
    }
  };

  return (
    <AppContext.Provider
      value={{
        error,
        updateError,
        isLoading,
        isAdmin,
        isApiDisabled,
        setLoading,
        alertMessage,
        setAlertMessage,
        setAlertAppearance,
        setIsAdmin
      }}
    >
      {alertMessage && (
        <GlobalAlert
          appearance={alertAppearance}
          isShow
          shouldUsePortal
          position={AlertPosition.TopLeft}
          onClose={() => {
            setAlertAppearance(AlertAppearance.Primary);
            setAlertMessage('');
          }}
        >
          <span>{alertMessage}</span>
        </GlobalAlert>
      )}
      {children}
    </AppContext.Provider>
  );
};
