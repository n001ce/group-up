import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography, Divider } from '@material-ui/core';


const UserLanding = ({userProfile, location}) => {

  return (
    <>
        <MyProfileBar userProfile={userProfile} />
        <Box ml={35} mr={5} my={3}>
        <Typography variant={'h4'} >Streamers I follow..</Typography>
        <Box my={3}>
        <Grid container spacing={3}>
        {/* {userProfile?.media?.map(media=>
          (media.type === 'stream')? <UserStreamCard
          key={media._id}
          media={media}
          userProfile={userProfile}
          edit={false}/> : <Box style={{height:'280px'}}></Box>
          )} */}
        </Grid>
      </Box>
        <Divider/>
        <Box my={2}>
        <Typography variant={'h4'} >My Games</Typography>
        <Box my={3}>
        <Grid container spacing={3}>
        {/* {userProfile?.media?.map(game=>
          (game.type === 'game')? <UserGameCard
          key={game._id}
          game={game}
          userProfile={userProfile}
          edit={false}/> : <Box style={{height:'280px'}}></Box>
          )} */}
          </Grid>
      </Box>
        </Box>
        </Box>
    </>
  )
}
 
export default UserLanding