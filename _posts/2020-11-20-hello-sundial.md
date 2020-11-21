---
layout: post
title: Hello, sundial!
---

<p class="message">
Be careful! This post is a work-in-progress.
</p>

I recently had to talk about one of my recent projects for an interview and I thought that this would be the perfect time to introduce [sundial](https://github.com/gnuyent/sundial) to the world. So, give a warm welcome to:

[sundial](https://github.com/gnuyent/sundial) - "a class schedule wrapper for San Diego State University".

Leveraging [FastAPI](https://fastapi.tiangolo.com/), [Scrapy](https://scrapy.org/), and [SQLAlchemy](https://www.sqlalchemy.org/), sundial provides programmatic access to San Diego State University's (SDSU) class scheduling information. Before starting on this project, I had three requirements:

* It had to be fast
* It had to be useful
* It had to be extensible

With these three things in mind, I got to work.

## FastAPI: Entryway to webdev

Before using FastAPI, I had zero experience doing anything web related.

## Scrapy: An adventure in web scraping

First, I spent a ridiculous amount of time deciding between BeautifulSoup and requests before taking the plunge to learn Scrapy. BeautifulSoup and requests do amazing work for simple web scraping. They are easy to understand and fast. However, creating a pipeline to store data in a database and consistently updating it was painful and required a lot of boilerplate code. Also, scraping which required traversing multiple sites wasn't as simple as a Scrapy spider.

So now, enter *Scrapy*. Scrapy provides a very powerful framework for scraping. The spider feature was awesome, allowing me to use the built-in callback and pipeline features. Scrapy felt cohesive. It didn't require me to write anything extremely complex. See my [spider](https://github.com/gnuyent/sundial/blob/master/sundial/scraper/spiders/all_courses.py) and [pipeline](https://github.com/gnuyent/sundial/blob/master/sundial/scraper/pipelines.py) for more information.

## SQLAlchemy: Structuring lots of data

SQLAlchemy was almost off the table too. I was originally planning on using Python's wonderful `sqlite` library but got sidelined due to the complexity of the pipeline. There was no doubt that my custom `sqlite` pipeline worked, it just wasn't pretty to read. Similarly, I ran into different issues on getting it to play nice with Scrapy.

SQLAlchemy allowed me to easily define tables and relationships, letting me focus on more complex things instead of how I was gonna create a connection to a database. It also helped with creating API endpoints with FastAPI. More on that later.

## A note on readability

I never realized why code readability was a thing, why some pieces of code had more lines of comments than actual lines of code. Then, I decided to take a 2-week break and then came back to *magic*. Magic as in the code worked by I had no idea how it worked.

## Organizing and shuffling code

No one told me that my code had to be *organized*.
