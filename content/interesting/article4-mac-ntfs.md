Title: Copy from Mac OS to the HDD with NTFS File System
Date: 2015-02-02 21:05
Summary:
Tags: howtos, mac tutorials, trick

Even in the 21th century it's very tricky accomplish simple tasks like copying files from the Mac OS to the HDD, in case drive disk formatted as NTFS. To overcome this issues without paying money, but investing a bit of your time, plenty of patience, some "searching with the google skills", command line and good luck are required. After researching this particular question for a while, and trying some very slow solutions (SFTP and other, like copying techniques with means of local network) I finally found a script, which worked for me and solved my problem at the end.

Most of the solutions online advises to edit '**/etc/fstab'** file on the Mac OS in a way described by this article [Quick Tip: How to Write to NTFS Drives in OS X Mavericks](http://computers.tutsplus.com/tutorials/quick-tip-how-to-write-to-ntfs-drives-in-os-x-mavericks--cms-21434). But simple following instructions didn't work for me. And after searching more, I came across ready bash script that was performing the same steps as described in an online articles. And finally it worked for me. You can find solution which I used for myself [here](https://gist.github.com/vdmitriyev/8d240233a6ae6a6e0615), original script by [@noma4i](https://github.com/noma4i) can be found [here](https://github.com/noma4i/NativeNTFS-OSX/blob/master/ntfs.sh).
