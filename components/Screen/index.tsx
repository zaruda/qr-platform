import React, { FC, Fragment } from 'react';

import { Button, Grid } from '@material-ui/core';

import ArrowRightIcon from '../icons/ArrowRightIcon';

import useStyles from './styles';
import { IScreenProps } from './types';
import Progress from '../Progress';
import Drawer from '../Drawer';

const Screen: FC<IScreenProps> = ({
  image,
  onContinue = () => {},
  buttonText = 'CONTINUE',
  href,
  children,
  currentState,
  hasDrawer = false,
  footer
}) => {
  const classes = useStyles();
  const DrawerWrapper = hasDrawer ? Drawer : Fragment;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <div className={classes.imageContainer}>{image}</div>
        {children}
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <div className={classes.footerContent}>
          {footer}
          <Progress
            className={classes.progress}
            currentIndex={currentState as number}
          />
        </div>
        <DrawerWrapper>
          <Button
            color="primary"
            variant="contained"
            endIcon={<ArrowRightIcon />}
            onClick={onContinue}
            href={href}
            fullWidth
          >
            {buttonText}
          </Button>
        </DrawerWrapper>
      </Grid>
    </Grid>
  );
};

export default Screen;
