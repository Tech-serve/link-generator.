function generate() {
  const filename = document.getElementById('filename').value.trim();
  const url = document.getElementById('url').value.trim();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const image = document.getElementById('image').value.trim();

  const output = `<?php
// OG мета + редирект

header("Content-Type: text/html; charset=UTF-8");
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${image}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta http-equiv="refresh" content="0; url=${url}" />
</head>
<body>
  <p>Переход на <a href="${url}">${url}</a></p>
</body>
</html>`;

  document.getElementById('output').value = output;
}
