import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tab-bord',
  templateUrl: './tab-bord.component.html',
  styleUrls: ['./tab-bord.component.scss']
})
export class TabBordComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Sécurité des Sydtème Informatique', cols: 1, rows: 1, image: '../../../img/salle-serveur.jpg' },
          { title: 'Analyse des méthodes de travail', cols: 1, rows: 1 },
          { title: 'Administration des Système Linux et Windows', cols: 1, rows: 1 },
          { title: 'Gestion des Projets', cols: 1, rows: 1 },
          
        ];
      }

      return [
        { title: 'Sécurité des Système Informatique', cols: 2, rows: 1, image: '../../../img/salle-serveur.jpg'},
        { title: 'Analyse des méthodes de travail', cols: 1, rows: 1 },
        { title: 'Administration des Système Linux et Windows', cols: 1, rows: 2 },
        { title: 'Gestion des Projets', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
