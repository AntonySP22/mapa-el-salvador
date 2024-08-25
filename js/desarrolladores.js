// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Crear Navbar
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg";

    const container = document.createElement("div");
    container.className = "container-fluid";

    // Crea un enlace para la marca en la barra de navegación
    const brand = document.createElement("a");
    brand.className = "navbar-brand";
    brand.href = "index.html";
    brand.textContent = "El Salvador Map";


    const button = document.createElement("button");
    button.className = "navbar-toggler";
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#navbarNavDropdown");
    button.setAttribute("aria-controls", "navbarNavDropdown");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");
    button.innerHTML = '<span class="navbar-toggler-icon"></span>';

    const collapse = document.createElement("div");
    collapse.className = "collapse navbar-collapse";
    collapse.id = "navbarNavDropdown";

    const ul = document.createElement("ul");
    ul.className = "navbar-nav";

    // Crear los ítems del menú
    const menuItems = [
        { text: "Inicio", href: "index.html" },
        { text: "Desarrolladores", href: "desarrolladores.html" },
        { text: "Formulario", href: "formulario.html" }
    ];

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

    // Crear el dropdown de Departamentos
    const dropdown = document.createElement("li");
    dropdown.className = "nav-item dropdown";

    const dropdownToggle = document.createElement("a");
    dropdownToggle.className = "nav-link dropdown-toggle";
    dropdownToggle.href = "#";
    dropdownToggle.setAttribute("role", "button");
    dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdownToggle.textContent = "Departamentos";

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";

    const departments = [
        { name: "Ahuachapán", link: "./departamentos/ahuachapan.html" },
        { name: "Cabañas", link: "./departamentos/cabanas.html" },
        { name: "Chalatenango", link: "./departamentos/chalatenango.html" },
        { name: "Cuscatlán", link: "./departamentos/cuscatlan.html" },
        { name: "La Libertad", link: "./departamentos/la_libertad.html" },
        { name: "La Paz", link: "./departamentos/la_paz.html" },
        { name: "La Unión", link: "./departamentos/la_union.html" },
        { name: "Morazán", link: "./departamentos/morazan.html" },
        { name: "San Miguel", link: "./departamentos/san_miguel.html" },
        { name: "San Salvador", link: "./departamentos/san_salvador.html" },
        { name: "San Vicente", link: "./departamentos/san_vicente.html" },
        { name: "Santa Ana", link: "./departamentos/santa_ana.html" },
        { name: "Sonsonate", link: "./departamentos/sonsonate.html" },
        { name: "Usulután", link: "./departamentos/usulutan.html" }
    ];

    departments.forEach(dept => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "dropdown-item";
        a.href = dept.link;
        a.textContent = dept.name;
        li.appendChild(a);
        dropdownMenu.appendChild(li);
    });

    dropdown.appendChild(dropdownToggle);
    dropdown.appendChild(dropdownMenu);
    ul.appendChild(dropdown);

    // Crear el dropdown de Zonas
    const zonas = [
        {
            name: "Zona Occidental",
            departments: [
                { name: "Santa Ana", link: "./departamentos/santa_ana.html" },
                { name: "Ahuachapán", link: "./departamentos/ahuachapan.html" },
                { name: "Sonsonate", link: "./departamentos/sonsonate.html" },
            ]
        },
        {
            name: "Zona Central",
            departments: [
                { name: "La Libertad", link: "./departamentos/la_libertad.html" },
                { name: "Chalatenango", link: "./departamentos/chalatenango.html" },
                { name: "San Salvador", link: "./departamentos/san_salvador.html" },
                { name: "Cuscatlán", link: "./departamentos/cuscatlan.html" },
                { name: "La Paz", link: "./departamentos/la_paz.html" },
                { name: "Cabañas", link: "./departamentos/cabanas.html" },
                { name: "San Vicente", link: "./departamentos/san_vicente.html" }
            ]
        },
        {
            name: "Zona Oriental",
            departments: [
                { name: "San Miguel", link: "./departamentos/san_miguel.html" },
                { name: "Morazán", link: "./departamentos/morazan.html" },
                { name: "La Unión", link: "./departamentos/la_union.html" },
                { name: "Usulután", link: "./departamentos/usulutan.html" }
            ]
        }
    ];

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

    document.body.appendChild(nav);

    // Crear el contenido principal
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Equipo de Desarrolladores";
    header.appendChild(h1);

    const main = document.createElement("main");
    const section = document.createElement("section");
    section.className = "developers";

    const developers = [
        { id: "developer1", imgSrc: "img/blanca.png", name: "Blanca Maravilla", role: "Programadora" },
        { id: "developer2", imgSrc: "img/elmer.png", name: "Elmer Cruz", role: "Programador" },
        { id: "developer3", imgSrc: "img/rebeca.png", name: "Rebeca Orozco", role: "Programadora" },
        { id: "developer4", imgSrc: "img/adan.png", name: "Adán Ruano", role: "Programador" }
    ];

    developers.forEach(dev => {
        const card = document.createElement("div");
        card.className = "developer-card";
        card.id = dev.id;

        const img = document.createElement("img");
        img.src = dev.imgSrc;
        img.alt = `Integrante ${dev.id.slice(-1)}`;

        const h2 = document.createElement("h2");
        h2.textContent = dev.name;

        const p = document.createElement("p");
        p.textContent = dev.role;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p);
        section.appendChild(card);
    });

    main.appendChild(section);

    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "© 2024 Proyecto de cátedra - Todos los derechos reservados.";
    footer.appendChild(p);

    // Añadir el contenido a la página
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // Añadir interactividad a las tarjetas de desarrolladores
    const developerCards = document.querySelectorAll('.developer-card');

    developerCards.forEach(card => {
        card.addEventListener('click', () => {
            const developerName = card.querySelector('h2').textContent;
            const developerDescription = card.querySelector('p').textContent;

            // Crear un mensaje de alerta
            alert(`Integrante: ${developerName}\n\nDescripción: ${developerDescription}`);
        });
    });
});
