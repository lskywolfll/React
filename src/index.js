// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
// JSX Necesita react y react-dom
import React from 'react';
import ReactDOM from 'react-dom';
// JSX
// const jsx = <h1>Hello, Platzi Badges from React!</h1>;
// tipo elemento, atributos(props o propiertes),contenido
// const element = React.createElement
//     (
//         'h1',
//         // props(funcionalidades o caracteristicas como un objeto)
//         { href: 'https://platzi.com' },
//         'hola! Soy los hijos.'
//     );

// const name = 'Rene';

// // const element = React.createElement('h1', {}, `Hola soy ${name}`);

// const jsx = <h1>Hola soy, {name}</h1>

const element = (
    <div>
        <h1>Hola, Soy Rene</h1>
        <p>Soy Desarrollador Full Stack</p>
    </div>
)

const container = document.getElementById('app');

// Es una forma de crear vistas con javascript de manera mas sencilla, ya que al fin al cabo estamos creando React.createElement por detras al usar JSX por babel y webpack
// const jsx = <div>
//     <h1>Hola, soy René</h1>
//     <p>Soy Desarrollador backend</p>
// </div>

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Rene'),
//     React.createElement('h1', {}, 'Soy desarrollador Full Stack')
// )

// ReactDOM.render(__qué__,__donde__)

ReactDOM.render(element, container);