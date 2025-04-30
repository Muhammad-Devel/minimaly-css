document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("modal").forEach(modal => {
    const toggleText = modal.getAttribute("toggle") || "Open";
    const btn = document.createElement("button");
    btn.textContent = toggleText;
    modal.insertBefore(btn, modal.firstChild);

    const content = document.createElement("div");
    content.className = "modal-content";
    content.innerHTML = modal.innerHTML;
    modal.innerHTML = "";
    modal.appendChild(btn);
    modal.appendChild(content);

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);

    btn.addEventListener("click", () => {
      content.classList.add("active");
      overlay.classList.add("active");
    });
    overlay.addEventListener("click", () => {
      content.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});