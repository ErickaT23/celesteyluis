const guests = [
        { id: "1", name: "Edwin Marroquin, Flor de Marroquin, Brenda Marroquin (hija) & Jorge Marroquin (hijo)", passes: 4 },
        { id: "2", name: "Lissette Rosal & Rogelio Rosal", passes: 2 },
        { id: "3", name: "Aracely Maldonado, Amabilia Mendizabal & Abby Mendizabal", passes: 3, gender: "female" },
        { id: "4", name: "Johnny Mendizabal & Anny de Mendizabal", passes: 2 },
        { id: "5", name: "Karla Lili Marroquin, Karla Mendizabal", passes: 2 },
        { id: "6", name: "Paola de Donadio & Francisco Donadio", passes: 2 },
        { id: "7", name: "Angelo Donadio, plus one", passes: 2 },
        { id: "8", name: "Marcelo Donadio, plus one", passes: 2 },
        { id: "9", name: "Juan Mendizabal & Blanca de Mendizabal", passes: 2 },
        { id: "10", name: "Jorge Eduardo Mendizabal & Karla de Mendizabal", passes: 2 },
        { id: "11", name: "Edwin Marroquin", passes: 1, gender: "male" },
        { id: "12", name: "Carlos Eduardo Marroquin & Anna Camila Marroquin", passes: 2 },
        { id: "13", name: "Adrian Espinoza", passes: 1, gender: "male" },
        { id: "14", name: "Andrea Martinez", passes: 1, gender: "female" },
        { id: "15", name: "Haroldo Espinoza & Alejandra Azurdia", passes: 2 },
        { id: "16", name: "Silvia Leal & Juan Leal", passes: 2 },
        { id: "17", name: "Rodrigo Aguilar & Karla Cobar", passes: 2 },
        { id: "18", name: "Jose Palomo & Annya de Palomo", passes: 2 },
        { id: "19", name: "Jorge Lopez & Luisa de Lopez", passes: 2 },
        { id: "20", name: "Luis Cadena & Ana de Cadena", passes: 2 },
        { id: "21", name: "Raul Herrera & Karla de Herrera", passes: 2 },
        { id: "22", name: "Alejandro Kestler", passes: 1, gender: "male" },
        { id: "23", name: "German Montenegro & Monica de Montenegro", passes: 2 },
        { id: "24", name: "Joan Salazar & Lucia de Salazar", passes: 2 },
        { id: "25", name: "Pablo Cifuentes & Señora de Cifuentes", passes: 2 },
        { id: "26", name: "Ricardo Escobar", passes: 1, gender: "male" },
        { id: "27", name: "Juan Pereira & Astrid de Pereira", passes: 2 },
        { id: "28", name: "Miguel Gaitan & Carmen de Gaitan", passes: 2 },
        { id: "29", name: "Jose Regil & Mafer de Regil", passes: 2 },
        { id: "30", name: "Bryan Gamarro & Marjorie de Gamarro", passes: 2 },
        { id: "31", name: "Carlos Eduardo Barahona", passes: 1, gender: "male" },
        { id: "32", name: "Eduardo Alvarado & Señora de Alvarado", passes: 2 },
        { id: "33", name: "Jason & Daisy de Noriega", passes: 2 },
        { id: "34", name: "Mike Gallardo & Xochitl de Gallardo", passes: 2 },
        { id: "35", name: "Pablo Escobar & Karen Escobar", passes: 2 },
        { id: "36", name: "Jimena de Unda & Javier Unda", passes: 2 },
        { id: "37", name: "Abraham & Sofia", passes: 2 },
        { id: "38", name: "Ivan Gamez & Thalia Gamez", passes: 2 },
        { id: "39", name: "Javier Lopez & Jazmín Lopez", passes: 2 },
        { id: "40", name: "Elibank & Rafael", passes: 2 },
        { id: "41", name: "Karina Carias, Javier Carias & Abigail Carias", passes: 3 },
        { id: "42", name: "Karen Carias & Deivid", passes: 2 },
        { id: "43", name: "Fanny Ramos & Alejandro Carias", passes: 2 },
        { id: "44", name: "Lucia de Carias (Abuela)", passes: 1, gender: "female" },
        { id: "45", name: "Adelmo Castellanos & Marielena de Castellanos", passes: 2 },
        { id: "46", name: "Wendy Carias,plus one", passes: 2 },
        { id: "47", name: "Alex Carias, plus one", passes: 2 },
        { id: "48", name: "Jenny Castellanos, Andrea Caballero & Jafeth Caballero", passes: 3 },
        { id: "49", name: "Cecilia Reyes, Isabel Reyes", passes: 2, gender: "female"},
        { id: "50", name: "Franklin Reyes &  Kenia Torres", passes: 2 },
        { id: "51", name: "Sally Lobo", passes: 1, gender: "female" },
        { id: "52", name: "Salome Moya", passes: 1, gender: "female" },
        { id: "53", name: "Gabriela Funez", passes: 1, gender: "female" },
        { id: "54", name: "Wendolyn Fajardo & Hermano de Wen", passes: 2 },
        { id: "55", name: "Luz Madrid", passes: 1, gender: "female" },
        { id: "56", name: "Gabriela Guzman", passes: 1, gender: "female" },
        { id: "57", name: "Cristina Medina & Bayron Santos", passes: 2 },
        { id: "58", name: "Cristy Carrasco", passes: 1, gender: "female" },
        { id: "59", name: "Ena de Gomez & Luis Santos", passes: 2 },
        { id: "60", name: "Jenny Tabora, plus one", passes: 2 },
        { id: "61", name: "Paola Peña, plus one", passes: 2 },
        { id: "62", name: "Daniel Agamez", passes: 1, gender: "male" },
        { id: "63", name: "Juan Samper", passes: 1, gender: "male"},
        { id: "64", name: "Jose Urizar & Irene Urizar", passes: 2 },
        { id: "65", name: "Sandrea, plus one", passes: 2 },
        { id: "66", name: "Carlos Nuñez", passes: 1, gender: "male" },
        { id: "67", name: "Jeff Aldaz & Señora de Aldaz", passes: 2 },
        { id: "68", name: "Grissel de Martinez & Cesar Martinez", passes: 2 },
        { id: "69", name: "Bryan Martinez & Xochitl", passes: 2 },
        { id: "70", name: "Cindy Martinez & Martin Garcia", passes: 2 },
        { id: "71", name: "Familia Castellanos", passes: 5 },
        { id: "72", name: "Carlos Regil, Gaby Regil", passes: 2 },
        { id: "73", name: "Janeth Hernandez & Edgardo", passes: 2 },
        { id: "74", name: "Usted", passes: 1 },
        { id: "75", name: "Ustedes", passes: 2 },
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
                if (guest.gender === "female") {
                    invitationText = `¡${guest.name}, están invitadas!`;
                } else {
                    invitationText = `¡${guest.name}, están invitados!`;
                }
            } else {
                if (guest.gender === "female") {
                    invitationText = `¡${guest.name}, estás invitada!`;
                } else {
                    invitationText = `¡${guest.name}, estás invitado!`;
                }
            }
    
            document.getElementById('guest-name').textContent = invitationText;
            document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    
            // 👇 Aquí va el cambio personalizado para los IDs 74 y 75
            if (guest.id === "74" || guest.id === "75") {
                const confirmacionTexto = document.querySelector(".rsvp-section p");
                if (confirmacionTexto) {
                    confirmacionTexto.textContent = "Para nosotros es muy importante que confirmes tu asistencia antes del 15 de Mayo, o bien indicarnos si no podrás acompañarnos.";
                }
            }
    
        } else {
            document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
            document.querySelector('.invitation-info-section').style.display = 'none';
        }
    });