### NOTE BEFORE PROGRESSING FURTHER:
This "type" folder is for separating different kinds of scamming, classified by service domain names. Each website archived and/or a folder containing archived websites, shall be called 'record'.

If you are contributing to this, you can add a folder with service domain name if it's not done so already, such as `discord.com/` or `steamcommunity.com/` and then make a record of those scam websites by creating your folders with the corresponding scam domain names inside, for example `steencumgoonity.com/` (/s). 

Please preserve the website structure as-is, for instance, if the scammer put their main working site, i.e. the site that is used mainly for frauding user to type their information in, at `example.com/discount/abc/def/login.html`, just create each folder until it looks right. Usually all the other locations in the scam webserver might not be used at all, and may throw you 404, then either would reveal the tool used for hosting, such as apache3 or nginx (which is funny to watch btw). 

*psst*: instead of manually saving html pages using ctrl-c or inspection mode (that legacy, unreliable way), you can use the following wget command to extract the full website into a local directory:

```sh
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent <URL_OF_WEBSITE>
```

this should make a full mirroring from the host/target location right to the working directory (or a custom directory if you have specified one).

It's perhaps a good practice to check them out, but please do so, and the rest as well, in a safety-first manner: open anything unsafe in browsers' private/incognito mode. NEVER PROVIDE SENSITIVE DATA TO SUCH WEBSITES. If you don't know anything about saving or are dreaded of your belongings being exposed, better just look around.

Upload it directly (if you have rights) or you can fork and make pull requests to this repo. Complying to all of these will ensure this repo be properly managed and will make it more useful for people looking around.

### how readme.txt-s are written, a.k.a. readme.txt structure

every website records need a readme.txt for best clarification, i.e. more clear information about the records themselves.

template is as following.
```
[website domain name (no https/http or protocols pls)]
archived [date (d/m/y, i.e. 1/jan/1970)]

nslookup result while online: [in your terminal, type nslookup {domain name}]
======terminal output====== [just an example:]

Server:		127.0.0.1
Address:	127.0.0.1#53

Non-authoritative answer:
Name:	{domain name}
Address: 123.45.67.89
Name:	{domain name}
Address: 98.76.54.231
Name:	{domain name}
Address: 8888:7777:4444::d10
Name:	{domain name}
Address: 6969:420::dead:beef

======end terminal output======


other info:
[treat this as either a note or flag.]
```

