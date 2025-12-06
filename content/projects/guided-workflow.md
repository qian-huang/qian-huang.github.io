---
title: "Guided Workflow"
date: "2018-07-20"
image: "/images/Guided-Workflow/Overview%202.png"
encrypted: true
---

### [](#Overview "Overview")Overview

Our business has rocketed since 2014. Product teams felt incentivized to release as much as possible as fast as possible. We focused a lot on features/functions rather than crafting experiences since delivery was much easier to measure by the sales. Consequently, our product became extremely powerful and complex. However, when left especially novice users in the product without any comprehensive training, most users felt lost, overwhelmed and confused about what they were supposed to be doing. Even for the experienced users who had a sense of direction, it was such a tedious process and required a lot of time and patience. Users arrived at our product with a faith that they were able to get their Customer Experience projects up and running, and it’s our responsibility to show and guide them how to get there. So how can we get our users oriented in the product?  
  

### [](#Goal "Goal")Goal

Generally, the main goal of a product onboarding process is to give the answer to these questions.

*   What is this good for?
*   What can I do here?
*   **How can I do it?**

We limited the solution scope to serve CX practitioners who already bought the license and had a sense of direction and purpose of using the product. In this case, only the setup is the point of weakness that needs support.

Our goal was to design a guided workflow that helps CX practitioners get their projects up and running quickly and easily. From business perspective, the guided workflow enables less need and reliance on our implementation team for technical support. Ultimately, we hoped that with the guided workflow, we could turn the project setup process 100% self-service.  
  

### [](#Role "Role")Role

Led designs for CX project setup. Collaborated with UX Researcher and Implementation on customer workflow validation.  
  

### [](#Persona-amp-Workflow "Persona & Workflow")Persona & Workflow

We had an established CX practitioner persona Olivia. She runs the CX programs for Perco, a mid-cap UK retailer with stores in 21 markets. Olivia’s story helped us understand the current user journey and validate the setup process we were proposing.

![](/images/Guided-Workflow/Persona.png)  
A basic CX project setup involves survey creation, distribution and dashboard creation. According the analysis, it took minimum 20 hours to get a basic CX project setup with the current product. Due to the bad product architecture, in order to setup a project, users have to navigate in and out of the project. For example, to upload customer contact information, users have to exit out and navigate to TA (Target Audience - a different tool) to get it done. This has caused lots of confusion and a disconnected workflow.

![](/images/Guided-Workflow/Original%20Workflow.png)  
  

### [](#Guided-Workflow "Guided Workflow")Guided Workflow

We proposed a guided workflow that connects all the required setup actions so that users can simply follow the setup guide.

![](/images/Guided-Workflow/New%20Workflow.png)

We already provide users with some standard customer experience survey templates. The guided workflow is built on top of these templates. Since survey is pregenerated, users don’t need to spend tons of time on designing it from scratch and technically we are able to handle the survey data mapping step at the back end. In this case, users simply review the dashboard without worrying about how to do data mapping which turns to be one of the most complex and techinical thing to do.

Olivia who runs the CX program for Perco is going to start a new relational CX program. She starts with a Bain Relational NPS survey.

![](/images/Guided-Workflow/Launch%20Project.png) ![](/images/Guided-Workflow/Launch%20Project%202.png)

Olivia lands on her project’s overview page. It welcomes Olivia and tells her that there’re three major steps she needs to accomplish to get her project up and running.

![](/images/Guided-Workflow/Overview.png)

The first step is to review the Relational NPS survey. Olivia is able to change survey visual themes, add company logo, modify survey questions and view the survey under both the desktop and mobile view. But she still has the option to switch back to the original powerful survey editor to do more advanced editting work.

![](/images/Guided-Workflow/Review%20Survey.png)  
  
  
![](/images/Guided-Workflow/Advanced%20Survey%20Editor.png)

The second step is to setup survey distribution. Oliva would like to distribute the survey through emails. So she needs to upload the contacts file. There’re few guidances for her. She can simply download the exmaple file to check if her csv file meets the requirements. We display the first 3 rows for her to review to make sure everything is imported correctly.

![](/images/Guided-Workflow/Distribution.png)  
  
  
![](/images/Guided-Workflow/Upload%20Contacts.png)  
  
  
![](/images/Guided-Workflow/Review%20Contacts.png)

Oliva has to decide how often she wants the survey to be distributed and finish up her survey invite email. Again, we ask her to confirm all her distribution setup.

![](/images/Guided-Workflow/Contact%20Frequency.png)  
  
  
![](/images/Guided-Workflow/ReviewDistribution.png)

The last step is to review the dashboard that we pregenearted for her. We ask Olivia what filters she would like to use on the dashboard. She picks few important ones and moves on to check out the dashboard. It’s important that Oliva knows the current dashboard is populated with dummy data. Once survey responses are collected, the dummy data will be replaced by them.

![](/images/Guided-Workflow/Filter%20Dashboard.png)  
  
  
![](/images/Guided-Workflow/Review%20Dashboard.png)  
  
  
![](/images/Guided-Workflow/Review%20Dashboard%202.png)

Olivia can always exit out the workflow and come back with everything safely saved. Once she completed all steps, her project will be up and running. The overview page will display all three modules(Survey, Distribution, Dashboard) that she has setup with health/status metrics. She can easily keep track of these modules and be able to make any changes if needed.

![](/images/Guided-Workflow/Overview%202.png)  
  
  
![](/images/Guided-Workflow/Overview%203.png)

  

### [](#Reflection "Reflection")Reflection

The main con of the “Guided Setup” approach is that it works well if UI and functions of the product are simple, but if it isn’t, users may still have trouble understanding how to use the product. As a standalone solution, it wouldn’t solve all the complexness issue with our product and make it fully self-service. In the future, we want to incorporate other onboarding approaches like taking advantage of empty states and telling users what content will appear and how to add them. More importantly, we need to continue simplifying and crafting the existing product experience.