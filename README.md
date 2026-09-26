### About

Original articles of the following blog http://vdmitriyev.github.io/blog/ in the markdown format configured to be compiled with ```pelican``` and deployed/commited to the github.

## Usage: manually

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
pelican -r --listen
```
* (alternative) use pre-shipped ```bat``` script
```scripts/startSimpleHTTP.bat```

## Usage: using tasks

* Create `.venv` and install dependencies
	```
	task py:install
	```
* Activate `.venv` (PS)
	```
	.\.venv\Scripts\Activate.ps1
	```
* Run the reload server (`.venv` must be activated)
	```
	task py:serve
	```
* Create search index
	```
	task py:search-index
	```

### Deploy with Github Actions

* Personal configurations - create a Github  tokens for (Settings -> Secret and variables -> Actions):
	+ GOOGLE_ANALYTICS = ''
	+ PELICAN_THEME_REPO = https://github.com/vdmitriyev/simplify-next
	+ PELICAN_THEME_NAME = simplify-next
* Activate ```gh-pages``` in the git repository: Settings -> Pages -> Branch (set to ```gh-pages``` and ```/root```)


### Deploy Locally 

###### Personal Config

You need to create ```personal_configs.py``` file and fill following fields:
```text
GOOGLE_ANALYTICS = u'UA-'
```
More about configs and configs themselves you can find in pelican's [quickstart](https://docs.getpelican.com/en/latest/quickstart.html)

###### Add Theme + Plugins

* Review themes
    + Github (all themes) - https://github.com/getpelican/pelican-themes
    + Github (selected themes) 
		- https://github.com/vdmitriyev/simplify-next
* Review plugins
	+ Github (all plugins) - https://github.com/pelican-plugins

* Install themes (e.g, ```simplify-next```)
```
git clone https://github.com/vdmitriyev/simplify-next
pelican-themes --install simplify-next
```
* Add `simplify-next` folder to your `.gitignore`

### Author

* Viktor Dmitriyev
