angular.module('starter', ['ionic'])

.controller('IndexCtrl', function($scope){
    //Words input
    $scope.searchInput ='';

    //Words list
    $scope.words = [
        {
            id: 0,
            word:"Laptop",
            meaning: "Una computadora portátil, ordenador portátil o computador portátil, es un dispositivo informático que se puede mover o transportar con relativa facilidad.",
            img1: 'img/laptop1.png',
            img2: 'img/laptop2.png',
            img3: 'img/laptop3.png'
        },
        {
            id: 1,
            word: "Circuito",
            meaning: "Un circuito es una red electrónica (fuentes, interruptores y semiconductores) que contiene al menos una trayectoria cerrada.",
            img1: 'img/circuito1.png',
            img2: 'img/circuito2.png',
            img3: 'img/circuito3.png'

        },
        {
            id: 2,
            word: "HTML",
            meaning:"HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web.",
            img1: 'img/html1.png',
            img2: 'img/hmtl2.png',
            img3: 'img/html3.png'

        },
        {
            id: 3,
            word: "Ionic",
            meaning: "iONIC es un framework que trabaja utilizando como base Cordova y que nos permite crear apps muy vistosas gracias a Angular.js.",
            img1: 'img/ionic1.png',
            img2: 'img/ionic2.png',
            img3: 'img/ionic3.png'
        },
        {
            id: 4,
            word: "Vaso",
            meaning: 'Pieza cóncava de mayor o menor tamaño, capaz de contener algo.',
            img1: 'img/vaso1.png',
            img2: 'img/vaso2.png',
            img3: 'img/vaso3.png'
        },
        {
            id: 5,
            word: "Mochila",
            meaning: 'La mochila consiste en un equipaje que puede llevarse en la espalda por medio de dos bandas que pasan por los hombros.',
            img1: 'img/mochila1.png',
            img2: 'img/mochila2.png',
            img3: 'img/mochila3.png'
        },
        {
            id: 6,
            word: "Pantalla",
            meaning: 'Una pantalla plana es un monitor o televisor de poco grosor gracias a la ausencia de un tubo de rayos catódicos.',
            img1: 'img/pantalla1.png',
            img2: 'img/pantall2.png',
            img3: 'img/pantalla3.png'
        },
        {
            id: 7,
            word: "Mesa",
            meaning: 'La mesa es un mueble en forma de tablero liso y horizontal, generalmente sostenido por una o varias patas, hasta alcanzar una altura conveniente.',
            img1: 'img/mesa1.png',
            img2: 'img/mesa2.png',
            img3: 'img/mesa3.png'
        },
        {
            id: 8,
            word: "Calculadora",
            meaning: 'Una calculadora es un dispositivo que se utiliza para realizar cálculos aritméticos.',
            img1: 'img/calculadora1.png',
            img2: 'img/calculadora2.png',
            img3: 'img/calculadora3.png'
        },
        {
            id: 9,
            word: "Cable",
            meaning: "Se llama cable a un conductor (generalmente cobre) o conjunto de ellos generalmente recubierto de un material aislante o protector, si bien también se usa el nombre de cable para transmisores de luz (cable de fibra óptica) o esfuerzo mecánico (cable mecánico).",
            img1: 'img/cable1.png',
            img2: 'img/cable2.png',
            img3: 'img/cable3.png'

        },
        {
            id: 10,
            word: "Libro",
            meaning: 'Un libro (del latín liber, libri) es una obra impresa, manuscrita o pintada en una serie de hojas de papel, pergamino, vitela u otro material, unidas por un lado (es decir, encuadernadas) y protegidas con tapas, también llamadas cubiertas. Un libro puede tratar sobre cualquier tema.',
            img1: 'img/libro1.png',
            img2: 'img/libro2.png',
            img3: 'img/libro3.png'
        },
        {
            id: 11,
            word: "Auricular",
            meaning: 'Un auricular son transductores que reciben una señal eléctrica originada desde una fuente electrónica (como, por ejemplo, una radio, sintoamplificador o reproductor de audio) que por su diseño permiten colocar cerca de los oídos unos altavoces para generar ondas sonoras audibles.',
            img1: 'img/auricular1.png',
            img2: 'img/auricular2.png',
            img3: 'img/auricular3.png'
        },
        {
            id: 12,
            word: "Cargador",
            meaning: 'Un cargador de baterías, o simplemente cargador, es un dispositivo utilizado para suministrar una corriente eléctrica, en sentido opuesto al de la corriente de descarga, a una batería o pila recargable para que ésta recupere su carga energética',
            img1: 'img/cargador1.png',
            img2: 'img/cargador2.png',
            img3: 'img/cargador3.png'
        },
        {
            id: 13,
            word: "Carburador",
            meaning:'Dispositivo mecánico de un motor de explosión destinado a pulverizar el carburante y mezclarlo homogéneamente con el aire en las proporciones convenientes para satisfacer las condiciones de explosión que permitan el funcionamiento del motor.',
            img1: 'img/carburador1',
            img2: 'img/carburador2',
            img3: 'img/carburador3'
        },
        {
            id: 14,
            word: "Engranaje",
            meaning: 'Encaje de dos o más ruedas dentadas entre sí.',
            img1: 'img/engranaje1',
            img2: 'img/engranaje2',
            img3: 'img/engranaje3'
        },
        {
            id: 15,
            word: "Flor",
            meaning: 'La flor es la estructura reproductiva característica de las plantas llamadas espermatofitas o fanerógamas.',
            img1: 'img/flor1.png',
            img2: 'img/flor2.png',
            img3: 'img/flor3.png'
        },
        {
            id: 16,
            word: "Guitarra",
            meaning: 'Es un instrumento musical de cuerda pulsada, compuesto de una caja de resonancia, un mástil sobre el que va adosado el diapasón o trastero —generalmente con un agujero acústico en el centro de la tapa (boca)—, y seis cuerdas. Sobre el diapasón van incrustados los trastes, que permiten las diferentes notas.',
            img1: 'img/guitarra1.png',
            img2: 'img/guitarra2.png',
            img3: 'img/guitarra3.png'
        },
        {
            id: 17,
            word: "Bajo",
            meaning: 'Es un instrumento musical melódico de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo, su antecesor.',
            img1: 'img/bajo1.png',
            img2: 'img/bajo2.png',
            img3: 'img/bajo3.png'
        },
        {
            id: 18,
            word: "Vegetal",
            meaning: 'Ser orgánico que crece, vive y se reproduce pero que no se traslada de un lugar por impulso voluntario.',
            img1: 'img/vegetal1.png',
            img2: 'img/vegetal2.png',
            img3: 'img/vegetal3.png'
        },
        {
            id: 19,
            word: "Teclado",
            meaning: 'Un teclado es un dispositivo o periférico de entrada, en parte inspirado en el teclado de las máquinas de escribir, que utiliza una disposición de botones o teclas, para que actúen como palancas mecánicas o interruptores electrónicos que envían información a la computadora.',
            img1: 'img/teclado1.png',
            img2: 'img/teclado2.png',
            img3: 'img/teclado3.png'
        }
    ];


    $scope.searchError = false;
    $scope.searchChecker = () => {
        if($scope.words.length == 0){
            $scope.searchError = true;
        }
    };

    $scope.showMeaning = false;

    $scope.showContent = {};
    $scope.showWordMeaning = (idNumber,wordMeaning) => {
        $scope.showMeaning = true;
        $scope.showContent = _.findWhere($scope.words, {id:idNumber});

    };

    $scope.Back = () => {
        $scope.showMeaning = false;
    };
});