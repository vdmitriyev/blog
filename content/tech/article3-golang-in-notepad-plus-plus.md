Title: Unlock Syntax Highlighting in Notepad++ for Go
Date: 2024-09-21 20:00
Summary: 
Tags: notepad++, go, golang, highlight, tech

Updated on: **21.09.2024**

Highlighting code in a text editor like Notepad++ or Visual Studio Code is a important feature for software developers. It helps you quickly identify different elements in the code (e.g., variables, functions, and keywords). This makes it easier to read, understand, and find specific parts of your code.

### The Right Tool for the Job

Using a good text editor is like having a powerful tool in your toolbox. It could be challenging to only use a basic text editor for coding tasks. However, using a lightly weighted editor with features like syntax highlighting, code completion, and debugging can save you a lot of time and frustration. For me personally, such editor on a Windows is Notepad++ .

### Missing proper highlighting for golang in Notepad++

Unfortunately Notepad++ doesn't have built-in syntax highlighting for Go. Or I was not able to properly enable it. This means that when you open a Go file in Notepad++, the code won't be colored and elements like keywords, variables, and functions will look like a usual text.

Notepad++ has a handy feature that lets you create your own "User Defined Languages". This means you can customize the editor to highlight code for any programming language, including Go. You could create a special XML file with rules to define the syntax of your language, and Notepad++ will use these rules to color-code your code.

Do not worry, if you need a **ready to go** highlighter for golang use can use the one, I had created for me: [go_simple_darkmode_monokai.xml](https://github.com/vdmitriyev/sourcecodesnippets/blob/master/notepad%2B%2B/go_simple_darkmode_monokai.xml)

### Installation

Installation is straightforward. Open Notepad++, download this XML file [go_simple_darkmode_monokai.xml](https://raw.githubusercontent.com/vdmitriyev/sourcecodesnippets/refs/heads/master/notepad%2B%2B/go_simple_darkmode_monokai.xml) and install it as follows:

**Menu => Language -> "User Defined Language" -> "Define your language..." -> Import.**

Now you have a new user language installed as "go (simple, dark mode, monokai)", which is should be active in case you are using dark mode in Notepad++. Here is a example, who it could look like:

![alt text]({static}../images/tech-03-golang-highlight-notepad++.png)