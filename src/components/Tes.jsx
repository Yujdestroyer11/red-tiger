import { useState } from "react";
import House from "./House";
import info from "../Houseinfo";

export default function Test() {
  const [range, setRange] = useState(0);

  function handleChangeRange(e) {
    setRange(e.target.value);
    console.log(e.target.value);
  }

  function createHouse(house) {
    return (
      <House
        key={house.id}
        name={house.name}
        img={house.profile}
        price={house.houseprice}
      />
    );
  }

  var filteredHouse = info.filter(function (house) {
    if (range == 1) {
      return house.price == 1;
    } else if (range == 2) {
      return house.price == 2;
    } else if (range == 3) {
      return house.price == 3;
    }
  });

  return (
    <div class="container">
      <div class="row">
        <div class="container bg-light-subtle rounded p-5">
          <h2 class="text-left">Budget Range:</h2>
          <form class="py-3">
            <select
              class="btn btn-primary "
              name="range"
              onChange={handleChangeRange}
            >
              <option class="text-center" value="0">
                Range
              </option>
              <option class="text-left" value="1">
                1 million house
              </option>
              <option class="text-left" value="2">
                2 million house
              </option>
              <option class="text-left" value="3">
                3 million house
              </option>
            </select>
          </form>
          <div class="row">{filteredHouse.map(createHouse)}</div>
        </div>
      </div>
    </div>
  );
}
