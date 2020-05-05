import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess} from '../actions/user.action';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {selectUserList} from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  constructor(
    // private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHTTP: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );
}
