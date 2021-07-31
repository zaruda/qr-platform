import { FC } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core';
import { IProgressProps } from './types';

const useStyles = makeStyles<Theme, { dotsCount: number }>(theme => ({
  progress: ({ dotsCount }) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${dotsCount}, max-content)`,
    gridGap: theme.spacing(1),
    justifyContent: 'center'
  }),
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: '#8C8A91'
  },
  selected: {
    backgroundColor: '#020002'
  }
}));

const Progress: FC<IProgressProps> = ({
  className,
  dotsCount = 4,
  currentIndex = 0
}) => {
  const classes = useStyles({ dotsCount });

  return (
    <div className={clsx(className, classes.progress)}>
      {new Array(dotsCount).fill(null).map((_, index) => (
        <div
          key={index}
          className={clsx(classes.dot, {
            [classes.selected]: currentIndex === index
          })}
        />
      ))}
    </div>
  );
};

export default Progress;
