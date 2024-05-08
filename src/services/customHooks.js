const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YWE4OWMyZTMxOTliYThlNjQxOGQ3MDZlMzUwYyIsInN1YiI6IjYyMDMxZGJhZTMyM2YzMDA4ZWRhMTY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDHhSwwgvqEMJ9NOE1o-pwvbtw7y1FX41t21NzLlhXw",
  },
};

export function customHooksHandleAnterior(
  page,
  tituloGuardado,
  setDatos,
  setPage
) {
  if (page.pageMax > 2) {
    setPage({ page: page.page--, pageMax: page.pageMax });
    fetch(
      "https://api.themoviedb.org/3/search/movie?key=" +
        import.meta.VITE_API_KEY +
        "&query=" +
        tituloGuardado +
        "&include_adult=false&language=es-US&page=" +
        page.page,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setDatos(response.results);
        setPage({ page: response.page, pageMax: response.total_pages });
      })
      .catch((err) => console.error(err));
  }
}
export function customHooksHandleBuscar(
  busqueda,
  setDatos,
  setTituloGuardado,
  setPage,
  setNumRes,
  setBusqueda
) {
  fetch(
    "https://api.themoviedb.org/3/search/movie?key=" +
      import.meta.VITE_API_KEY +
      "&query=" +
      busqueda +
      "&include_adult=false&language=es-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      setDatos(response.results);
      setTituloGuardado(busqueda);
      setPage({ page: response.page, pageMax: response.total_pages });
      setNumRes(response.total_results);
    })
    .catch((err) => console.error(err));
  setBusqueda("");
}

export function customHooksSiguiente(page, setPage, tituloGuardado, setDatos) {
  if (page.page < page.pageMax) {
    setPage({ page: page.page++, pageMax: page.pageMax });
    fetch(
      "https://api.themoviedb.org/3/search/movie?key=" +
        import.meta.VITE_API_KEY +
        "&query=" +
        tituloGuardado +
        "&include_adult=false&language=es-US&page=" +
        page.page,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setDatos(response.results);
        setPage({ page: response.page, pageMax: response.total_pages });
      })
      .catch((err) => console.error(err));
  }
}
export function handleBotonAñadirVistoMastarde(modo, elemento) {
  let el = localStorage.getItem(modo);
  console.log("funciona");
  el = JSON.parse(el);
  let numEl = el.filter((obj) => {
    return elemento.id == obj.id;
  });
  console.log(numEl);

  if (numEl.length == 0) {
    el.push(elemento);
    el = JSON.stringify(el);
    localStorage.setItem(modo, el);
  }
}

function eliminarSiEstaEnElContrario(string, obj) {
  if (string == "visto") {
    let aux = localStorage.getItem("mastarde");
    aux = JSON.parse(aux);
    aux.filter((el) => {
      return el.id != obj.id;
    });
    console.log(aux);
    aux = JSON.stringify(aux);
    localStorage.setItem("mastarde", aux);
  } else {
    let aux = localStorage.getItem("visto");
    aux = JSON.parse(aux);
    aux.filter((el) => {
      return el.id != obj.id;
    });
    console.log(aux);
    aux = JSON.stringify(aux);
    localStorage.setItem("visto", aux);
  }
}


