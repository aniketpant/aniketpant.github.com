---
layout: page
title: The preserved archives
slug: archive
---

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Published On</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.posts %}
    {% if post.category == 'note' %}
    <tr>
      <td>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </td>
      <td>
        {{ post.date | date_to_long_string }}
      </td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
