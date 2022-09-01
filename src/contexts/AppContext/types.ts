import { AlertAppearance } from '@tablecheck/tablekit-alert';

export type AppContextState = {
  alertMessage: string;
  error: string | null;
  isLoading: boolean;
  isAdmin: boolean;
  updateError: (value: string) => void;
  setLoading: (value: boolean) => void;
  setAlertMessage: (value: string) => void;
  setAlertAppearance: (value: AlertAppearance) => void;
  setIsAdmin: (value: boolean) => void;
};
