import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { Translator } from 'src/app/_interfaces/translator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public getTranslators = (route: string): Observable<Translator[]> => {
    return this.http.get<Translator[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public getOneTranslator = (route: string) => {
    return this.http.get<Translator>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public createTranslator = (route: string, translator: any) => {
    return this.http.post<Translator>(this.createCompleteRoute(route, this.envUrl.urlAddress), translator, this.generateHeaders());
  }

  public updateTranslator = (route: string, translator: any) => {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), translator, this.generateHeaders());
  }
  public deleteTranslator = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
