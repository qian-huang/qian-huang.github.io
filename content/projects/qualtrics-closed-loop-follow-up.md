---
title: "Follow-Up Ticketing"
date: "2018-06-13"
image: "/images/Ticketing-Cover.png"
encrypted: true
---

  

### [](#Overview "Overview")Overview

After users launch their customer experience program, collect feedback and analyze the data, it’s important that users start acting on the results. Qualtrics Closed-Loop system keeps track of customer survey responses characteristics. And it allows our users to follow up on every customer response so nothing falls through the cracks. Functionally it has two main components. Ticketing - this part alerts users and raises a request in the system that there’s an unhappy customer. Case Management - this part allows users to manage all raised requests. Users can assign tickets to the right team members, work on the tickets, and monitor progress of each one.

  

### [](#Role "Role")Role

Led the design from end to end. Worked with UX Researcher and Client Success team on usability research and customer validation.

  

### [](#Scope "Scope")Scope

When we started to work on this product in 2016, We knew the major usability issues and the product was badly in need of a design overhaul. But it was still important to define the scope and identify what was working and what was not. I took a closer look at our backlogged customer feedback and previous research findings. In the meantime, some customer baseline research were conducted to get a better idea of the user workflows and customer expectations. The problems were summarized as follows:

**Disconnected Workflow:** The widgets layout along with the separation of ticket list and ticket details view led to a fractured experience and decreased the close-loop efficiency.

> I have 500 tickets. But your widget only displays 5 per page.  
> Why separate the ticket list and its details? I have to scroll back and forth to switch tickets when reviewing the actual ticket details.

**Scalability:** Most of the features were planted in the confined widget structure without systematically designed, which caused challenge to introduce new features and create a unified consistent user experience.

**Inconsistency with UX guidelines:** The V1 app was built by few engineers before I joined. Due to a lack of design support, the UI wasn’t carefully crafted upon our design pattern library.

![](/images/Original-01.png) ![](/images/Original-02.png)

  

### [](#Explore "Explore")Explore

With the scope in mind, I started exploring different layout structure concepts. Here are the two wireframes we decided to test with:

_Concept 1:_ Full-width ticket list table with the ticket details page covering it once a ticket is clicked.

![](/images/Wireframes-01-1.png) ![](/images/Ticket-Page-02-1.png)

_Concept 2:_ Full-width ticket list table with the ticket details as a side panel coming out once a ticket is clicked.

![](/images/Wireframes-01-1.png) ![](/images/Ticket-Page-03-1.png)

The testing results showed that users liked a full-width ticket details page rather than a side panel in a sense that more information becomes consumable at one view. However, the idea of covering ticket list with ticket details page was not liked because switching ticket details page requires an extra click to go back to the ticket list first.

All in all, users desired a single scrolling experience when reviewing the actual ticket details. With that, I went back to iterate. We settled down on the full-width tickets accordion concept with ticket details as the click-to-expand content.

![](/images/Web-1280-–-1.png) ![](/images/Web-1280-–-2.png)

  

### [](#Design "Design")Design

After the structure was decided, I dived into detailed modules and visual treatment design. We were gradually adding modules to the product. For this case study, I’m going to talk about only three touch points: Ticket List, Ticket Data and Ticket Metrics.

**Ticket List:** Users liked the ticket list as a table-view in the original V1 app, which provides the flexibility and freedom to show/hide the tickets related information by adding/removing columns. We decided to bring a similar table-view to the new design to avoid the legacy issues. Meanwhile, users can still customize what information gets to display in each column.

![](/images/ticket-list.png)  
  
  
![](/images/customize-ticket-format.png)

**Ticket Data:** Ticket Data is the associated survey metadata plugged into the ticket to provide operators more context on why the ticket was generated, when and how they should follow up wit the customer. It’s important information and usually set up by the operation manager who oversees the whole Follow-up app. We aimed to make Ticket Data readable. Instead of plain text, each ticket data is formatted like a tag with its data field name highlighted.

![](/images/Screen-Shot-2017-05-22-at-10.37.54-PM.png)

After we released this version, there were some customer complains about the ticket data format being clunky and unorganized. We set up few calls with our users to further understand the issue. Turned out that all these customers had at least 15 pieces of data added to each ticket. The label length varied. So visually there was no pattern to follow. The whole ticket data section looked messy. It was even worse when users had long comment data which usually took more than one row to display. In this case, those data tags were visually broke into at least two appearing in different rows. We came up with several concepts and tested all of them. The table style was liked by almost all users being tested. It looked clean and was so much easier to follow.

![](/images/new_ticket_data.png)

**Ticket Metrics:**  
Initially, I designed some basic ticket operation metrics for helping users understand and keep an eye on their close-loop and follow-up performance. This is just a start. Soon we realized these metrics are far from enough for helping track performance and coach operators based on the metrics. Thus we brought in Follow-Up Reporting, which allows users to report on any tickets related metrics from ticket data to performance activities by using Vocalize Dashboard functionalities.

![](/images/metrics-03.png)

  

### [](#Impact "Impact")Impact

We heard many good feedback talking about how the new designs are huge improvements of the existing product. After the new Follow-up Ticketing was released, we kept a 150% daily usage increase in the following two quarters.