(function () {
  //Infinity Scroll
  let page = 1;
  let loader = document.querySelector(".author-loader");

  const loadMore = (limit) => {
    if (page == 50) return;
    getData("https://picsum.photos/v2/list?page=" + page + "&limit=" + limit);
    page++;
  };

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      loadMore(2);
    }
  });

  //Loading and building author card
  const buildCard = (data) => {
    const container = document.querySelector("#card-container");
    const template = document.querySelector("#template-card");

    data.forEach((element) => {
      const firstClone = template.content.cloneNode(true);
      let title = firstClone.querySelector(".card-header");
      let img = firstClone.querySelector(".author-image");
      let id = firstClone.querySelector(".author-id");
      let url = firstClone.querySelector(".author-url");
      let downloadUrl = firstClone.querySelector(".author-download-url");

      title.textContent = element.author;
      img.src = element.download_url;
      id.textContent = "#" + element.id;
      url.href = element.url;
      downloadUrl.href = element.download_url;
      container.appendChild(firstClone);
    });
  };

  async function getData(url) {
    loader.classList.add("loader-visible");

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      const data = jsonData;
      buildCard(data);
      loader.classList.remove("loader-visible");
    } catch (error) {
      console.error("Error:", error);
    }
  }
})();
