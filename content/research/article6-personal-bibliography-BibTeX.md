Title: Publications Bibliography Based on BibTeX
Date: 2015-11-13 18:00
Tags: TeX, BibTeX, bibliography, research

![BibTeX]({filename}../images/random/bibtex.png)

It's often not a trivial task to manage bibliographies of your own publications. Especially, it's getting harder with time as long as more services and tools appearance on the horizon. And very often there is no chance for research communities to ignore some of them because they are first of all good and simplify life and also receive a good acceptance from a community and widely known. Thus, it means that there are a number of amazing services, which definitely must be used by researchers on a regular bases. But for a moment let's focus more on BibTeX related services (or the ones that are using BibTeX as one of the "core" sources of "knowledge" and "data"). One of the "fresh" examples is an open source initiative and platform at once called [ORCID](https://orcid.org/), which tries to simplify the process of managing a history of your publications and make them more sustainable, easily manageable and widely available.

I personally prefer to use a combination of [Jabref](http://jabref.sourceforge.net/) + [ORCID](https://orcid.org/) + [ResearchGate](researchgate.net) + [Git](https://bitbucket.org/) to sustain in some sense history of my publications. However, it's not enough to just "sustain" your bibliography and usually, you will need to integrate your own "bibliography" in various places such as CV, personal web site, department/university web site, and many other services. And in case you will have a new publication it more likely that all aforementioned places should be updated or actualized simultaneously, which is really a tedious task. The answer to the challenge can be a usage of such a storage format for bibliography, which is mostly understood by all tools and it's obviously BibTeX. Thus it leads to the situation when everything should be properly formatted and stored in the BibTeX files somewhere. In such case
[ORCID](https://orcid.org/) can be a very handy solution.

In order to simply mine and my colleagues' lives, I wrote a collection of small scripts that can help to organize and properly "transform" BibTeX files.

*  [pyorcid](https://github.com/vdmitriyev/pyorcid)
    + This utility (see example [orcid_bibtex_to_html.py](https://github.com/vdmitriyev/pyorcid/tree/master/examples)) automates process of downloading BibTeX from dedicated orcid profiles (check description for details). It uses [Jabref](http://jabref.sourceforge.net/) for BibTeX to HTML rendering process.
* [bibtextohtml](https://github.com/vdmitriyev/bibtextohtml)
    + This is just a short description how to use [Jabref](http://jabref.sourceforge.net/) in order to convert BibTeX files into nice-looking html pages, which can be later on used anywhere. For rendering into HTML you can use default teamplte  Process of getting HTML from BibTeX with Jabref is highly customizable, it means that you can easily create templates for your "personalized" html page. However, besides
* [jsorcidbibtex](https://github.com/vdmitriyev/jsorcidbibtex)
    + Javascript library that access particular ORCID account, parses available BibTeX-es and renders them into HTML **directly** inside your browser. It means that in order to "show" your bibliography on your web site all you need to do is to include this library and provide proper ORCID ID. It's not highly configurable, but it's got some basic "templating" functionality (for more details check description and example).


Wish you all the best in maintaining your bibliography!
