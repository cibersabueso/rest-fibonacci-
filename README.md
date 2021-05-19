# BACKEND

## Tecnologias usadas 🛠️

- [Express](https://expressjs.com/es/) - Infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

## Pre-requisitos 📋

- [NPM](https://www.npmjs.com) - Gestor de paquetes
- Sólido conocimiento en Javascript

## Lógica

Emplearemos un función denominada "fnFibonacci" que tiene como parámetros a:

1. index Indice del arreglo fibonacci.
2. memory Arreglo fibonacci.

Al tener una memoria que guarda los fibonacci's previos, estas se pueden consultar directamente con el índice dado. De esta manera, para valores enteros inferiores a 3, se emplea un arreglo inicial, el cual es [0, 1, 1]. A partir de este, se efectúan los cálculos, por eso es que la complejidad computacional con el método dado es de O(n).

## Estructura de carpetas

```
/
├── App.js                              # Archivo principal de la aplicación
└── package.json
```

## Instalación

```sh
npm install
```

## Ejecutando

En desarrollo

```sh
npm run dev
```
