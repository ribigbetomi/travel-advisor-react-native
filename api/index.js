import axios from "axios";

export const getPlacesData = async (type, bl_lat, bl_lng, tr_lat, tr_lng) => {
  try {
    const options = {
      params: {
        bl_latitude: bl_lat ? bl_lat : "6.393351056211393",
        tr_latitude: tr_lat ? tr_lat : "6.702759096222693",
        bl_longitude: bl_lng ? bl_lng : "3.098273230475269",
        tr_longitude: tr_lng ? tr_lng : "3.564808",
        limit: "30",
        currency: "USD",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "8112e96004msh90edc91229b01b7p1a53dajsnac9917ad9f2d",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );

    return data;
  } catch (error) {
    return null;
  }
};
