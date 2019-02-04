import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()
export class HttpService {

    constructor(private http: HttpClient,
                private auth : AuthService,
                private router : Router
        ) {
    }

    get(url : string, cb : (ret : any) => void) {
        let aux = '' 
        
        if (this.auth.usuario) {
            aux = this.auth.usuario._id
        }
        
        this.http.get(url, {
            headers : new HttpHeaders({ 'Authentication' : aux })
        }).subscribe(cb )
    }

    post(url : string, obj : any, cb : (ret : any) => void) {
        let aux = '' 

        if (this.auth.usuario) {
            aux = this.auth.usuario._id
        }

        if (aux == null)
        {
           this.router.navigateByUrl('/login')
           return
        }

      

        this.http.post(url, obj, {            
            headers : new HttpHeaders({ 'Authentication' : aux })
        }).subscribe(cb )
    }

   

}