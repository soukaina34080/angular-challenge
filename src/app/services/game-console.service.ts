import { Injectable } from '@angular/core'
import { GameConsole } from '../game-console.interface'

@Injectable({
  providedIn: 'root'
})
export class GameConsoleService {
  list(): GameConsole[] {
    return [
      {
        name: 'Playstation 4',
        sales2017: 20,
        sales2018: 18,
        average2018: 0.3,
        average2019: 0.6
        
      },
      {
        name: 'X Box One',
        sales2017: 7.62,
        sales2018: 6.96,
        average2018: 0.1,
        average2019: 0.5

      },
      {
        name: 'Switch',
        sales2017: 0,
        sales2018: 16.33,
        average2018: 0.3,
        average2019: 0.06
      }
    ]
  }
}
