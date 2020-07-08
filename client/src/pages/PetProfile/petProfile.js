import React from "react";
import FinalCalculation from "../../components/finalCalculation/FinalCalculation";


function PetProfile({setCurrentPet, currentPet, form, setForm, initalForm}) {
  return (
    <>
      <FinalCalculation 
      currentPet={currentPet}
      setCurrentPet={setCurrentPet}
      form={form}
      setForm={setForm}
      initalForm={initalForm}
      />
    </>
  );
}

export default PetProfile;
