import { useDispatch } from "react-redux";

export function filterData(searchTxt, allRestaurants) {
  if (searchTxt !== "") {
    return allRestaurants.filter((restarunrant) =>
      restarunrant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
  return allRestaurants;
}

export async function getUserLocation() {
  const dispatch = useDispatch();

  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const userLocation = { latitude, longitude };
          dispatch(setUserLocation(userLocation));
        },
        error => {
          console.log(error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  } catch (error) {
    console.error('Error fetching user location:', error);
  }
}