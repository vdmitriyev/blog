Title: Learn Go Programming: A Beginner's Guide for 2024
Date: 2024-07-07 20:00
Summary: 
Tags: tech, links, go, golang, materials

Updated on: 08.07.2024

This article is for the once who would like to learn some "new shiny tech thing". In this case this new thing is a [Go](https://go.dev/) programming language (a.k.a. Golang). Learning a new programming language could be challenging on its own. Specially, if a language you are learning is no like other once you had learned and used for a long (or short) time. In my own case, this hits quite good: despite having experience with "classical compiled languages" like Java, C#, etc. and "classical interpreted languages" like Python, Ruby, etc. it is still not an easy job to master Go (e.g. always try to add "golang" to your search query, in order to find the related materials).

In general, learning something completely new in tech is incredibly challenging. There are a couple of hurdles to overcome:

* **No time**: Between work, study, and other personal commitments, finding time to learn a new skill is challenging
* **Dedication/Commitment**: Besides time, sticking with a learning path takes focus and perseverance. For instance, a technology could be big and complex, and boring :) 
* **Hands On**: Sometimes, our current job role doesn't offer opportunities to apply newly acquired technical skills. As a result, lack of practical application could be demotivating.
* **Factor: FUN**: Even with a lot of dedication and time, some technical subjects can be very dry. Without finding a way to make the learning process engaging, it's easy to lose interest.
* **Start Issue**: The last hurdle I would like to mention is a hesitation to find a right starting point. However, remember - sometimes you just need to start.

Considering mentioned issues, let us get back to learning Go. One can easy fill overwhelmed with materials, new concepts, issues, opinions and gate keeping activities. Thus, finding out a right way is crucial. In most of the cases figuring out the "the right path" is going to be individual. This particular article is an attempt to share personal experience on learning Go in 2024.

Below is a path, which was followed by me on the way to learn Go (still not finished).

**Generic Approach**

* Try to learn something new about Go everyday
* Get yourself a Github (Gitlab, etc.) account, create a repository (e.g., ```learn-go```) and start writing everyday some code Go
* Get yourself a README.md or Github Gist to track materials you have read/understood and what else is on your todo.
* Follow right people/account on Twitter (X) or in other communities you like.
* Make use of use of Large Language Model (LLM). However, it will not be able to help you with every single question. However, it could help you with ideas as well as code generation. I had used Gemini in particular.
* Don't waste much time on Podcasts. There are couple of good once, but for a newbie with no Go-context they may be hard to follow.
* Find yourself an open source project to contribute to. "Contribution" should not be directly Go source code, it could be documentation, ideas, discussions.
* Developers learn a lot by reading source code of other people. It works also with Go. BUT, you need to understand a foundation, to comprehend, what is going on in the source code of others (e.g., why ```struct``` is used that much, what is composition, why there are a lot of interfaces defined, what does it mean "receiver function", channels, goroutines, OOP and Go, etc.)

**Concrete Steps and Materials**

After getting through a generic approach one could wonder: "It sound nice and good, but what about concrete steps?". Find below a list of material to be covered in a step-by-step fashion:

* Use IDE (e.g., [Go in Visual Studio Code](https://code.visualstudio.com/docs/languages/go))
* Take your time to go through "old, but gold" [Effective Go](https://go.dev/doc/effective_go)
* Gather hands-on experience by getting through [Tour of Go](https://go.dev/tour/list)
* Implement some tiny project
    + HTTP server based on Go standard library
    + CLI utility
    + ...
* Read article such as "How .. SOMETHING ... is done in Go ..."
    + Configurations, working with environmental variables (e.g., [viper](https://github.com/spf13/viper), )
    + Logging (slog, log, [logrus](https://github.com/sirupsen/logrus))
    + CLI (e.g., [cobra](https://github.com/spf13/cobra), [flag](https://pkg.go.dev/flag))
* Watch videos on youtube about Golang. There are definitely way more people out there making video/learning materials about Go, but for now, I would like to reference following: 
    + [Anthony GG](https://www.youtube.com/@anthonygg_)
    + [Melkey](https://www.youtube.com/@MelkeyDev)
* Watch, understand and try out examples from the amazing Go class by [Matt Holiday](https://www.youtube.com/@mattkdvb5154)
    + [Go Class by Matt Holiday (2020)](https://www.youtube.com/watch?v=iDQAZEJK8lI&list=PLoILbKo9rG3skRCj37Kn5Zj803hhiuRK6)
* Read a book of your choice

In case you are searching for further Go materials, please consider following sources:

* [The Complete Guide to Learning Go](https://www.calhoun.io/guide-to-go/) by Jon Calhoun
* [go-resources](https://github.com/matt4biz/go-resources) by Matt Holiday
