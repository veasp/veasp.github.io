---
title: 001 Hello world
date: "2021-02-19T19:40:00.000Z"
description: "I am alive"
categories: [misc, blog]
comments: true
---

## What is this

> "What I cannot create, I do not understand” - Richard Feynman

This is going to be my blog, where I will write my thoughts, findings and interesting ideas about software development. Don't expect regular content here.

I wanted to try out Github Pages and decided that I could try writing a blog as well, since I've wanted to start writing in my free time for quite some time now.
I have quite a lot of projects that I've worked on - some finished, some not so much.
After every single attempt of creating something, I've learned something new and I will view this blog as my place to vent out and share my thoughts about whatever I've been up to.

I have a tendency to learn by doing, so I do *generate* a lot of code in my free time (not saying that any of it any good).


### Look at this fizzbuzz code if you have nothing better to do


```rust
fn fizzbuzz(n: u32) -> () {
    if is_divisible_by(n, 15) {
        println!("fizzbuzz");
    } else if is_divisible_by(n, 3) {
        println!("fizz");
    } else if is_divisible_by(n, 5) {
        println!("buzz");
    } else {
        println!("{}", n);
    }
}
```
