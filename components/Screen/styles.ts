import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
    gridGap: theme.spacing(2),
    padding: theme.spacing('10%', 3, 3, 3),
    maxWidth: 600,
    margin: 'auto'
  },
  content: {
    display: 'grid',
    gridTemplateRows: 'max-content auto',
    alignContent: 'center'
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  },
  footer: {
    margin: theme.spacing('auto', 0, 0)
  },
  title: {
    margin: theme.spacing(0, 3, 3)
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold
  },
  subtitle: {
    margin: theme.spacing(0, 3, 3)
  },
  terms: {
    marginTop: theme.spacing(0.5)
  },
  footerContent: {
    marginBottom: theme.spacing(2)
  },
  progress: {
    marginTop: theme.spacing(1)
  }
}));

export default useStyles;
