import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
	AboutComponent,
	ContactUsComponent,
	PortfolioComponent,
	ProcessComponent } from './page';

	import { ProjectInformationBoardComponent } from './components/index';

const routes: Routes = [
	{ path: '', redirectTo: '/About', pathMatch: 'full' },
	{ path: 'ContactUs', component: ContactUsComponent },
	{ path: 'About', component: AboutComponent },
	{ path: 'Portfolio', component: PortfolioComponent },
	{ path: 'Process', component: ProcessComponent },
	{ path: '1', component: ProjectInformationBoardComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
