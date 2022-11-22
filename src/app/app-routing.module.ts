import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";



const routes: Routes = [
    { path: 'cursos', 
    loadChildren: () => import("./cursos/cursos.module").then(mod => mod.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
    },
    { path: 'alunos',
    loadChildren: () => import("./alunos/alunos.module").then(mod => mod.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
    },
    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'login', component: LoginComponent },
    { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
