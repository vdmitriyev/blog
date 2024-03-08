import os
import sys
from datetime import datetime

GOOGLE_ANALYTICS = None

try:
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)) + "\\")
    from personal_configs import GOOGLE_ANALYTICS
except Exception as ex:
    print("[e] exception: {}".format(str(ex)))
    GOOGLE_ANALYTICS = os.environ.get("GOOGLE_ANALYTICS")

print(f"[i] using GOOGLE_ANALYTICS: {GOOGLE_ANALYTICS}")

AUTHOR = "vdmitriyev"
SITENAME = "Viktor's blog"
SITEURL = ""
COPYRIGHT_YEAR = datetime.now().year

PATH = "content"

TIMEZONE = "Europe/Berlin"

DEFAULT_LANG = "en"
LOCALE = "en_US.utf8"
DEFAULT_DATE_FORMAT = "%B %Y"

PAGE_PATHS = [
    'pages'
]

DIRECT_TEMPLATES = [
    'index',
    'authors',
    'categories',
    'tags',
    'archives',
    '404',
]

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

PLUGINS = [
    'neighbors', # find next, previous article
]

# Markdown extensions

# Social widget
SOCIAL = {
    'facebook': "#",
    'github'  : 'https://github.com/vdmitriyev',
    'twitter' : 'https://twitter.com/vdmitriyev',
    'linkedin': "#"
}

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

OUTPUT_PATH = "blog-output"
DELETE_OUTPUT_DIRECTORY = True

STATIC_PATHS = ["images"]

#THEME = "pelican-twitchy"
THEME = "simplify-theme"

