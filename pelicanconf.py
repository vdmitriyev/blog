try:
    import os
    import sys
    sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)) + '\\')
    import personal_configs as configs
except Exception as ex:
    print ('[e] exception: {}'.format(str(ex)))
    pass

AUTHOR = 'vdmitriyev'
SITENAME = "Viktor's blog"
SITEURL = ""

PATH = "content"

TIMEZONE = 'Europe/Berlin'

DEFAULT_LANG = 'en'
LOCALE = "en_US.utf8"
DEFAULT_DATE_FORMAT = ('%B %Y')

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
#LINKS = (
#    ("Pelican", "https://getpelican.com/"),
#    ("Python.org", "https://www.python.org/"),
#    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
#)

#MENUITEMS = (
#    ('Main', SITEURL),
#    ('Interesting', SITEURL + '/category/interesting.html'),
#    ('Research', SITEURL + '/category/research.html'),
#    ('Thoughts', SITEURL + '/category/thoughts.html'),
#    ('Разное', SITEURL + '/category/raznoe.html')
#)

# Social widget
SOCIAL = (
    ("Github", "https://github.com/vdmitriyev"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

OUTPUT_PATH = "blog-output"
STATIC_PATHS = ['images']

THEME = 'pelican-twitchy'

try:
    GOOGLE_ANALYTICS = configs.GOOGLE_ANALYTICS
except Exception as ex:
    pass