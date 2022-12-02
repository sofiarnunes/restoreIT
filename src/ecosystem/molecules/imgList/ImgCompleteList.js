// Name: Sofia Nunes 
// Date: 29-11-2022
// Motive: component containing all the images of a specific section

import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ImgArray } from './ImgArray';

const ImgCompleteList = ({id, setUrlSelected}) => {

    const innerWidth = window.innerWidth;

    return (
        <Box sx={{ width: '100%', height: '100%'}}>
            <ImageList cols={innerWidth > 600 ? 2 : 1} gap={10} rowHeight={innerWidth > 600 ? 450 : 300}>
                {ImgArray.filter(data => data.id === id || data.imgIdentifier === id).map((item) => (
                    <ImageListItem key={item.url} style={{cursor: 'pointer'}} onClick={() => setUrlSelected(item.url)}>
                        <img
                            src={`${item.url}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                            alt={item.name}
                        />
                            <ImageListItemBar
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                        
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default ImgCompleteList;