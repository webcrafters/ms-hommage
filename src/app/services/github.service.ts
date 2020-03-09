import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

/** Data Model of Github QueryResponse
 * {
 *    // ...
 *    items: {
 *      // ...
 *      login: string;
 *      // ...
 *    }
 *    // ...
 * }
 *
*/

export interface UserItemModel {
  login: string;
}

export interface UserProfileModel {
  public_repos: number;
}

export interface UserStatsModel {
  name: string;
  repos: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getTopUsersWithStats(minRepos: number): Observable<UserStatsModel[]> {
    // compact solution
    return this.http.get<{items: UserItemModel[]}>(
      `https://api.github.com/search/users?q=repos:>${minRepos}`
      ).pipe(
        mergeMap((queriedAccounts:{items: UserItemModel[]}) => forkJoin(
          queriedAccounts.items.map(
            (userItem: UserItemModel) =>
              this.http.get<UserProfileModel>(
                `http://api.github.com/users/${userItem.login}`
                ).pipe(map(
                  (profile: UserProfileModel) => ({
                    name: userItem.login,
                    repos: profile.public_repos,
                    url: `https://github.com/${userItem.login}`
                  })
              )
          ))
        )),
        map(stats => stats.sort(
          (a, b) => b.repos - a.repos)
        )
    );

    // stepwise solution:
    // const getUserProfileFromUserItem = (item: UserItemModel) =>
    // this.http.get<UserProfileModel>(
    //   `http://api.github.com/users/${item.login}`
    // ).pipe(map(
    //   (profile: UserProfileModel) => ({
    //     name: item.login,
    //     repos: profile.public_repos
    //   })
    // ));

    // const userItemsThatMatchQuery: Observable<{items: UserItemModel[]}> =
    //   this.http.get<{items: UserItemModel[]}>(
    //  `https://api.github.com/search/users?q=repos:>${minRepos}`
    //   );

    // const convertUserItemsToUserStats = mergeMap(
    //   (accounts:{items: UserItemModel[]}) => forkJoin(
    //     accounts.items.map(getUserProfileFromUserItem)
    //   )
    // )

    // const sortUserStats = map(
    //   (stats: UserStatsModel[]) =>
    //     stats.sort((a: {repos: number}, b: {repos: number}) => b.repos - a.repos)
    // )

    // return userItemsThatMatchQuery.pipe(
    //   convertUserItemsToUserStats,
    //   sortUserStats
    // );
  }
}
