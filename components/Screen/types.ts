import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  image: ReactNode;
  onContinue?(): void;
  buttonText?: string;
  href?: string;
  footer?: ReactNode;
  currentState?: number;
  hasDrawer?: boolean;
};

export interface IScreenProps extends PropsWithChildren<Props> {}
