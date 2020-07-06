import React from "react";
import FinalCalculation from "../../components/finalCalculation/FinalCalculation";


function PetProfile({setCurrentPet, currentPet, form, setForm}) {
  return (
    <>
      <FinalCalculation 
      currentPet={currentPet}
      setCurrentPet={setCurrentPet}
      form={form}
      setForm={setForm}
      />
    </>
  );
}

export default PetProfile;
