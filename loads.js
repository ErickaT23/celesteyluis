const guests = [
        { id: "1", name: "Edwin Marroquin, Flor de Marroquin, Brenda Marroquin (hija) y Jorge Marroquin (hijo)", passes: 4 },
        { id: "2", name: "Lissette Rosal, Rogelio Rosal", passes: 2 },
        { id: "3", name: "Aracely Maldonado", passes: 1, gender: "female" },
        { id: "4", name: "Amabilia Mendizabal, Abby Mendizabal, Johnny Mendizabal", passes: 3 },
        { id: "5", name: "Anny de Mendizabal", passes: 1, gender: "female" },
        { id: "6", name: "Karla Lili Marroquin, Karla Mendizabal", passes: 2 },
        { id: "7", name: "Paola de Donadio, Pancho Donadio", passes: 2 },
        { id: "8", name: "Angelo Donadio, plus one", passes: 2 },
        { id: "9", name: "Marcelo Donadio, plus one", passes: 2 },
        { id: "10", name: "Juan Mendizabal, Blanca de Mendizabal", passes: 2 },
        { id: "11", name: "Jorge Eduardo Mendizabal, Karla de Mendizabal", passes: 2 },
        { id: "12", name: "Edwin Marroquin", passes: 1, gender: "male" },
        { id: "13", name: "Carlos Eduardo Marroquin, Anna Camila Marroquin", passes: 2 },
        { id: "14", name: "Adrian Espinoza", passes: 1, gender: "male" },
        { id: "15", name: "Andrea Martinez", passes: 1, gender: "female" },
        { id: "16", name: "Haroldo Espinoza, Alejandra Azurdia", passes: 2 },
        { id: "17", name: "Silvia Leal, Juan Leal", passes: 2 },
        { id: "18", name: "Rodrigo Aguilar, Karla Cobar", passes: 2 },
        { id: "19", name: "Jose Palomo, Annya de Palomo", passes: 2 },
        { id: "20", name: "Jorge Lopez, Luisa de Lopez", passes: 2 },
        { id: "21", name: "Luis Cadena, Ana de Cadena", passes: 2 },
        { id: "22", name: "Raul Herrera, Karla de Herrera", passes: 2 },
        { id: "23", name: "Alejandro Kestler", passes: 1, gender: "male" },
        { id: "24", name: "German Montenegro, Monica de Montenegro", passes: 2 },
        { id: "25", name: "Joan Salazar, Lucia de Salazar", passes: 2 },
        { id: "26", name: "Pablo Cifuentes, Señora de Cifuentes", passes: 2 },
        { id: "27", name: "Ricardo Escobar", passes: 1, gender: "male" },
        { id: "28", name: "Juan Pereira, Astrid de Pereira", passes: 2 },
        { id: "29", name: "Miguel Gaitan, Carmen de Gaitan", passes: 2 },
        { id: "30", name: "Jose Regil, Mafer de Regil", passes: 2 },
        { id: "31", name: "Bryan Gamarro, Marjorie de Gamarro", passes: 2 },
        { id: "32", name: "Carlos Eduardo Barahona", passes: 1, gender: "male" },
        { id: "33", name: "Eduardo Alvarado, Señora de Alvarado", passes: 2 },
        { id: "34", name: "Jason Nori, Daisy de Nori", passes: 2 },
        { id: "35", name: "Mike Gallardo, Xochitl de Gallardo", passes: 2 },
        { id: "36", name: "Pablo Escobar, Karen Escobar", passes: 2 },
        { id: "37", name: "Jimena de Unda, Javier Unda", passes: 2 },
        { id: "38", name: "Abraham, Sofia", passes: 2 },
        { id: "39", name: "Ivan Gamez, Thalia Gamez", passes: 2 },
        { id: "40", name: "Javier Lopez, Jazmín Lopez", passes: 2 },
        { id: "41", name: "Elibank, Rafael", passes: 2 },
        { id: "42", name: "Karina Carias", passes: 1, gender: "female" },
        { id: "43", name: "Javier Carias, Abigail Carias", passes: 3 },
        { id: "44", name: "Karen (1 niño) Carias, Deivid", passes: 2 },
        { id: "45", name: "Fanny (1 niño) Ramos, Alejandro Carias", passes: 2 },
        { id: "46", name: "Lucia de Carias (Abuela)", passes: 1, gender: "female" },
        { id: "47", name: "Adelmo Castellanos, Marielena de Castellanos", passes: 2 },
        { id: "48", name: "Wendy Carias, plus one", passes: 2 },
        { id: "49", name: "Alex Carias, plus one", passes: 2 },
        { id: "50", name: "Jenny Castellanos", passes: 1, gender: "female" },
        { id: "51", name: "Andrea Caballero, Jafeth Caballero", passes: 3 },
        { id: "52", name: "Cecilia Reyes, Isabel Reyes", passes: 2 },
        { id: "53", name: "Franklin Reyes, Kenia Torres", passes: 2 },
        { id: "54", name: "Sally Lobo", passes: 1, gender: "female" },
        { id: "55", name: "Salome Moya", passes: 1, gender: "female" },
        { id: "56", name: "Gabriela Funez", passes: 1, gender: "female" },
        { id: "57", name: "Luz Madrid", passes: 1, gender: "female" },
        { id: "58", name: "Gabriela Guzman", passes: 1, gender: "female" },
        { id: "59", name: "Cristina Medina, Bayron Santos", passes: 2 },
        { id: "60", name: "Cristy Carrasco", passes: 1, gender: "female" },
        { id: "61", name: "Ena de Gomez, Luis Santos", passes: 2 },
        { id: "62", name: "Jenny Tabora, plus one", passes: 2 },
        { id: "63", name: "Paola Peña, plus one", passes: 2 },
        { id: "64", name: "Daniel Agamez", passes: 1, gender: "male" },
        { id: "65", name: "Carlos Nuñez", passes: 1, gender: "male" },
        { id: "66", name: "Jeff Aldaz, Señora de Aldaz", passes: 2 },
        { id: "67", name: "Carlos Regil, Gaby Regil", passes: 2 },
        { id: "68", name: "Daniela Marroquin, Jose (hijo) Marroquin, Diego (hijo) Marroquin", passes: 5 },
        { id: "69", name: "Janeth Hernandez, Edgardo", passes: 2 },
        { id: "70", name: "Usted", passes: 1 }
    ];

document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;

    // Buscar el invitado en el array
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        let invitationText;

        if (guest.passes > 1) {
            invitationText = `¡${guest.name}, están invitados!`;
        } else {
            // Determinar si es "invitado" o "invitada"
            if (guest.gender === "male") {
                invitationText = `¡${guest.name}, esta invitado!`;
            } else if (guest.gender === "female") {
                invitationText = `¡${guest.name}, esta invitada!`;
            } else {
                invitationText = `¡${guest.name}, esta invitado!`; // Respaldo si no tiene género definido
            }
        }

        document.getElementById('guest-name').textContent = invitationText;
        document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
