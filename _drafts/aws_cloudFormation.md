---
layout: post
title: "AWS CloudFormation - Infrastructure as Code"
excerpt: ""
tags: [AWS, Cloud Computing, CloudFormation]
feature: https://www.cloudcomputing-news.net/media/img/news/xabstract-digital-network-communication-picture-id1157827217.jpg.800x600_q96.png.pagespeed.ic.PeZ8dHnPIc.jpg
comments: true
---
{% include note.html content="Prior knowledge in Amazon Web Service(AWS) is required for this post " %}

Since the emergence of cloud computing, many businesses started leveraging the power of on demand computing resources. It enabled us to spin up various computing resources in a matter of minutes from months without any upfront capital. Amazon Web Service (AWS) is one of such cloud computing platforms which launched back in 2006. Although it gave us lots of benefits, the pain of managing of infrastructure remained.

It was on 2011 AWS launched a new service called CloudFormation, a service where we can define how our infrastructure should look like. With CloudFormation, managing infrastructure becomes much easier and faster.

## Sample code

{% highlight yaml %} 
docker:
    - image: ubuntu:14.04
    - image: mongo:2.6.8
      command: [mongod, --smallfiles]
    - image: postgres:9.4.1 {% endhighlight %}