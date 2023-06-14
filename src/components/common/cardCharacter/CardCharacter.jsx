import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { padding } from '@mui/system'

const CardCharacter = ({personaje}) => {
    let {image, name, species} = personaje
  return (
    <Card sx={{ width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom  component="div">
            {name}
          </Typography>
          <Typography  color="text.secondary">
            {species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardCharacter