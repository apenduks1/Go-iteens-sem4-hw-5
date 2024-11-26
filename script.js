
//Напиши гру "Натисни правильну клавішу", використовуючи події keydown та keypress.



//Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
//Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
//Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
//Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
//Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю
//Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify
//Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
//Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify
function updateCurrentKey() {
  const keyElement = document.getElementById('key');
  keyElement.textContent = keys[currentKeyIndex].toUpperCase();
}

document.addEventListener('keydown', function(event) {

  if (currentKeyIndex >= keys.length) return;

  const pressedKey = event.key.toLowerCase();
  
  if (pressedKey === keys[currentKeyIndex]) {
      currentKeyIndex++;
      
      if (currentKeyIndex < keys.length) {
          updateCurrentKey();
          
             alert("'Правильно! Натисніть наступну клавішу.")
          
        
      } else {
         
              alert("Вітаємо! Ви пройшли гру!")
 

      }
  } else {
     alert(`Помилка! Потрібно натиснути ${keys[currentKeyIndex].toUpperCase()}`,)
  }
});


//Створити графік з використанням Chart.js для відображення статистики продажів за останній місяць.

// Дані для графіка
const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", 
    "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 
        650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      tension: 0.4, // Згладжування лінії
    },
  ],
};


const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Дні місяця",
        },
      },
      y: {
        title: {
          display: true,
          text: "Продажі (в одиницях)",
        },
        beginAtZero: true,
      },
    },
  },
};


const ctx = document.getElementById("salesChart").getContext("2d");
const salesChart = new Chart(ctx, config);
