# App Base

Esse app foi desenvolvido em **react native** e não possui uma máquina de estado.

## Dependência

Esse microfront utiliza o [microfront 1](https://github.com/rondinellimorais/micro-front-end/microfront1) megeando as rotas.

- Stack.Navigator
  - Page0 (`Screen`)
  - Page1 (`Screen`)
  - Page2 (`Screen`)
  - Microfront1Main (`Navigator like as Screen`)
    + Stack.Navigator
      + RondPage (`Screen`)
      + Page1 (`Screen`)
      + Microfront2Main (`Navigator like as Screen`)
        + ArtistPage (`Screen`)
        + DetailsArtistPage (`Screen`)