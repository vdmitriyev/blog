Title: How to export MS Power Point Slides to a PDF file and keep Animations
Date: 2015-06-03 18:00
Tags: PPT, PDF, animations, export

![From Animated PPT to Animated PDF]({filename}../images/random/PPT-to-PDFwith-Animations.png)

From time to time I need to present some content in-front of the audience, of course in form of the presentation with some slides helping me. Despite I'm not a huge fan of animations, they can be really helpful in delivering the ideas during a talk. Especially, animations within the presentations are extremely helpful when the content of the slide should be delivered step-by-step.

It's not a secret that immediately after a talk, people who attended the talk, most likely are going to forget most of the content. As one of the possible solutions, the presenter can provide people with presentation by the end of it. And unusually, to be it more "interoperable" and "system independent" the format of the distribution should be PDF and not TeX or PPT.

I my particular case, I need some solution to convert PPT presentations with animations into PDF. I started to search for a solution for the problem "How the MS Power Point (PPT or PPTX) slides can be exported to the PDF with animations", and found following solutions:

* [PPspliT](http://www.dia.uniroma3.it/~rimondin/downloads.php) is a PowerPoint add-in that splits animation effects into different slides
* [Neil Mitchell's VBA Script for PowerPoint -> PDF (Part 1)](http://neilmitchell.blogspot.de/2007/11/creating-pdf-from-powerpoint-with.html)
* [Neil Mitchell's VBA Script for PowerPoint -> PDF (Part 2)](http://neilmitchell.blogspot.de/2007/11/powerpoint-pdf-part-2.html)

The solution with VBA scripts was the best suiting my needs. Here are the steps (I used 2013 version):

* Open your MS Power Point presentation and navigate to the "View" panel
* Click on Macros
* Within the Macros panel type some dummy name (like "test") and click on "Create"
    - The IDE (integrated development environment) Microsoft Visual Basic For Application will be opened
	- **NOTE** - there is also an alternative how to start IDE, use hot keys "Ctl + F11"
* Within the opened IDE replace text with the code from [here](http://neilmitchell.blogspot.de/2007/11/creating-pdf-from-powerpoint-with.html) and save it
* On the "Saving Dialog" windows click yes and close IDE
* Go to your opened Power Point presentation, click on "Macros" and run "AddElements"
* Now you can notice that the all original slides were "dimmed", and new slides were added. In newly created slides, the original slides with animations are duplicated.
    - **NOTE** Even if the original elements within the MS Power Point presentation located in one single block are appeared one by one during the animation, after transformation to multiple slides with help of VBA script, the block with animations will appear only one as a whole, to overcome this issues, the elements that are animated should be separated into different blocks
* Navigate to the "Save As" and select PDF as the target format, enjoy created PDF file!

I hope it helped you as it helped me.
