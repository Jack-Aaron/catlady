import React from "react";
import FinalCalculation from "../../components/finalCalculation/FinalCalculation";


function PetProfile({currentPet}) {
  return (
    <>
      <FinalCalculation currentPet={currentPet}/>
    </>
  );
}

export default PetProfile;
