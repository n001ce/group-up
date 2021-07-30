# GROUP - UP

## View the Website:


click [here](https://ow-group-up.herokuapp.com/)

### API
Open OW [api](https://ow-api.com/)

## Motivation:


Overwatch is a 6 person (soon to be 5) fps strategy game revolved around teamwork, team compositions, and strategy. One of the biggest issues players face in this highly competitive game is the toxicity from random teammates. Currently, you can use the LFG system in the game to find a group to play with. The problem with this is, sometimes when you go to find a group there are none available at the time you are playing. 

Group-UP fixes this problem by offering users the ability to create their own LFG post and find teammates for when they want to start playing the game. 


## Guidelines:

    *   In order to access the website, you need to register with a google account.
    *   Once you are registered you will be taken to the LFG post page where you can view open groups, join the groups, and add comments to the posts.
    *   The navbar allows you to move inbetween the LFG page, View all Profiles page, and a stat search bar.
    *   The stat search bar, which utilizes the OW api, will allow you to type in a gamertag (case sensitive) and platform to view that players information.
    *   When you join a group, the group will show up on your page for others to see, along with the players currently joined.
    *   The LFG post leader has the only ability to edit, create, update, and delete the post. You can remove yourself from the team by selecting "leave group" button on the LFG show page.

## Preview:

![profiles](/public/images/readme/allprofiles.PNG)
![lfg](/public/images/readme/lfg.png)
![lfgpage](/public/images/readme/lfgpage.png)
![mainprofile](/public/images/readme/mainprofile.PNG)

## ERD: 	
![erd](/public/images/readme/erd.png)

## Initial Wireframe:
![wireframe1](/public/images/readme/wireframe1.png)
![wireframe2](/public/images/readme/wireframe2.png)
![wireframe3](/public/images/readme/wireframe3.png)
![wireframe4](/public/images/readme/wireframe4.png)

## Trello Board: 
![tello](/public/images/readme/trello.png)

## Technology Used
* OAuth with Passport
* OW API
* Node.js and Express
* Mongoose and MongoDB
* EJS
* JavaScript
* Bootstrap

## Minimum Viable Product:
* AAU I should be able to sign in with my Google account.

* AAU I should be able directed to the LFG page when signed in.

* AAU I should be able to create, edit, update, and delete a LFG Post

* AAU I should be able to join/leave a LFG and have the LFG show up on my home page

* AAU I should be able to leave a reply on the LFG page

* AAU I should be able to delete my reply on the LFG Page

* AAU I should be able to follow/unfollow other users

* AAU I should be able to see all followers on my home page

* AAU I should be able to search for player stats with the Stat Search Bar

* AAU I should be able not be able to delete others replies or LFG posts

## Stretch Goals:
* AAU I want to be able to sign in with my battle.net account
  
* AAU I want to be able to display my accounts stats on my home page.
  
* AAU I want to be able to be able to leave a review on another players page.
  
* AAU I want to be able create a new direct message group with my Team.
  
* AAU I want to be notified when my LFG is filled.

* AAU I want the LFG to be updated when a user joins my group with what role they selected.

## References

[images](https://overwatch.fandom.com/wiki/Overwatch_Wiki)

## SHOUT OUTS

Cameron Weston for brainstorming