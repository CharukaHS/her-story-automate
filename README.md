# Her Story, Detective Chief Inspector achievement

Script to achieve "Detective Chief Inspector" in [Her Story](https://store.steampowered.com/app/368370/Her_Story/)  
Have any issues? DM me yxka#9995  

## Prerequisite

1. Install [node js](https://nodejs.org/en/)
2. Clone or [download](https://github.com/CharukaHS/her-story-automate/archive/refs/heads/master.zip) the script
3. Open command prompt inside the script folder
4. Enter followin command
   ```bash
   npm i # or yarn
   ```

## How to use

1. Open the game in 1920x1080 resolution, full screen in main display (if you have multiple displays). If your resolution is different than this, you may have to edit the mouse locations in the index.js file.
2. Start the game and type word BLANK in the search bar. (Check the [youtube video](https://youtu.be/m385nSoAmcE))
3. Open the terminal inside the script folder. (Make sure you completed the prerequisites, otherwise it doesnt work)
4. type and enter `node index.js`
5. Focus on the game
6. Wait :)

## How its work

It is a little trick mentioned in [here](https://steamcommunity.com/sharedfiles/filedetails/?id=468583264). Every video has the tag BLANK initially, so the script use it to query videos and view them and remove the BLANK tag. So in the next query, all 5 videos are tagged with BLANK and unwatched videos.
