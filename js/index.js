document.addEventListener('DOMContentLoaded', () => {

    // Crear cuerpo
    const head = document.head;
    const body = document.body;

    // Crear Navbar
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg";

    const container = document.createElement("div");
    container.className = "container-fluid";

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

    // Otros botones
    const menuItems = [
        { text: "Inicio", href: "../index.html" },
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

    // Todos los departamento
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

    // Menú de Zonas
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

    //Fin del menu

    // Crear el mapa SVG
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('mapadiv'); // <div class="mapadiv">

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('version', '1.2'); // <svg version="1.2">
    svg.setAttribute('viewBox', '0 0 1000 547'); // <svg viewBox="0 0 1000 547">
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); // <svg xmlns="http://www.w3.org/2000/svg">

    const features = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    features.setAttribute('id', 'features'); // <g id="features">

    // Aqui se agregan los PATH de cada departamento
    // Ahuchapan a

    const aElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    aElement.setAttribute('href', 'departamentos/ahuachapan.html');

    const pathAhuachapan = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathAhuachapan.setAttribute('d', 'M183.1 180l3.2 1.3 6.8 4.3 1.3 1.2 0.7 0.8 0.4 0.8 0.8 3.2 0.4 0.9 0.6 0.9 1.3 1.3 1.6 1.2 1.3 1.4 0.1 0.1 0.8 1.5 0.3 0.9-1.1 6.9-7.5 25.9-6.7 2.8-8.2 2.3-4.6 0.7-1 0.7-0.8 1.1-0.4 2.5-0.1 1.6 0.9 7.2 0.6 2.3 0.7 1.7 0.9 1.8 0.3 0.9-0.2 1.3-7.6 11.7-0.7 2.1-0.2 1.6 3.1 10 0.4 2.2-0.5 1.5-1.1 1.8-2.8 3.4-1.1 2.1-0.6 1.6-0.3 3.6-0.3 1-4.8 8.6-0.7 1.9-2.1 8.6-1.9 0.8-3.1 0.4-11.3-0.7-2.3-0.5-0.8-0.5-2.7-2.6-4.9-5.7-0.8-0.6-1.5-1.1-0.9-0.4-1-0.4-1.4-0.1-1.5 0-2.1 0.4-1.3 0.4-1.1 0.5-0.9 0.6-1.1 0.9-2.8 3.4-5.9 9.4-0.9 1.4-25.4-11.6-29-14-6-25.1-0.1-6 0.9-6.3 2-6.1 3-5.6 4.5-4.6 10.3-5.5 4.6-3.8 3.4-5.4 2.5-5.6 3.2-5.5 5.6-4.9 36.1-25.3 7.9-8 4-2.7 16.7-6.3 5.5-0.4 6.8 1.8 9.8 7.6 5.5 2.3 5.5-3 0.1-2.2-0.3-0.6z');
    pathAhuachapan.setAttribute('id', 'SVAH'); // <path id="SVAH">
    pathAhuachapan.setAttribute('name', 'Ahuachapán'); // <path name="Ahuachapán">
    pathAhuachapan.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Ahuachapán', 'Cabecera departamental: Ahuachapán <br> Extensión territorial: 1,239 km² <br> Fiesta patronal: Nuestra Señora de la Asunción, 9 de febrero <br> Número de habitantes: 333,000');
    });

    pathAhuachapan.addEventListener('mouseleave', hideInfoBox);

    aElement.appendChild(pathAhuachapan);
    features.appendChild(aElement);

    // Santa Ana b 

    const bElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    bElement.setAttribute('href', 'departamentos/santa_ana.html');

    const pathSantaAna = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSantaAna.setAttribute('d', 'M194.1 232.6l7.5-25.9 1.1-6.9-0.3-0.9-0.8-1.5-0.1-0.1-1.3-1.4-1.6-1.2-1.3-1.3-0.6-0.9-0.4-0.9-0.8-3.2-0.4-0.8-0.7-0.8-1.3-1.2-6.8-4.3-3.2-1.3-2.4-5.6-0.3-3 1-3.2 16.1-28.4 7.5-8.2 9.4-7.3 9.9-4.6 40.3-9.7 2.5-2.4-0.1-6-1.2-1.6-4.8-2.4-1.6-1.6-0.7-2.5-0.7-5.9-0.5-1.8-2.2-4.2-1-1.5-2.2-2-2.6-1.2-7.9-1-2.3-5.5 2.2-3.3 3.8-2.7 2.4-3.8-1.1-4.5-2.7-3.8-1.7-4.4 2.5-6.1 5.3-4 5.5 0.5 4.1 4.1 1.1 7.2 5.1-3.7 9.3-11.2 2.6-1.1 4.1-1.8 5.9 0.8 4.3 2.3 4.2 1.5 5.9-1.2 8.6-8.8 3.8-1.5 0.5 7.5 1.9-3 0.4-0.9 10.8 7.9 0.1 0.1 5.8 0.9 14.3 13.4 2.5 2.8 0.5 0.7 1.2 2.9 1.7 2.9 0.8 0.8 1.3 1.1 5.6 2.9 0.8 0.7 1.8 2.4 6.9 4.4-4.8 14-1.5 7.8-3.3 3.7-14 5.7 0 7.7 0.3 4.3-0.1 1.5-0.7 1.8-7.3 10.1-1.3 1.3-0.8 0.6-0.8 0.5-1 0.3-1 0.3-1.2 0.2-3.8 0.2-1 0.2-1 0.3-0.9 0.4-0.8 0.5-0.7 0.6-4.4 8.1-0.9 1.2-0.7 0.7-0.9 0.5-0.9 0.4-7.1-0.5-7.2 24.8 1.1 8.4 4.2 3.8 5.6 1.1 5.6 0 4.4-1.2-4 21.4-0.7 5.5 0.1 1.2-0.6 7.5-0.4 1.2-0.8 1-1.9 0.9-1.4 0-1.3 0-1 0.1-0.8 0.4-3 4.9-1.2 0.8-1.1 0.1-0.9-0.3-1-0.1-0.9 0.3-0.8 0.5-0.6 0.8-0.5 2.1-0.5 10.4 0.4 6.9-0.7 8.3-6.6 18-1.8 10.7-17.9-3.4-4.7-1.6-0.6-0.8-0.6-0.8-2.2-5.6-5-4.7-8-5.9-3.6-2.2-2.5-1.1-1 0.2-0.8 0.6-0.6 0.7-1 1.6-1.2 2.8-0.5 2.1 0 3.5-0.3 0.9-0.8 0.9-1.4 0.7-2.7 0.6-1.7-0.4-1.2-0.4-0.9-0.7-0.6-0.7-0.5-0.9-0.4-1.2-0.9-1.3-1.7-1.8-2.4-0.4-1.2-0.8-0.5-0.8 0.2-1 0.4-0.8 0.7-0.8 1.4-1.2 0.6-0.6 0.5-0.9 0.3-1.1 0.1-1-0.4-2-1.7-2.8-2.3-2.1-1.2-1.3-0.8-1.1-1.2-2.8-1.1-1.5-6.1-6-2.2-1.6-1.7-0.8-1.2 0-1.1 0.1-2.1 0.6-3.4 0.1-8.7-2.2z');
    pathSantaAna.setAttribute('id', 'SVSA'); // <path id="SVSA">
    pathSantaAna.setAttribute('name', 'Santa Ana'); // <path name="Santa Ana">
    pathSantaAna.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Santa Ana', 'Cabecera departamental: Santa Ana <br> Extensión territorial: 2,023 km² <br> Fiesta patronal: Nuestra Señora Santa Ana, 17 de julio <br> Número de habitantes: 572,000');
    });

    pathSantaAna.addEventListener('mouseleave', hideInfoBox);

    bElement.appendChild(pathSantaAna);
    features.appendChild(bElement);

    // Chalatenango c

    const cElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    cElement.setAttribute('href', 'departamentos/chalatenango.html');

    const pathChalatenango = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathChalatenango.setAttribute('d', 'M324.5 181.7l-4.4 1.2-5.6 0-5.6-1.1-4.2-3.8-1.1-8.4 7.2-24.8 7.1 0.5 0.9-0.4 0.9-0.5 0.7-0.7 0.9-1.2 4.4-8.1 0.7-0.6 0.8-0.5 0.9-0.4 1-0.3 1-0.2 3.8-0.2 1.2-0.2 1-0.3 1-0.3 0.8-0.5 0.8-0.6 1.3-1.3 7.3-10.1 0.7-1.8 0.1-1.5-0.3-4.3 0-7.7 14-5.7 3.3-3.7 1.5-7.8 4.8-14-6.9-4.4-1.8-2.4-0.8-0.7-5.6-2.9-1.3-1.1-0.8-0.8-1.7-2.9-1.2-2.9-0.5-0.7-2.5-2.8-14.3-13.4 14.5 2.3 11.6 5.6 19.2 4.1 9.5 6.7 17.3 5.2 3.6-3.2 5.4-10.5 3-3.1 3.3-0.9 2.2 0.4 1.9 1.7 2.1 3 1.9 3.5 0.8 3.9-0.3 3.9-1.5 3.8 4.3 3.7 12.8 1.5 6 3 2.4 4.8 1.5 11.9 1.7 3.5 9.5 7.2 3.4 4.2 3.4 5.7 1.4 4.9 0.2 1.8 0.4 3.2 1.2 4.1 3.3 2.4 3.7-0.8 4.4-2.6 5.3-2.3 5.8 0.1 9.3 6 7.9 9.9 5.6 11.6 2.5 10.9 6.6-1 16.4 1.3 4.5-1.8 3.9-2.4 3.3-0.3 2.7 4.4-0.4 6.5-2.2 6.4-0.2 5.5 5.9 3.8 8 1.1 1.8 0.6 2.7 2.4 1.8 2.6 0.9 3.2-0.2 2-17.3 2.6-7.7 3.8-2.9 3.8-2.5 2-4.5 2.1-23.1 7.6-5.6 2.1-5.2 1.3-9.8-0.9-11.1 0.3-6.2-0.7-5.8-2.2-6.8 0.5-8-3.8-1.4-0.9-1.7-1.6-2-2.9-1-2.1-0.6-1.8-0.3-1-0.1-0.9 0-1.1 0.3-1.6 0-0.1-0.2-0.7-0.7-1-8.2-9.8-1.7-3-0.6-0.8-6.3-4.5-2.7-2.4-1.9-1.1-9.7-3.5-4.7-2.4-1.3-0.1-1.2 0-6.6 3.4-10.4 4.8-4.2-1-5.3-4.2-2.4 4.8-5.2-0.1-7.8-3.4-2.9 1-4.9 3.5-1.5 0.8-2.7-0.4-3.6-1.7-1.2-0.3-6.1-0.9-6.8-3.9-3.9-0.8-3.6 2.8-3.5 1.9-4.4 0.9-3.1 1.2-1.2 2.6-1.7 2.7z');
    pathChalatenango.setAttribute('id', 'SVSA'); // <path id="SVSA">
    pathChalatenango.setAttribute('name', 'Chalatenango'); // <path name="Chalatenango">
    pathChalatenango.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Chalatenango', 'Cabecera departamental: Chalatenango <br> Extensión territorial: 2,017 km² <br> Fiesta patronal: San Juan Bautista, 24 de junio <br> Número de habitantes: 202,000');
    });

    pathChalatenango.addEventListener('mouseleave', hideInfoBox);

    cElement.appendChild(pathChalatenango);
    features.appendChild(cElement);

    // La Union d
    const dElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    dElement.setAttribute('href', 'departamentos/la_union.html');

    const pathUnion = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathUnion.setAttribute('d', 'M836.2 370.7l11.6-12.4 2.7-4.2 0.7-7.3 8.6-22.3 2.2-10.4 1.1-8.9 0.2-7.4-0.4-2.4-0.3-0.9-0.4-0.9-0.5-0.9-1.7-2.2-0.5-0.8-0.2-1-0.1-1.3 1.5-23.5-0.7-10.9-1.6-6.3-1.2-7.6 2.1 0.5 5.5 3.6 2.6 0.7 1.7-0.8 4.8-3.8 3-1 3.7 0.2 7.4 1.6 3.6-0.3 3.6-2.6 3.1-3.9 3.8-3.2 5.6-0.2 3.6 2.8 3.6 10.2 3.1 4.6 1.9 1.1 5.3 2.1 2.3 1.2 5.9 5.2 10.6 9.1 6.6 2.7-3.3 5.6-7.6 17.6-1.9 6.3 2.4 6.4-1.8 4.1-3.8 3.6-3.3 4.7-1.3 6.9 0.3 14.3-0.9 7-9 21.9-2.2 10.6 4 8.8 3.8 1.4 8-2.6 5.4 2.1 2.9 3.4 2 4.6 0.6 5.2-0.9 4.9-6.4 7.4-29.6 13.6-0.3-0.1-2.9-1.8-1.9-3.1-2.8-8.3-10.6 18.4-2.7 10.8 6.9 4.8 4.4 1.7 12.4 12 7.1 4.8 0.6 2.2 0 4.7-3 8.2-7.5 5.9-27.9 14.1-7.6 6.1-1.3 6.1 8.7 6-13.3 3.1-51.7-3.6-9.6-1.8 0-0.1 2.1-30.2 0.5-2.9 1-3.8 0.8 0.3 3.1 2.3 3.2 1.9 3.9 1.4 1.3 0.3 1.2 0 1.8-0.5 0.8-0.9 4.9-16.1 0.3-2.4-0.6-2.2-0.1-1.6 4.8-27.8-0.1-0.9-0.4-1-0.4-0.9-3.5-5.6-0.5-0.9-0.3-1-1.1-6.8-0.2-9.9 0.3-2.5 0.6-1.5 0.7-0.6 1.6-0.9 1-0.8 1.1-0.9 1.4-1.7 0.4-1.3 0-1.2-1.5-5.6-0.2-11.7 0.8-4.9 2.5-3.3z m105.9 136.3l-0.3-4.9 2.7-2 5.2 1.7 3.2 7.1 0.2 5.9 1.4 3.9-3.1 1.8-4.9-1.8-3.2 1.5 0-4.2-2-4.1 0.8-4.9z m-14.8-19.2l2.9 1.8 2.5 5.6-2.2 3.2-2.5 2.4-4.9-4.4-1.2-6.1 2.2-2.2 3.2-0.3z');
    pathUnion.setAttribute('id', 'SVSA'); // <path id="SVSA">
    pathUnion.setAttribute('name', 'La Union'); // <path name="La Union">
    pathUnion.addEventListener('mouseenter', event => {
        showInfoBox(event, 'La Unión', 'Cabecera departamental: La Unión <br> Extensión territorial: 2,074 km² <br> Fiesta patronal: San Carlos Borromeo, 15 de enero <br> Número de habitantes: 372,000');
    });

    pathUnion.addEventListener('mouseleave', hideInfoBox);

    dElement.appendChild(pathUnion);
    features.appendChild(dElement);

    // Morazan e
    const eElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    eElement.setAttribute('href', 'departamentos/morazan.html');

    const pathMorazan = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathMorazan.setAttribute('d', 'M736.4 228.6l1.5-2.6 2.5-2.8 4.5-1.9 3.3 0.5 2.4-0.5 1.8-5.3-0.6-1-3.4-3.1-0.8-1.4-0.3-7.7 0.1-1.3 3.7-1.4 5.7 0.6 0.9 0.2 9 2 6 0.2 19.6-2.4 9.9 0.6 4.3 3.6 5.5 14.3 5.4 6.6 7 6.3 6.1 7.4 3.1 9.5 17.1-8.5 5.6-1.5 0.9 0.1 1.2 7.6 1.6 6.3 0.7 10.9-1.5 23.5 0.1 1.3 0.2 1 0.5 0.8 1.7 2.2 0.5 0.9 0.4 0.9 0.3 0.9 0.4 2.4-0.2 7.4-1.1 8.9-2.2 10.4-8.6 22.3-0.7 7.3-2.7 4.2-11.6 12.4-8.1-1.3-3.9 0.2-14.7 4.6-2.8 0.3-1.8-0.3-0.6-0.6-0.6-1.1-0.3-0.8-0.9-1-1.3-1.2-5.5-3.3-0.8-0.6-0.6-0.8-0.4-0.8-1.1-6.9-0.6-2.1-1.4-2.6-1.6-2.1-1.3-0.8-1.4-0.5-14.6 1.2-2.1 0.4-1.9 0.8-3 1.8-2.1 0.6-0.6-0.5-0.1-0.6 0.5-0.9 2.2-3 0.4-0.9 0.1-1-0.6-1-0.9-0.9-2.7-1.7-0.8-0.7-0.6-0.7-0.3-0.9-0.3-1.1-0.2-1.1-0.8-1.5-1.4-1.9-3.5-2.6-1.4-1.4-0.7-2.3-1.2-1.9-4.8-4.3-1.9-2.3-1.2-1.8-0.6-9.7 0-1 0.4-0.8 0.7-0.7 12.3-8.9 1.7-1 2.9-1 0.9-0.5 0.7-0.7 0.6-0.7 0.3-1.1 0-1.4-0.7-2.3-1-1.5-0.8-1-14.2-9.7-2.1-1.9-1.4-1.5-0.3-1-0.3-1-0.1-3.8 0.3-2.1 0.2-0.7 0.2-0.7 0.5-0.8 1.1-1.4 0.7-0.6 0.8-0.5 0.6-0.7 0.6-0.8 0.4-0.8 0.4-1 0.2-1.1 0-2.3-1.2-3.2-1.5-2.9-0.6-1.7-0.1-1.3-0.7-3.1-4.4-10.4-2.1-2.9z');
    pathMorazan.setAttribute('id', 'SVSA'); // <path id="SVSA">
    pathMorazan.setAttribute('name', 'Morazan'); // <path name="Morazan">
    pathMorazan.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Morazan', ' ECabecera departamental: San Francisco Gotera <br> Extensión territorial: 1,447 km² <br> Fiesta patronal: San Francisco de Asís, 4 de octubre <br> Número de habitantes: 199,000');
    });

    pathMorazan.addEventListener('mouseleave', hideInfoBox);

    eElement.appendChild(pathMorazan);
    features.appendChild(eElement);

    // San Miguel f

    const fElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    fElement.setAttribute('href', 'departamentos/san_miguel.html');

    const pathSanMiguel = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSanMiguel.setAttribute('d', 'M639.5 290.4l0-0.1 3.4-6.7 3.5-5.4-0.8-5.3 4.1-2.6 2.6-3.9 0.6-4.6-2.4-4.8 1.7-1.5 0.7-0.6 10-0.5 7-4.3 6.8-2.9 15.2-3.3 3.5 0.2 6 2.3 2.8 0.3 0.4-1.1 0-2.3 0.3-2.4 1.2-1.4 2.4-0.1 3 0.5 3 0.9 2.4 1 2.6-4.8 4.1-1.5 4.5-0.4 4.1-1.4 3-2.8 1.2-2.3 2.1 2.9 4.4 10.4 0.7 3.1 0.1 1.3 0.6 1.7 1.5 2.9 1.2 3.2 0 2.3-0.2 1.1-0.4 1-0.4 0.8-0.6 0.8-0.6 0.7-0.8 0.5-0.7 0.6-1.1 1.4-0.5 0.8-0.2 0.7-0.2 0.7-0.3 2.1 0.1 3.8 0.3 1 0.3 1 1.4 1.5 2.1 1.9 14.2 9.7 0.8 1 1 1.5 0.7 2.3 0 1.4-0.3 1.1-0.6 0.7-0.7 0.7-0.9 0.5-2.9 1-1.7 1-12.3 8.9-0.7 0.7-0.4 0.8 0 1 0.6 9.7 1.2 1.8 1.9 2.3 4.8 4.3 1.2 1.9 0.7 2.3 1.4 1.4 3.5 2.6 1.4 1.9 0.8 1.5 0.2 1.1 0.3 1.1 0.3 0.9 0.6 0.7 0.8 0.7 2.7 1.7 0.9 0.9 0.6 1-0.1 1-0.4 0.9-2.2 3-0.5 0.9 0.1 0.6 0.6 0.5 2.1-0.6 3-1.8 1.9-0.8 2.1-0.4 14.6-1.2 1.4 0.5 1.3 0.8 1.6 2.1 1.4 2.6 0.6 2.1 1.1 6.9 0.4 0.8 0.6 0.8 0.8 0.6 5.5 3.3 1.3 1.2 0.9 1 0.3 0.8 0.6 1.1 0.6 0.6 1.8 0.3 2.8-0.3 14.7-4.6 3.9-0.2 8.1 1.3-2.5 3.3-0.8 4.9 0.2 11.7 1.5 5.6 0 1.2-0.4 1.3-1.4 1.7-1.1 0.9-1 0.8-1.6 0.9-0.7 0.6-0.6 1.5-0.3 2.5 0.2 9.9 1.1 6.8 0.3 1 0.5 0.9 3.5 5.6 0.4 0.9 0.4 1 0.1 0.9-4.8 27.8 0.1 1.6 0.6 2.2-0.3 2.4-4.9 16.1-0.8 0.9-1.8 0.5-1.2 0-1.3-0.3-3.9-1.4-3.2-1.9-3.1-2.3-0.8-0.3-1 3.8-0.5 2.9-2.1 30.2 0 0.1-2.6-0.5-2.5 0-2.8 1.1-23-26.8-1-0.4-1-0.2-1.2-0.1-10.2 1.6-0.9-0.2-0.7-0.8-0.1-1.9 0.2-1.2 0.4-1.3 2.8-5.1-0.2-1.1-0.9-1.2-2.5-1.3-1.4-1.2-0.9-1.4 0-5.7-0.2-1.1-0.3-1.2-0.7-1.1-1.2-1.4-1.6-0.2-1.2 0.1-3.5 1.9-1.9 0.8-1.1 0.3-1 0-1.1-0.1-0.9-0.4-0.8-0.5-1.5-1.2-0.8-0.5-0.9-0.4-1.1-0.1-0.9 0.1-1.1-0.8-1.6-1.4-3.3-4-1.9-1.6-1.7-1-7.4-0.8-2-0.5-2.8-1.3-0.8-0.5-0.7-0.5-2.6-3.4-3.8-6.1-2-4.1-2-6.9-0.6-3-0.2-2.3 0.1-2.5-0.2-1.2-0.6-1-1.5-0.5-1.8 0.7-0.6-0.1-0.6-0.4-0.4-1.2-1.2-7.1-0.1-2.5-0.6-5.2-0.1-1.1 0.1-1.2 0.3-1 0.6-0.7 0.7-0.2 0.6 0.2 0.4 0.4 0.5 0.6 0.6 0.5 0.7 0 0.5-0.6 0.4-1 0.2-2.4-0.1-2.3 0.1-1.2 0.3-1 0.5-0.9 0.6-0.7 2-1.9 0.1-0.1 0.5-1 0.1-0.8-0.2-1.5-1.5-5.1-0.3-2 0-1.6 0.8-3 0-0.9-0.5-1.5-4.5-9.6-0.3-1-0.2-1.1 0-2.3 0.1-1.2 0.3-1 0.5-0.8 0.6-0.7 0.8-0.5 2.1-0.7 0.8-0.4 0.6-0.7 0.6-0.8 0.3-1 0.2-1-0.2-1.4-0.5-1.6-1.1-2.7-0.7-3.2 0-1.2 0.2-1.1 1.8-5 0-1.1-1.2-1-2.3-0.7-9.2-1.2-2.9-1-3.3-2.3-2.5-2.4-3.2-5-2.3-2.9-4.4-0.3-15.4 1.8-4.3-6.8-11.6-11.6-1-9.1z');
    pathSanMiguel.setAttribute('id', 'SVSM'); // <path id="SVSA">
    pathSanMiguel.setAttribute('name', 'San Miguel'); // <path name="San Miguel">
    pathSanMiguel.addEventListener('mouseenter', event => {
        showInfoBox(event, 'San Miguel', 'Cabecera departamental: San Miguel <br> Extensión territorial: 2,077 km² <br> Fiesta patronal: San Miguel Arcángel, 29 de septiembre <br> Número de habitantes: 518,000');
    });

    pathSanMiguel.addEventListener('mouseleave', hideInfoBox);

    fElement.appendChild(pathSanMiguel);
    features.appendChild(fElement);

    // Sonsonate g

    const gElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    gElement.setAttribute('href', 'departamentos/sonsonate.html');

    const pathSonsonate = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSonsonate.setAttribute('d', 'M106 326.8l0.9-1.4 5.9-9.4 2.8-3.4 1.1-0.9 0.9-0.6 1.1-0.5 1.3-0.4 2.1-0.4 1.5 0 1.4 0.1 1 0.4 0.9 0.4 1.5 1.1 0.8 0.6 4.9 5.7 2.7 2.6 0.8 0.5 2.3 0.5 11.3 0.7 3.1-0.4 1.9-0.8 2.1-8.6 0.7-1.9 4.8-8.6 0.3-1 0.3-3.6 0.6-1.6 1.1-2.1 2.8-3.4 1.1-1.8 0.5-1.5-0.4-2.2-3.1-10 0.2-1.6 0.7-2.1 7.6-11.7 0.2-1.3-0.3-0.9-0.9-1.8-0.7-1.7-0.6-2.3-0.9-7.2 0.1-1.6 0.4-2.5 0.8-1.1 1-0.7 4.6-0.7 8.2-2.3 6.7-2.8 8.7 2.2 3.4-0.1 2.1-0.6 1.1-0.1 1.2 0 1.7 0.8 2.2 1.6 6.1 6 1.1 1.5 1.2 2.8 0.8 1.1 1.2 1.3 2.3 2.1 1.7 2.8 0.4 2-0.1 1-0.3 1.1-0.5 0.9-0.6 0.6-1.4 1.2-0.7 0.8-0.4 0.8-0.2 1 0.5 0.8 1.2 0.8 2.4 0.4 1.7 1.8 0.9 1.3 0.4 1.2 0.5 0.9 0.6 0.7 0.9 0.7 1.2 0.4 1.7 0.4 2.7-0.6 1.4-0.7 0.8-0.9 0.3-0.9 0-3.5 0.5-2.1 1.2-2.8 1-1.6 0.6-0.7 0.8-0.6 1-0.2 2.5 1.1 3.6 2.2 8 5.9 5 4.7 2.2 5.6 0.6 0.8 0.6 0.8 4.7 1.6 17.9 3.4 4.3 1.4 0.9 0.4 0.8 0.6 0.7 0.6 0.5 0.8 0.3 1 0.2 1-0.5 1.5-1 1.5-2.7 2.4-2.4 1.7-5.5 3.2-2.1 1.9-4.4 5.5-1.5 1.2-1.5 0.6-2.6 0.3-0.9 0.2-1.5 0.9-0.8 0.7-0.8 1.4-0.8 2.1-1.1 4.6-0.6 4.5 0.5 8.5-0.1 1.3-1 1.8-1.9 2.6-8.2 8.2-0.7 0.5-0.8 0.8-0.9 1.2-0.8 1.9-0.7 3.2-0.5 4.7-1.1 1.5-1.6 1.9-9.5 8.4-2 3.2-4 9.1-1 2.5-2.6-0.6-23.8-7.8-12.6 2.6-35.6 0.4-5.7-3.9-3.8-14.2-1.4-8.9-4.7-3.9-7.8-4.8-30.4-17.3-0.8-0.4z');
    pathSonsonate.setAttribute('id', 'SVSA'); // <path id="SVSA">
    pathSonsonate.setAttribute('name', 'Sonsonate'); // <path name="Sonsonate">
    pathSonsonate.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Sonsonate', 'Cabecera departamental: Sonsonate <br> Extensión territorial: 1,226 km² <br> Fiesta patronal: San Juan Bautista, 25 de enero <br> Número de habitantes: 438,000');
    });

    pathSonsonate.addEventListener('mouseleave', hideInfoBox);

    gElement.appendChild(pathSonsonate);
    features.appendChild(gElement);

    // La Libertad h

    const hElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    hElement.setAttribute('href', 'departamentos/la_libertad.html');

    const pathLaLibertad = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathLaLibertad.setAttribute('d', 'M292.5 284.3l1.8-10.7 6.6-18 0.7-8.3-0.4-6.9 0.5-10.4 0.5-2.1 0.6-0.8 0.8-0.5 0.9-0.3 1 0.1 0.9 0.3 1.1-0.1 1.2-0.8 3-4.9 0.8-0.4 1-0.1 1.3 0 1.4 0 1.9-0.9 0.8-1 0.4-1.2 0.6-7.5-0.1-1.2 0.7-5.5 4-21.4 1.7-2.7 1.2-2.6 3.1-1.2 4.4-0.9 3.5-1.9 3.6-2.8 3.9 0.8 6.8 3.9 6.1 0.9 1.2 0.3 3.6 1.7-0.4 13-2 8.3-0.1 2.1 0.2 1.4 2.3 1.8 0.9 1.3 1.1 2 1.9 4.4 1.1 2.1 1 1.4 1.6 1 1.8 0.9 3 0.9 1.1 0.1 3.5-0.3 1.2 0 1.1 0.2 1.1 0.2 1 0.4 1.2 0.7 1.4 1.1 2 1.1 0.6 0.8 0.1 0.6-1 2.6-0.5 2.2-0.1 0.4-0.3 0.3-2.8-0.1-1 0.3-0.7 0.7-0.4 1.2-1.9 21.6-0.5 2.2-0.4 0.9-0.8 0.5-1.9 0.7-0.9 0.5-0.7 0.6-1.2 1.4-0.7 1.9-0.5 1.8-0.7 6.8-0.8 3-1.2 2.8-0.7 3.6-0.4 6.2-0.3 1.6-0.3 1-2.6 4.9-1.7 4.8 0.2 1.5 0.6 0.8 1 0.3 1.2 0.1 1.9 2.5-0.4 3.8 0.3 3.7 0.4 1 0.5 0.8 0.6 0.7 1.5 1.1 0.7 0.9 0.4 1.3 0.7 3 0.6 1.7 0.7 1.1 0.8 0.6 5.4 2.9 0.7 0.5 1.6 1.4 2.5 3.4 0.4 1.4-0.2 1.2-1.2 2.3-0.9 2.2 0.1 1.2 0.8 0.8 2.9 1.4 0.4 0.9-0.2 0.9-0.6 0.7-0.7 0.6-0.6 2.2-0.2 3.7 0.7 15.9-0.2 1.2-2.4 6.1-0.8 3.4-0.1 1.8 0.2 1.4 6 9.8 2.1 4.6 0.6 0.7 0.8 0.4 1.1 0.2 1.2-0.1 2.1-0.5 3.9-1.3 2.2-0.3 1.4 0.2 1 0.3 2.8 1.2 1.3 6.3 1.1 1.6 0.9 0 1.6 0.1 2 0.5 3.7 1.5 1.3 1.3 0.3 1.1-1 1.7-1.8 2.2-0.5 0.8-0.6 0.7-2.9 5.2-1 2.3-1.2 3.6-17.9-11-25.5-11.3-27.6-6.6-12.8 0-9.8-2.3-53.3 0.5-22.8-5.8-8.1-1.5 1-2.5 4-9.1 2-3.2 9.5-8.4 1.6-1.9 1.1-1.5 0.5-4.7 0.7-3.2 0.8-1.9 0.9-1.2 0.8-0.8 0.7-0.5 8.2-8.2 1.9-2.6 1-1.8 0.1-1.3-0.5-8.5 0.6-4.5 1.1-4.6 0.8-2.1 0.8-1.4 0.8-0.7 1.5-0.9 0.9-0.2 2.6-0.3 1.5-0.6 1.5-1.2 4.4-5.5 2.1-1.9 5.5-3.2 2.4-1.7 2.7-2.4 1-1.5 0.5-1.5-0.2-1-0.3-1-0.5-0.8-0.7-0.6-0.8-0.6-0.9-0.4-4.3-1.4z');
    pathLaLibertad.setAttribute('id', 'SVLI'); // <path id="SVSA">
    pathLaLibertad.setAttribute('name', 'La Libertad'); // <path name="La Libertad">
    pathLaLibertad.addEventListener('mouseenter', event => {
        showInfoBox(event, 'La Libertad', 'Cabecera departamental: Santa Tecla <br> Extensión territorial: 1,653 km² <br> Fiesta patronal: San Juan Evangelista, 23 de diciembre <br> Número de habitantes: 747,000');
    });

    pathLaLibertad.addEventListener('mouseleave', hideInfoBox);

    hElement.appendChild(pathLaLibertad);
    features.appendChild(hElement);

    // La Paz i

    const iElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    iElement.setAttribute('href', 'departamentos/la_paz.html');

    const pathLaPaz = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathLaPaz.setAttribute('d', 'M413 423.6l1.2-3.6 1-2.3 2.9-5.2 0.6-0.7 0.5-0.8 1.8-2.2 1-1.7-0.3-1.1-1.3-1.3-3.7-1.5-2-0.5-1.6-0.1-0.9 0-1.1-1.6-1.3-6.3 0.8-3.2 1.1-0.7 2.7-3 1.9-4.1 3.2-9.6 0.8-4.2 0.2-2.7-0.7-1.9-2.9-5.1-1.1-3.1-0.7-3.3 0.2-1.8 0.5-1.2 0.9-0.5 1-0.2 1.2 0 1.1 0.2 6 1.9 1.2 0.2 1.1 0.1 1.9-1.5 11.3-14.4 13.6-12.8 16.5 6.1 6.5 3.5 7.1 2.2 1.3 0 1.7-0.3 0.7-0.2 0.8-0.4 0.6-0.7 0.8-1.8 0.7-0.8 0.8-0.4 1-0.3 4.7-0.6 2.1-0.7 2.6-1.6 2.8 7.6 0.1 6.3-0.4 6.6 0.4 2.6 0.7 1.6 1.2 0.1 1.2 0 1.2-0.2 8.9-2.8 1.6-0.1 1.7 0.3 2.9 1.1 1 1.3 9.3 19.8 0.3 1.1 0.1 1.1-0.1 2.5-0.4 2.2-2.9 7.9-0.2 0.9-0.3 0.9-0.3 1.3 0 0.6 0 0.1-1.6 8.4 0 1.8 0.5 6.7 0.5 2.2 0.6 1.6 2.4 2.7 2.3 1.8 3.3 2 2.6 2.5 2.4 3.2 0.9 2 0.4 1.6-0.2 1.2-0.5 2.2-0.3 0.9-0.5 0.9-2.3 1.7-0.6 0.7-0.5 0.8-0.3 1-0.1 1.2-0.1 1.2 1.7 15.8-0.1 2.2-0.5 0.8-0.6 0.7-0.7 0.8-0.8 0.5-3.5 1.7-2.7 1.1-1.7 1-1.5 1.2-0.6 0.7-0.5 0.8-0.5 1-0.3 0.9-0.3 1.1-0.9 11.6 0 0.1-87.6-40.9-26.6-16.4z');
    pathLaPaz.setAttribute('id', 'SVPA'); // <path id="SVSA">
    pathLaPaz.setAttribute('name', 'La Paz'); // <path name="La Paz">
    pathLaPaz.addEventListener('mouseenter', event => {
        showInfoBox(event, 'La Paz', 'Cabecera departamental: Zacatecoluca <br> Extensión territorial: 1,223 km² <br> Fiesta patronal: Nuestra Señora de los Ángeles, 8 de diciembre <br> Número de habitantes: 328,000');
    });

    pathLaPaz.addEventListener('mouseleave', hideInfoBox);

    iElement.appendChild(pathLaPaz);
    features.appendChild(iElement);

    // Usulutan j

    const jElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    jElement.setAttribute('href', 'departamentos/usulutan.html');

    const pathUsulutan = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathUsulutan.setAttribute('d', 'M656.4 317.9l15.4-1.8 4.4 0.3 2.3 2.9 3.2 5 2.5 2.4 3.3 2.3 2.9 1 9.2 1.2 2.3 0.7 1.2 1 0 1.1-1.8 5-0.2 1.1 0 1.2 0.7 3.2 1.1 2.7 0.5 1.6 0.2 1.4-0.2 1-0.3 1-0.6 0.8-0.6 0.7-0.8 0.4-2.1 0.7-0.8 0.5-0.6 0.7-0.5 0.8-0.3 1-0.1 1.2 0 2.3 0.2 1.1 0.3 1 4.5 9.6 0.5 1.5 0 0.9-0.8 3 0 1.6 0.3 2 1.5 5.1 0.2 1.5-0.1 0.8-0.5 1-0.1 0.1-2 1.9-0.6 0.7-0.5 0.9-0.3 1-0.1 1.2 0.1 2.3-0.2 2.4-0.4 1-0.5 0.6-0.7 0-0.6-0.5-0.5-0.6-0.4-0.4-0.6-0.2-0.7 0.2-0.6 0.7-0.3 1-0.1 1.2 0.1 1.1 0.6 5.2 0.1 2.5 1.2 7.1 0.4 1.2 0.6 0.4 0.6 0.1 1.8-0.7 1.5 0.5 0.6 1 0.2 1.2-0.1 2.5 0.2 2.3 0.6 3 2 6.9 2 4.1 3.8 6.1 2.6 3.4 0.7 0.5 0.8 0.5 2.8 1.3 2 0.5 7.4 0.8 1.7 1 1.9 1.6 3.3 4 1.6 1.4 1.1 0.8 0.9-0.1 1.1 0.1 0.9 0.4 0.8 0.5 1.5 1.2 0.8 0.5 0.9 0.4 1.1 0.1 1 0 1.1-0.3 1.9-0.8 3.5-1.9 1.2-0.1 1.6 0.2 1.2 1.4 0.7 1.1 0.3 1.2 0.2 1.1 0 5.7 0.9 1.4 1.4 1.2 2.5 1.3 0.9 1.2 0.2 1.1-2.8 5.1-0.4 1.3-0.2 1.2 0.1 1.9 0.7 0.8 0.9 0.2 10.2-1.6 1.2 0.1 1 0.2 1 0.4 23 26.8-3.5 1.4-32.4 2.7-34.8-5.3-9 2.9-4.8-1.6-5.5-1.2 0-2.4 8.5-0.6 0.6-5.9-4.5-7.4-6.9-4.8 1.5 3 4.5 6.3 1.7 3.9-13.6-0.5-6.6 0.7-5.7 2.4 3.7 1.6 2.9-0.5 3.5-1 5.3-0.1 0 2.9-8.7 3.6-9.7-0.3-7.5-4.6-2.3-9.5 3.7 1.7 1.4 0.9 5.2-5.2 0-2.4-6.5-2.9-7-10-4.7-2.9 1.2 5.5 2.2 4.6 1.1 4.1-1.7 4-5.5-3.2-15.9-4-6.8-3.6-6.2-11.1-2.9-1.8-4.4-0.4-12.4-2.5-5.5 0-15.2 2.9-21.2 0.5-4.7 2.1 2.6 2 2.7 1.5 2.8 0.5 2.4-1.1 10.6 2.4 30.2-3.2 3.3 0.5 4.9 2.7 2.6 2.4 4.7 5.7 3.1 2.4 0 2.9-7-1.2-5.1-1-11.2-3.3 0 2.6 30.8 6.3 16.1 5.3 7.2 7.1-2.7 4.6-6.7-1.1-7.5-4-4.9-3.7-5.5-2.8-97-18.1-11.6-5.4-0.2-0.1 0-0.8 1.5-5.5 2.8-3.8 4.5-1.7 7.3-1.1 3.6-2.9 2.2-4.2 3.5-5.2 6.6-6.4 0.9-2.6 0.5-12 0.9-4.9 1.6-4.1 17.1-32.6 3.2-11.5 0.9-11.7 2.1-3 6.2-1.1 0.5-2.4 10.8-13.4 8.3 1.9 7.5-4.8 5.6-7.7 2.1-6.8 23.6-17.2z');
    pathUsulutan.setAttribute('id', 'SVUS'); // <path id="SVSA">
    pathUsulutan.setAttribute('name', 'Usulutan'); // <path name="Usulutan">
    pathUsulutan.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Usulután', 'Cabecera departamental: Usulután <br> Extensión territorial: 2,130 km² <br> Fiesta patronal: San Miguel Arcángel, 24 de octubre <br> Número de habitantes: 366,000');
    });

    pathUsulutan.addEventListener('mouseleave', hideInfoBox);

    jElement.appendChild(pathUsulutan);
    features.appendChild(jElement);

    //San Vicente k

    const kElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    kElement.setAttribute('href', 'departamentos/san_vicente.html');

    const pathSanVicente = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSanVicente.setAttribute('d', 'M520.2 293.8l0.5-11.1 0.7-1.2 1-1.4 2.4 0.1 2.2 0.5 3.9 1.3 2.6-0.4 3.6-1.2 11.7-5.2 2.5-0.6 2.7 0.6 2.2 0.2 1.3-0.8 1.2-1.3 1.9-2.5 1.4-0.7 1.2-0.1 5.4 3.9 1.8 0.5 2.7 0.2 12-0.1 2.4 0.4 5.2 0.3 4.1 0.8 0.9 0.4 6.9 5.1 0.9 0.5 3.9 1.4 2.6 1.5 0.9 0.4 2.6 0.7 1 0.5 0.6 0.9 0.4 2.1 0.3 1 0.5 0.8 0.7 0.6 1.4 0.5 9.5 1.2 3.5 0.9 6.1-4.1 1 9.1 11.6 11.6 4.3 6.8-23.6 17.2-2.1 6.8-5.6 7.7-7.5 4.8-8.3-1.9-10.8 13.4-0.5 2.4-6.2 1.1-2.1 3-0.9 11.7-3.2 11.5-17.1 32.6-1.6 4.1-0.9 4.9-0.5 12-0.9 2.6-6.6 6.4-3.5 5.2-2.2 4.2-3.6 2.9-7.3 1.1-4.5 1.7-2.8 3.8-1.5 5.5 0 0.8 0.2 0.1-5.6-2.6 0-0.1 0.9-11.6 0.3-1.1 0.3-0.9 0.5-1 0.5-0.8 0.6-0.7 1.5-1.2 1.7-1 2.7-1.1 3.5-1.7 0.8-0.5 0.7-0.8 0.6-0.7 0.5-0.8 0.1-2.2-1.7-15.8 0.1-1.2 0.1-1.2 0.3-1 0.5-0.8 0.6-0.7 2.3-1.7 0.5-0.9 0.3-0.9 0.5-2.2 0.2-1.2-0.4-1.6-0.9-2-2.4-3.2-2.6-2.5-3.3-2-2.3-1.8-2.4-2.7-0.6-1.6-0.5-2.2-0.5-6.7 0-1.8 1.6-8.4 0-0.1 0-0.6 0.3-1.3 0.3-0.9 0.2-0.9 2.9-7.9 0.4-2.2 0.1-2.5-0.1-1.1-0.3-1.1-9.3-19.8-1-1.3-2.9-1.1-1.7-0.3-1.6 0.1-8.9 2.8-1.2 0.2-1.2 0-1.2-0.1-0.7-1.6-0.4-2.6 0.4-6.6-0.1-6.3-2.8-7.6 7.3-7.2 0.8-1.3 0.9-1.8 1.3-5.4 6.9-18.3z');
    pathSanVicente.setAttribute('id', 'SVSV'); // <path id="SVSV">
    pathSanVicente.setAttribute('name', 'San Vicente'); // <path name="San Vicente">
    pathSanVicente.addEventListener('mouseenter', event => {
        showInfoBox(event, 'San Vicente', ' departamental: San Vicente <br> Extensión territorial: 1,184 km² <br> Fiesta patronal: San Vicente de Paúl, 5 de diciembre <br> Número de habitantes: 174,000');
    });

    pathSanVicente.addEventListener('mouseleave', hideInfoBox);

    kElement.appendChild(pathSanVicente);
    features.appendChild(kElement);

    //Cuscatlan l

    const lElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    lElement.setAttribute('href', 'departamentos/cuscatlan.html');

    const pathCuscatlan = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathCuscatlan.setAttribute('d', 'M410.9 171.4l6.6-3.4 1.2 0 1.3 0.1 4.7 2.4 9.7 3.5 1.9 1.1 2.7 2.4 6.3 4.5 0.6 0.8 1.7 3 8.2 9.8 0.7 1 0.2 0.7 0 0.1-0.3 1.6 0 1.1 0.1 0.9 0.3 1 0.6 1.8 1 2.1 2 2.9 1.7 1.6 1.4 0.9 8 3.8 6.8-0.5 5.8 2.2 6.2 0.7-5.5 8.8-0.4 0.9-1.1 1.6-1.3 1.4-1.4 1.2-5 2.9-0.8 0.6-0.6 0.6-0.6 0.9-0.3 0.9-0.3 1-0.2 1.2 0.9 2.5 1.8 3.3 7.3 10.4 2.3 2.4 3.1 2.1 1.8 2.1 1.4 3 0.3 1.7 0.4 1.6 1.9 3.4 0.5 1.5 0.5 2.5 0.9 1.7 1.5 2 3.6 3.9 2.4 3.7 0.4 1 3.4 1.9 13 3.6-6.9 18.3-1.3 5.4-0.9 1.8-0.8 1.3-7.3 7.2-2.6 1.6-2.1 0.7-4.7 0.6-1 0.3-0.8 0.4-0.7 0.8-0.8 1.8-0.6 0.7-0.8 0.4-0.7 0.2-1.7 0.3-1.3 0-7.1-2.2-6.5-3.5-16.5-6.1-0.3-11.6-0.8-2-0.7-2-1.8-2.3-6.6-12.5-0.5-1.8 0.6-8.3-0.3-1.7-0.7-1.1-1-0.3-1.4-1-1.6-1.6-4.7-7-0.7-0.6-1-0.4-1.1-0.2-2.4-0.1-2.6-2.1-3.4-4-10-15.7-1.1-3 0.7-0.6 2.7-1.2 1-0.7 0.7-0.8 0.7-1.5-0.4-0.8-2.3-3-7.8-12.8-3.5-7.4-0.8-2.9-0.4-3.3 0.2-0.6 0.6-0.5 0.7-0.6 0.7-0.6 1-1.6 0.3-0.9 0.3-1.1 0.3-2.3 0.5-2.1 0.2-1.6 0-0.4 0.1-0.7-0.3-3.7-1.2-6.4-0.1-1.7 0.3-1.2 1.8-3.7 1.7-4.6 0.2-3.8z');
    pathCuscatlan.setAttribute('id', 'SVCU'); // <path id="SVCU">
    pathCuscatlan.setAttribute('name', 'Cuscatlan'); // <path name="Cuscatlan">
    pathCuscatlan.addEventListener('mouseenter', event => {
        showInfoBox(event, 'Cuscatlán', 'Cabecera departamental: Cojutepeque <br> Extensión territorial: 756 km² <br> Fiesta patronal: San Sebastián, 1 de agosto <br> Número de habitantes: 252,000');
    });

    pathSanVicente.addEventListener('mouseleave', hideInfoBox);

    lElement.appendChild(pathCuscatlan);
    features.appendChild(lElement);

    // Cabañas m

    const mElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    mElement.setAttribute('href', 'departamentos/cabanas.html');

    const pathCabanas = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathCabanas.setAttribute('d', 'M490.3 217.5l11.1-0.3 9.8 0.9 5.2-1.3 5.6-2.1 23.1-7.6 4.5-2.1 2.5-2 2.9-3.8 7.7-3.8 17.3-2.6 0 0.7 2.3-0.9 9.5-1.5 9.6 0.7 28.4 9.1 16.6 1.2 3.6 1.6 3.4 3.3-0.3 1.2-0.1 0.9-0.2 0.2-0.4 0.3-0.1 0-1.5-0.2 0.4 0.9 1.9 4.2-0.2 4.5-1.3 4.7-0.8 5.7 1 3.7 4.1 10.2 0.3 6.1-3.3 5.5-0.7 0.6-1.7 1.5 2.4 4.8-0.6 4.6-2.6 3.9-4.1 2.6 0.8 5.3-3.5 5.4-3.4 6.7 0 0.1-6.1 4.1-3.5-0.9-9.5-1.2-1.4-0.5-0.7-0.6-0.5-0.8-0.3-1-0.4-2.1-0.6-0.9-1-0.5-2.6-0.7-0.9-0.4-2.6-1.5-3.9-1.4-0.9-0.5-6.9-5.1-0.9-0.4-4.1-0.8-5.2-0.3-2.4-0.4-12 0.1-2.7-0.2-1.8-0.5-5.4-3.9-1.2 0.1-1.4 0.7-1.9 2.5-1.2 1.3-1.3 0.8-2.2-0.2-2.7-0.6-2.5 0.6-11.7 5.2-3.6 1.2-2.6 0.4-3.9-1.3-2.2-0.5-2.4-0.1-1 1.4-0.7 1.2-0.5 11.1-13-3.6-3.4-1.9-0.4-1-2.4-3.7-3.6-3.9-1.5-2-0.9-1.7-0.5-2.5-0.5-1.5-1.9-3.4-0.4-1.6-0.3-1.7-1.4-3-1.8-2.1-3.1-2.1-2.3-2.4-7.3-10.4-1.8-3.3-0.9-2.5 0.2-1.2 0.3-1 0.3-0.9 0.6-0.9 0.6-0.6 0.8-0.6 5-2.9 1.4-1.2 1.3-1.4 1.1-1.6 0.4-0.9 5.5-8.8z');
    pathCabanas.setAttribute('id', 'SVCA'); // <path id="SVCA">
    pathCabanas.setAttribute('name', 'Cabañas'); // <path name="Cabañas">
    pathCabanas.addEventListener('mouseenter', event => {
        showInfoBox(event, '¿Cabañas?🤔🤔🤷', 'Cabecera departamental: Sensuntepeque <br> Extensión territorial: 1,104 km² <br> Fiesta patronal: Santa Bárbara, 4 de diciembre <br> Número de habitantes: 149,000');
    });

    pathSanVicente.addEventListener('mouseleave', hideInfoBox);

    mElement.appendChild(pathCabanas);
    features.appendChild(mElement);

    // San Salvador n

    const nElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    nElement.setAttribute('href', 'departamentos/san_salvador.html');

    const pathSanSalvador = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSanSalvador.setAttribute('d', 'M363.6 177.2l2.7 0.4 1.5-0.8 4.9-3.5 2.9-1 7.8 3.4 5.2 0.1 2.4-4.8 5.3 4.2 4.2 1 10.4-4.8-0.2 3.8-1.7 4.6-1.8 3.7-0.3 1.2 0.1 1.7 1.2 6.4 0.3 3.7-0.1 0.7 0 0.4-0.2 1.6-0.5 2.1-0.3 2.3-0.3 1.1-0.3 0.9-1 1.6-0.7 0.6-0.7 0.6-0.6 0.5-0.2 0.6 0.4 3.3 0.8 2.9 3.5 7.4 7.8 12.8 2.3 3 0.4 0.8-0.7 1.5-0.7 0.8-1 0.7-2.7 1.2-0.7 0.6 1.1 3 10 15.7 3.4 4 2.6 2.1 2.4 0.1 1.1 0.2 1 0.4 0.7 0.6 4.7 7 1.6 1.6 1.4 1 1 0.3 0.7 1.1 0.3 1.7-0.6 8.3 0.5 1.8 6.6 12.5 1.8 2.3 0.7 2 0.8 2 0.3 11.6-13.6 12.8-11.3 14.4-1.9 1.5-1.1-0.1-1.2-0.2-6-1.9-1.1-0.2-1.2 0-1 0.2-0.9 0.5-0.5 1.2-0.2 1.8 0.7 3.3 1.1 3.1 2.9 5.1 0.7 1.9-0.2 2.7-0.8 4.2-3.2 9.6-1.9 4.1-2.7 3-1.1 0.7-0.8 3.2-2.8-1.2-1-0.3-1.4-0.2-2.2 0.3-3.9 1.3-2.1 0.5-1.2 0.1-1.1-0.2-0.8-0.4-0.6-0.7-2.1-4.6-6-9.8-0.2-1.4 0.1-1.8 0.8-3.4 2.4-6.1 0.2-1.2-0.7-15.9 0.2-3.7 0.6-2.2 0.7-0.6 0.6-0.7 0.2-0.9-0.4-0.9-2.9-1.4-0.8-0.8-0.1-1.2 0.9-2.2 1.2-2.3 0.2-1.2-0.4-1.4-2.5-3.4-1.6-1.4-0.7-0.5-5.4-2.9-0.8-0.6-0.7-1.1-0.6-1.7-0.7-3-0.4-1.3-0.7-0.9-1.5-1.1-0.6-0.7-0.5-0.8-0.4-1-0.3-3.7 0.4-3.8-1.9-2.5-1.2-0.1-1-0.3-0.6-0.8-0.2-1.5 1.7-4.8 2.6-4.9 0.3-1 0.3-1.6 0.4-6.2 0.7-3.6 1.2-2.8 0.8-3 0.7-6.8 0.5-1.8 0.7-1.9 1.2-1.4 0.7-0.6 0.9-0.5 1.9-0.7 0.8-0.5 0.4-0.9 0.5-2.2 1.9-21.6 0.4-1.2 0.7-0.7 1-0.3 2.8 0.1 0.3-0.3 0.1-0.4 0.5-2.2 1-2.6-0.1-0.6-0.6-0.8-2-1.1-1.4-1.1-1.2-0.7-1-0.4-1.1-0.2-1.1-0.2-1.2 0-3.5 0.3-1.1-0.1-3-0.9-1.8-0.9-1.6-1-1-1.4-1.1-2.1-1.9-4.4-1.1-2-0.9-1.3-2.3-1.8-0.2-1.4 0.1-2.1 2-8.3 0.4-13z');
    pathSanSalvador.setAttribute('id', 'SVSS'); // <path id="SVSS">
    pathSanSalvador.setAttribute('name', 'San Salvador'); // <path name="San Salvador">
    pathSanSalvador.addEventListener('mouseenter', event => {
        showInfoBox(event, 'San Salvador', 'Cabecera departamental: San Salvador <br> Extensión territorial: 886 km² <br> Fiesta patronal: El Divino Salvador del Mundo, 6 de agosto <br> Número de habitantes: 1,740,000');
    });

    pathSanVicente.addEventListener('mouseleave', hideInfoBox);

    nElement.appendChild(pathSanSalvador);
    features.appendChild(nElement);

    svg.appendChild(features);
    mapDiv.appendChild(svg);
    body.appendChild(mapDiv);

    // Crear el cuadro de información
    const infoBox = document.createElement('div');
    infoBox.setAttribute('id', 'info-box'); // <div id="info-box">
    body.appendChild(infoBox);
});

// Mostrar cuadro
function showInfoBox(event, department, info) {
    var infoBox = document.getElementById('info-box');
    infoBox.innerHTML = `<strong>${department}</strong><br>${info}`;
    infoBox.style.display = 'block';
    infoBox.style.left = event.pageX + 25 + 'px';
    infoBox.style.top = event.pageY + 25 + 'px';
}

// Ocultar cuadro
function hideInfoBox() {
    var infoBox = document.getElementById('info-box');
    infoBox.style.display = 'none';
}
