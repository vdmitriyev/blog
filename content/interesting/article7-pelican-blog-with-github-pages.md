Title: Getting Started with Pelican and Github Pages
Date: 2024-03-03 18:00
Summary:
Tags: python, blog, pelican, tutorial


This tutorial will guide you through setting up and deploying a blog using [Pelican](https://github.com/getpelican/pelican). It is a popular static site generator written in Python. Pelican offers a powerful and flexible way to create beautiful and content-focused blogs. Original blogs could be written in Mardown and formated using special themes.

<br>

#### Install and Configure Pelican

```bash
pip install pelican
```

Pelican uses a configuration file named ```pelicanconf.py```. Refer to this file for various settings you can customize for your blog.

<br>
#### Building Your Blog
<br>

Use the following command to compile your Markdown content files into HTML:
```
pelican content
```
This generates HTML files based on your Markdown content.

<br>
#### Alternative Compilation Method (Batch Script)
<br>

If you prefer, you can use the a batch script located at [scripts/compilePelican.bat](https://github.com/vdmitriyev/blog/blob/main/scripts/compilePelican.bat). This script performs the same function as the previous command. The script is a part of the blog repository of this blog project.

<br>
### Install Theme
<br>
An example how to install a custom theme called ```simplify-theme```
```bash
git clone https://github.com/vuquangtrong/simplify-theme
pelican-themes --install simplify-theme
```

<br>
#### Previewing Your Blog
<br>

To preview your generated HTML files locally, navigate to the parent directory of your Pelican project and run the following command:

```
python -m http.server 5151 --bind 127.0.0.1
```

This starts a simple HTTP server on port 5151 (you can change the port number if needed). Access your blog in your web browser at [http://localhost:5151](http://localhost:5151).

<br>

Pelican provides an internal web server for previewing your blog. Run the following command to use it:
```
pelican -r --listen
```

This starts the server, and you can access your blog at [http://127.0.0.1:8000](http://127.0.0.1:8000 ) by default. The option ```-r``` will help with automatic recompilation from Markdown to HTML.

<br>
#### Deploying to GitHub Pages
<br>

To deploy your blog to GitHub Pages, you'll need to generate personal access tokens in your GitHub account. 

Go to **Settings -> Secrets and variables -> Actions**.

Create tokens for the following variables:

* GOOGLE_ANALYTICS (optional, for Google Analytics integration)
* PELICAN_THEME_REPO (URL of your theme repository, e.g., https://github.com/vuquangtrong/simplify-theme)
* PELICAN_THEME_NAME (name of your theme, e.g., simplify-theme)

After that, you will need to **activate GitHub Pages** within your GitHub repository. In your GitHub repository settings, navigate to Pages. Select the branch named gh-pages and the source directory set to ```/root```. This configures GitHub Pages to use the content from your ```gh-pages``` branch.

Create a ```pelican.yml``` file in the ```.github/workflows``` of your github repository. Example can be viewed [here](https://github.com/vdmitriyev/blog/blob/main/.github/workflows/pelican.yml).

<br>
#### Summary
<br>

This tutorial provides a foundation for getting started with Pelican and Github Pages. With its flexibility and ease of use, Pelican empowers you to create a compelling and personalized blog. Feel free to explore the official Pelican documentation for more advanced features and customization options.

The current blog could be used as an example for your development - [blog](https://github.com/vdmitriyev/blog). It also contains further details on pelican usage on a local machine.