 // JavaScript для применения стилей к внешним ссылкам
        document.addEventListener("DOMContentLoaded", function() {
            var links = document.querySelectorAll("a");
            links.forEach(function(link) {
                if (link.href.startsWith("http://") || link.href.startsWith("https://")) {
                    link.style.textDecoration = "underline dotted";
                }
            });
        });