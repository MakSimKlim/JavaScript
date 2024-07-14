 // Функция для установки позиции подсказок
        function setTooltipPosition(button) {
            const tooltip = button.querySelector('.tooltip'); 		// Получаем элемент подсказки внутри кнопки
            const buttonRect = button.getBoundingClientRect(); 		// Получаем размеры и положение кнопки
            const tooltipRect = tooltip.getBoundingClientRect(); 	// Получаем размеры и положение подсказки

            // По умолчанию ставим подсказку сверху
            tooltip.classList.remove('tooltip-bottom');
            tooltip.classList.add('tooltip-top');

            // Проверяем, помещается ли подсказка сверху
            if (buttonRect.top - tooltipRect.height < 0) {
                // Если не помещается, ставим снизу
                tooltip.classList.remove('tooltip-top');
                tooltip.classList.add('tooltip-bottom');
            }
        }

        // Устанавливаем позиции для всех кнопок при загрузке страницы и при изменении размера окна
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.tooltip-button'); // Получаем все кнопки с подсказками
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => setTooltipPosition(button)); // Устанавливаем позицию подсказки при наведении на кнопку
            });
        });

        window.addEventListener('resize', () => {
            const buttons = document.querySelectorAll('.tooltip-button'); // Получаем все кнопки с подсказками
            buttons.forEach(button => {
                setTooltipPosition(button); // Устанавливаем позицию подсказки при изменении размера окна
            });
        });

        // Функция для перехода назад по истории
        function goBack() {
            window.history.back(); // Выполняем переход назад по истории браузера
        }

        // Функция для перехода вперед по истории
        function goForward() {
            window.history.forward(); // Выполняем переход вперед по истории браузера
        }