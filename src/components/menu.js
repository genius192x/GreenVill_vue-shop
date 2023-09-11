export function setMenuActive(){
	setTimeout(()=>{
		const body = document.body;
		const menu = body.querySelector(".menu");
		const menuItems = menu.querySelectorAll(".menu__item");
		console.log(menuItems);
		// let activeLink = document.querySelector('.router-link-active')
		if (menuItems){
			const menuBorder = menu.querySelector(".menu__border");
			let activeItem = menu.querySelector(".router-link-active");

			function clickItem(item, index) {
				menu.style.removeProperty("--timeOut");
				
				if (activeItem == item) return;
				
				if (activeItem) {
					activeItem.classList.remove("active");
				}

				item.classList.add("active");
				activeItem = item;
				offsetMenuBorder(activeItem, menuBorder);
			}
			function offsetMenuBorder(element, menuBorder) {
				console.log(element);
				const offsetActiveItem = element.getBoundingClientRect();
				const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) + "px";
				menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
			}
			offsetMenuBorder(activeItem, menuBorder);

			menuItems.forEach((item, index) => {
				item.addEventListener("click", () => clickItem(item, index));
			});

			// window.addEventListener("resize", () => {
			// 	offsetMenuBorder(activeItem, menuBorder);
			// 	menu.style.setProperty("--timeOut", "none");
			// });
		}
		
	},100)
	
}