import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";

@Injectable()
export class AlunoResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    console.log('AlunoResolver')

    let id = route.params['id'];

    return this.alunosService.getAluno(id);
  }
}