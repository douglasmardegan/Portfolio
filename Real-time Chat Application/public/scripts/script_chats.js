var socket = io("http://localhost:3000");

socket.on("update_messages", (messages) => {
  updateMessagesOnScreen(messages);
});

function updateMessagesOnScreen(messages) {
  const messages_display = document.querySelector(".messages-display");

  let list_messages = "<ul>";
  messages.forEach((message) => {
    list_messages += `<li>${message}</li>`;
  });

  list_messages += "</ul>";

  messages_display.innerHTML = list_messages;
}

document.addEventListener("DomContentLoaded", () => {
  const form = document.querySelector("#message_form");
  form.addEventListener("submit", (event) => {
    // 'preventDefault' removes the default behavior of a given event, in this case form submission
    event.preventDefault();

    // This is similar to using document.querySelector("#message").value to take the content typed in the input
    const message_content = document.forms["message_form_name"]["msg"].value;

    // Clearing the input field after clicking the "submit" button
    document.forms["message_form_name"]["msg"].value = "";

    // Sending the message to the backend
    socket.emit("new_message", { msg: message });
  });
});
