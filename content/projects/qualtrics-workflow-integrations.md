---
title: "Workflow & Integrations"
date: "2018-06-13"
image: "/images/Actions_Cover.png"
encrypted: true
---

  

### [](#Overview "Overview")Overview

Qualtrics customers have long been using our survey product to do research. They may have already used other products to further process the research data. Workflow & Integrations(Actions) enables users to convert real-time survey responses into measurable tasks so that users can act on them. These tasks include both qualtrics internal tools like Follow-up Ticketing and external applications like Salesforce, Slack etc.

  

### [](#Role "Role")Role

Led the design from end to end. Worked with UX Researcher and Client Success team on usability research and customer validation.

  

### [](#Scope "Scope")Scope

When I was first asked to work on this project early 2016, functionally the Actions only allowed triggering automate ticket alerts whenever a survey response’s characteristic meets the user-defined conditions. Meanwhile, we already identified some usability issues with the existing condition editor and we need a better design solution to address these issues. From the product and business perspective, our goal was making the tool capable of triggering all kinds of internal and external tasks. Thus, not only did we solve the existing usability issues, but also it’s key to come up with a design that can incorporate any type of integration workflow.

![](/images/outcomes1.png) ![](/images/outcomes2.png) ![](/images/Screen-Shot-2016-07-01-at-3.06.44-PM.png)

  

### [](#Workflow "Workflow")Workflow

With the old UI, users found it hard to understand how Actions works even after they went through the training. Some users complained that there was zero guidance on the interface for knowing where to start and what to do next. We realized it was very important to provide instructions on the interface to guide users to setup a workflow. To solve the issue, we divided the whole flow into three steps. We not only indicated the steps visually, but also concisely explain what each step does.

Firstly, user need to choose a event source which is the data that is going to drive the tasks. Initially we only supported Survey Response. Later we added Custom Event that allows users to use any type of data source. The second step is to build some conditions that decide when the data will trigger task(s). Without conditions set up, all survey responses will trigger task(s). Lastly, users have to setup the tasks that will be performed when conditions are met.

![](/images/FLOW.png)

  

### [](#Condition-Editor "Condition Editor")Condition Editor

It depended on the level of sophistication. The old condition editor worked well when users did very simple queries like `IF X AND Y OR Z happens, execute...`. But overall when it comes to more than three level of conditions, most of the users got confused and had problems deciphering the logic hierarchy behind.

![](/images/outcomes2.png)

I worked with the engineer to design a new condition editor. We did some research and came up with several concepts to test. The nested All/Any Condition Editor tested well and was the most liked one. The logic hierarchy of the new condition editor is much clear. We use various colors to highlight each level which helps users differentiate the hierarchy. We also enable users to easily drag and drop to regroup conditions. A complex condition set may take much real estate. We only collapse the condition set when it’s under the editing mode.

![](/images/ezgif.com-video-to-gif.gif)

  

### [](#Tasks "Tasks")Tasks

Internally we provided Ticketing, Sending Emails, Distributing Survey, Adding Contacts as tasks that users can use. Externally, we have integrated with Salesforce, Tableau, Marketo, Slack, Micorsoft Dynamics, Jira, Adobe Analytics etc. Each task is unique and has its own configuration UI. We are continuing driving changes to make it easy to setup tasks.

![](/images/Add-Task.png)

![](/images/SLACK.png) ![](/images/eMAIL.png)

  

### [](#Impact "Impact")Impact

The new design laid a good foundation for incorporating many more important features to the product. Actions became the most vital data communication channel between qualtrics and other integration partners. It saves users’ time and takes their experience management process to the next level. For our company, the integration model brought dollars to business and helped boost more product ideas that can potentially benefit the business.