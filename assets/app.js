(function(){
  const parts = location.pathname.split("/").filter(Boolean);
  const lang = parts[1] || "it"; // /wedding/it/...
  document.querySelectorAll(".lang a").forEach(a=>{
    if(a.dataset.lang === lang) a.classList.add("active");
  });
})();
