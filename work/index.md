---
layout: work
title: "Portfolio"
date: 2016-04-09T11:40:45-04:00
modified:
excerpt: "Coleção de projectos que adoradamente fiz parte nos últimos poucos anos"
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.work reversed %}
  {% include work-grid.html %}
{% endfor %}
</div><!-- /.tiles -->