Title: How to Write a Team Publication in LaTeX and Dont Get Mad
Date: 2015-05-29 18:00
Tags: collection, phd, research, latex, writing

![Don't get mad, get motivated and use LaTeX]({filename}../images/random/dont-get-mad-use-latex.png)

<center>
**Publishing is not a sprint to the finish line.** </br>
**There is no finish line.** </br>
**You just keep on running.** </br>
via [@GradElitism](https://twitter.com/GradElitism/status/606184614453846018)
</center>

A really huge amount of people around the glob use [LaTeX](http://www.latex-project.org/) as a primary software tool (or you can say "package") for writing, formating or just maintaining their own texts. Especially, it's very popular word processing package in academia, at least at part that is related to the [STEM](http://en.wikipedia.org/wiki/STEM_fields) ( **S**cience, **T**chnology, **E**ngineering, and **M**athematics).

Usually, the scientific publications are done by some group of people, who are united by some common ideas or just by chance. Before starting the process of writing, besides the general ideas and directions of a future publication, normally, the structure of a publication is identified. The early structure identification helps a lot in organizing a proper writing process. The structural organization usually goes beyond the conference (or any other targeted event) driven templates and suggesting and would include some details about the content itself and responsibilities of a particular author.

While writing a collaborative publication, one of the painful and never-ending problems is the synchronization of changes. With time, the synchronization starts to be more painful. When the content of the paper is continuously improved by multiple authors. More and more variants (or branches) are created by authors. And the usage of the MS Word (despite it's really amazing, very robust, more than the popular tool for creating texts and other types of information) adds a huge amount of overhead.

In order to write a publication I usually try to organize the process in the following way:

* Separate content of a publication from it's processing part
* Make writing process transparent (host and share all the publication files through the dropbox)
* Organize versioning (default feature of documents hosting services like Dropbox)
* Separate part of each author into different TeX files and include them with *\input{<PATH-TO-TeX>}* directive
	- Obviously, separating each author's part into a separate file won't cause

The process of writing is quite simple - you need to write down what you would like to deliver. The tricky part, besides content, is that the LaTeX paper is "a priori" separated into smaller parts. And it chunked in a way that for each particular part of the paper will be one responsible author. The basic publication structure can be see in this [example publication](https://github.com/vdmitriyev/pylatexmerger/tree/master/sample-paper), it consists out of following folders:

* "abstract" folder contains abstract part of the publication;
* "authors" folder contains all authors listed with accordance to the conference (or other targeted event) template
* "bibliography" folder contains a bibtex formatted file with all cited works
* "models" folder contains the images, diagrams or other graphical resources used within the publication. The root of the folder usually contains the original sources, whether the sub-folder lik "png", contain a exported version of the object in particular format.
* "build-latex-win" folder contains bat files that are able to properly compile and build pdf from TeX sources (it's also possible to use pure command line or [TeXMaker](http://www.xm1math.net/texmaker/) + installed LaTeX (e.g. [MiKTeX](http://miktex.org/))to achieve same functionality)
* The root folder of the publication contains the central LaTeX file with all 'includes' directives

And in case you followed described about approach in wiring publications, you can afterwards merge separated TeX files into a single file using following python script [pylatexmerger](https://github.com/vdmitriyev/pylatexmerger). Basically, given script automatically merges all separated part of your TeX publication into a single TeX file and also tries to generate bat files for further compilation.

I hope it will help you to avoid unnecessary "fights" with "formats" and "forms" while writing your next publication.
