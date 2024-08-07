const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348147243199";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_19_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkUVVldXU5dHhYOVlHd3FvbjY5ODRuNnEwT3B1dTU1eFJyU3dwNFZJdjhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpSmZnVHVtQVFfbXlFTWVjZkFTczN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmMmNkZDkwLTljNGUtNDRhMC1hZjY0LTM2MWY3YzAyZTQ4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAxMjEsXG4gICAgICAxNjUsXG4gICAgICAyMDIsXG4gICAgICAxMzksXG4gICAgICA2NixcbiAgICAgIDg1LFxuICAgICAgMTkxLFxuICAgICAgMjAyLFxuICAgICAgMjEwLFxuICAgICAgMjE4LFxuICAgICAgMjMxLFxuICAgICAgMTk5LFxuICAgICAgMTI0LFxuICAgICAgNTMsXG4gICAgICAyMDAsXG4gICAgICA2MSxcbiAgICAgIDE3MixcbiAgICAgIDE1LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDI1NCxcbiAgICAgIDE3OCxcbiAgICAgIDEzLFxuICAgICAgMTgzLFxuICAgICAgMTkxLFxuICAgICAgMjM5LFxuICAgICAgMzgsXG4gICAgICAyMjIsXG4gICAgICAxNjksXG4gICAgICAxMjUsXG4gICAgICA2NixcbiAgICAgIDE5LFxuICAgICAgMjMzLFxuICAgICAgMjU1LFxuICAgICAgMTk0LFxuICAgICAgMTI5LFxuICAgICAgMTIyLFxuICAgICAgMjE1LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1JHQVlTQlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDcyNDMxOTk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM4MTczNjcwMDgwNzM5OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkxOdlBNREVPdmx6N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4T05MWUg4ZHJnRWkzSUtyVjZ3MWdXczhvNVdoMGZaOW0wNGxwa3Y5SzBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZ2MWc0WTdLQWFVV2Fha0FjWlpkRWgrUGtFNEEzaU8zZWdDTWtzNHEzV3ZiKzc5d2JGRVkrSXl5SkpnZzNKZTJjbzc0UWFFb2s1Q2hzcHlqNUtXSENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5namk3OExSVVRwUnNrMDFlQ0dvOTVWZFljNVNmdTczdW9JY3dyeHd3OWtxRFFGUllkZ1F5b1RGWXJqVS9INERmdlo0K21qUDZvNTU0dXdLWU9wVUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDcyNDMxOTk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNjkxNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVmRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNWZC5qc29uIjogIntcImtleURhdGFcIjpcImFHK3RycmRuK1NDUDFFdzRrNEpMejNvMkIvQ25mcmViL1Fob21QeC9WQVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0NzQ3MTgyNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjk2NzMwNDUxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
