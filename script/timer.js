let hour = document.querySelector("#hr");
      let minute = document.querySelector("#min");
      let second = document.querySelector("#sec");

        let time = setInterval(() => {

        let date = new Date();
        //   console.log(date);

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        hour.innerHTML = `${hr} :`;
        minute.innerHTML = `${min} :`;
        second.innerHTML = sec;

      }, 1000);
    
      