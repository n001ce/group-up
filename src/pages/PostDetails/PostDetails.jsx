import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import * as reviewAPI from '../../services/reviewService'
import {Box, Grid, Typography, Divider,Chip } from '@material-ui/core';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import LiveBadge from '../../components/BadgeAvatar/LiveBadge';
import StarRating from '../../components/StarRating/StarRating'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import * as reviewsAPI from '../../services/reviewService'

class PostDetails extends Component {
  state = {
    post:[],
    replies:[]
  }

  async componentDidMount() {
    
  }

  
  handleAddReply = async review => {
      
    }
  

  
  handleDeleteReply = async id => {
    
  }


  render() {
    const { post, replies } = this.state
    return (
      <>
      <MyProfileBar userProfile={this.props.userProfile} style={{display: 'flex'}}/>
      <Box ml={32} mr={5} my={3}>
        <>
        <LiveBadge live={} name={}/>
        <Box ml={5} mt={3}>
        <Grid container spacing={3}>
        <Grid item md={6} lg={6} mx={'auto'} >
        <Box mb={2} >
        <img className='img-responsive' src={} alt={}/>
        </Box>

        </Grid>
        <Grid item md={6} lg={6} mx={'auto'} >
        <Box mt={2} >
        <Typography variant={'h5'} display={'inline'}>Language: </Typography>
        <Chip label={} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Game Streaming: </Typography>
        <Chip label={} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Live: </Typography>
        <Chip label={} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Stream Title: </Typography>
        <Chip label={} color="secondary" variant="outlined" />

        </Box>
        
        <Box mt={1} mb={2}>
        <Typography variant={'h5'}>Stream Started at: </Typography>
        <Chip label={} color="secondary" variant="outlined" />

        </Box>
  
        </Grid>
        </Grid>
        </Box>

        </>              
        <Box my={2}>
              <Divider/>
              </Box>
              <Box m={1}>

              <Typography variant={'h5'}>Reviews</Typography>
          <Grid container spacing={3}>
          
          <Grid item xs={12} s={12} md={6} lg={3} mx={'auto'} >
            <ReviewCard
              userProfile={}
              review={}
              handleDeleteReview={}
              />
       
              </Grid>

          <>
            <StarRating
              api={this.props.match.params.id}
              media={searchResult._id}
              userProfile={this.props?.userProfile?._id}
              handleAddReview={this.handleAddReview}
            />
            
          </>
        
        
          <>
             
          </>
                   
</Grid>

</Box>

      </Box>
      </>
    );
  }
}
 
export default PostDetails;