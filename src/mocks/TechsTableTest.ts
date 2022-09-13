import { techs } from '../components/@icons/techs/techs';
import react from 'react';
import { EmotionJSX } from '@emotion/react';


interface techsNameTestType{
  [key: string] : number;
}

interface techsIdTestType{
  [key: string] : {id:number, techName: string, icon: () => {}}
}

const createtechsNameTable = (): techsNameTestType => {
  const techsNameTable:techsNameTestType = {};
  for(let i = 0; i<techs.length; i++) {
    const { tech } = techs[i];
    techsNameTable[tech] = i; 
  }
  return techsNameTable;
}


const createtechsIdTable = (): techsIdTestType => {
  const techsIdTable:techsIdTestType = {};
  for(let i = 0; i<techs.length; i++){
    const { tech, icon } = techs[i];
    techsIdTable[tech] = {id: i, techName: tech, icon:icon};
  }
  return techsIdTable;
}


const techsNameTable = createtechsNameTable();
const techsIdTable = createtechsIdTable();

export { techsNameTable, techsIdTable };