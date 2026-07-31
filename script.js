window.addEventListener("load", () => {
  const bookElement = document.getElementById("book");

  const pageFlip = new St.PageFlip(bookElement, {
    width: 440,
    height: 550,
    size: "stretch",
    minWidth: 270,
    maxWidth: 520,
    minHeight: 360,
    maxHeight: 700,
    maxShadowOpacity: 0.22,
    showCover: true,
    mobileScrollSupport: false,
    usePortrait: true,
    autoSize: true,
    drawShadow: true,
    flippingTime: 850
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  const status = document.getElementById("page-status");
  const totalPages = document.querySelectorAll(".page").length;

  function updateStatus(pageIndex) {
    if (pageIndex === 0) {
      status.textContent = "Cover";
    } else if (pageIndex === totalPages - 1) {
      status.textContent = "Back cover";
    } else {
      status.textContent = `Page ${pageIndex}`;
    }
  }

  pageFlip.on("flip", (event) => updateStatus(event.data));

  document.getElementById("prev").addEventListener("click", () => {
    pageFlip.flipPrev();
  });

  document.getElementById("next").addEventListener("click", () => {
    pageFlip.flipNext();
  });

  updateStatus(0);
});
