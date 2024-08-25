document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear y añadir el menú de navegación

    // Crea un elemento <nav> para la barra de navegación y le asigna la clase de Bootstrap
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg";

    // Crea un contenedor fluid para el contenido de la barra de navegación
    const container = document.createElement("div");
    container.className = "container-fluid";

    // Crea un enlace para la marca en la barra de navegación
    const brand = document.createElement("a");
    brand.className = "navbar-brand";
    brand.href = "index.html";
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
        { text: "Inicio", href: "index.html" },
        { text: "Desarrolladores", href: "desarrolladores.html" },
        { text: "Formulario", href: "formulario.html" }
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

    // Crea el dropdown para los departamentos
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

    // Define los departamentos y los añade al menú desplegable
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

    // Añade cada departamento al menú desplegable
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

    // Define y añade los menús de zonas
    const zonas = [
        {
            name: "Zona Occidental",
            departments: [
                { name: "Santa Ana", link: "./departamentos/santa_ana.html" },
                { name: "Ahuachapán", link: "./departamentos/ahuachapan.html" },
                { name: "Sonsonate", link: "./departamentos/sonsonate.html" }
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

    // 2. Crear y añadir el formulario de contacto

    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Formulario de Contacto';
    formContainer.appendChild(formTitle);

    const formDescription = document.createElement('p');
    formDescription.textContent = 'Indique desde qué departamento visita nuestra página web';
    formContainer.appendChild(formDescription);

    const form = document.createElement('form');
    form.id = 'contactForm';

    // Define los campos del formulario
    const formFields = [
        { label: 'Nombre', id: 'nombre', type: 'text', placeholder: 'Nombre' },
        { label: 'Apellido', id: 'apellido', type: 'text', placeholder: 'Apellido' },
        { label: 'Correo Electrónico', id: 'correo', type: 'email', placeholder: 'ej. hola@correo.com' },
        { label: 'Teléfono', id: 'telefono', type: 'tel', placeholder: '#### ####' },
        {
            label: 'Departamento', id: 'departamento', type: 'select', options: [
                { value: '', text: 'Seleccione su departamento' },
                { value: 'ahuachapan', text: 'Ahuachapán' },
                { value: 'cabanas', text: 'Cabañas' },
                { value: 'chalatenango', text: 'Chalatenango' },
                { value: 'cuscatlan', text: 'Cuscatlán' },
                { value: 'la-libertad', text: 'La Libertad' },
                { value: 'la-paz', text: 'La Paz' },
                { value: 'la-union', text: 'La Unión' },
                { value: 'morazan', text: 'Morazán' },
                { value: 'san-miguel', text: 'San Miguel' },
                { value: 'san-salvador', text: 'San Salvador' },
                { value: 'san-vicente', text: 'San Vicente' },
                { value: 'santa-ana', text: 'Santa Ana' },
                { value: 'sonsonate', text: 'Sonsonate' },
                { value: 'usulutan', text: 'Usulután' }
            ]
        },
        { label: 'Mensaje', id: 'mensaje', type: 'textarea', placeholder: 'Escribe tu mensaje aquí...' }
    ];

    formFields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        formGroup.appendChild(label);

        let input;
        if (field.type === 'select') {
            input = document.createElement('select');
            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                input.appendChild(opt);
            });
        } else if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }
        input.id = field.id;
        input.name = field.id;
        input.placeholder = field.placeholder;
        input.required = true;
        formGroup.appendChild(input);

        form.appendChild(formGroup);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'form-group';
    buttonGroup.appendChild(submitButton);
    form.appendChild(buttonGroup);

    formContainer.appendChild(form);

    document.body.appendChild(formContainer);

    // 3. Manejo de eventos del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío del formulario

        // Obtiene los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const departamento = document.getElementById('departamento').value;
        const mensaje = document.getElementById('mensaje').value;

        // Verifica si el teléfono cumple con el formato esperado
        const phonePattern = /^\d{4} \d{4}$/;
        if (!phonePattern.test(telefono)) {
            alert('Por favor, ingrese un número de teléfono válido en el formato #### ####');
            return; // Sale de la función si el formato es incorrecto
        }

        // Muestra los valores en una alerta
        alert(`Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nTeléfono: ${telefono}\nDepartamento: ${departamento}\nMensaje: ${mensaje}`);
    });
});
