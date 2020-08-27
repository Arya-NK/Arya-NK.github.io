---
layout: post
title: "AWS CloudFormation - Infrastructure as Code"
date:   2020-08-25
excerpt: ""
tags: [AWS, Cloud Computing, CloudFormation, Infrastructure as Code]
feature: /assets/img/featureImages/second.jpeg
comments: true
---

<div class="alert-custom">
     Prerequisite: This blog post requires prior experience in AWS and YAML. For hands-on, an AWS account is required. 
</div>
<br>

Since the emergence of cloud computing, many businesses started leveraging the power of on-demand computing resources. It enabled us to spin up various computing resources in a matter of minutes without any upfront capital. Amazon Web Service (AWS) is one such cloud computing platform that powers many companies like Netflix. Although it gave us lots of benefits, the challenges of managing infrastructure remained.

It was in 2011, AWS launched a new service called CloudFormation, a service where we can define how our infrastructure should look like. With CloudFormation, managing infrastructure becomes much easier and faster. In a nutshell, we can say CloudFormation is an AWS service that provides Infrastructure as code (IaC) capabilities.


# What?

AWS CloudFormation is a service that allows us to model and provision a collection of related AWS resource in a declarative way.

Suppose we have a new application called unicorn :unicorn: which needs to be set up on the AWS platform. You may need to create security groups, a couple of EC2 instances that need to attach to the security groups, S3 bucket for storage, elastic IPs, and finally, an Elastic Load balancer (ELB) which sits in front of EC2 instances. We can define these resources along with its configurations in a template file. Followed by, CloudFormation will provision those resources with the exact configuration in the right order from that template file.

When working with CloudFormation, there are two important concepts that we need to familiarise, which are **Templates** and **Stacks**.

A **template** is JSON- or YAML-formatted text file that describes our AWS resources. In the case of our unicorn :unicorn: application, we can specify instance type, Amazon Machine Instance (AMI), EC2 key pair, and many other configuration details in a template file. We can specify multiple resources in a single template too. Following is the YAML template snippet for our unicorn EC2 instance.

{% highlight yaml %}UnicornEc2Instance:
  Type: AWS::EC2::Instance
  Properties:
    InstanceType: t2.micro
    ImageId: ami-0ff8a91507f77f867
{% endhighlight %}

A **stack** is a collection of logically related AWS resources. Referring back to our unicorn :unicorn: application, the collection of EC2 instances, elastic IPs, security groups and ELB comprises the stack. As our application grows, we manage the stack by creating, updating, and deleting this collection of resources.

In short, the CloudFormation template is like a blueprint of AWS resources, and the stack will be the actual AWS resources provisioned from that template. So, to create resources for our unicorn :unicorn: application, we start by creating a stack with the CloudFormation template via AWS console, Command Line Interface (CLI), or Application Programming Interface (API). Following that, CloudFormation will provision the resources specified in the template.

# Why?

Now, we have a basic understanding of what CloudFormation is. In case you wonder whether it's worth using the service or not, here are the reasons why.

### Infrastructure Modelling 
*	With AWS CloudFormation, we can define all our required AWS resources in one place which provides a single source of truth. 
*	It provides a level of control over the infrastructure and eliminates the burden of manual changes.
*	With the help of a version control system like Git, any changes to infrastructure can be 
tracked and peer-reviewed with the team before deployment.
*	It also helps to standardize infrastructure components used across an organisation. 

### Automation
*	CloudFormation allows us to build or rebuild the resources on the fly.
*	CloudFormation automatically manages the dependency and orchestrate them most efficiently. In the case of unicorn :unicorn: application, CloudFormation will create the security groups first and then creates the EC2 instances to attach to the security groups.
*	CloudFormation automatically generates the diagram of a stack that illustrates how the resources in a stack map to each other from a template (AWS CloudFormation Designer).

### Changes & Safety controls
*	Any updates or provision of resources are executed in a controlled manner with safety options. CloudFormation can roll back changes to the last deployed state if errors are detected while updating.
*	While provisioning or updating the stack, CloudFormation will preview the change sets and specifically tells whether a resource needs to be replaced or not.
*	As the resource definition and config information reside in a template, it provides much faster troubleshooting.

### Cost 
*	With AWS Cost Explorer and cost allocation tagging, we can understand how much a stack cost.
*	CloudFormation also provides an estimation of how much a stack will cost in the review page while creating or updating stack.
*	We can implement cost-saving strategies. For instance, we can automate the resources in the development environment to shut down after 5 pm and to restart at 8 am.

### Cross account & cross-region management
*	AWS StackSets is a powerful feature that allows us to provision a common set of AWS resources across multiple accounts and regions with a single CloudFormation template. This feature provides the same level of automation, repeatability, and reliability to stack management operations across regions and accounts. 

### Multi-language support
*	CloudFormation supports defining AWS resources in familiar programming languages like TypeScript, Python, Java, or .NET with the help of AWS Cloud Development Kit (AWS CDK). AWS CDK is an open-source software development framework that helps you model your cloud application resources using familiar programming languages, and then provision the infrastructure using AWS CloudFormation.

### Separation of concern
*	There are mainly two frameworks to organise a stack and to implement separation of concerns. We can have a layered architecture that contains multiple layers like network layer, instance layer, and so on. Alternatively, we can adopt a service-oriented architecture, where the stack comprises of manageable parts with each represents a self-contained unit of functionality.

Finally, there is no need to start from scratch to write a template, as several well-defined templates for different use cases already exist.


# How?

Now we have covered the theory part of CloudFormation. Let's move onto a hands-on section where we create a simple template in YAML and upload onto CloudFormation service via AWS console. Remember, we cannot learn CloudFormation thoroughly without any hands-on.

To do this, you must have an AWS account. A free tier AWS account will also work. *[Click here to know more about the AWS free tier account](https://aws.amazon.com/premiumsupport/knowledge-center/what-is-free-tier/)*. In this post, we will use YAML for writing template. You can use JSON or any other supported language via AWS SDK too.

Following is a CloudFormation template to create a S3 bucket named `aws-example-bucket-98765`.

{% highlight yaml %}Resources:
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: aws-example-bucket-98765
{% endhighlight %}

First, copy the above code block and create a file with extension “.yaml" (e.g., *cf_s3_template.yaml*). Please note the bucket name is universal. So, you might need to randomise the bucket name to avoid any errors. Next, log onto the AWS account and go to CloudFormation. Now, follow the instructions and screenshots in the below slides to create your very first CloudFormation stack.

<!-- Slideshow container -->
<div class="slideshow-container gallery">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-2.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-2.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">2 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-3.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-3.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">3 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-4.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-4.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">4 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-5.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-5.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">5 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-6.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-6.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">6 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-7.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-7.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">7 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-8.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-8.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">8 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-9.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-9.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">9 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-10.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-10.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">10 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-11.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-11.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">11 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-12.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-12.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">12 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-13.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-13.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">13 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-14.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-14.jpg" style="width:100%">
    </a>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">14 / 14</div>
    <a href="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-15.jpg">
    <img src="{{site.url}}/assets/img/slides/cloudFormation/cloudFormation_slides-15.jpg" style="width:100%">
    </a>
  </div>
  
  
  
  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
  <span class="dot" onclick="currentSlide(6)"></span>
  <span class="dot" onclick="currentSlide(7)"></span>
  <span class="dot" onclick="currentSlide(8)"></span>
  <span class="dot" onclick="currentSlide(9)"></span>
  <span class="dot" onclick="currentSlide(10)"></span>
  <span class="dot" onclick="currentSlide(11)"></span>
  <span class="dot" onclick="currentSlide(12)"></span>
  <span class="dot" onclick="currentSlide(13)"></span>
  <span class="dot" onclick="currentSlide(14)"></span>
</div>

In the above example, we created a S3 bucket using CloudFormation. If we need to apply a few more changes to the created S3 bucket, we can do so by updating the stack. To understand how to apply those changes, the *[AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)* can help. Assume that we need to make the created S3 bucket into publicly accessible. To do so, add the below line under `Properties` in *cf_s3_template.yaml* file. 

{% highlight yaml %}AccessControl: PublicRead {% endhighlight %}

Select the stack and click on the "Update" button in the AWS CloudFormation management console. Following that, select the option "Replace current template" and upload the updated template file (*cf_s3_template.yaml*). This time, on the review page, you might notice a new section called “Change set preview” as shown in the below screenshot.

<figure>
    <a href="{{site.url}}/assets/img/postimages/second/change_set.png"><img src="{{site.url}}/assets/img/postimages/second/change_set.png"></a>
    <figcaption align="center">Change set preview</figcaption>
</figure>

This section tells how the new changes to the stack might impact the running resources, for example, whether the new changes will delete or replace the resources. In this update, the S3 bucket won't get replaced. However, in case of an update to the S3 bucket name, the S3 bucket will get replaced with a new S3 bucket. 

<span style="color:green">So how do we know what kind of changes can cause replacement?</span>

<span style="color:green">The answer is the **AWS CloudFormation User Guide**. The CloudFormation user guide specifies whether an update in an attribute will cause replacement or not.</span>

Back to updating the stack, CloudFormation will begin applying those changes by clicking on the button "Update stack". Lastly and most importantly, do not forget to delete the stack if it's no longer required to avoid any surprise in the bill. Deleting the stack will also delete the resources unless the “Deletion policy” option says retain. *[To know more about deletion policy, follow this AWS CloudFormation User Guide section](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html)*".

## Anatomy of CloudFormation template

When writing CloudFormation templates, whether its JSON or YAML, there are several relevant sections that we need to know. Following is an example of a YAML-formatted template fragment.

{% highlight yaml %}AWSTemplateFormatVersion: "version date"

Description:
  String

Metadata:
  template metadata

Parameters:
  set of parameters

Mappings:
  set of mappings

Conditions:
  set of conditions

Transform:
  set of transforms

Resources:
  set of resources

Outputs:
  set of outputs

{% endhighlight %}

As you can see, there are various sections in CloudFormation templates which we can make use of. All these CloudFormation template sections are optional apart from `Resources`. In the example template we did earlier, we used the resources section to specify which resource we would like to provision, i.e., S3 bucket. Let's dive more into these sections individually.

### AWSTemplateFormatVersion

The `AWSTemplateFormatVersion` section identifies the capabilities of a template. As of this writing, the latest template format version is `2010-09-09`. Following is an example of a YAML snippet for AWSTemplateFormatVersion.

{% highlight yaml %}AWSTemplateFormatVersion: "2010-09-09" {% endhighlight %}

### Description

The `Description` section is using to include comments about your template, as shown below.

{% highlight yaml %}Description: >
  This is a
  sample template
{% endhighlight %}

### Metadata

As the name suggests, this section is used to include arbitrary JSON or YAML objects that provide details about the template as shown in the following example.

{% highlight yaml %}Metadata:
  Instances:
    Description: "Information about the EC2 instances"
{% endhighlight %}

Besides, there exist some special type of metadata which certain CloudFormation features can utilise, for example, `AWS::CloudFormation::Init` is used to include metadata on EC2 instances for the cfn-init helper script. This is a powerful feature that lets you specify user data to EC2 instance via the CloudFormation template. *[Check out this link to know more about helper script](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html)*.

### Parameters

`Parameters` section is used to customise and provide inputs to the CloudFormation template. This makes the CloudFormation template to reuse. If you have a CloudFormation template which is likely to change in the future, then use parameters. For instance, look at the below parameter that specifies the EC2 instance type.

{% highlight yaml %}Parameters: 
  InstanceTypeParameter: 
    Type: String
    Default: t2.micro
    AllowedValues: 
      - t2.micro
      - m1.small
      - m1.large
    Description: Enter t2.micro, m1.small, or m1.large. Default is t2.micro.
{% endhighlight %}

In the above example, we are using a parameter named `InstanceTypeParameter` to specify the ec2 instance type. If we know the acceptable values for that parameter, we can define those in allowed value. Further, it's possible to control the parameter values via type, default, constraints, min/max length, and so on. Now we have specified a parameter, we need to reference the parameter via `Ref` intrinsic function as below.

{% highlight yaml %}Ec2Instance:
  Type: AWS::EC2::Instance
  Properties:
    InstanceType:
      Ref: InstanceTypeParameter
    ImageId: ami-0ff8a91507f77f867
{% endhighlight %}

Here we pass the selected parameter value to EC2 instance resource by specifying the parameter name to `Ref` function. When you create or update a stack which uses a parameter, you can see all the parameters listed on AWS CloudFormation management console for user to select as shown in the below screenshot.

<figure>
    <a href="{{site.url}}/assets/img/postimages/second/parameter.png"><img src="{{site.url}}/assets/img/postimages/second/parameter.png"></a>
    <figcaption align="center">Parameter selection on AWS CloudFormation management console</figcaption>
</figure>

Further, we can pass dynamic parameter values from other AWS services like AWS Secrets Manager and AWS Systems Manager Parameter Store. This feature is useful when you want to pass credentials like database passwords to the CloudFormation template.

### Mappings

The `Mappings` section matches a key to a corresponding set of named values. A common use case for mapping is using AWS region as the key to a set of values. These values can be used via `FindInMap` function which retrieves the value from a map. Here is an example of usage of mapping to map AWS region to AMI.

{% highlight yaml %}Mappings: 
  RegionMap: 
    us-west-1:
      HVM64: ami-0bdb828fd58c52235
      HVMG2: ami-066ee5fd4a9ef77f1
    eu-west-1:
      HVM64: ami-047bb4163c506cd98
      HVMG2: ami-0a7c483d527806435
Resources: 
  EC2Instance: 
    Type: "AWS::EC2::Instance"
    Properties: 
      ImageId: !FindInMap [RegionMap, !Ref "AWS::Region", HVM64]
      InstanceType: m1.small
{% endhighlight %}

You can also use mappings in conjunction with parameters to map a parameter value to a set of named values. Following is an example of the mapping parameter `EnvironmentType` to different AMI based on the AWS region.

{% highlight yaml %}Parameters: 
    EnvironmentType: 
      Description: The environment type
      Type: String
      Default: test
      AllowedValues: 
        - prod
        - test
      ConstraintDescription: must be either prod or test
Mappings: 
    RegionAndInstanceTypeToAMIID: 
      us-east-1: 
        test: "ami-8ff710e2"
        prod: "ami-f5f41398"
      us-west-2: 
        test: "ami-eff1028f"
        prod: "ami-d0f506b0"
        
    ...other regions and AMI IDs...

Resources:
   EC2Instance: 
    Type: "AWS::EC2::Instance"
    Properties: 
      ImageId: !FindInMap [RegionAndInstanceTypeToAMIID, !Ref "AWS::Region", !Ref EnvironmentType]
      InstanceType: m1.small

{% endhighlight %}

### Conditions

The `Conditions` section controls whether certain resources are created or whether certain resource properties are assigned a value during stack creation or update. For instance, we can include a condition with resources or outputs so that the resources/output will get created only if the condition is true. Similarly, you can associate the condition with a property so that AWS CloudFormation only sets the property to a specific value if the condition is true. If the condition is false, AWS CloudFormation sets the property to a different value that you specify. To define conditions, we can use various types of intrinsic functions such as `Fn::And`, `Fn::Equals`, `Fn::If`, `Fn::Not`,`Fn::Or`, etc.

So far, we understood certain sections of a CloudFormation template. Now, let’s look at an example to understand how these sections work together. In the following example, we use `AWSTemplateFormatVersion`, `Mappings`, `Parameters`, `Conditions`, and `Resources` sections. We define a parameter named `EnvType` that represents the environment which only allows the values: <code class="code-values">prod</code> and <code class="code-values">test</code>. We also describe a mapping named `RegionMap` to map the AWS region to AMI. Following that, we state our condition called `CreateProdResources`. This condition uses the intrinsic function equals to check if the selected `EnvType` parameter value is <code class="code-values">prod</code> or not.

In the resources section, we define an EC2 instance, a volume, and a volume attachment. We can see the condition `CreateProdResources` are applied to both Volume and Volume attachment so that those resources will only get created in the prod environment.

{% highlight yaml %}AWSTemplateFormatVersion: "2010-09-09"
Mappings: 
  RegionMap: 
    us-east-1: 
      AMI: "ami-0ff8a91507f77f867"
    eu-west-1: 
      AMI: "ami-047bb4163c506cd98"
Parameters: 
  EnvType: 
    Description: Environment type.
    Default: test
    Type: String
    AllowedValues: 
      - prod
      - test
    ConstraintDescription: must specify prod or test.
Conditions: 
  CreateProdResources: !Equals [ !Ref EnvType, prod ]
Resources: 
  EC2Instance: 
    Type: "AWS::EC2::Instance"
    Properties: 
      ImageId: !FindInMap [RegionMap, !Ref "AWS::Region", AMI]
  MountPoint: 
    Type: "AWS::EC2::VolumeAttachment"
    Condition: CreateProdResources
    Properties: 
      InstanceId: 
        !Ref EC2Instance
      VolumeId: 
        !Ref NewVolume
      Device: /dev/sdh
  NewVolume: 
    Type: "AWS::EC2::Volume"
    Condition: CreateProdResources
    Properties: 
      Size: 100
      AvailabilityZone: 
        !GetAtt EC2Instance.AvailabilityZone
{% endhighlight %}

**Note:** The `GetAtt` is an intrinsic function that returns the value of an attribute from a resource in the template.
{: .notice}

### Transform

We need to understand what macro is before moving onto the `Transform` section. AWS Documentation states macros as follows:

> "Macros enable you to perform custom processing on templates, from simple actions like find-and-replace operations to extensive transformations of entire templates."

To use macros to process a template, we need to create a macro definition and then reference either in the `Transform` section or use the `Transform` function which locates near to the template content that needs transformation.

AWS CloudFormation supports `AWS::Include`  & `AWS::Serverless` transforms, which are macros hosted by AWS CloudFormation.
*	`AWS::Include` transform enables you to insert boilerplate template snippets into your templates.
*	`AWS::Serverless` transform takes an entire template written in the AWS Serverless Application Model (AWS SAM) syntax, which then transforms and expands it into a compliant AWS CloudFormation template.

Following is an example usage of `AWS::Include` transform. In this example, we are using `AWS::Include` macro to replace the content via Transform function. After transformation, this section will get replaced with the content of the S3 object specified.

{% highlight yaml %}'Fn::Transform':
  Name: 'AWS::Include'
  Parameters:
    Location: s3://MyAmazonS3BucketName/MyFileName.yaml
{% endhighlight %}

### Resources

The required `Resources` section defines the AWS resources that need provision in a stack, such as a S3 bucket or an EC2 instance. The syntax for creating any resource is as follows:

{% highlight yaml %}Resources:
  Logical ID:
    Type: Resource type
    Properties:
      Set of properties
{% endhighlight %}

The Logical ID needs to be unique within the template and used to reference the resource. It is the Logical ID of security group we use to associate with EC2 instance in our unicorn :unicorn: application. The resource type identifies the type of resource that you are declaring. For example, `AWS::EC2::Instance` declares an EC2 instance. For a list of all supported resource types, see [AWS resource and property types](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) reference. Further, we can configure resources by adding properties such as specifying AMI for an EC2 instance.

### Outputs

The `Outputs` section is for values that you can view in the outputs tab of the AWS CloudFormation management console. Outputs can be imported into other stacks to create cross-stack references. We can use outputs in conjunction with conditions as well. In the following example, we are outputting two values where the `LoadBalancerDNSName` will only be outputted if the condition satisfies.

{% highlight yaml %}Outputs:
  LoadBalancerDNSName:
    Description: The DNSName of the load balancer
    Value: !GetAtt LoadBalancer.DNSName
    Condition: CreateProdResources
  InstanceID:
    Description: The Instance ID
    Value: !Ref EC2Instance
{% endhighlight %}

# What’s More

We have covered so much about AWS CloudFormation in this post. There are other features within and outside AWS CloudFormation which we can utilise. As the service CloudFormation is still evolving, it is always good to check with the official **[AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)**. Here I'm listing a few of the advanced concepts and helpful links if you are interested.

**[CloudFormation course ](https://www.udemy.com/course/aws-cloudformation-master-class/)** – highly recommend this CloudFormation course by Stephane Maarek. This course covers both basics and advanced concepts with lots of hands-on sections.

**[CloudFormation drift](https://aws.amazon.com/blogs/aws/new-cloudformation-drift-detection/)** – a feature that determines whether the stack has drifted from its expected template configuration or not and returns detailed information about the drift status of each resource in the stack.

**[CloudFormation Nested Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html)** – a feature for creating common components to use in other stacks. Using nested stacks to declare common components is considered as a best practice.

**[CloudFormation helper scripts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html)** – an efficient way to install software packages and to start services on an Amazon EC2 instance which gets created as part of a stack.

**[AWS CloudFormation CLI support](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html)** – CloudFormation service supports managing stacks via Command Line Interface (CLI).

**[AWS CloudFormation Designer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer.html)** - a graphic tool for creating, viewing, and modifying AWS CloudFormation templates.

**[Python library: troposphere](https://troposphere.readthedocs.io/en/latest/index.html)** – a library to create AWS CloudFormation templates via python & It also helps to build resources dynamically.

**[Sample templates](https://aws.amazon.com/cloudformation/resources/templates/)**

**[Best practices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html)**


# References



* Docs.aws.amazon.com. n.d. AWS Cloudformation Best Practices - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. AWS Cloudformation Concepts - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html> [Accessed 20 August 2020].
* Amazon Web Services, Inc. n.d. AWS Cloudformation Features. [online] Available at: <https://aws.amazon.com/cloudformation/features/> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. AWS Resource And Property Types Reference - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html> [Accessed 20 August 2020].
* Barr, J., 2018. New – CloudFormation Drift Detection. [Blog] AWS Blog, Available at: <https://aws.amazon.com/blogs/aws/new-cloudformation-drift-detection/>.
* Docs.aws.amazon.com. n.d. Cloudformation Helper Scripts Reference - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html> [Accessed 20 August 2020].
* Amazon Web Services, Inc. n.d. Cloudformation Templates. [online] Available at: <https://aws.amazon.com/cloudformation/resources/templates/> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. Cloudformation — AWS CLI 1.18.123 Command Reference. [online] Available at: <https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. Deletionpolicy Attribute - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. Estimating The Cost Of Your Cloudformation Stack - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-paying.html> [Accessed 20 August 2020].
* Amazon Web Services, Inc. 2011. Introducing AWS Cloudformation. [online] Available at: <https://aws.amazon.com/about-aws/whats-new/2011/02/25/introducing-aws-cloudformation/>.
* Maarek, S., 2020. Master AWS Cloudformation: Deploy Your Own Infastructure. [online] Udemy. Available at: <https://www.udemy.com/course/aws-cloudformation-master-class/> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. Template Anatomy - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html> [Accessed 20 August 2020].
* Troposphere.readthedocs.io. n.d. Troposphere — Troposphere 2.4.1 Documentation. [online] Available at: <https://troposphere.readthedocs.io/en/latest/index.html> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. Using AWS Cloudformation Macros To Perform Custom Processing On Templates - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. What Is AWS Cloudformation Designer? - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer.html> [Accessed 20 August 2020].
* Docs.aws.amazon.com. n.d. What Is AWS Cloudformation? - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html> [Accessed 20 August 2020]
* Docs.aws.amazon.com. n.d. Working With Nested Stacks - AWS Cloudformation. [online] Available at: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html> [Accessed 20 August 2020].

# Copyright & License

Copyright © 2020 Arya Nalinkumar

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" align="left" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>
<br />

<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">AWS CloudFormation - Infrastructure as Code</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://arya-nk.github.io/aws-cloudformation/" property="cc:attributionName" rel="cc:attributionURL">Arya Nalinkumar</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.