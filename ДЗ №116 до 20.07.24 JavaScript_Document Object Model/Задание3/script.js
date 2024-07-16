 // Массив изображений
        const images = [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            // Добавьте сюда пути к вашим изображениям
        ];

        let currentIndex = 0;

        // Получаем элементы управления и изображения
        const galleryImage = document.getElementById('galleryImage');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        // Функция для обновления изображения
        function updateImage() {
            galleryImage.src = images[currentIndex];
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === images.length - 1;
        }

        // Обработчики событий для кнопок
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateImage();
            }
        });

        nextButton.addEventListener('click', function() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateImage();
            }
        });

        // Инициализация галереи
        updateImage();