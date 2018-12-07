<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <h1>{{ranking.title}}</h1>
    <ul class="news-view view">
      {% for item in ranking.books %}
        <li class="item">
          <a href="{{ item.author }}">{{ item.title }}</a>
          <span>{{ helper.relativeTime(ranking.updated) }}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>