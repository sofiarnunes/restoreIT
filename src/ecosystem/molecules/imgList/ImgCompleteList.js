// Name: Sofia Nunes 
// Date: 29-11-2022
// Motive: component containing all the images of a specific section

import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';
import { ImgArray } from './ImgArray';
import InfoIcon from '@mui/icons-material/Info';

const ImgCompleteList = ({id, setUrlSelected}) => {

    return (
        <Box sx={{ width: '100%', height: '100%'}}>
            <ImageList variant="masonry" cols={2} gap={10}>
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
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>

                            }
                            />
                        
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default ImgCompleteList;