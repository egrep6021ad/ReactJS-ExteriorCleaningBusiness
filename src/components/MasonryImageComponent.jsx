import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import window from './window.jpg'
import niceHouse from './niceHouse.jpg'
import niceGrey from './niceGrey.jpg'
import window2 from './window2.jpg'
import brickHouse from './brickHouse.jpg'
import trashCans from './trashCans.jpg'
import trucks from './trucks.jpg'
import bHouse from './bHouse.jpg'
import mossHouse from './mossHouse.jpg'
function MasonryImageList() {
  return (
    <Box sx={{ paddingLeft:'5%',width: '95%', height: 275, overflow: 'scroll' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: window,
    title: 'Clean Residential Exterior Deck in Atlanta, North Georgia',

  },
  {
    img: niceHouse,
    title: 'Clean Residential Exterior Roof and Driveway in Atlanta, Georgia',

  },
  {
    img: niceGrey,
    title: 'Clean Residential Exterior Driveway and Roof in Atlanta, North Georgia',
 
  },
  {
    img: window2,
    title: 'premier commercial cleaning of industrial exterior and roof in Atlanta, Georgia',

  },
  {
    img: brickHouse,
    title: 'Underground Atlanta Clean Commercial Exterior Services, best premier cleaning in North Georgia',
  },

  {
    img: trashCans,
    title: 'Clean residential house, exterior roof and driveway in Atlanta, north deorgia',

  },
  {
    img: trucks,
    title: 'Clean residential house, exterior roof and driveway in Atlanta, north deorgia',

  },
  {
    img: bHouse,
    title: 'Clean residential house, exterior roof and driveway in Atlanta, north deorgia',

  },
  {
    img: mossHouse,
    title: 'Clean residential house, exterior roof and driveway in Atlanta, north deorgia',

  }


 
];
export default MasonryImageList