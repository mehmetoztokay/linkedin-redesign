// Profile Page Tab Action
(() => {
  const profileTabs = document.querySelectorAll(".profile-tabs .menu-item");
  const profileTabItem = document.querySelectorAll(".profile-tab-items .profile-tab-item");

  if (profileTabs && profileTabItem) {
    for (let ti = 0; ti < profileTabItem.length; ti++) {
      profileTabItem[ti].id = `tab-${ti + 1}`;
    }

    const activeTab = (i) => {
      profileTabItem.forEach((item) => {
        item.classList.remove("is-active");
        if (item.id == `tab-${i + 1}`) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });
    };

    for (let i = 0; i < profileTabs.length; i++) {
      profileTabs[i].addEventListener("click", () => {
        for (let t = 0; t < profileTabs.length; t++) {
          profileTabs[t].classList.remove("is-active");
        }

        if (profileTabs[i].classList.contains("is-active")) {
          profileTabs[i].classList.remove("is-active");
        } else {
          profileTabs[i].classList.add("is-active");
          activeTab(i);
        }
      });
    }
  }
})();
