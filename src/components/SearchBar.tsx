// import { useState } from "react";

interface ISearchbarProps {
  inputValue: string,
  newValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = (props: ISearchbarProps) => {

  return (
  <div className="rounded-pill bg-light shadow d-flex p-3 align-items-center col-10 col-lg-6 mb-5">
    <div className="mr-2">
      <i className="bi bi-search text-primary fs-5"></i>
    </div>
    <input type="text" name="" id="" className="form-control border-0 bg-light" placeholder="Busque alguma empresa" 
      onChange={props.newValue} value={props.inputValue}/>
  </div>
  )
}