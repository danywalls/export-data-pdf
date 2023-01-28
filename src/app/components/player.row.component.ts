import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  template: `
    <div>
      {{ player.first_name }} {{ player.last_name }} |
      {{ player.team.full_name }} |
      {{ player.position }}
    </div>
  `,
})
export class PlayerRow {
  @Input() player: any;
}
