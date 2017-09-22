(function() {
    document.addEventListener('DOMContentLoaded', function() {

      // Deklaruję Czas
      var mins = 3;//max60
      var seconds = 5;//max60
      var partsOfCircle = (mins*60)+seconds;//dzielenie koła na części(iloś sekund);

      // Wrzucam czas do HTMLa
      var minutesInHtml = document.querySelector('.counter').children[0];
      minutesInHtml.innerText = mins + " min";
      var secondsInHtml = document.querySelector('.counter').children[2];
      secondsInHtml.innerText = seconds + " sek";

      // Deklaruje element canvas w HTML
      var canvas = document.querySelector('canvas');

      // Określam wielkośc kontenera canvas i kontekst
      canvas.width = 250;
      canvas.height = 250;
      var c = canvas.getContext('2d');

      // Definiuję niezbędne zmienne
      var value = 0; // wartośc startowa
      var start = 4.72; // miejsce startu na kole
      var width = canvas.width; // zmienna do czyszczenia koła
      var height = canvas.height; // zmienna do czyszczenia koła
      var difference; // Różnica między startem a końcem odliczania
      var interval = 1000; // czas w którym wykonuje się jedna częśc zegara
      var split = partsOfCircle; // podział zegara na ilośc sekund

      // Funkcja obsługująca animację canvasów
      function animate (){
        difference = ((value/split)*Math.PI*2);
        c.clearRect(0,0,width,height);
        c.lineWidth = 25;
        c.strokeStyle = '#232c39';
        c.beginPath();
        c.arc(125,125,90, 0, 100, false);
        c.stroke();
        c.strokeStyle = '#1076a0';
        c.beginPath();
        c.arc(125,125,90, start, difference+start, false);
        c.stroke();
        value++;
        //Zmiana licznika sekund (txt)
        secondsInHtml.innerText = (seconds--) + " sek";

        //Zmiana licznika minut (txt)
        if (seconds <= 0){
          mins--
          minutesInHtml.innerText = (mins) + " min";
          seconds = 60;
        };


        // Funkcja zatrzymująca animację
        if (value > split){
          clearTimeout(animate);
          minutesInHtml.innerText = "";
          secondsInHtml.innerText = "";
          // tutaj można dodac kod ktory sie wykona kiedy odliczanie sie skonczy
        }
      };

      // Odpalam animacje zegara
      var animate = setInterval(animate, interval)

    });
})();
