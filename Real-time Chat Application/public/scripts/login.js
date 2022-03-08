let chat_room_choosed = document.querySelector("#chat_room").value;

document.querySelector("#submitBtn").addEventListener("click", () => {
  switch (chat_room_choosed) {
    case "chat":
      document.querySelector("#form_user_informations").action =
        "/general_chat_room";
      break;
    case "music":
      document.querySelector("#form_user_informations").action =
        "/music_chat_room";
      break;
    case "study":
      document.querySelector("#form_user_informations").action =
        "/study_chat_room";
      break;
  }
});
