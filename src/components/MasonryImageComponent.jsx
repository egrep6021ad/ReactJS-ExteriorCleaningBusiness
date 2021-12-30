import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function MasonryImageList() {
  return (
    <Box sx={{ paddingLeft:'5%',width: '95%', height: 275, overflow: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={5}>
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
    img: 'https://images.squarespace-cdn.com/content/v1/559a6f92e4b0ce9ff9fa3aaa/1545154631389-LKGL36WWDBFL6QIPELTX/AdobeStock_132998856+%281%29.jpeg?format=2500w',
    title: 'Clean Residential Exterior Deck in Atlanta, North Georgia',

  },
  {
    img: 'https://www.theplancollection.com/Upload/Designers/142/1041/Plan1421041MainImage_27_11_2020_9_381_251.jpg',
    title: 'Clean Residential Exterior Roof and Driveway in Atlanta, Georgia',

  },
  {
    img: 'https://www.timberlandexteriors.com/wp-content/uploads/2018/05/residential-roofing-solutions-cottage-grove-mn.jpg',
    title: 'Clean Residential Exterior Driveway and Roof in Atlanta, North Georgia',
 
  },
  {
    img: 'https://www.morgancorp.com/assets/front-end/img/products/refrigerated/cold-star/heros/morgan-refrigerated-cold-star-00901-mobile.jpg',
    title: 'premier commercial cleaning of industrial exterior and roof in Atlanta, Georgia',

  },
  {
    img: 'https://urbanize.city/atlanta/sites/urbanize.city.atlanta/files/styles/2018_article_teaser_360x260_retina/public/background/2021-07/Underground%20Atlanta%20street.jpg?itok=8Ai1CODC',
    title: 'Underground Atlanta Clean Commercial Exterior Services, best premier cleaning in North Georgia',
  },

  {
    img: 'https://i.pinimg.com/originals/a7/45/92/a745929818d34a198356b4755ebe6818.png',
    title: 'Clean residential house, exterior roof and driveway in Atlanta, north deorgia',

  },


  {
    img: 'https://www.blackstonepipeline.com/wp-content/uploads/2020/08/image004-1.jpg',
    title: 'premier commercial cleaning of industrial exterior and roof in Atlanta, Georgia',
  },
  {
    img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/starbucks-coffee-athens-georgia-downtown-athens-art-reid-callaway.jpg',
    title: 'premier commercial cleaning of industrial small business in Athens, Georgia North Georgia Bulldog known as Dawg Country',
    
  },
  {
    img: 'https://cdn02.webit.com/api/v1/Image/3AFA04FCFF4C3A2FE884C9D3524018CA/3AFA04FCFF4C3A2FE884C9D3524018CA.jpg?size=1280x960',
    title: 'Beautiful blue home in Atlanta Georgia, Lawn maintenence is spectacular',
  },
  {
    img: 'https://i.pinimg.com/originals/7b/30/cb/7b30cb501755bd4ce7c2925c356588c2.jpg',
    title: 'New hampshire white',
  },
  {
    img: 'https://img.grouponcdn.com/deal/8GUqUBCLFUNfM2ycFNcU/eG-1671x1003/v1/c870x524.jpg',
    title: 'White home with a beautful lawn, north Metro atlanta Exterior Services',
  },
];
export default MasonryImageList