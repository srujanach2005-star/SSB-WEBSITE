/* INDEX_HTML */
function toggleAccordion(clickedHeader) {
    const items = document.querySelectorAll("#accordion .accordion-item");

    items.forEach(item => {
        const body = item.querySelector(".accordion-body");
        const arrow = item.querySelector(".arrow");
        const header = item.querySelector(".accordion-header");

        const expandedHeight = body.scrollHeight + "px";
        const collapsedHeight = "30px";

        if (item.contains(clickedHeader)) {
            const isExpanded = body.style.maxHeight !== collapsedHeight;
            body.style.maxHeight = isExpanded ? collapsedHeight : expandedHeight;
            arrow.style.transform = isExpanded ? "rotate(0deg)" : "rotate(90deg)";
            arrow.classList.toggle("text-amber-500", !isExpanded);
            arrow.classList.toggle("text-black", isExpanded);
            header.classList.toggle("text-amber-500", !isExpanded);
            header.classList.toggle("text-black", isExpanded);
        } else {
            body.style.maxHeight = collapsedHeight;
            arrow.style.transform = "rotate(0deg)";
            arrow.classList.remove("text-amber-500");
            arrow.classList.add("text-black");
            header.classList.remove("text-amber-500");
            header.classList.add("text-black");
        }
    });
}

// Expand Card 3 on load
window.addEventListener("load", () => {
    const items = document.querySelectorAll("#accordion .accordion-item");
    const collapsedHeight = "30px";

    items.forEach((item, index) => {
        const body = item.querySelector(".accordion-body");
        const arrow = item.querySelector(".arrow");
        const header = item.querySelector(".accordion-header");

        if (index === 2) {
            body.style.maxHeight = body.scrollHeight + "px";
            arrow.style.transform = "rotate(90deg)";
            arrow.classList.add("text-amber-500");
            arrow.classList.remove("text-black");
            header.classList.add("text-amber-500");
            header.classList.remove("text-black");
        } else {
            body.style.maxHeight = collapsedHeight;
            arrow.style.transform = "rotate(0deg)";
            arrow.classList.remove("text-amber-500");
            arrow.classList.add("text-black");
            header.classList.remove("text-amber-500");
            header.classList.add("text-black");
        }
    });
});

/**APPY_NOW_HTML**/
function toggleAccordion(clickedHeader) {
    const items = document.querySelectorAll("#accordion .accordion-item");

    items.forEach(item => {
        const body = item.querySelector(".accordion-body");
        const arrow = item.querySelector(".arrow");
        const header = item.querySelector(".accordion-header");

        const expandedHeight = body.scrollHeight + "px";
        const collapsedHeight = "30px";

        if (item.contains(clickedHeader)) {
            const isExpanded = body.style.maxHeight !== collapsedHeight;
            body.style.maxHeight = isExpanded ? collapsedHeight : expandedHeight;
            arrow.style.transform = isExpanded ? "rotate(0deg)" : "rotate(90deg)";
            arrow.classList.toggle("text-amber-500", !isExpanded);
            arrow.classList.toggle("text-black", isExpanded);
            header.classList.toggle("text-amber-500", !isExpanded);
            header.classList.toggle("text-black", isExpanded);
        } else {
            body.style.maxHeight = collapsedHeight;
            arrow.style.transform = "rotate(0deg)";
            arrow.classList.remove("text-amber-500");
            arrow.classList.add("text-black");
            header.classList.remove("text-amber-500");
            header.classList.add("text-black");
        }
    });
}

// Expand Card 3 on load
window.addEventListener("load", () => {
    const items = document.querySelectorAll("#accordion .accordion-item");
    const collapsedHeight = "30px";

    items.forEach((item, index) => {
        const body = item.querySelector(".accordion-body");
        const arrow = item.querySelector(".arrow");
        const header = item.querySelector(".accordion-header");

        if (index === 2) {
            body.style.maxHeight = body.scrollHeight + "px";
            arrow.style.transform = "rotate(90deg)";
            arrow.classList.add("text-amber-500");
            arrow.classList.remove("text-black");
            header.classList.add("text-amber-500");
            header.classList.remove("text-black");
        } else {
            body.style.maxHeight = collapsedHeight;
            arrow.style.transform = "rotate(0deg)";
            arrow.classList.remove("text-amber-500");
            arrow.classList.add("text-black");
            header.classList.remove("text-amber-500");
            header.classList.add("text-black");
        }
    });
});

/**APPLY_NOW**/
function toggleAccordion(clickedHeader) {
    const items = document.querySelectorAll("#accordion .accordion-item");

    items.forEach(item => {
        const body = item.querySelector(".accordion-body");
        const arrow = item.querySelector(".arrow");
        const header = item.querySelector(".accordion-header");

        const expandedHeight = body.scrollHeight + "px";
        const collapsedHeight = "30px";

        if (item.contains(clickedHeader)) {
            const isExpanded = body.style.maxHeight !== collapsedHeight;
            body.style.maxHeight = isExpanded ? collapsedHeight : expandedHeight;
            arrow.style.transform = isExpanded ? "rotate(0deg)" : "rotate(90deg)";
            arrow.classList.toggle("text-amber-500", !isExpanded);
            arrow.classList.toggle("text-black", isExpanded);
            header.classList.toggle("text-amber-500", !isExpanded);
            header.classList.toggle("text-black", isExpanded);
        } else {
            body.style.maxHeight = collapsedHeight;
            arrow.style.transform = "rotate(0deg)";
            arrow.classList.remove("text-amber-500");
            arrow.classList.add("text-black");
            header.classList.remove("text-amber-500");
            header.classList.add("text-black");
        }
    });
}

// Expand Card 3 on load
window.addEventListener("load", () => {
    const items = document.querySelectorAll("#accordion .accordion-item");
    const collapsedHeight = "30px";

    items.forEach((item, index) => {
        const body = item.querySelector(".accordion-body");
        const arrow = item.querySelector(".arrow");
        const header = item.querySelector(".accordion-header");

        if (index === 2) {
            body.style.maxHeight = body.scrollHeight + "px";
            arrow.style.transform = "rotate(90deg)";
            arrow.classList.add("text-amber-500");
            arrow.classList.remove("text-black");
            header.classList.add("text-amber-500");
            header.classList.remove("text-black");
        } else {
            body.style.maxHeight = collapsedHeight;
            arrow.style.transform = "rotate(0deg)";
            arrow.classList.remove("text-amber-500");
            arrow.classList.add("text-black");
            header.classList.remove("text-amber-500");
            header.classList.add("text-black");
        }
    });
});


