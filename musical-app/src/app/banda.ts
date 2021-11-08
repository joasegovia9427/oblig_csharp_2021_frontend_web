import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Banda {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  //https://localhost:44378/api/bandas/listado

export class banda{

  constructor(
    private http: HttpClient
  ){    }

  getAllBandas(){
    return this.http.get('https://localhost:44378/api/bandas/listado/');
  
  
  }
  
}










/*
  export const banda: Banda[] = [

    
    
     {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: ''
    }
  ]; */
  