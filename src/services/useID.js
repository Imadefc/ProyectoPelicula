import { useEffect, useState } from "react";

export function useIdHook(id) {
  const [data, setData] = useState({
    basicInfo: null,
    credits: null,
    gallery: null,
    reviews: null,
    plataforms: null,
  });
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjczOTlkMmFkZDg2ZmQ5NDUwMjFmMTg0ZjAyODc3MiIsInN1YiI6IjYzYmVmYmY4NTVjMWY0MDBiNWZkMDdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oqqwdbtFGXDUBeG0bL5lAYUgQ98wzKc9cbk18mROIDA",
    },
  };

  async function getMovieData(id, type) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}${
        type ? `/${type}` : ""
      }?language=en-US&key=bf7399d2add86fd945021f184f028772`,
      options
    );
    const data = await response.json();
    return data;
  }

  async function getAllData() {
    try {
      const basicInfo = await getMovieData(id);
      const credits = await getMovieData(id, "credits");
      const gallery = await getMovieData(id, "images");
      const reviews = await getMovieData(id, "reviews");
      const plataforms = await getMovieData(id, "watch/providers");

      setData({ ...data, basicInfo, credits, gallery, reviews, plataforms });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  }

  useEffect(() => {
    getAllData();
  }, [id]);

  useEffect(() => {
    console.log(data); // Coloca el console.log aquí
  }, [data]);

  return {
    basicInfo: data.basicInfo,
    credits: data.credits,
    gallery: data.gallery,
    reviews: data.reviews,
    plataforms: data.plataforms,
    loading,
  };
}
