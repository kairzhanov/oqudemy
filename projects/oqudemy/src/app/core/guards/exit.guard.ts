import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}
