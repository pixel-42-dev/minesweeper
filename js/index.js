let newGame = document.querySelector(`.gameover`);
let counter = 0;

document.querySelectorAll('.item').forEach(
    item => item.addEventListener('click', function() {
        if (this.classList.contains("item_closed")) {
            this.classList.remove("item_closed");
            if(!this.classList.contains("item_bomb")) {
                if (counter != 15) {
                    counter++;
                }
                if (counter == 15) {
                    if (newGame.innerHTML != "GAME OVER") {
                        newGame.innerHTML = "Победа!";
                        document.querySelector(".item_bomb").classList.remove("item_closed");
                    }
                }
            } else {
                newGame.innerHTML = "Вы проиграли!";
                document.querySelectorAll('.item').forEach(
                    item => item.classList.remove("item_closed")
                );
            }
        }
    })
);

newGame.addEventListener(`click`, function () {
    counter = 0;
    document.querySelectorAll('.item').forEach(
        item => item.classList.add("item_closed")
    );
    newGame.innerHTML = "Сапёр";
});