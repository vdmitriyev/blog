### About

Original articles of the following blog http://vdmitriyev.github.io/blog/ in the markdown format configured to be compiled with ```pelican``` and deployed/commited to the github.

## Usage

* Install [pelican](https://github.com/getpelican/pelican) python package
```bash
pip install pelican
```
* For configs check ```pelicanconf.py```
* Compile markdown files into html. Two options are available (a) ```localhost``` and (b) ```github account``` file.
```bash
pelican content
```
* (alternative) use pre-shipped ```bat``` script ```scripts/compilePelican.bat```
* Run simple HTTP server to check the results
```bash
cd ..
python -m http.server 5151 --bind 127.0.0.1
```
* (alternative) use internal web server from pelican
```
pelican --listen
```
* (alternative) use pre-shipped ```bat``` script
```scripts/startSimpleHTTP.bat```

### (Github Actions) 

* Personal configurations - create a Github  tokens for (Settings -> Secret and variables -> Actions):
	+ GOOGLE_ANALYTICS = 
	+ PELICAN_THEME_REPO = https://github.com/ingwinlu/pelican-twitchy
	+ PELICAN_THEME_NAME = pelican-twitchy
* Activate ```gh-pages``` in the git repository: Settings -> Pages -> Branch (set to ```gh-pages``` and ```/root```)


### (local) personal configurations

You need to create ```personal_configs.py``` file and fill following fields:
```text
GOOGLE_ANALYTICS = u'UA-'
```

More about configs and configs themselves you can find in pelican's [quickstart](https://docs.getpelican.com/en/latest/quickstart.html)

### (local) Theme

* Review themes
    - Github - https://github.com/getpelican/pelican-themes
    - Demos- https://pelicanthemes.com/

* Install themes (e.g, ```pelican-twitchy```)
```
git clone https://github.com/getpelican/pelican-themes
pelican-themes --install pelican-themes/pelican-twitchy
```

### Author

* Viktor Dmitriyev
