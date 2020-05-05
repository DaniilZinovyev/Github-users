import {Component, OnInit} from '@angular/core';
import {IAppState} from '../store/state/app.state';
import {Store} from '@ngrx/store';
import {selectConfig} from '../store/selectors/config.selectors';
import {GetConfig} from '../store/actions/config.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'github-users';
  config$ = this.store.pipe(select(selectConfig));

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetConfig());
  }

}
