import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { GroceryListService } from "./shared/grocery/grocery-list.service";


import { AppComponent } from "./app.component";
// import { LoginComponent } from "./pages/login/login.component";
import { routes, navigatableComponents } from "./app.routing";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
    ],
  declarations: [
    AppComponent,
    ...navigatableComponents
    ],
    providers:[GroceryListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
