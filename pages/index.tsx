import { useState } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import Image from 'next/image';

import Screen from '../components/Screen';
import { IScreenProps } from '../components/Screen/types';

import QRImage from '../public/images/qr.png';
import CopyImage from '../public/images/copy.png';
import ProImage from '../public/images/pro.png';
import ShoeImage from '../public/images/shoe.png';
import Icon1 from '../public/images/1.svg';
import Icon2 from '../public/images/2.svg';
import Icon3 from '../public/images/3.svg';
import Icon4 from '../public/images/4.svg';
import Icon5 from '../public/images/5.svg';
import Icon6 from '../public/images/6.svg';
import Icon7 from '../public/images/7.svg';
import Icon8 from '../public/images/8.svg';
import Icon9 from '../public/images/9.svg';
import Icon10 from '../public/images/10.svg';
import Icon11 from '../public/images/11.svg';
import Icon12 from '../public/images/12.svg';

enum State {
  Welcome,
  Shoe,
  Copy,
  Pro
}

const ListItems = [
  {
    icon: Icon1,
    text: 'Exclusive QR code designs'
  },
  {
    icon: Icon2,
    text: 'QR codes with custom logo'
  },
  {
    icon: Icon3,
    text: 'No advertising'
  },
  {
    icon: Icon4,
    text: 'Creation of additional formats'
  },
  {
    icon: Icon5,
    text: 'Batch Scan'
  },
  {
    icon: Icon6,
    text: 'Remove duplicate barcodes'
  },
  {
    icon: Icon7,
    text: 'Copy to clipboard'
  },
  {
    icon: Icon8,
    text: 'Confirm scans manually'
  },
  {
    icon: Icon9,
    text: 'iCloud synchronization'
  },
  {
    icon: Icon10,
    text: 'More Themes'
  },
  {
    icon: Icon11,
    text: 'Unlimited export'
  },
  {
    icon: Icon12,
    text: 'Business Scanner Mode'
  }
];

const createListItem = (imageSrc: any, text: string) => (
  <ListItem disableGutters style={{ padding: '0' }} key={text}>
    <ListItemAvatar style={{ minWidth: 15, marginRight: 14 }}>
      <Image src={imageSrc} layout="responsive" alt={text} quality={100} />
    </ListItemAvatar>
    <ListItemText
      primary={text}
      primaryTypographyProps={{ variant: 'body2' }}
    />
  </ListItem>
);

const useStyles = makeStyles(() => ({
  image: {
    display: 'block',

    '+ &': {
      display: 'block',
      width: '100%'
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  const [currentState, setCurrentState] = useState(State.Welcome);

  const SLIDES_DATA: Record<State, IScreenProps> = {
    [State.Welcome]: {
      image: (
        <Image
          src={QRImage}
          layout="responsive"
          alt="Create and share QR codes with a unique design"
          quality={100}
        />
      ),
      onContinue: () => setCurrentState(State.Shoe),
      children: (
        <Typography align="center">
          Create and share QR codes with a unique design.
        </Typography>
      )
    },
    [State.Shoe]: {
      image: (
        <Image
          className={classes.image}
          layout="responsive"
          src={ShoeImage}
          alt="Scan products to get prices and additional information."
          quality={100}
        />
      ),
      onContinue: () => setCurrentState(State.Copy),
      children: (
        <Typography align="center">
          Scan products to get prices and additional information.
        </Typography>
      )
    },
    [State.Copy]: {
      image: (
        <Image
          src={CopyImage}
          layout="responsive"
          alt="Create and share QR codes with a unique design"
          quality={100}
        />
      ),
      onContinue: () => setCurrentState(State.Pro),
      children: (
        <Typography align="center">
          Import the scan history into your favorite spreadsheet, e.g. Excel or
          Numbers.
        </Typography>
      )
    },
    [State.Pro]: {
      image: (
        <Image
          src={ProImage}
          layout="fixed"
          alt="Pro version"
          quality={100}
          width={174}
        />
      ),
      hasDrawer: true,
      children: (
        <List>{ListItems.map(l => createListItem(l.icon, l.text))}</List>
      ),
      buttonText: "LET'S GO",
      footer: (
        <Typography align="center" variant="body2">
          3 day trial then $0.99/Year, cancel anytime
        </Typography>
      )
    }
  };

  return (
    <Container disableGutters>
      <Screen {...SLIDES_DATA[currentState]} currentState={currentState} />
    </Container>
  );
}
