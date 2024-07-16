// Ждем полной загрузки DOM, чтобы выполнять скрипт
document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы <li> на странице
    var listItems = document.querySelectorAll("li");

    // Проходимся по каждому элементу <li>
    listItems.forEach(function (item) {
        // Добавляем обработчик события при наведении курсора на элемент <li>
        item.addEventListener("mouseenter", function () {
            // Добавляем класс "hover-bold" к элементу, чтобы изменить его стиль
            this.classList.add("hover-bold");
        });

        // Добавляем обработчик события при уводе курсора с элемента <li>
        item.addEventListener("mouseleave", function () {
            // Удаляем класс "hover-bold" с элемента, чтобы вернуть исходный стиль
            this.classList.remove("hover-bold");
        });

        // Добавляем обработчик события при клике на элемент <li>
        item.addEventListener("click", function (event) {
            // Останавливаем распространение события клика выше по дереву DOM
            event.stopPropagation();

            // Проверяем, имеет ли элемент <li> класс "directory"
            var isDirectory = this.classList.contains("directory");
            // Ищем вложенный список (элемент с классом "nested") внутри текущего элемента <li>
            var nestedList = this.querySelector(".nested");

            // Если элемент <li> является директорией и содержит вложенный список
            if (isDirectory && nestedList) {
                // Переключаем класс "active" у вложенного списка, чтобы показать или скрыть его
                nestedList.classList.toggle("active");
                // Переключаем класс "directory-open" у текущего элемента <li>, чтобы изменить его стиль
                this.classList.toggle("directory-open");
            }
        });
    });
});
