document.addEventListener('DOMContentLoaded', function () {
        // Получаем элемент div с id "editor"
        var editorDiv = document.getElementById('editor');
        // Получаем элемент textarea с id "editor-textarea"
        var editorTextarea = document.getElementById('editor-textarea');
        // Переменная для отслеживания состояния редактирования
        var isEditing = false;

        // Добавляем обработчик события для нажатия клавиш на документе
        document.addEventListener('keydown', function (event) {
            // Проверка нажатия Ctrl+E для входа в режим редактирования
            if (event.ctrlKey && event.key === 'e') {
                // Предотвращаем действие по умолчанию для Ctrl+E
                event.preventDefault();
                // Если не находимся в режиме редактирования
                if (!isEditing) {
                    // Получаем текст из div
                    var text = editorDiv.innerText;
                    // Устанавливаем текст в textarea
                    editorTextarea.value = text;
                    // Скрываем div
                    editorDiv.style.display = 'none';
                    // Показываем textarea
                    editorTextarea.style.display = 'block';
                    // Устанавливаем состояние редактирования в true
                    isEditing = true;
                }
            }

            // Проверка нажатия Ctrl+S для сохранения изменений
            if (event.ctrlKey && event.key === 's') {
                // Предотвращаем действие по умолчанию для Ctrl+S
                event.preventDefault();
                // Если находимся в режиме редактирования
                if (isEditing) {
                    // Получаем текст из textarea
                    var text = editorTextarea.value;
                    // Устанавливаем текст в div
                    editorDiv.innerText = text;
                    // Скрываем textarea
                    editorTextarea.style.display = 'none';
                    // Показываем div
                    editorDiv.style.display = 'block';
                    // Устанавливаем состояние редактирования в false
                    isEditing = false;
                }
            }
        });
    });