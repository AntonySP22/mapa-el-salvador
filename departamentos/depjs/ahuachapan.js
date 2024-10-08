const departmentData = {
    "Ahuachapán": {
        mapImage: "../img/dep/ahuachapan.png",
        title: "Información sobre Ahuachapán",
        description: [
            "Ahuachapán es un departamento de El Salvador ubicado en la zona occidental del país. Es famoso por su belleza natural, aguas termales y su rica cultura cafetalera."
        ],
        carouselImages: [
            "../img/carusel/ahuachapan3.jpg",
            "../img/carusel/ahuachapan1.jpg",
            "../img/carusel/ahuachapan2.jpg"
        ],
        municipios: [
            "Ahuachapán", "Apaneca", "Atiquizaya", "Concepción de Ataco", "El Refugio", "Guaymango", "Jujutla", "San Francisco Menéndez", "San Lorenzo", "San Pedro Puxtla", "Tacuba", "Turín"
        ],
        lugaresTuristicos: [
            { img: "../img/carusel/ahuachapan1.jpg", nombre: "Apaneca" },
            { img: "../img/carusel/ahuachapan2.jpg", nombre: "Concepción de Ataco" },
            { img: "../img/carusel/ahuachapan4.jpg", nombre: "Aguas Termales de Santa Teresa" }
        ]
    },
};
document.addEventListener('DOMContentLoaded', () => {
    // Crear Navbar
    // Crea un elemento <nav> para la barra de navegación y le asigna la clase de Bootstrap
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg";

    // Crea un contenedor fluid para el contenido de la barra de navegación
    const container = document.createElement("div");
    container.className = "container-fluid";

    // Crea un enlace para la marca en la barra de navegación
    const brand = document.createElement("a");
    brand.className = "navbar-brand";
    brand.href = "../index.html";
    brand.textContent = "El Salvador Map";
    
    // Crea el botón para el menú colapsable en dispositivos móviles
    const button = document.createElement("button");
    button.className = "navbar-toggler";
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#navbarNavDropdown");
    button.setAttribute("aria-controls", "navbarNavDropdown");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");
    button.innerHTML = '<span class="navbar-toggler-icon"></span>';

    // Crea el contenedor para el menú colapsable
    const collapse = document.createElement("div");
    collapse.className = "collapse navbar-collapse";
    collapse.id = "navbarNavDropdown";

    // Crea una lista desordenada para los elementos del menú de navegación
    const ul = document.createElement("ul");
    ul.className = "navbar-nav";

    // Define los elementos del menú principal
    const menuItems = [
        { text: "Inicio", href: "../index.html" },
        { text: "Desarrolladores", href: "../desarrolladores.html" },
        { text: "Formulario", href: "../formulario.html" }
    ];

    // Añade los elementos del menú principal a la lista
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.className = "nav-item";
        const a = document.createElement("a");
        a.className = "nav-link";
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Define y añade los menús de zonas
    const zonas = [
        {
            name: "Zona Occidental",
            departments: [
                { name: "Santa Ana", link: "../departamentos/santa_ana.html" },
                { name: "Ahuachapán", link: "../departamentos/ahuachapan.html" },
                { name: "Sonsonate", link: "../departamentos/sonsonate.html" },
            ]
        },
        {
            name: "Zona Central",
            departments: [
                { name: "La Libertad", link: "../la_libertad.html" },
                { name: "Chalatenango", link: "../departamentos/chalatenango.html" },
                { name: "San Salvador", link: "../san_salvador.html" },
                { name: "Cuscatlán", link: "../departamentos/cuscatlan.html" },
                { name: "La Paz", link: "../departamentos/la_paz.html" },
                { name: "Cabañas", link: "../departamentos/cabanas.html" },
                { name: "San Vicente", link: "../departamentos/san_vicente.html" }
            ]
        },
        {
            name: "Zona Oriental",
            departments: [
                { name: "San Miguel", link: "../departamentos/san_miguel.html" },
                { name: "Morazán", link: "../departamentos/morazan.html" },
                { name: "La Unión", link: "../departamentos/la_union.html" },
                { name: "Usulután", link: "../departamentos/usulutan.html" }
            ]
        }
    ];

    // Añade los menús de zonas al menú de navegación
    zonas.forEach(zona => {
        const dropdownZona = document.createElement("li");
        dropdownZona.className = "nav-item dropdown";

        const dropdownToggleZona = document.createElement("a");
        dropdownToggleZona.className = "nav-link dropdown-toggle";
        dropdownToggleZona.href = "#";
        dropdownToggleZona.setAttribute("role", "button");
        dropdownToggleZona.setAttribute("data-bs-toggle", "dropdown");
        dropdownToggleZona.setAttribute("aria-expanded", "false");
        dropdownToggleZona.textContent = zona.name;

        const dropdownMenuZona = document.createElement("ul");
        dropdownMenuZona.className = "dropdown-menu";

        zona.departments.forEach(dept => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.className = "dropdown-item";
            a.href = dept.link;
            a.textContent = dept.name;
            li.appendChild(a);
            dropdownMenuZona.appendChild(li);
        });

        dropdownZona.appendChild(dropdownToggleZona);
        dropdownZona.appendChild(dropdownMenuZona);
        ul.appendChild(dropdownZona);
    });

    collapse.appendChild(ul);
    container.appendChild(brand);
    container.appendChild(button);
    container.appendChild(collapse);
    nav.appendChild(container);

    // Añade la barra de navegación al cuerpo del documento
    document.body.appendChild(nav);

    const departmentName = "Ahuachapán";
    const departmentInfo = departmentData[departmentName];

    if (departmentInfo) {
        const containerFluid = document.createElement("div");
        containerFluid.className = "container-fluid";

        // Crea una fila para el contenido
        const row = document.createElement("div");
        row.className = "row";

        // Sección del mapa
        const mapDiv = document.createElement("div");
        mapDiv.className = "col-md-6 mapadiv";
        mapDiv.id = "map";
        const mapImg = document.createElement("img");
        mapImg.src = departmentInfo.mapImage; // Usar datos de departmentData
        mapImg.alt = departmentName;
        mapImg.className = "depimg";
        mapDiv.appendChild(mapImg);

        // Sección de información
        const infoDiv = document.createElement("div");
        infoDiv.className = "col-md-6 info";

        const infoH2 = document.createElement("h2");
        infoH2.textContent = departmentInfo.title; // Usar datos de departmentData

        const infoP1 = document.createElement("p");
        infoP1.textContent = departmentInfo.description[0]; // Usar datos de departmentData

        // Sección del carrusel de fotos
        const carousel = document.createElement("div");
        carousel.id = "carouselExampleIndicators";
        carousel.className = "carousel slide";
        carousel.setAttribute("data-bs-ride", "carousel");

        const carouselIndicators = document.createElement("div");
        carouselIndicators.className = "carousel-indicators";
        departmentInfo.carouselImages.forEach((_, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.setAttribute("data-bs-target", "#carouselExampleIndicators");
            button.setAttribute("data-bs-slide-to", index);
            button.className = index === 0 ? "active" : "";
            button.setAttribute("aria-current", index === 0 ? "true" : "false");
            button.setAttribute("aria-label", `Slide ${index + 1}`);
            carouselIndicators.appendChild(button);
        });

        const carouselInner = document.createElement("div");
        carouselInner.className = "carousel-inner";
        departmentInfo.carouselImages.forEach((src, index) => {
            const item = document.createElement("div");
            item.className = index === 0 ? "carousel-item active" : "carousel-item";
            const img = document.createElement("img");
            img.src = src;
            img.className = "d-block w-100";
            item.appendChild(img);
            carouselInner.appendChild(item);
        });

        const carouselPrev = document.createElement("button");
        carouselPrev.className = "carousel-control-prev";
        carouselPrev.type = "button";
        carouselPrev.setAttribute("data-bs-target", "#carouselExampleIndicators");
        carouselPrev.setAttribute("data-bs-slide", "prev");
        carouselPrev.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

        const carouselNext = document.createElement("button");
        carouselNext.className = "carousel-control-next";
        carouselNext.type = "button";
        carouselNext.setAttribute("data-bs-target", "#carouselExampleIndicators");
        carouselNext.setAttribute("data-bs-slide", "next");
        carouselNext.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

        carousel.appendChild(carouselIndicators);
        carousel.appendChild(carouselInner);
        carousel.appendChild(carouselPrev);
        carousel.appendChild(carouselNext);

        infoDiv.appendChild(infoH2);
        infoDiv.appendChild(infoP1);
        infoDiv.appendChild(carousel);

        row.appendChild(mapDiv);
        row.appendChild(infoDiv);

        containerFluid.appendChild(row);

        // Contenedor flexible para los municipios
        const flexContainer = document.createElement("div");
        flexContainer.className = "flex-container";

        const parentContainer = document.createElement("div");
        parentContainer.className = "parent-container";
        const municipiosContainer = document.createElement("div");
        municipiosContainer.className = "container";
        const toggleButton = document.createElement("div");
        toggleButton.className = "toggle-button";
        toggleButton.textContent = "Más información sobre municipios";
        toggleButton.addEventListener("click", () => toggleContent('municipios'));

        const municipiosContent = document.createElement("div");
        municipiosContent.id = "municipios";
        municipiosContent.className = "toggle-content";
        municipiosContent.style.display = "none";

        const municipiosList = document.createElement("ul");
        municipiosList.className = "municipios-list";
        departmentInfo.municipios.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            municipiosList.appendChild(li);
        });

        municipiosContent.appendChild(municipiosList);
        municipiosContainer.appendChild(toggleButton);
        municipiosContainer.appendChild(municipiosContent);
        parentContainer.appendChild(municipiosContainer);
        flexContainer.appendChild(parentContainer);

        // Contenedor fijo con la imagen
        const lugaresContainer = document.createElement("div");
        lugaresContainer.className = "container";
        const lugaresDiv = document.createElement("div");
        lugaresDiv.className = "lugares";

        const lugaresH2 = document.createElement("h2");
        lugaresH2.textContent = "Lugares Turísticos";

        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";
        departmentInfo.lugaresTuristicos.forEach(lugar => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = lugar.img;
            const p = document.createElement("p");
            p.textContent = lugar.nombre;
            div.appendChild(img);
            div.appendChild(p);
            imageContainer.appendChild(div);
        });

        lugaresDiv.appendChild(lugaresH2);
        lugaresDiv.appendChild(imageContainer);
        lugaresContainer.appendChild(lugaresDiv);

        flexContainer.appendChild(lugaresContainer);
        containerFluid.appendChild(flexContainer);

        document.body.appendChild(containerFluid);
    } else {
        console.error("Información del departamento no encontrada.");
    }

});

// Función para mostrar/ocultar contenido
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}