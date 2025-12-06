---
title: "Beautiful Dashboard"
date: "2018-07-20"
image: "/images/Dashboard-Redesign-Cover.png"
encrypted: true
---

### [](#Overview "Overview")Overview

In 2015, we released a [dashboard tool](#) for companies to analyze their customer experience research data, discover insights and solve issues at the strategic level. Since then, we have been continuously adding new features to it. By the end of 2017, our dashboard product has been adopted by hundreds of brands and used by thousands of customers. However, the dashboard product designed in 2015, struggled to scale alongside the hyper-growth of the company. There was a fundamental lack of visual appeal issue, which resulted in reduced engagement and dashboard elements competing for focus.

  

### [](#Challenge "Challenge")Challenge

With external user research and internal stakeholder discussions, we identified the main opportunities as follows:

*   Visual Appeal: Our users are unable to create visually appealing dashboards, resulting in reduced engagement and action on the data. Our sales team has also reported on loss of deals due primarily to “ugly, outdated dashboards”.
    
*   Clarity & Focus: The dashboards are unorganized and overwhelming for our users, as they struggle to understand what to focus on, how to interpret the data, and how to take actions.
    

Here’re two dashboard examples built with the tool.

![](/images/Beautiful-Dashboard/Bluth_ContractorView.png) ![](/images/Beautiful-Dashboard/GlobalBank_Comments.png)

  

### [](#Goal "Goal")Goal

Our design goal for the project was to create a foundation design language involving typography, icons, color, framework, graphs that promotes consistency, focus and elegance across dashboard components. The business goals were to increase sellability and make it easy to create a beautiful dashboard by default without extra training.

  

### [](#Role "Role")Role

I led the design of the customer experience dashboard and collaborated with the other designer who led the employee engagement dashboard design. Together we redesigned the dashboard framework, introduced widget framework, designed and polished the typography, icons, color and graphs.

  

### [](#Color-amp-Typography-amp-Icons "Color & Typography & Icons")Color & Typography & Icons

*   **Color:** Our dashboard tool provides full flexibility to customize graph color. When a widget is added to the dashboard, a random color(s) will be applied to the widget. This obeyed our “dashboard beautiful by default” goal. We researched best practices for data visualization color scheme and found few resources and tools that studied color theories with a more scientific approach. Eventually we were able to define a set of default colors for our dashboard. It made sure even without any color customization, dashboard still looks decent. On the coding level, our engineers were able to transform these categorical colors into sequential and diverging scheme for different data presentation purposes.
    
*   **Typography:** Likewise, we allows users to pick a typeface from a native font-stack like Arial, Helvetica etc. We used Qualtrics Grotesque designed in 2015 as the default typeface. Over the years, we learned that Qualtrics Grotesque wasn’t most suited for dashboard in terms of readability. Limited by time and resource, we didn’t have the capacity to design a new typeface. Instead we chose an open source typeface Open Sans as default. Open Sans is one of the popular and best-performing web fonts for body text, as it doesn’t have intrusive texture, dark patches and rendering issues. It scores very well in terms of readability and clarity. Another major issue is font style inconsistency, due to previous design/technical debt. So we defined a spectrum of font-styles, font-weights and font-sizes to make the font usage consistent and crafted.
    
*   **Icons:** The original icons were designed at various periods of time. We collected and redesigned the icons all together.
    

![](/images/Beautiful-Dashboard/Color%20Typography%20Icon.png)

  

### [](#Dashboard-Framework "Dashboard Framework")Dashboard Framework

*   **Dashboard Nav:** We have known that our users wanted a way to brand their dashboards. With the redesign, they are able to place their brand logo on the dashboard nav bar.
    
*   **Page Nav:** Users can decide whether to place the dashboard page nav horizontally or vertically. The page nav style was outdated. We modernized it with a new tab style inspired by Material Design’s lateral navigation.
    

![](/images/Beautiful-Dashboard/Dashboard%20Framework.png)

*   **Filters:** Filter is the key component regarding dashboard interaction. The existing filter implementation adopted dropdown pattern from our product pattern library. It looked boxy and clunky. Meanwhile, based on the analytical data, on average users had eight filters per page. In this case, filter bar had to expand, took a lot of space and pushed the graphs down. Another major issue was that users couldn’t quickly identify what filters have been applied due to identical filter label and value visual treatment.
    
    To remove clutter, we got rid of the dropdown border. Highlight filter value if it’s applied. The visual change helped reduce the amount of real estate that filter bar covered. We went a step further and explored some concepts from interaction design perspective.
    
    *   _Concept 1:_ Limit the filter bar to one row and hide the rest of filters into More Filters menu. Hidden filter info causes cognition inconvenience especially when viewers try to understand data and acquire insights.

![](/images/Beautiful-Dashboard/Concept%201.jpg)

*   _Concept 2:_ Use Filter menu as the main control. Only applied filters will be displayed on the filter bar. This concept can potentially prevent users putting too many filters on top. It works well with users who have a fixed set of filters but not an easy approach for users who need to do data comparison and switch filter options back and forth a lot.

![](/images/Beautiful-Dashboard/Concept%202.jpg)

*   _Concept 3:_ By default, none of the available filters is displayed. User add what they need to the filter bar. The concept makes filter experience less overwhelming but more user oriented. The downside is as users gradually adding more without removing, filter bar will be packed again.  
    We ran some usability tests. Concept 3 was the most preferred one because it doesn’t disrupt their current use flow. Users weren’t concerned about the potentially congested filter bar since it’s by choice.

![](/images/Beautiful-Dashboard/Concept%203.jpg)

  

### [](#Widget-Framework "Widget Framework")Widget Framework

Each widget is identifiable as a single, contained unit. Besides the content, every widget shares same other elements like widget title, filter, actions etc. These elements all together make up the widget framework. We decided to adopt the card-design metaphor for widget framework as it distinguishes the widget from the content flow.

![](/images/Beautiful-Dashboard/Widget%20Framework.png)

  

### [](#Visualizations "Visualizations")Visualizations

> Forming a System, Not Creating Pages.

While designing the first widgets, we started creating a library of visualizations. This library will serve as a central hub for every product that has visualization functions and will continue to be utilized in the future. One of the main goals of this redesign was to create a consistent experience. This library was a major step towards achieving this goal. Not only for the dashboard, but eventually for all the other products of Qualtrics.

![](/images/Beautiful-Dashboard/Visualizations.png)

  

### [](#Comparison "Comparison")Comparison

Here’s is a comparision between some old widgets and new.

![](/images/Beautiful-Dashboard/Old.png)  
  

![](/images/Beautiful-Dashboard/New.png)

  

### [](#Impact "Impact")Impact

This was the most radical design update since 2015. Some early implementations were demoed to thousands of customers at the main stage during Qualtrics X4 Experience Management Summit. **Redesign feedback was largely positive: using visual design alone we have created a significantly more engaging, elegant and sellable dashboard product.**

> “Great work! Looks exciting. Thank you for continuously seeking improvements.” -User
> 
> “I appreciate that you’re actively working to improve the product. It makes a huge difference from a sales perspective to be armed with visually impressive dashboards.” -Sales