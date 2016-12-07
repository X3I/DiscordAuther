# DiscordAuther
A simple, small, yet useful utility tool for verifying authenticated user's Discord identity.

## Usage

```
var Auther = require('discordauther');
var session = new Auther('d0Bfl3FlzvVZX20CmWFls');
// Takes the recieved bearer token as first param

setTimeout(() => {
  // Wait about 2 seconds or longer for request to finish processing.
  console.log(session);
  // This should output the Auther class object, including the important information you were looking for.
}, 2500)
```
If you want me to make it evented (e.g. `Auther.on('ready', obj => {});`), let me know, shouldn't be that hard.
