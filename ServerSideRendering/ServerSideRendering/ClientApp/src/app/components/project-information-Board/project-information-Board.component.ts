import { Component } from '@angular/core';
import { ProjectInfo } from '../../contracts/project-info';

@Component({
  selector: 'app-project-information-board',
  templateUrl: './project-information-Board.component.html',
})
export class ProjectInformationBoardComponent {
    projectInformationBoard: ProjectInfo[] = [
        {
            name: 'proj1',
            projectLink: '',
            projectВescription: 'ccccccc',
            siteLinks: '',
            useTechnology: '',
            imageLink: ''
        },
        {
            name: 'proj2',
            projectLink: '',
            projectВescription: 'gggg',
            siteLinks: '',
            useTechnology: '',
            imageLink: ''
        }
    ];

}
