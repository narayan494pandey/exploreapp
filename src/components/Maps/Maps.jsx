import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Papper,Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';
const Maps = ()  =>{
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat:50.5,lng:8.6};
  
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact bootstrapURLKeys ={{key:'AIzaSyCR9UEBTwnZJX2IRQzq2rE3VMdqSEz534Y'}}
      defaultCenter = {coordinates} center = {coordinates} defaultZoom ={14} margin={[50,50,50,50]} options={ '' }
      onChange={ '' }
      onChildClick={ '' }
      
      >

      </GoogleMapReact>

    </div>
  )
}
export default Maps;