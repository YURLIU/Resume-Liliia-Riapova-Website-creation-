

    
    document.addEventListener("DOMContentLoaded", function () {

    // Анімація появи сторінки
    document.body.classList.add("page-loaded");


    // Ефект появи для карток
    const cards = document.querySelectorAll(
        ".project-card, .strength, .education, .music, .language, .it, .myinterests, .mygoals"
    );

    cards.forEach(function (card, index) {
        card.style.animationDelay = (index * 0.08) + "s";
    });


    // Кнопки
    const buttons = document.querySelectorAll("button, .project-button");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            button.style.transform = "translateY(-3px)";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "translateY(0)";
        });

    });


    // Форма контактів
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();


            // Перевірка полів
            if (name === "" || email === "" || message === "") {

                alert("Будь ласка, заповніть усі поля 🌸");

                return;
            }


            // Telegram
            const botToken = "8862793621:AAHLDfZYroCpkY3f2znCC-wX9gT4T6pZpEw";
            const chatId = "7879386291";


            const text =
                "📩 Нове повідомлення з сайту\n\n" +
                "👤 Ім'я: " + name + "\n" +
                "📧 Email: " + email + "\n\n" +
                "💬 Повідомлення:\n" +
                message;


            fetch(
                "https://api.telegram.org/bot" +
                botToken +
                "/sendMessage",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        chat_id: chatId,
                        text: text
                    })
                }
            )

            .then(function (response) {
                return response.json();
            })

            .then(function (data) {

                console.log(data);

                if (data.ok) {

                alert(
                "Дякую, " + name + "! 💗\n\n" +
                "Ваше повідомлення надіслано.\n" +
                "Я зв'яжуся з вами найближчим часом."
            );


                    contactForm.reset();

                } else {

                    alert("Помилка при надсиланні повідомлення.");

                }

            })

            .catch(function (error) {

                console.log(error);

                alert("Не вдалося надіслати повідомлення.");

            });

        });

    }

}); 