import { animate } from "./helpers";

const btnPopap = document.querySelectorAll(".popup-btn");
const popup = document.querySelector(".popup");
const btnClose = popup.querySelector(".popup-close");
const popupContent = popup.querySelector(".popup-content");

const modal = () => {
  btnPopap.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        popup.style.display = "block";
        popupContent.style.opacity = "1";
        popupContent.style.transform = "scale(1)";
      } else {
        popup.style.display = "block";
        popupContent.style.opacity = "0";
        popupContent.style.transform = "scale(0)";

        animate({
          duration: 250,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.opacity = progress;
            popupContent.style.transform = `scale(${progress})`;
          },
        });
      }
    });
  });

  btnClose.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      popup.style.display = "none";
    } else {

      animate({
        duration: 250,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.opacity = 1 - progress;
          popupContent.style.transform = `scale(${1 - progress})`;

          if (progress === 1) {
            popup.style.display = "none";
          }
        },
      });
    }
  });

};

export default modal;